import{u as t,j as e,M as s}from"./iframe-BElrKgc3.js";import"./preload-helper-PPVm8Dsz.js";function o(i){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Docs/Architecture Decision Records/ADR 0013: Why do we need to convert carousel item"}),`
`,e.jsx(n.h1,{id:"adr-0013-why-do-we-need-to-convert-carousel-item",children:"ADR 0013: Why do we need to convert carousel item"}),`
`,e.jsxs(n.p,{children:["🗓️ 2023-08 · ✍️ ",e.jsx(n.a,{href:"https://github.com/schirrel",rel:"nofollow",children:"@schirrel"}),", ",e.jsx(n.a,{href:"https://github.com/MayaraRMA",rel:"nofollow",children:"@MayaraRMA"}),", ",e.jsx(n.a,{href:"https://github.com/tassioFront",rel:"nofollow",children:"@tassioFront"})," and ",e.jsx(n.a,{href:"https://twitter.com/felipefialho_",rel:"nofollow",children:"@felipefialho"})]}),`
`,e.jsx(n.h2,{id:"context",children:"Context"}),`
`,e.jsx(n.p,{children:"Wrapping up Swiper HTMLElements as Atomium element."}),`
`,e.jsx(n.h2,{id:"problems",children:"Problems"}),`
`,e.jsxs(n.p,{children:["When creating ",e.jsx(n.code,{children:"<atom-carousel>"})," and its items ",e.jsx(n.code,{children:"<atom-carousel-item>"}),", the HTML three place the ",e.jsx(n.code,{children:"<atom-carousel-item>"})," inside ",e.jsx(n.code,{children:"<swiper-element>"}),", but the swiper needs its children to be ",e.jsx(n.code,{children:"<swiper-slide>"}),"."]}),`
`,e.jsxs(n.p,{children:["Then we need to convert each ",e.jsx(n.code,{children:"atom-carousel-item"})," into ",e.jsx(n.code,{children:"swiper-slide"}),"."]}),`
`,e.jsx(n.h2,{id:"considered-options",children:"Considered Options"}),`
`,e.jsxs(n.p,{children:["To convert the inner ",e.jsx(n.code,{children:"<atom-carousel-item>"})," to ",e.jsx(n.code,{children:"<swiper-slide>"}),", and we have two options:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create and ",e.jsx(n.code,{children:"atom-carousel-item"})," component and inside itself creating the ",e.jsx(n.code,{children:"<swiper-slide>"})," component on parent and them self deleting from parent."]}),`
`,e.jsx(n.li,{children:"The parent itself convert all children at once."}),`
`]}),`
`,e.jsx(n.h2,{id:"decision-drivers",children:"Decision Drivers"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Performance"}),`
`,e.jsx(n.li,{children:"Complexity"}),`
`,e.jsx(n.li,{children:"Compatibility"}),`
`]}),`
`,e.jsx(n.h3,{id:"performance",children:"Performance"}),`
`,e.jsx(n.p,{children:"We had performed a test with both approach using 9 items inside the Carousel:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["With children ",e.jsx(n.code,{children:"atom-carousel-item"})," doing the conversion, it took ",e.jsx(n.em,{children:"0.50ms"})]}),`
`,e.jsxs(n.li,{children:["With parent ",e.jsx(n.code,{children:"atom-carousel"})," doing the conversion, it took ",e.jsx(n.em,{children:"0.20ms"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"complexity",children:"Complexity"}),`
`,e.jsx(n.p,{children:`Both codes shows same complexibility:
First approach - parent conversion :`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`private convertChildren() {
  this.swiperEl.innerHTML = this.host.innerHTML.replace(
    /atom-carousel-item/g,
    'swiper-slide'
  )
  let idx = 0
  while (idx < this.host.children.length) {
    if (this.host.children[idx].outerHTML.indexOf('atom-carousel-item') > -1)
      this.host.removeChild(this.host.children[idx])
    else idx++
  }
}
`})}),`
`,e.jsx(n.p,{children:"Second approach - child conversion:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-js",children:`const parentSwiperContainer =
  this.host.parentElement.querySelector('swiper-container')
const swiperSlide = this.host.querySelector('swiper-slide')
parentSwiperContainer.appendChild(swiperSlide)
this.host.parentElement.removeChild(this.host)
`})}),`
`,e.jsx(n.p,{children:"Taking in consideration the complexity of both codes, not only the parent's conversion approach was using less code but take also avoid us to create a component only to destruct itself. This also avoid the have one more file to maintain, build, test and also to be on final bundle."}),`
`,e.jsx(n.h3,{id:"compatibility",children:"Compatibility"}),`
`,e.jsx(n.p,{children:"This subject was in fact the decision maker, even tho the performance of the first approach took half of the time, when it came to compatibility we discovered why."}),`
`,e.jsxs(n.p,{children:["For simples cases, such static card, plain text or image showcases, no difference between both, but when we started to use with complex components, that had to deal with framework functions such reactivity we face a bigger issue. The HTMLString conversion component loose ",e.jsx(n.em,{children:'"connections "'}),` with the inner content. So it just became a plain HTML String copy, instead of a state and object reference.
When using `,e.jsx(n.code,{children:".innerHTML.replace"})," our components lost its ability to re-render once loading is ready, update values and even trigger framework events."]}),`
`,e.jsxs(n.p,{children:["When using ",e.jsx(n.code,{children:"appendChild"})," behavior, we copy the whole HTMLElement and its props, functions, children, and every memory reference we had. And working as needed and expected."]}),`
`,e.jsx(n.h2,{id:"decision",children:"Decision"}),`
`,e.jsx(n.p,{children:"Once a perfect work alongside with frameworks such React and Vue is one of the most important requirement, we decided to go with child conversion in order to ensure compatibility."}),`
`,e.jsx(n.h3,{id:"alert",children:"Alert"}),`
`,e.jsxs(n.p,{children:["Because of the need of ",e.jsx(n.em,{children:"transport"})," of ",e.jsx(n.code,{children:"atom-carousel-item"})," content to inside ",e.jsx(n.code,{children:"swiper-slide"})," to achieve framework compatibility we loose the lazy property. At our case is not a problem because swiper-slide's lazy property only add a loading spinner while image loads."]})]})}function l(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(o,{...i})}):o(i)}export{l as default};
