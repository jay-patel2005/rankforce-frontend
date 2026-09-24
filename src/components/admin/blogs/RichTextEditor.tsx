'use client';

import 'react-quill-new/dist/quill.snow.css';

/**
 * RichTextEditor — Production-quality Quill v2 wrapper for RankForce Admin Blog
 *
 * Toolbar: Heading (P/H1-H4) | FontSize | B I U S Code | Align | Lists |
 *          Link | Blockquote | Table | HR | Undo Redo | Clear
 *
 * Word/DOCX paste: strips junk styles, preserves structure
 */

import React, { useEffect, useRef, useState, useMemo } from 'react';
import dynamic from 'next/dynamic';

// ─── Dynamic import (SSR disabled) ───────────────────────────────────────────
// Cast to any so we can forward a callback-ref without TS narrowing issues
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false }) as any;

// ─── Word / DOCX paste cleaner ────────────────────────────────────────────────
function cleanWordHtml(html: string): string {
  let c = html
    .replace(/<\/?o:[^>]*>/gi, '')
    .replace(/<\/?w:[^>]*>/gi, '')
    .replace(/<\/?m:[^>]*>/gi, '')
    .replace(/<\?xml[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

  // filter inline styles
  c = c.replace(/style="([^"]*)"/gi, (_m, s: string) => {
    const kept = filterStyles(s);
    return kept ? `style="${kept}"` : '';
  });

  // strip Word class names
  c = c.replace(/\s*class="[^"]*Mso[^"]*"/gi, '');
  c = c.replace(/\s*class="[^"]*ms-[^"]*"/gi, '');

  // kill dangerous tags
  c = c.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
  c = c.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');
  c = c.replace(/\son\w+="[^"]*"/gi, '');
  c = c.replace(/javascript:/gi, '');

  // multiple BRs → paragraph break
  c = c.replace(/(<br\s*\/?>){2,}/gi, '</p><p>');

  return c;
}

function filterStyles(styleStr: string): string {
  const parts = styleStr.split(';').map(s => s.trim()).filter(Boolean);
  const kept: string[] = [];
  for (const p of parts) {
    const ci = p.indexOf(':');
    if (ci === -1) continue;
    const prop = p.slice(0, ci).trim().toLowerCase();
    const val  = p.slice(ci + 1).trim();
    if (prop.startsWith('mso-')) continue;
    if (prop === 'font-family') continue;
    if (prop === 'background-color' || prop === 'background') continue;
    if (/^(margin|padding)/.test(prop)) continue;
    if (['orphans','widows','page-break-after','page-break-before'].includes(prop)) continue;
    if (prop === 'line-height' && val.includes('%')) continue;
    if (prop === 'font-size') {
      const px = toPx(val); if (px) kept.push(`font-size:${px}`); continue;
    }
    if (['font-weight','font-style','text-decoration','text-align'].includes(prop)) {
      kept.push(`${prop}:${val}`); continue;
    }
    if (prop === 'color') {
      const n = val.toLowerCase().replace(/\s/g, '');
      if (!['white','#fff','#ffffff','rgb(255,255,255)','windowtext','auto'].includes(n))
        kept.push(`${prop}:${val}`);
    }
  }
  return kept.join(';');
}

function toPx(v: string): string | null {
  const pt = v.match(/^(\d+(?:\.\d+)?)\s*pt$/i);
  if (pt) return `${Math.round(parseFloat(pt[1]) * 1.333)}px`;
  const px = v.match(/^(\d+(?:\.\d+)?)\s*px$/i);
  if (px) return `${Math.round(parseFloat(px[1]))}px`;
  return null;
}

// ─── Register custom Quill formats once ──────────────────────────────────────
let formatsRegistered = false;

