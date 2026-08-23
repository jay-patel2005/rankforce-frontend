import React from 'react';
import { ServiceChecklistData } from '@/types/service-page';

export function ServiceChecklist({ data }: { data: ServiceChecklistData }) {
  return (
    <section className="pt-6 mb-6">
      <div className="max-w-[1080px] mx-auto px-6">

        {/* Header */}
        <div className="text-left mb-3">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#1A1A1A] mb-4">
            {data.title}
          </h2>
          <p className="text-[#6B6B6B] text-[16px]">
            {data.descriptionHtml}
          </p>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse mt-6 text-[0.92rem] rounded-xl overflow-hidden shadow-[0_4px_14px_rgba(0,0,0,0.06)]">
            <thead>
              <tr>
                {data.columns.map((col, idx) => (
                  <th
                    key={idx}
                    className="bg-[#14141A] text-white text-left px-3.5 py-3.5 font-bold text-[0.8rem] tracking-[0.3px]"
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, idx) => (
                <tr key={idx} className={idx % 2 !== 0 ? 'bg-[#FFF8F2]' : 'bg-white'}>
                  <td className="px-3.5 py-3 border-b border-[#E5E5E5] font-semibold text-[#1A1A1A]">
                    {row.element}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[#E5E5E5] text-[#4B4B4B]">
                    {row.check}
                  </td>
                  <td className="px-3.5 py-3 border-b border-[#E5E5E5] text-[#6B6B6B]">
                    {row.tool}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <p className="mt-12 text-[#6B6B6B] text-[15px] leading-relaxed">
          {data.footerText}
        </p>

      </div>
    </section>
  );
}
