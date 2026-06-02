import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-DZfjrrNX.js";function o(e){let t={a:`a`,h1:`h1`,h2:`h2`,li:`li`,p:`p`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-08: Carousel with Swiper`}),`
`,(0,c.jsx)(t.h1,{id:`2023-08-carousel-with-swiper`,children:`2023-08: Carousel with Swiper`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-08 · ✍️ `,(0,c.jsx)(t.a,{href:`https://github.com/schirrel`,rel:`nofollow`,children:`@schirrel`}),`, `,(0,c.jsx)(t.a,{href:`https://github.com/MayaraRMA`,rel:`nofollow`,children:`@MayaraRMA`}),`, `,(0,c.jsx)(t.a,{href:`https://github.com/tassioFront`,rel:`nofollow`,children:`@tassioFront`}),` and `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`We need a Carousel component with consistent layout across projects.`}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`We need a Carousel component/library must be web component;`}),`
`,(0,c.jsx)(t.li,{children:`The Carousel component/library must give us the possibility to adjust styles as we need to match our Style Guide;`}),`
`,(0,c.jsx)(t.li,{children:`The Carousel component/library should have a good integrations with Ionic components, once it is the source of our Design System.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,c.jsxs)(t.p,{children:[`As we already have the usage of the `,(0,c.jsx)(t.a,{href:`https://swiperjs.com/`,rel:`nofollow`,children:`Swiper`}),` with an ond version inside an project and Ionic itself `,(0,c.jsx)(t.a,{href:`https://ionicframework.com/docs/v6/api/slides#migration`,rel:`nofollow`,children:`indicates the migration`}),` of the same once they have discontinued the ion-slides.
The `,(0,c.jsx)(t.a,{href:`https://swiperjs.com/`,rel:`nofollow`,children:`Swiper`}),` was the only option considered.`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`We have decided to use Swiper as our Carousel component library, once it match our requirements and we have a previous knowledge, doing a internal wrapper to maintain the Atomium signature.`}),`
`,(0,c.jsx)(t.h2,{id:`caveats`,children:`Caveats`}),`
`,(0,c.jsxs)(t.p,{children:[`An important point to keep in mind is the need of use the `,(0,c.jsx)(t.a,{href:`https://swiperjs.com/element#injecting-styles`,rel:`nofollow`,children:`injectStyles`}),` from Swiper if it is needed to overwrite or add new styles to inside of Swiper Element Shadow Dom.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};