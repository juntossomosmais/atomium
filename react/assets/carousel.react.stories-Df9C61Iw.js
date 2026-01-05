import{j as a}from"./iframe-2btVzJSD.js";import{O as i,P as t}from"./index-BZN0_ThS.js";import{C as o}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const m={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:o.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:o.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:o.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:o.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:o.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:o.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:o.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:o.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:o.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:o.EVENTS}}}},c={loop:!1,hasNavigation:!0,hasPagination:!0},b={title:"Components/Carousel",components:[i,t],...m},u=e=>a.jsxs(i,{loop:e.loop,autoplay:e.autoplay,hasNavigation:e.hasNavigation,hasPagination:e.hasPagination,children:[a.jsx(t,{className:"slide",children:a.jsx("div",{children:"Example 1"})}),a.jsx(t,{className:"slide",children:a.jsx("div",{children:"Example 2"})}),a.jsx(t,{className:"slide",children:a.jsx("div",{children:"Example 3"})})]}),r={render:e=>u(e),args:{...c}},n={render:e=>u(e),args:{...c,loop:!0}},l={render:e=>u(e),args:{...c,autoplay:6e3}},s=()=>{const e=["https://via.placeholder.com/50","https://via.placeholder.com/50"];return a.jsxs(i,{thumbnails:e,children:[a.jsx(t,{className:"slide",children:a.jsx("div",{children:"Example 1"})}),a.jsx(t,{className:"slide",children:a.jsx("div",{children:"Example 2"})})]})};s.__docgenInfo={description:"",methods:[],displayName:"Thumbnails"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const thumbnails = ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'];
  return <AtomCarousel thumbnails={thumbnails}>
      <AtomCarouselItem className='slide'>
        <div>Example 1</div>
      </AtomCarouselItem>
      <AtomCarouselItem className='slide'>
        <div>Example 2</div>
      </AtomCarouselItem>
    </AtomCarousel>;
}`,...s.parameters?.docs?.source}}};const C=["Default","Loop","Autoplay","Thumbnails"];export{l as Autoplay,r as Default,n as Loop,s as Thumbnails,C as __namedExportsOrder,b as default};
