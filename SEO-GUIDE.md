# SEO & AEO Optimization Guide for Wanichanon.dev

This document explains all the SEO (Search Engine Optimization) and AEO (Answer Engine Optimization) improvements implemented in this project.

---

## 📋 Overview

This project is now fully optimized for:
- **Traditional Search Engines** (Google, Bing, Yahoo, DuckDuckGo)
- **AI Answer Engines** (ChatGPT, Perplexity, Claude, Google Bard/SGE)
- **Social Media Platforms** (Facebook, LinkedIn, Twitter/X, Discord)
- **Voice Assistants** (Siri, Google Assistant, Alexa)

---

## 🎯 SEO Optimizations

### 1. Technical SEO

#### ✅ robots.txt
```
Location: public/robots.txt
Purpose: Guides search engine crawlers
Features:
- Allows all user-agents
- Points to sitemap.xml
- Configurable crawl-delay
- Ready for future disallow rules
```

#### ✅ sitemap.xml
```
Location: public/sitemap.xml
Purpose: Helps search engines discover and index pages
Features:
- All page sections included
- Priority and change frequency set
- Last modified dates
```

#### ✅ manifest.json
```
Location: public/manifest.json
Purpose: PWA (Progressive Web App) support
Features:
- App name and description
- Icons for all sizes
- Theme colors
- Shortcuts to key sections
- Categories and screenshots
```

### 2. Metadata & Meta Tags

#### ✅ Comprehensive Metadata (layout.jsx)
```javascript
// Title Templates
"Wanichanon Saelee - Full-Stack Developer | React & Next.js Expert"

// Description
"Portfolio of Wanichanon Saelee, a passionate full-stack developer..."

// Keywords (20+ relevant terms)
["Full-Stack Developer", "React Developer", "Next.js Expert", ...]
```

#### ✅ Open Graph (Social Sharing)
```
og:title - Custom title for social shares
og:description - Compelling description
og:image - 1200x630 auto-generated image
og:type - website
og:locale - en_US
og:site_name - Wanichanon.dev
```

#### ✅ Twitter Cards
```
twitter:card - summary_large_image
twitter:title - Optimized title
twitter:description - Compelling description
twitter:image - 1200x630 image
```

### 3. Structured Data (Schema.org)

Located in: `src/components/seo/StructuredData.jsx`

#### ✅ Person Schema
```json
{
  "@type": "Person",
  "name": "Wanichanon Saelee",
  "jobTitle": "Full-Stack Developer",
  "knowsAbout": ["React", "Next.js", "Node.js", ...],
  "sameAs": ["GitHub", "LinkedIn", ...]
}
```
**Purpose**: Creates a Knowledge Panel in Google search results

#### ✅ Website Schema
```json
{
  "@type": "WebSite",
  "name": "Wanichanon.dev",
  "potentialAction": {
    "@type": "SearchAction",
    "query-input": "required name=search_term_string"
  }
}
```
**Purpose**: Enables site name display and search box in results

#### ✅ WebPage Schema
```json
{
  "@type": "WebPage",
  "breadcrumb": { ... },
  "primaryImageOfPage": { ... }
}
```
**Purpose**: Describes page content and structure

#### ✅ Breadcrumb Schema
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [...]
}
```
**Purpose**: Shows breadcrumb navigation in search results

#### ✅ Projects Schema (SoftwareApplication)
```json
{
  "@type": "SoftwareApplication",
  "name": "University Management System",
  "applicationCategory": "WebApplication",
  "programmingLanguage": ["Next.js", "Supabase", ...]
}
```
**Purpose**: Makes projects discoverable as software applications

---

## 🎯 AEO (Answer Engine Optimization)

### 1. FAQ Schema & Section

Located in: `src/components/sections/FAQSection.jsx`

#### ✅ FAQ Schema
```json
{
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Who is Wanichanon Saelee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "..."
      }
    }
  ]
}
```

**7 FAQ Items Covering:**
1. Who is Wanichanon Saelee?
2. What technologies does he specialize in?
3. How to contact for collaboration?
4. What projects has he built?
5. Is he available for hire?
6. What is his development approach?
7. Does he work remotely?

**AEO Benefits:**
- Appears in Google's "People Also Ask"
- Featured snippets eligibility
- Direct answers in AI responses
- Voice search optimization

### 2. Professional Service Schema
```json
{
  "@type": "ProfessionalService",
  "serviceType": [
    "Web Development",
    "React Development",
    "Next.js Development"
  ],
  "areaServed": { "@type": "Place", "name": "Global" }
}
```
**Purpose**: Appears in "developer for hire" searches

### 3. Content Optimization for AEO

#### ✅ Direct, Concise Answers
- FAQ answers are 1-2 sentences
- Clear question-answer format
- Natural language for voice queries

#### ✅ Semantic HTML
```html
<section aria-label="About Wanichanon Saelee">
<article itemScope itemType="https://schema.org/ProfilePage">
<h1>, <h2>, <h3> - Proper heading hierarchy
```

#### ✅ Accessibility
```html
<!-- Skip to content link -->
<a href="#main-content" class="sr-only">Skip to main content</a>

