# Aksel Web-components POC

## https://stenciljs.com/

**Pros:**

- Single import for bruker med lazy-loading
- Lett å sette opp, stencil tar seg av bygg og bundling.
- Innebygd dokumentasjon-generering med JS-doc
- first-class tree-shaking, fungerer med html, vite, svelte(kit).
- Kan bruke JSX
- Typescript

**Cons:**

- Total bundle-size litt større en eks `Lit`. Men er anslått av Stencil er mindre frem til man bruker ~100 komponenter samtidig.
- Krever build-step
- Potensielt problem med [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content) på grunn av lazy-loading. Denne er kjip.. Kommer tydelig frem i sveltekit-demoen.
- Virtual-dom 😬
- Mye skjer bak kulissene, mindre kontroll, mer låst til stencil sin støtte i fremtiden.
- Vendor-bundle på ~18kB

Veldig informativ artikkel om stencil vs lit/fast: https://www.abeautifulsite.net/posts/moving-from-stencil-to-lit-element/

- https://shoelace.style/getting-started/installation?id=cherry-picking

## Svelte

TODO: Fikse state-handling

**Pros:**

- Kan bruke native svelte 🎉
- Plug-n-play. Ekstremt lett å sette opp.
- Bruker vite/rollup for build og bundling.
- Typescript!
- Kompilerer til native web-components, uten noe ekstra overhead.
- Bare ~4kB vendor-file 🤩 Mindre komponenter som "Button" vil da kunne være ~1-2kB + bare 4kB vendor.
- Svelte har veldig kode DX med warnings og errors før/under build.

**Cons:**

- Ikke lest opp på hvor bra svelte vil støtte web-components i fremtiden.
- Ikke fått prop-drilling til å fungere med slot (parent har open -> child subscriber på open). Må kanskje vente på v4 for context release?
- Potensielle endringer for svelte v4 https://github.com/sveltejs/svelte/pull/8457

## https://lit.dev/

TODO: Sette opp demoer

**Pros:**

- ...

**Cons:**

- Mindre streamlined dokumentasjon (men bedre demoer?).
- Mareritt å sette opp
- Krever dependency til `lit` for bruker 😵

## Alternativer

- Stencil
- Lit-element
- Svelte
- Fast-element
- Vanilla JS (pakken)
- Native web-components
- ..andre?

### Krav

- Enkelt å lage nye komponenter
- Relativt enkelt API. Lett å sette seg inn i.
- Fremtidig støtte
- Typescript
- Enkel bundling?
- Shadow-dom
- JS-docs eller lignende for dokumentasjon?
- Unngår FOUC
- Unngår virtual-dom om mulig
- ...
