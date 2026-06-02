import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./react-CnPKFcMr.js";import{t as n}from"./jsx-runtime-CaZkqeYb.js";import{J as r,K as i,t as a}from"./dist-DnkTHVup.js";import{n as o,t as s}from"./table-CVkdcsHV.js";var c=e((()=>{})),l,u,d=e((()=>{o(),l={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:s.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:s.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:s.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:s.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:s.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:s.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:s.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:s.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:s.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:s.EVENTS}}}},u={loop:!1,hasNavigation:!0,hasPagination:!0}})),f,p,m,h,g,_,v,y;e((()=>{t(),a(),c(),d(),f=n(),p={title:`Components/Carousel`,components:[i,r],...l},m=e=>(0,f.jsxs)(i,{loop:e.loop,autoplay:e.autoplay,hasNavigation:e.hasNavigation,hasPagination:e.hasPagination,children:[(0,f.jsx)(r,{className:`slide`,children:(0,f.jsx)(`div`,{children:`Example 1`})}),(0,f.jsx)(r,{className:`slide`,children:(0,f.jsx)(`div`,{children:`Example 2`})}),(0,f.jsx)(r,{className:`slide`,children:(0,f.jsx)(`div`,{children:`Example 3`})})]}),h={render:e=>m(e),args:{...u}},g={render:e=>m(e),args:{...u,loop:!0}},_={render:e=>m(e),args:{...u,autoplay:6e3}},v=()=>(0,f.jsxs)(i,{thumbnails:[`https://via.placeholder.com/50`,`https://via.placeholder.com/50`],children:[(0,f.jsx)(r,{className:`slide`,children:(0,f.jsx)(`div`,{children:`Example 1`})}),(0,f.jsx)(r,{className:`slide`,children:(0,f.jsx)(`div`,{children:`Example 2`})})]}),v.__docgenInfo={description:``,methods:[],displayName:`Thumbnails`},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
  const thumbnails = ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'];
  return <AtomCarousel thumbnails={thumbnails}>
      <AtomCarouselItem className='slide'>
        <div>Example 1</div>
      </AtomCarouselItem>
      <AtomCarouselItem className='slide'>
        <div>Example 2</div>
      </AtomCarouselItem>
    </AtomCarousel>;
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Loop`,`Autoplay`,`Thumbnails`]}))();export{_ as Autoplay,h as Default,g as Loop,v as Thumbnails,y as __namedExportsOrder,p as default};