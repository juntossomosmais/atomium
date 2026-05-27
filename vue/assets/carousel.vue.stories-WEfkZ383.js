import{i as e}from"./preload-helper-xPQekRTU.js";import{T as t,t as n,w as r}from"./iframe-Bh0p7hu1.js";import{n as i,t as a}from"./table-CVkdcsHV.js";var o=e((()=>{})),s,c,l=e((()=>{i(),s={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:a.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:a.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:a.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:a.EVENTS}}}},c={loop:!1,hasNavigation:!0,hasPagination:!0}})),u,d,f,p,m,h,g,_;e((()=>{n(),o(),l(),u={title:`Components/Carousel`,...s},d=e=>({components:{AtomCarousel:r,AtomCarouselItem:t},setup(){return{args:e}},template:`
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
  `}),f={render:e=>d(e),args:{...c}},p={render:e=>d(e),args:{...c,loop:!0}},m={render:e=>d(e),args:{...c,autoplay:6e3}},h=()=>({components:{AtomCarousel:r,AtomCarouselItem:t},data(){return{thumbnails:[`https://via.placeholder.com/50`,`https://via.placeholder.com/50`]}},template:`
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
  `}),g=()=>h(),f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...m.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`() => {
  return createCarouselWithThumbnails();
}`,...g.parameters?.docs?.source}}},_=[`Default`,`Loop`,`Autoplay`,`Thumbnails`]}))();export{m as Autoplay,f as Default,p as Loop,g as Thumbnails,_ as __namedExportsOrder,u as default};