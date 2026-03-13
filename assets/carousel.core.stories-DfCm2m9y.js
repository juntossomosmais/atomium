import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./taggedTemplateLiteral-D9Q4odv2.js";var r={parameters:{docs:{description:{component:`Carousel is a slideshow for cycling through a series of content.`}}},argTypes:{hasNavigation:{control:`boolean`,description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:t.PROPERTIES}},hasPagination:{control:`boolean`,description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:t.PROPERTIES}},loop:{control:`boolean`,description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:t.PROPERTIES}},autoplay:{description:`When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.`,table:{category:t.PROPERTIES}},thumbnails:{description:`An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.`,table:{category:t.PROPERTIES}},"--carousel-height":{description:`The height of the carousel.`,defaultValue:{summary:`42px`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:`The height of the thumbnail.`,defaultValue:{summary:`64px`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:`The object-fit of the thumbnail.`,defaultValue:{summary:`contain`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:t.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:t.EVENTS}}}},i={loop:!1,hasNavigation:!0,hasPagination:!0},a,o={title:`Components/Carousel`,...r},s=t=>e`
    <atom-carousel
      loop=${t.loop}
      autoplay=${t.autoplay}
      has-navigation=${t.hasNavigation}
      has-pagination=${t.hasPagination}
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
  `,c={render:e=>s(e),args:{...i}},l={render:e=>s(e),args:{...i,loop:!0}},u={render:e=>s(e),args:{...i,autoplay:6e3}},d={render:()=>e(a||=n([`
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
  `]))};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};var f=[`Default`,`Loop`,`Autoplay`,`Thumbnails`];export{u as Autoplay,c as Default,l as Loop,d as Thumbnails,f as __namedExportsOrder,o as default};