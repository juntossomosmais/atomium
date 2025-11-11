import{ag as i,ah as u}from"./iframe-BWC7Cn59.js";import{C as a}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const c={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:a.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:a.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:a.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:a.EVENTS}}}},n={loop:!1,hasNavigation:!0,hasPagination:!0},g={title:"Components/Carousel",...c},l=e=>({components:{AtomCarousel:u,AtomCarouselItem:i},setup(){return{args:e}},template:`
    <AtomCarousel
      loop="${e.loop}"
      autoplay="${e.autoplay}"
      hasNavigation="${e.hasNavigation}"
      hasPagination="${e.hasPagination}"
    >
      <AtomCarouselItem class="slide">
        <div>
          Example 1
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 2
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 3
        </div>
      </AtomCarouselItem>
    </AtomCarousel>
  `}),t={render:e=>l(e),args:{...n}},o={render:e=>l(e),args:{...n,loop:!0}},r={render:e=>l(e),args:{...n,autoplay:6e3}},m=()=>({components:{AtomCarousel:u,AtomCarouselItem:i},data(){return{thumbnails:["https://via.placeholder.com/50","https://via.placeholder.com/50"]}},template:`
    <AtomCarousel :thumbnails="thumbnails">
      <AtomCarouselItem class="slide">
        <div>
          Example 1
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 2
        </div>
      </AtomCarouselItem>
    </AtomCarousel>
  `}),s=()=>m();t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  return createCarouselWithThumbnails();
}`,...s.parameters?.docs?.source}}};const C=["Default","Loop","Autoplay","Thumbnails"];export{r as Autoplay,t as Default,o as Loop,s as Thumbnails,C as __namedExportsOrder,g as default};
