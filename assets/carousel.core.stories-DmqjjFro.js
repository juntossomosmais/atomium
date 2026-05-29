import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-BGas7WAn.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./taggedTemplateLiteral-DJvUgAmF.js";var s=e((()=>{})),c,l,u=e((()=>{r(),c={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:i.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:i.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:i.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:i.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:i.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:i.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:i.EVENTS}}}},l={loop:!1,hasNavigation:!0,hasPagination:!0}})),d,f,p,m,h,g,_,v;e((()=>{t(),s(),u(),a(),f={title:`Components/Carousel`,...c},p=e=>n`
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
  `,m={render:e=>p(e),args:{...l}},h={render:e=>p(e),args:{...l,loop:!0}},g={render:e=>p(e),args:{...l,autoplay:6e3}},_={render:()=>n(d||=o([`
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
  `]))},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Loop`,`Autoplay`,`Thumbnails`]}))();export{g as Autoplay,m as Default,h as Loop,_ as Thumbnails,v as __namedExportsOrder,f as default};