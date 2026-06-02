import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{D as t,G as n,T as r,U as i,q as a}from"./storybook-D-TQ6ufp.js";function o(e){let t={a:`a`,code:`code`,em:`em`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,ol:`ol`,p:`p`,pre:`pre`,ul:`ul`,...n(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{title:`Docs/Architecture Decision Records/2023-08: Why do we need to convert carousel item`}),`
`,(0,c.jsx)(t.h1,{id:`2023-08-why-do-we-need-to-convert-carousel-item`,children:`2023-08: Why do we need to convert carousel item`}),`
`,(0,c.jsxs)(t.p,{children:[`🗓️ 2023-08 · ✍️ `,(0,c.jsx)(t.a,{href:`https://github.com/schirrel`,rel:`nofollow`,children:`@schirrel`}),`, `,(0,c.jsx)(t.a,{href:`https://github.com/MayaraRMA`,rel:`nofollow`,children:`@MayaraRMA`}),`, `,(0,c.jsx)(t.a,{href:`https://github.com/tassioFront`,rel:`nofollow`,children:`@tassioFront`}),` and `,(0,c.jsx)(t.a,{href:`https://twitter.com/felipefialho_`,rel:`nofollow`,children:`@felipefialho`})]}),`
`,(0,c.jsx)(t.h2,{id:`context`,children:`Context`}),`
`,(0,c.jsx)(t.p,{children:`Wrapping up Swiper HTMLElements as Atomium element.`}),`
`,(0,c.jsx)(t.h2,{id:`problems`,children:`Problems`}),`
`,(0,c.jsxs)(t.p,{children:[`When creating `,(0,c.jsx)(t.code,{children:`<atom-carousel>`}),` and its items `,(0,c.jsx)(t.code,{children:`<atom-carousel-item>`}),`, the HTML three place the `,(0,c.jsx)(t.code,{children:`<atom-carousel-item>`}),` inside `,(0,c.jsx)(t.code,{children:`<swiper-element>`}),`, but the swiper needs its children to be `,(0,c.jsx)(t.code,{children:`<swiper-slide>`}),`.`]}),`
`,(0,c.jsxs)(t.p,{children:[`Then we need to convert each `,(0,c.jsx)(t.code,{children:`atom-carousel-item`}),` into `,(0,c.jsx)(t.code,{children:`swiper-slide`}),`.`]}),`
`,(0,c.jsx)(t.h2,{id:`considered-options`,children:`Considered Options`}),`
`,(0,c.jsxs)(t.p,{children:[`To convert the inner `,(0,c.jsx)(t.code,{children:`<atom-carousel-item>`}),` to `,(0,c.jsx)(t.code,{children:`<swiper-slide>`}),`, and we have two options:`]}),`
`,(0,c.jsxs)(t.ol,{children:[`
`,(0,c.jsxs)(t.li,{children:[`Create and `,(0,c.jsx)(t.code,{children:`atom-carousel-item`}),` component and inside itself creating the `,(0,c.jsx)(t.code,{children:`<swiper-slide>`}),` component on parent and them self deleting from parent.`]}),`
`,(0,c.jsx)(t.li,{children:`The parent itself convert all children at once.`}),`
`]}),`
`,(0,c.jsx)(t.h2,{id:`decision-drivers`,children:`Decision Drivers`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsx)(t.li,{children:`Performance`}),`
`,(0,c.jsx)(t.li,{children:`Complexity`}),`
`,(0,c.jsx)(t.li,{children:`Compatibility`}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`performance`,children:`Performance`}),`
`,(0,c.jsx)(t.p,{children:`We had performed a test with both approach using 9 items inside the Carousel:`}),`
`,(0,c.jsxs)(t.ul,{children:[`
`,(0,c.jsxs)(t.li,{children:[`With children `,(0,c.jsx)(t.code,{children:`atom-carousel-item`}),` doing the conversion, it took `,(0,c.jsx)(t.em,{children:`0.50ms`})]}),`
`,(0,c.jsxs)(t.li,{children:[`With parent `,(0,c.jsx)(t.code,{children:`atom-carousel`}),` doing the conversion, it took `,(0,c.jsx)(t.em,{children:`0.20ms`})]}),`
`]}),`
`,(0,c.jsx)(t.h3,{id:`complexity`,children:`Complexity`}),`
`,(0,c.jsx)(t.p,{children:`Both codes shows same complexibility:
First approach - parent conversion :`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`private convertChildren() {
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
`,(0,c.jsx)(t.p,{children:`Second approach - child conversion:`}),`
`,(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:`language-js`,children:`const parentSwiperContainer =
  this.host.parentElement.querySelector('swiper-container')
const swiperSlide = this.host.querySelector('swiper-slide')
parentSwiperContainer.appendChild(swiperSlide)
this.host.parentElement.removeChild(this.host)
`})}),`
`,(0,c.jsx)(t.p,{children:`Taking in consideration the complexity of both codes, not only the parent's conversion approach was using less code but take also avoid us to create a component only to destruct itself. This also avoid the have one more file to maintain, build, test and also to be on final bundle.`}),`
`,(0,c.jsx)(t.h3,{id:`compatibility`,children:`Compatibility`}),`
`,(0,c.jsx)(t.p,{children:`This subject was in fact the decision maker, even tho the performance of the first approach took half of the time, when it came to compatibility we discovered why.`}),`
`,(0,c.jsxs)(t.p,{children:[`For simples cases, such static card, plain text or image showcases, no difference between both, but when we started to use with complex components, that had to deal with framework functions such reactivity we face a bigger issue. The HTMLString conversion component loose `,(0,c.jsx)(t.em,{children:`"connections "`}),` with the inner content. So it just became a plain HTML String copy, instead of a state and object reference.
When using `,(0,c.jsx)(t.code,{children:`.innerHTML.replace`}),` our components lost its ability to re-render once loading is ready, update values and even trigger framework events.`]}),`
`,(0,c.jsxs)(t.p,{children:[`When using `,(0,c.jsx)(t.code,{children:`appendChild`}),` behavior, we copy the whole HTMLElement and its props, functions, children, and every memory reference we had. And working as needed and expected.`]}),`
`,(0,c.jsx)(t.h2,{id:`decision`,children:`Decision`}),`
`,(0,c.jsx)(t.p,{children:`Once a perfect work alongside with frameworks such React and Vue is one of the most important requirement, we decided to go with child conversion in order to ensure compatibility.`}),`
`,(0,c.jsx)(t.h3,{id:`alert`,children:`Alert`}),`
`,(0,c.jsxs)(t.p,{children:[`Because of the need of `,(0,c.jsx)(t.em,{children:`transport`}),` of `,(0,c.jsx)(t.code,{children:`atom-carousel-item`}),` content to inside `,(0,c.jsx)(t.code,{children:`swiper-slide`}),` to achieve framework compatibility we loose the lazy property. At our case is not a problem because swiper-slide's lazy property only add a loading spinner while image loads.`]})]})}function s(e={}){let{wrapper:t}={...n(),...e.components};return t?(0,c.jsx)(t,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}var c;e((()=>{c=a(),i(),t()}))();export{s as default};