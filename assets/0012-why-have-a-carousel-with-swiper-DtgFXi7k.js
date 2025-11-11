import{u as s,j as e,M as t}from"./iframe-Cu97PxhQ.js";import"./preload-helper-PPVm8Dsz.js";function o(i){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...s(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Architecture Decision Records/ADR 0012: Carousel with Swiper"}),`
`,e.jsx(n.h1,{id:"adr-0012-carousel-with-swiper",children:"ADR 0012: Carousel with Swiper"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-08 · ✍️ ",e.jsx(n.a,{href:"https://github.com/schirrel",rel:"nofollow",children:"@schirrel"}),", ",e.jsx(n.a,{href:"https://github.com/MayaraRMA",rel:"nofollow",children:"@MayaraRMA"}),", ",e.jsx(n.a,{href:"https://github.com/tassioFront",rel:"nofollow",children:"@tassioFront"})," and ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"We need a Carousel component with consistent layout across projects."}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"We need a Carousel component/library must be web component;"}),`
`,e.jsx(n.li,{children:"The Carousel component/library must give us the possibility to adjust styles as we need to match our Style Guide;"}),`
`,e.jsx(n.li,{children:"The Carousel component/library should have a good integrations with Ionic components, once it is the source of our Design System."}),`
`]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.p,{children:["As we already have the usage of the ",e.jsx(n.a,{href:"https://swiperjs.com/",rel:"nofollow",children:"Swiper"})," with an ond version inside an project and Ionic itself ",e.jsx(n.a,{href:"https://ionicframework.com/docs/v6/api/slides#migration",rel:"nofollow",children:"indicates the migration"}),` of the same once they have discontinued the ion-slides.
The `,e.jsx(n.a,{href:"https://swiperjs.com/",rel:"nofollow",children:"Swiper"})," was the only option considered."]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"We have decided to use Swiper as our Carousel component library, once it match our requirements and we have a previous knowledge, doing a internal wrapper to maintain the Atomium signature."}),`
`,e.jsx(n.h2,{id:"caveats",children:"Caveats"}),`
`,e.jsxs(n.p,{children:["An important point to keep in mind is the need of use the ",e.jsx(n.a,{href:"https://swiperjs.com/element#injecting-styles",rel:"nofollow",children:"injectStyles"})," from Swiper if it is needed to overwrite or add new styles to inside of Swiper Element Shadow Dom."]})]})}function h(i={}){const{wrapper:n}={...s(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{h as default};