async function registerFormats() {
  if (formatsRegistered) return;
  formatsRegistered = true;

  const Quill = (await import('quill')).default;

  // Font-size via style attributor
  const SizeStyle = Quill.import('attributors/style/size') as any;
  SizeStyle.whitelist = ['14px', '16px', '18px', '20px', '24px', '28px', '32px'];
  Quill.register(SizeStyle, true);

  // Text-align via style attributor
  const AlignStyle = Quill.import('attributors/style/align') as any;
  Quill.register(AlignStyle, true);

  // H4 blot (Quill only ships H1-H3 by default)
  const BlockBlot  = Quill.import('blots/block') as any;
  class H4Blot extends BlockBlot {
    static blotName = 'header-h4';
    static tagName  = 'h4';
  }
  Quill.register(H4Blot, true);

  // Horizontal-rule blot
  const BlockEmbed = Quill.import('blots/block/embed') as any;
  if (!Quill.imports['formats/hr']) {
    class HrBlot extends BlockEmbed {
      static blotName = 'hr';
      static tagName  = 'hr';
      static create() {
        const n = super.create() as HTMLElement;
        n.setAttribute('contenteditable', 'false');
        return n;
      }
    }
    Quill.register(HrBlot, true);
  }
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
function insertHR(quill: any) {
  const range = quill.getSelection(true) || { index: 0, length: 0 };
  if (range.length) quill.deleteText(range.index, range.length, 'user');
  quill.insertEmbed(range.index, 'hr', true, 'user');
  quill.insertText(range.index + 1, '\n', 'user');
  quill.setSelection(range.index + 2, 0, 'user');
}

function insertTable(quill: any) {
  const rows = 3, cols = 3;
  let html = '<table><tbody>';
  for (let r = 0; r < rows; r++) {
    html += '<tr>';
    for (let c = 0; c < cols; c++) {
      html += r === 0
        ? '<th contenteditable="true"><p>Header</p></th>'
        : '<td contenteditable="true"><p>Cell</p></td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table><p><br></p>';
  const range = quill.getSelection(true) || { index: 0, length: 0 };
  quill.clipboard.dangerouslyPasteHTML(range.index, html, 'user');
  quill.setSelection(range.index + 1, 0, 'user');
}

// ─── Custom toolbar icons ─────────────────────────────────────────────────────
const TB_ICONS: Record<string, string> = {
  undo:  '↶',
  redo:  '↷',
  hr:    '—',
  table: '⊞',
};

// ─── Component ────────────────────────────────────────────────────────────────
interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const quillRef  = useRef<any>(null);
  const [ready, setReady] = useState(false);

  // Register custom formats on first client render
  useEffect(() => {
    registerFormats().then(() => setReady(true));
  }, []);

  // ── Toolbar handlers (must be stable — defined before useMemo) ─────────────
  const handlers = useMemo(() => ({
    undo() {
      const q = quillRef.current?.getEditor?.();
      if (q) q.history.undo();
    },
    redo() {
      const q = quillRef.current?.getEditor?.();
      if (q) q.history.redo();
    },
    hr() {
      const q = quillRef.current?.getEditor?.();
      if (q) insertHR(q);
    },
    table() {
      const q = quillRef.current?.getEditor?.();
      if (q) insertTable(q);
    },
  }), []);

  // ── Quill modules (memoised to prevent re-init on every render) ────────────
  const modules = useMemo(() => ({
    table: true,
    toolbar: {
      container: [
        // Row 1: heading + size
        [{ header: [1, 2, 3, false] }],
        [{ size: ['14px', false, '18px', '20px', '24px', '28px', '32px'] }],
        // Row 2: text formatting
        ['bold', 'italic', 'underline', 'strike', 'code'],
        // Row 3: alignment
        [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
        // Row 4: lists + indent
        [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
        // Row 5: insert
        ['link', 'image', 'blockquote', 'code-block'],
        // Row 6: special + history
        ['hr', 'table', 'undo', 'redo', 'clean'],
      ],
      handlers,
    },
    history: {
      delay: 800,
      maxStack: 200,
      userOnly: true,
    },
    clipboard: {
      matchVisual: false,
      matchers: [
        [
          'p, div, span',
          (node: Element, delta: any) => {
            const cls = node.getAttribute?.('class') || '';
            if (/mso|ms-/i.test(cls)) node.removeAttribute?.('class');
            const style = node.getAttribute?.('style') || '';
            if (style) {
              const f = filterStyles(style);
              f ? node.setAttribute?.('style', f) : node.removeAttribute?.('style');
            }
            return delta;
          },
        ],
      ],
    },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), []);

  // ── Formats list ─────────────────────────────────────────────────────────
  const formats = useMemo(() => [
    'header', 'size',
    'bold', 'italic', 'underline', 'strike', 'code',
    'align',
    'list', 'indent',
    'link', 'image',
    'blockquote', 'code-block',
    'hr',
    'color',
    'table',
  ], []);

  // ── Word/DOCX paste intercept ──────────────────────────────────────────────
  useEffect(() => {
    if (!ready) return;

    const INTERVAL_MS = 300;
    const MAX_ATTEMPTS = 30;
    let attempts = 0;

    const attach = () => {
      const el = document.querySelector('.rte-wrap .ql-editor');
      if (!el) return false;

      el.addEventListener('paste', ((e: ClipboardEvent) => {
        const html = e.clipboardData?.getData('text/html') || '';
        if (!html) return;
        const isWord = /mso-|MsoNormal|urn:schemas-microsoft|WordDocument/i.test(html);
        if (!isWord) return;

        e.stopPropagation();
        const cleaned = cleanWordHtml(html);
        const q = quillRef.current?.getEditor?.();
        if (!q) return;
        e.preventDefault();

        const range = q.getSelection(true) || { index: 0, length: 0 };
        if (range.length) q.deleteText(range.index, range.length, 'user');
        const delta = q.clipboard.convert({ html: cleaned });
        q.updateContents(delta, 'user');
        q.setSelection(range.index + delta.length(), 0, 'user');
      }) as EventListener, true);

      return true;
    };

    const id = setInterval(() => {
      if (attach() || ++attempts >= MAX_ATTEMPTS) clearInterval(id);
    }, INTERVAL_MS);

    return () => clearInterval(id);
  }, [ready]);

  // ── Add custom icon labels after toolbar mounts ───────────────────────────
  useEffect(() => {
    if (!ready) return;
    const id = setTimeout(() => {
      const tb = document.querySelector('.rte-wrap .ql-toolbar');
      if (!tb) return;
      Object.entries(TB_ICONS).forEach(([name, icon]) => {
        const btn = tb.querySelector(`.ql-${name}`) as HTMLButtonElement | null;
        if (btn && !btn.textContent?.trim()) btn.textContent = icon;
      });
    }, 600);
    return () => clearTimeout(id);
  }, [ready]);

  // ── Skeleton while loading ─────────────────────────────────────────────────
  if (!ready) {
    return (
      <div className="rte-wrap rte-skeleton-wrap">
        <div className="rte-skel-toolbar" />
        <div className="rte-skel-body">Loading editor…</div>
      </div>
    );
  }

  return (
    <div className="rte-wrap">
      <ReactQuill
        ref={(inst: any) => { quillRef.current = inst; }}
        theme="snow"
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder={
          placeholder ||
          'Start writing here…  Tip: paste directly from Word or Google Docs.'
        }
      />
    </div>
  );
}
