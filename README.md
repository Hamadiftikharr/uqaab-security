# UQAAB Security

A responsive, single-page website using plain HTML, CSS and JavaScript. No build or installation is needed.

## Edit the site

- `dist/index.html` — all text, sections, service packages, findings, form fields and social links. Search for `uqaab-security`, `hamadiftikharr`, `UqaabSecurity` or `hamadiftikhar` to update your profiles. Both Discord icons use the supplied invite: `https://discord.gg/jaZNPfFzmt`.
- `dist/styles.css` — theme, layout and responsive styles.
- `dist/script.js` — mobile navigation, inline icons, current section highlighting, service selection and form behavior.
- `dist/review-request.js` — creates the prefilled email addressed to `audits@uqaabsecurity.com`. All entered fields and the selected service are included. Email is required; the other fields are optional. The visitor must review and send the draft in their own email client. There is no server submission or stored form data.
- `dist/assets/logo-original.png` — your unmodified original logo. CSS applies a teal and white gradient through its transparency, preserving its exact shape.
- `dist/assets/eagle-hero.png` — custom eagle artwork.

Serve `dist/` with any static web host. Open `dist/index.html` for a simple local preview. Google Fonts are optional; the page falls back to system sans-serif fonts without a network connection.

The four audit results, placements and links use the content supplied for this website. The three expandable security notes can be edited in the HTML.

## Brand asset sources

- Starknet: https://www.starknet.io/wp-content/themes/Starknet/assets/img/starknet-logo-light.svg
- SEDA: https://www.seda.xyz/seda-logo-black.svg (inverted in CSS for a dark background)
- Ammplify: the teal triangular mark from the user-supplied design reference, displayed using a CSS crop of `dist/assets/brand-reference.png`.
- Neutrl: inline logo from https://www.neutrl.finance/, with explicit light fills for legibility on the dark background.
- Social platform icons: Simple Icons v11.0.0, https://github.com/simple-icons/simple-icons/tree/11.0.0/icons

All logo files are hosted with the site. Protocol logos link to their corresponding public audit result or finding.
