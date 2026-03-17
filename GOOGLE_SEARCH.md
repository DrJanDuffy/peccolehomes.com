# Google Search setup

The site is prepared for Google Search with:

- **Metadata:** Title, description, keywords, and Open Graph on every page
- **Structured data:** RealEstateAgent (LocalBusiness) and WebSite JSON-LD in the root layout; FAQPage on `/faq`
- **Sitemap:** `/sitemap.xml` lists all pages (home, about, contact, peccole-ranch, faq)
- **Robots:** `/robots.txt` allows crawling and points to the sitemap
- **Twitter cards:** Set for sharing
- **Web app manifest:** `/manifest.webmanifest` for name and start URL
- **Canonical URLs:** Next.js uses `metadataBase` so each page gets a correct canonical URL when deployed

## Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console).
2. Add the property for `https://peccolehomes.com` (or your production domain).
3. **Verify ownership:** Use one of the options (HTML meta tag, DNS, or HTML file).
   - For **HTML meta tag:** Set the env var `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` to the `content` value Google gives you (in Vercel: Project → Settings → Environment Variables). The root layout already outputs the verification meta tag when this variable is set.
   - Or use DNS (TXT record) or the HTML file method—no code change needed.
4. After verification, **submit the sitemap:** Sitemaps → Add sitemap → enter `sitemap.xml`.
5. Use URL Inspection for important URLs and “Request indexing” if needed.

## After going live

- Ensure production `metadataBase` in `lib/site.ts` is your real domain (e.g. `https://peccolehomes.com`).
- In Search Console, monitor Coverage and Core Web Vitals.
- Keep NAP in `lib/site.ts` in sync with your Google Business Profile.
