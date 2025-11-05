import{O as l,P as o}from"./index-Dcgwn9tW.js";import{C as a}from"./table-D060eKuu.js";import"./iframe-Ao1sNE2_.js";import"./preload-helper-PPVm8Dsz.js";const c={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:a.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:a.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:a.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:a.EVENTS}}}},i={loop:!1,hasNavigation:!0,hasPagination:!0},b={title:"Components/Carousel",components:[l,o],...c},u=e=>h(l,{loop:e.loop,autoplay:e.autoplay,hasNavigation:e.hasNavigation,hasPagination:e.hasPagination},h(o,{className:"slide"},h("div",null,"Example 1")),h(o,{className:"slide"},h("div",null,"Example 2")),h(o,{className:"slide"},h("div",null,"Example 3"))),s={render:e=>u(e),args:{...i}},r={render:e=>u(e),args:{...i,loop:!0}},n={render:e=>u(e),args:{...i,autoplay:6e3}},t=()=>{const e=["https://via.placeholder.com/50","https://via.placeholder.com/50"];return h(l,{thumbnails:e},h(o,{className:"slide"},h("div",null,"Example 1")),h(o,{className:"slide"},h("div",null,"Example 2")))};t.__docgenInfo={description:"",methods:[],displayName:"Thumbnails"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`() => {
  const thumbnails = ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'];
  return <AtomCarousel thumbnails={thumbnails}>
      <AtomCarouselItem className='slide'>
        <div>Example 1</div>
      </AtomCarouselItem>
      <AtomCarouselItem className='slide'>
        <div>Example 2</div>
      </AtomCarouselItem>
    </AtomCarousel>;
}`,...t.parameters?.docs?.source}}};const C=["Default","Loop","Autoplay","Thumbnails"];export{n as Autoplay,s as Default,r as Loop,t as Thumbnails,C as __namedExportsOrder,b as default};
