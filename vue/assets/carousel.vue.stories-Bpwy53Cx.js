import{C as e,S as t}from"./iframe-DHKEqBzE.js";import{t as n}from"./table-DZkiv1k4.js";var r={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:n.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:n.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:n.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:n.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:n.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:n.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:n.EVENTS}}}},i={loop:!1,hasNavigation:!0,hasPagination:!0},a={title:`Components/Carousel`,...r},o=n=>({components:{AtomCarousel:t,AtomCarouselItem:e},setup(){return{args:n}},template:`
    <AtomCarousel
      loop="${n.loop}"
      autoplay="${n.autoplay}"
      hasNavigation="${n.hasNavigation}"
      hasPagination="${n.hasPagination}"
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
  `}),s={render:e=>o(e),args:{...i}},c={render:e=>o(e),args:{...i,loop:!0}},l={render:e=>o(e),args:{...i,autoplay:6e3}},u=()=>({components:{AtomCarousel:t,AtomCarouselItem:e},data(){return{thumbnails:[`https://via.placeholder.com/50`,`https://via.placeholder.com/50`]}},template:`
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
  `}),d=()=>u();s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...l.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`() => {
  return createCarouselWithThumbnails();
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Loop`,`Autoplay`,`Thumbnails`];export{l as Autoplay,s as Default,c as Loop,d as Thumbnails,f as __namedExportsOrder,a as default};