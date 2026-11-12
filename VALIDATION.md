# Validation record

Prepared 13 November 2026 (Asia/Karachi).

## Completed

- Next.js production build with static export: passed.
- TypeScript check (`tsc --noEmit`): passed.
- Export validator: all six project detail routes, ten generated HTML pages, and 287 local route, image, file and anchor references passed.
- Every generated HTML page has a title, description and one primary heading.
- Desktop browser preview: inspected at a 1363 px viewport.
- Mobile and tablet layouts: inspected in 390 px and 768 px browser frames (375 px and 753 px content widths after scrollbars). No horizontal content overflow after the layout correction.
- Project filters: Computer Vision and NLP each displayed two projects. Keyboard Tab and Space activation worked. AI Agents displayed one project.
- Mobile navigation: opening, selected link layout and Escape closing checked; `aria-expanded` returned to false.
- Mobile JobPilot route: navigated from the filtered project card and rendered correctly, with no horizontal overflow and a visible development label.
- Homepage image loading: all ten displayed image instances loaded successfully.
- CV: the included PDF matches the supplied file byte for byte (SHA-256 comparison).
- Development and production preview server scripts: JavaScript syntax checked.

The temporary responsive inspection page was removed before the final production build. The source package contains original artwork, source, exact dependency lock and README; generated build directories and node_modules are intentionally excluded. Build the production site using `npm ci` and `npm run build`.

## Limits and next steps

- Not deployed to the user's Vercel account. Follow README.md to deploy.
- Repository content and external URL availability could not be independently inspected in this environment. The five supplied repository URLs are preserved exactly.
- Set NEXT_PUBLIC_SITE_URL to the actual production origin and redeploy to emit absolute social image URLs, canonical URLs and sitemap entries. No placeholder domain is embedded in the site.
- Layout checks used real browser iframe viewports, not physical mobile devices. No claim of a complete assistive-technology or cross-browser audit is made.
