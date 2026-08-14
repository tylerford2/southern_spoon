# Southern Spoon — Website

A hand-coded rebuild of the Southern Spoon marketing site (southernspoontn.com), built with plain HTML, CSS, and JS — no frameworks, no build step, no platform lock-in. You own every line.

## Why this exists

The live site is built on GoDaddy Website Builder, which doesn't give you exportable source code — GoDaddy owns and hosts the underlying template/markup. This project recreates the same content and structure as a real static site, elevated with the brand's actual black-and-white palette, real fonts, real photography, and full SEO, so it can be freely edited and hosted anywhere (Netlify, GitHub Pages, any web host, etc.).

## Design

- **Colors**: true black and white, matching the brand — no added color palette.
- **Fonts**: Playfair Display (headings) + Open Sans (body), loaded from Google Fonts — these are the same fonts the original site uses.
- **Logo**: the real Southern Spoon lockup (`assets/logos/Logo_160x160.png`) in the header, and the monogram (`assets/logos/logo_fb.jpg`) as the favicon.
- **Photo treatment**: food photography stays in full color (it needs to look appetizing); atmospheric/environment shots (the truck at dusk, evening crowds) are true black & white via the `.photo--mono` CSS class. This is a deliberate, selective choice — not a blanket filter. Swap the class on/off per `<img>` to change treatment.
- **Vendor logos** on the Partners page render in grayscale and go full color on hover — a small interactive touch that keeps the page feeling premium.

## Structure

```
southern-spoon/
├── index.html                  Home
├── catering-menus.html         Downloadable sample menus
├── catering-info.html          Services & pricing
├── about-our-food-truck.html   About "Jarvis" the truck
├── events.html
├── photos.html                 Full photo gallery
├── partners.html                Venues / planners / vendors, with real vendor logos
├── contact-us.html             Contact form + business info
├── css/style.css               All shared styling
├── js/contact-form.js          Contact form behavior
├── sitemap.xml                 For search engines
├── robots.txt                  For search engines
└── assets/
    ├── logos/                  Southern Spoon logo files (PNG/JPG + source .ai/.psd)
    ├── images/                 All catering/food truck photography (45 files)
    ├── preferred-vendors/      Partner venue/vendor logos
    └── menus/                  Sample catering menu PDFs
```

## SEO included

- Unique `<title>` (all under 60 characters) and meta description (all under ~160 characters) per page
- Exactly one `<h1>` per page, `<html lang="en">`, and a `<meta name="robots" content="index, follow">` on every page
- Canonical URL on every page
- Open Graph + Twitter Card tags for social sharing previews (Facebook, X, iMessage, Slack, etc.)
- `LocalBusiness` JSON-LD structured data on the homepage (name, address, geo, phone, cuisine) — this is what lets Google show a rich business card in search results
- `sitemap.xml` and `robots.txt` at the site root, referencing each other
- Descriptive, keyword-rich filenames and unique `alt` text on every photo (helps image search, not just accessibility)
- `loading="lazy"` on below-the-fold images, `loading="eager"` + `fetchpriority="high"` on each page's hero image, to help page speed and Core Web Vitals (LCP)
- `rel="noopener"` on every external/new-tab link

### One thing I couldn't finish: image file sizes

This environment has no image-editing tools available (no ImageMagick, Photoshop, or similar), so the photos are uploaded at their original size — several hero images are 400–500KB. Large images slow down page load, and page speed is a real Google/Bing ranking factor (Core Web Vitals). Before going live, run the images in `assets/images/` through a compressor like [squoosh.app](https://squoosh.app) or TinyPNG and re-save at roughly the same filenames — nothing in the HTML needs to change, just replace the files. Aim for under ~150KB per photo and no wider than ~1920px for hero backgrounds.

### After deploying to the real domain

- Submit `sitemap.xml` in [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters) — this is what actually gets pages indexed and crawled.
- Run the live homepage through Google's [Rich Results Test](https://search.google.com/test/rich-results) to confirm the JSON-LD business data validates.
- Claim/verify the Google Business Profile for Southern Spoon and make sure the name, address, and phone match this site exactly (NAP consistency matters a lot for local SEO).

## Things to finish

1. **Partner links** — every vendor logo on `partners.html` currently links to `#`. Swap in each vendor's real website URL (search for `href="#"` in that file).
2. **Contact form** — `contact-us.html` submits to nothing right now (`js/contact-form.js` just shows an alert). Wire it to a form service like Formspree or EmailJS, or a small backend, so submissions actually arrive by email.
3. **Social links** — Facebook/Instagram/X links are placeholders (`#`) in the header and footer of every page. Fill in the real profile URLs, and add them to the `sameAs` array in the homepage's JSON-LD once real.
4. **reCAPTCHA** — the original site's contact form uses Google reCAPTCHA; not included here since it needs a site key. Add it if you want spam protection.
5. **Deploy** — once hosted at the real domain, double-check every `https://southernspoontn.com/...` reference in the `<meta>` tags and JSON-LD matches the live URL.

## Editing

Every page repeats the same header/nav/footer markup — there's no templating engine, so edits to shared elements (like the phone number or nav links) need to be made in each `.html` file. If this becomes annoying, consider moving to a static site generator (11ty, Astro) or converting the header/footer to a small JS include.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder locally:

```
npx serve .
```
