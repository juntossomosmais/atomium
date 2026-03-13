import"./components-sxD-Pwkd.js";import{i as e}from"./chunk-YKABRMAI-rQu7s1e9.js";import"./react-DFKUFpG3.js";import"./chunk-242VQQM5-BH6EcrRQ.js";import{m as t,u as n}from"./iframe-D71TlG5e.js";var r=e();function i(e){let i={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...t(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n,{title:`Docs/Architecture Decision Records/ADR 0012: Carousel with Swiper`}),`
`,(0,r.jsx)(i.h1,{id:`adr-0012-carousel-with-swiper`,children:`ADR 0012: Carousel with Swiper`}),`
`,(0,r.jsxs)(i.p,{children:[`🗓️ 2023-08 · ✍️ `,(0,r.jsx)(i.a,{href:`https://github.com/schirrel`,rel:`nofollow`,children:`@schirrel`}),`, `,(0,r.jsx)(i.a,{href:`https://github.com/MayaraRMA`,rel:`nofollow`,children:`@MayaraRMA`}),`, `,(0,r.jsx)(i.a,{href:`https://github.com/tassioFront`,rel:`nofollow`,children:`@tassioFront`}),` and `,(0,r.jsx)(i.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,r.jsx)(i.h2,{id:`context`,children:`Context`}),`
`,(0,r.jsx)(i.p,{children:`We need a Carousel component with consistent layout across projects.`}),`
`,(0,r.jsx)(i.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,r.jsxs)(i.ul,{children:[`
`,(0,r.jsx)(i.li,{children:`We need a Carousel component/library must be web component;`}),`
`,(0,r.jsx)(i.li,{children:`The Carousel component/library must give us the possibility to adjust styles as we need to match our Style Guide;`}),`
`,(0,r.jsx)(i.li,{children:`The Carousel component/library should have a good integrations with Ionic components, once it is the source of our Design System.`}),`
`]}),`
`,(0,r.jsx)(i.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,r.jsxs)(i.p,{children:[`As we already have the usage of the `,(0,r.jsx)(i.a,{href:`https://swiperjs.com/`,rel:`nofollow`,children:`Swiper`}),` with an ond version inside an project and Ionic itself `,(0,r.jsx)(i.a,{href:`https://ionicframework.com/docs/v6/api/slides#migration`,rel:`nofollow`,children:`indicates the migration`}),` of the same once they have discontinued the ion-slides.
The `,(0,r.jsx)(i.a,{href:`https://swiperjs.com/`,rel:`nofollow`,children:`Swiper`}),` was the only option considered.`]}),`
`,(0,r.jsx)(i.h2,{id:`decision`,children:`Decision`}),`
`,(0,r.jsx)(i.p,{children:`We have decided to use Swiper as our Carousel component library, once it match our requirements and we have a previous knowledge, doing a internal wrapper to maintain the Atomium signature.`}),`
`,(0,r.jsx)(i.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,r.jsxs)(i.p,{children:[`An important point to keep in mind is the need of use the `,(0,r.jsx)(i.a,{href:`https://swiperjs.com/element#injecting-styles`,rel:`nofollow`,children:`injectStyles`}),` from Swiper if it is needed to overwrite or add new styles to inside of Swiper Element Shadow Dom.`]})]})}function a(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}export{a as default};