<!-- ARIA labels -->
<section aria-label="Technical Skills">
<button aria-expanded={isOpen} aria-controls="faq-answer-0">
```

---

## 🚀 Additional Optimizations

### 1. Performance

#### ✅ Font Loading
```javascript
const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",  // Prevents FOIT
  preload: true,
});
```

#### ✅ Image Optimization
```javascript
<Image
  priority              // LCP optimization
  fetchPriority="high"
  sizes="(max-width: 1024px) 100vw, 50vw"
  loading="lazy"        // For below-fold images
/>
```

#### ✅ External Resources
```html
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">
```

### 2. Dynamic Open Graph Images

Location: `src/app/opengraph-image.jsx`

**Auto-generated 1200x630 images featuring:**
- Gradient background
- Your name and title
- Key skills as tags
- Website URL

### 3. Icons & PWA

| File | Size | Purpose |
|------|------|---------|
| `icon.jsx` | 32x32 | Browser favicon |
| `apple-icon.jsx` | 180x180 | iOS home screen |
| `opengraph-image.jsx` | 1200x630 | Social sharing |
| `twitter-image.jsx` | 1200x630 | Twitter cards |

---

## 📊 Verification Checklist

### Search Engine Verification

Add these to `layout.jsx` metadata.verification:

```javascript
verification: {
  google: "your-google-verification-code",
  bing: "your-bing-verification-code",
  yandex: "your-yandex-verification-code",
}
```

**Get verification codes from:**
- Google Search Console: https://search.google.com/search-console
- Bing Webmaster Tools: https://www.bing.com/webmasters
- Yandex Webmaster: https://webmaster.yandex.com

### Analytics (Recommended)

Add Google Analytics 4 or Plausible Analytics:

```javascript
// In layout.jsx head
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
```

---

## 🔍 Testing Your SEO

### 1. Google Rich Results Test
https://search.google.com/test/rich-results

### 2. Schema Markup Validator
https://validator.schema.org/

### 3. Open Graph Debugger
https://developers.facebook.com/tools/debug/

### 4. Twitter Card Validator
https://cards-dev.twitter.com/validator

### 5. PageSpeed Insights
https://pagespeed.web.dev/

### 6. Mobile-Friendly Test
https://search.google.com/test/mobile-friendly

---

## 📈 Expected Results

After these optimizations, you should see:

### Search Results
- ✅ Rich snippets with star ratings (if applicable)
- ✅ Breadcrumb navigation
- ✅ Site name displayed
- ✅ Sitelinks to key sections
- ✅ Knowledge Panel (over time)

### Social Sharing
- ✅ Large preview cards on Twitter/X
- ✅ Rich previews on Facebook/LinkedIn
- ✅ Proper image, title, and description

### AI/LLM Responses
- ✅ "Who is Wanichanon Saelee?" → Direct answer
- ✅ "What does Wanichanon do?" → Professional summary
- ✅ "How to contact Wanichanon?" → Contact information
- ✅ "Wanichanon's projects" → List of projects

---

## 🔄 Maintenance

### Update These Regularly:

1. **sitemap.xml** - When adding new pages
2. **Structured Data** - When updating projects/skills
3. **FAQ Section** - Add new common questions
4. **Open Graph Images** - If redesigning brand
5. **manifest.json** - If changing PWA features

---

## 📚 Resources

- [Next.js Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central](https://developers.google.com/search/docs)
- [Open Graph Protocol](https://ogp.me/)

---

**Last Updated:** February 2026
**Maintained by:** Wanichanon Saelee
