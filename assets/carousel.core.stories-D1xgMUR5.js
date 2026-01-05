import{U as u}from"./iframe-Csm4GGMy.js";import{C as a}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const m={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:a.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:a.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:a.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:a.EVENTS}}}},l={loop:!1,hasNavigation:!0,hasPagination:!0};var n=Object.freeze,p=Object.defineProperty,d=(e,h)=>n(p(e,"raw",{value:n(e.slice())})),c;const f={title:"Components/Carousel",...m},i=e=>u`
    <atom-carousel
      loop=${e.loop}
      autoplay=${e.autoplay}
      has-navigation=${e.hasNavigation}
      has-pagination=${e.hasPagination}
    >
      <atom-carousel-item class="slide">
        <div>Example 1</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 2</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 3</div>
      </atom-carousel-item>
    </atom-carousel>
  `,t={render:e=>i(e),args:{...l}},o={render:e=>i(e),args:{...l,loop:!0}},r={render:e=>i(e),args:{...l,autoplay:6e3}},s={render:()=>u(c||(c=d([`
    <atom-carousel id="carousel" thumbnails>
      <atom-carousel-item class="slide">
        <div>Example 1</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 2</div>
      </atom-carousel-item>
    </atom-carousel>

    <script>
      const carousel = document.getElementById('carousel')

      carousel.thumbnails = [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
      ]
    <\/script>
  `])))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-carousel id="carousel" thumbnails>
      <atom-carousel-item class="slide">
        <div>Example 1</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 2</div>
      </atom-carousel-item>
    </atom-carousel>

    <script>
      const carousel = document.getElementById('carousel')

      carousel.thumbnails = [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
      ]
    <\/script>
  \`
}`,...s.parameters?.docs?.source}}};const y=["Default","Loop","Autoplay","Thumbnails"];export{r as Autoplay,t as Default,o as Loop,s as Thumbnails,y as __namedExportsOrder,f as default};
