import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index-BIuA1NfB-Jxohl6WW.js";import{a as n,o as r}from"./esm-AmgW3jIi.js";import{t as i}from"./table-jqz5s6A8.js";e();var a={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:i.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:i.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:i.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:i.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:i.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:i.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:i.EVENTS}}}},o={loop:!1,hasNavigation:!0,hasPagination:!0},s=t(),c={title:`Components/Carousel`,components:[n,r],...a},l=e=>(0,s.jsxs)(n,{loop:e.loop,autoplay:e.autoplay,hasNavigation:e.hasNavigation,hasPagination:e.hasPagination,children:[(0,s.jsx)(r,{className:`slide`,children:(0,s.jsx)(`div`,{children:`Example 1`})}),(0,s.jsx)(r,{className:`slide`,children:(0,s.jsx)(`div`,{children:`Example 2`})}),(0,s.jsx)(r,{className:`slide`,children:(0,s.jsx)(`div`,{children:`Example 3`})})]}),u={render:e=>l(e),args:{...o}},d={render:e=>l(e),args:{...o,loop:!0}},f={render:e=>l(e),args:{...o,autoplay:6e3}},p=()=>(0,s.jsxs)(n,{thumbnails:[`https://via.placeholder.com/50`,`https://via.placeholder.com/50`],children:[(0,s.jsx)(r,{className:`slide`,children:(0,s.jsx)(`div`,{children:`Example 1`})}),(0,s.jsx)(r,{className:`slide`,children:(0,s.jsx)(`div`,{children:`Example 2`})})]});p.__docgenInfo={description:``,methods:[],displayName:`Thumbnails`},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`() => {
  const thumbnails = ['https://via.placeholder.com/50', 'https://via.placeholder.com/50'];
  return <AtomCarousel thumbnails={thumbnails}>
      <AtomCarouselItem className='slide'>
        <div>Example 1</div>
      </AtomCarouselItem>
      <AtomCarouselItem className='slide'>
        <div>Example 2</div>
      </AtomCarouselItem>
    </AtomCarousel>;
}`,...p.parameters?.docs?.source}}};var m=[`Default`,`Loop`,`Autoplay`,`Thumbnails`];export{f as Autoplay,u as Default,d as Loop,p as Thumbnails,m as __namedExportsOrder,c as default};