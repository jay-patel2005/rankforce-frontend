export interface SeoScoreData {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  focusKeyword: string;
  secondaryKeywords: string[];
  seoTitle: string;
  metaDescription: string;
  featuredImage?: any;
  featuredImageAlt: string;
  canonicalUrl: string;
}

export interface SeoRecommendation {
  text: string;
  passed: boolean;
  warning?: boolean;
}

export interface SeoCategory {
  name: string;
  score: number;
  maxScore: number;
  recommendations: SeoRecommendation[];
}

export function calculateSeoScore(data: SeoScoreData): { score: number; categories: SeoCategory[] } {
  let totalScore = 0;
  
  const createCategory = (name: string, maxScore: number): SeoCategory => ({
    name,
    score: 0,
    maxScore,
    recommendations: []
  });

  const primaryKeyword = createCategory('PRIMARY KEYWORD', 20);
  const secondaryKeywords = createCategory('SECONDARY KEYWORDS', 5);
  const contentCategory = createCategory('CONTENT', 30);
  const links = createCategory('LINKS', 15);
  const images = createCategory('IMAGES', 10);
  const meta = createCategory('META / TECHNICAL', 20);

  const categories = [primaryKeyword, secondaryKeywords, contentCategory, links, images, meta];

  const addScore = (category: SeoCategory, points: number, text: string, passed: boolean, isWarning = false) => {
    if (passed) {
      category.score += points;
      category.recommendations.push({ text, passed: true });
    } else {
      category.recommendations.push({ text, passed: false, warning: isWarning });
    }
  };

  const hasKeyword = (text: string, keyword: string) => {
    if (!keyword || !text) return false;
    return text.toLowerCase().includes(keyword.toLowerCase());
  };
  
  const getOccurrences = (text: string, keyword: string) => {
    if (!keyword || !text) return 0;
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi');
    return (text.match(regex) || []).length;
  };

  const plainText = data.content ? data.content.replace(/<[^>]+>/g, ' ') : '';
  const wordCount = plainText.trim().split(/\s+/).filter(w => w.length > 0).length;
  
  const kw = data.focusKeyword?.trim().toLowerCase();

  // ───────────────────────────────────────────────────────────────────────────
  // 1. PRIMARY KEYWORD (Max 20)
  // ───────────────────────────────────────────────────────────────────────────
  if (!kw) {
    addScore(primaryKeyword, 0, 'Focus keyword is missing. Set one to enable analysis.', false);
  } else {
    addScore(primaryKeyword, 0, 'Focus keyword is set.', true);
    
    // In SEO Title (5 pts)
    addScore(primaryKeyword, 5, 'Focus keyword in SEO title.', hasKeyword(data.seoTitle, kw));
    // In Meta Description (5 pts)
    addScore(primaryKeyword, 5, 'Focus keyword in meta description.', hasKeyword(data.metaDescription, kw));
    // In URL (3 pts)
    addScore(primaryKeyword, 3, 'Focus keyword in URL slug.', hasKeyword(data.slug, kw.replace(/\s+/g, '-')));
    
    // First 10% of content (3 pts)
    const tenPercentChars = Math.max(150, Math.floor(plainText.length * 0.1));
    const firstTenPercent = plainText.substring(0, tenPercentChars);
    addScore(primaryKeyword, 3, 'Focus keyword in the beginning of content.', hasKeyword(firstTenPercent, kw));
    
    // In content body (4 pts)
    const occurrences = getOccurrences(plainText, kw);
    if (occurrences === 0) {
      addScore(primaryKeyword, 0, 'Focus keyword not found in content.', false);
    } else if (wordCount > 0 && occurrences > (wordCount * 0.03)) {
      addScore(primaryKeyword, 2, `Keyword appears ${occurrences} times. May be overused.`, false, true); // Overused = warning
    } else {
      addScore(primaryKeyword, 4, `Focus keyword used naturally (${occurrences} times).`, true);
    }
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 2. SECONDARY KEYWORDS (Max 5)
  // ───────────────────────────────────────────────────────────────────────────
  const secs = (data.secondaryKeywords || []).filter(k => k.trim().length > 0);
  if (secs.length === 0) {
    addScore(secondaryKeywords, 5, 'No secondary keywords configured (Optional).', true); // Give full points if they don't want to use them
  } else {
    let foundCount = 0;
    secs.forEach(sk => {
      const skTrimmed = sk.trim().toLowerCase();
      if (hasKeyword(plainText, skTrimmed)) {
        foundCount++;
        addScore(secondaryKeywords, 0, `Secondary keyword "${skTrimmed}" used in content.`, true);
      } else {
        addScore(secondaryKeywords, 0, `Secondary keyword "${skTrimmed}" not found in content.`, false, true);
      }
    });
    const proportion = foundCount / secs.length;
    addScore(secondaryKeywords, Math.round(5 * proportion), `${foundCount}/${secs.length} secondary keywords used.`, proportion > 0.5, proportion <= 0.5);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 3. CONTENT (Max 30) - Quality/Length (15), Headings (10), Readability (5)
  // ───────────────────────────────────────────────────────────────────────────
  // Length
  if (wordCount >= 600) {
    addScore(contentCategory, 15, `Content length is excellent (${wordCount} words).`, true);
  } else if (wordCount >= 300) {
    addScore(contentCategory, 10, `Content length is okay (${wordCount} words), but could be longer.`, false, true);
  } else {
    addScore(contentCategory, 0, `Content is too short (${wordCount} words). Aim for at least 600 words.`, false);
  }

  // Headings
  const h1Count = (data.content?.match(/<h1[^>]*>/gi) || []).length;
  const h2Count = (data.content?.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (data.content?.match(/<h3[^>]*>/gi) || []).length;
  
  if (h1Count === 0) {
    addScore(contentCategory, 0, 'No H1 heading found in content.', false);
  } else if (h1Count === 1) {
    addScore(contentCategory, 5, 'Exactly one H1 heading found.', true);
  } else {
    addScore(contentCategory, 0, 'Multiple H1 headings detected. Only use one.', false);
  }

  if (h2Count > 0) {
    addScore(contentCategory, 5, `Good heading structure (${h2Count} H2s, ${h3Count} H3s).`, true);
  } else {
    addScore(contentCategory, 0, 'No H2 headings found. Use headings to structure content.', false, true);
  }

  // Readability
  const sentences = plainText.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const avgSentenceLength = sentences.length > 0 ? wordCount / sentences.length : 0;
  if (avgSentenceLength > 0 && avgSentenceLength <= 20) {
    addScore(contentCategory, 5, 'Sentences are easy to read.', true);
  } else if (avgSentenceLength > 20) {
    addScore(contentCategory, 0, 'Many sentences are too long. Try to keep them concise.', false, true);
  } else {
    addScore(contentCategory, 0, 'Not enough text to check readability.', false, true);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 4. LINKS (Max 15) - Internal (10), External (5)
  // ───────────────────────────────────────────────────────────────────────────
  const linkMatches = data.content?.match(/<a [^>]*href="([^"]+)"[^>]*>/gi) || [];
  let internalLinks = 0;
  let externalLinks = 0;

  linkMatches.forEach(linkHTML => {
    const hrefMatch = linkHTML.match(/href="([^"]+)"/i);
    if (hrefMatch && hrefMatch[1]) {
      const href = hrefMatch[1];
      if (href.startsWith('/') || href.includes('rankforce.in') || href.includes('localhost')) {
        internalLinks++;
      } else if (href.startsWith('http')) {
        externalLinks++;
      }
    }
  });

  if (internalLinks > 0) {
    addScore(links, 10, `${internalLinks} internal link(s) found.`, true);
  } else {
    addScore(links, 0, 'No internal links found.', false, true);
  }

  if (externalLinks > 0) {
    addScore(links, 5, `${externalLinks} external link(s) found.`, true);
  } else {
    addScore(links, 0, 'No external links found.', false, true);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 5. IMAGES (Max 10)
  // ───────────────────────────────────────────────────────────────────────────
  const imgMatches = data.content?.match(/<img[^>]+>/gi) || [];
  let hasContentAlt = true;
  imgMatches.forEach(img => {
    if (!img.includes('alt="') || img.match(/alt=""/)) {
      hasContentAlt = false;
    }
  });

  const hasFeaturedImage = !!data.featuredImage;
  const hasFeaturedAlt = !!data.featuredImageAlt?.trim();

  if (hasFeaturedImage) {
    addScore(images, 4, 'Featured image is set.', true);
  } else {
    addScore(images, 0, 'Featured image is missing.', false);
  }

  if (hasFeaturedAlt) {
    addScore(images, 3, 'Featured image has ALT text.', true);
    if (kw && hasKeyword(data.featuredImageAlt, kw)) {
      addScore(images, 0, 'Focus keyword found in featured image ALT.', true);
    }
  } else {
    addScore(images, 0, 'Featured image is missing ALT text.', false);
  }

  if (imgMatches.length > 0) {
    if (hasContentAlt) {
      addScore(images, 3, 'All content images have ALT text.', true);
    } else {
      addScore(images, 0, 'Some content images are missing ALT text.', false, true);
    }
  } else {
    addScore(images, 3, 'No additional content images found.', true);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // 6. META / TECHNICAL (Max 20)
  // ───────────────────────────────────────────────────────────────────────────
  const titleLen = data.seoTitle?.length || 0;
  if (titleLen >= 50 && titleLen <= 60) {
    addScore(meta, 10, `SEO Title length is perfect (${titleLen}/60).`, true);
  } else if (titleLen > 0) {
    addScore(meta, 5, `SEO Title length is not optimal (${titleLen}/60).`, false, true);
  } else {
    addScore(meta, 0, 'SEO Title is missing.', false);
  }

  const descLen = data.metaDescription?.length || 0;
  if (descLen >= 120 && descLen <= 160) {
    addScore(meta, 8, `Meta Description length is perfect (${descLen}/160).`, true);
  } else if (descLen > 0) {
    addScore(meta, 4, `Meta Description length is not optimal (${descLen}/160).`, false, true);
  } else {
    addScore(meta, 0, 'Meta Description is missing.', false);
  }
  
  if (data.canonicalUrl?.trim()) {
    addScore(meta, 2, 'Canonical URL is set.', true);
  } else {
    addScore(meta, 2, 'Canonical URL is not set (will default to current URL).', true);
  }

  // ───────────────────────────────────────────────────────────────────────────
  // Calculate final score
  // ───────────────────────────────────────────────────────────────────────────
  categories.forEach(c => {
    totalScore += c.score;
  });

  return {
    score: Math.min(Math.round(totalScore), 100),
    categories
  };
}
