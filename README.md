# Southern Spoon — Website

A hand-coded rebuild of the Southern Spoon marketing site (southernspoontn.com), built with plain HTML, CSS, and JS — no frameworks, no build step, no platform lock-in. You own every line.

## Why this exists

The live site is built on GoDaddy Website Builder, which doesn't give you exportable source code — GoDaddy owns and hosts the underlying template/markup. This project recreates the same content, structure, and look as a real static site so it can be freely edited and hosted anywhere (Netlify, GitHub Pages, any web host, etc.).

## Structure

```
southern-spoon/
├── index.html                  Home
├── catering-menus.html         Downloadable sample menus
├── catering-info.html          Services & pricing
├── about-our-food-truck.html   About "Jarvis" the truck
├── events.html
├── photos.html                 Photo gallery (placeholders — see below)
├── partners.html                Venues / planners / vendors
├── contact-us.html             Contact form + business info
├── css/style.css               All shared styling
├── js/contact-form.js          Contact form behavior
└── assets/
    ├── images/                 Put real photos here
    └── menus/                  Put real menu PDFs here
```

## Things to finish with real content

1. **Photos** — every photo on the site is currently a dashed placeholder box (`.image-placeholder`). Drop real image files into `assets/images/`, then replace each placeholder `<div>` with an `<img src="assets/images/your-file.jpg" alt="...">`.
2. **Logo** — the header currently uses a plain "SS" circle. Replace `.brand-mark` in `index.html` (and other pages) with an `<img>` tag pointing to the real logo file once you have it.
3. **Menu PDFs** — `catering-menus.html` links to `assets/menus/*.pdf` files that don't exist yet. Add the real PDFs with matching filenames, or edit the `href` attributes.
4. **Contact form** — `contact-us.html` submits to nothing right now (`js/contact-form.js` just shows an alert). Wire it to a form service like Formspree or EmailJS, or a small backend, so submissions actually arrive by email.
5. **Social links** — Facebook/Instagram/X links are placeholders (`#`) in the header and footer of every page. Fill in the real profile URLs.
6. **reCAPTCHA** — the original site's contact form uses Google reCAPTCHA; not included here since it needs a site key. Add it if you want spam protection.

## Editing

Every page repeats the same header/nav/footer markup — there's no templating engine, so edits to shared elements (like the phone number or nav links) need to be made in each `.html` file. If this becomes annoying, consider moving to a static site generator (11ty, Astro) or converting the header/footer to a small JS include.

## Running locally

No build step needed — just open `index.html` in a browser, or serve the folder locally:

```
npx serve .
```
