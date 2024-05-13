"use strict";(globalThis.webpackChunk_atomium_docs=globalThis.webpackChunk_atomium_docs||[]).push([[8359],{"../../packages/core/src/components/carousel/stories/carousel.core.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Autoplay:()=>Autoplay,Default:()=>Default,Loop:()=>Loop,Thumbnails:()=>Thumbnails,__namedExportsOrder:()=>__namedExportsOrder,default:()=>carousel_core_stories});var lit=__webpack_require__("../../node_modules/lit/index.js"),table=__webpack_require__("../../utils/storybook/enums/table.ts");const CarouselComponentArgs={loop:!1,hasNavigation:!0,hasPagination:!0},carousel_core_stories={title:"Components/Carousel",...{parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:table.b.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:table.b.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:table.b.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:table.b.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:table.b.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:table.b.CSS_CUSTOM_PROPERTIES}}}}},createCarousel=args=>lit.qy`
    <atom-carousel
      loop=${args.loop}
      autoplay=${args.autoplay}
      has-navigation=${args.hasNavigation}
      has-pagination=${args.hasPagination}
    >
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-primary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 1
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-secondary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 2
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-contextual-success-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 3
        </div>
      </atom-carousel-item>
    </atom-carousel>
  `,Default={render:args=>createCarousel(args),args:{...CarouselComponentArgs}},Loop={render:args=>createCarousel(args),args:{...CarouselComponentArgs,loop:!0}},Autoplay={render:args=>createCarousel(args),args:{...CarouselComponentArgs,autoplay:3e3}},Thumbnails={render:()=>lit.qy`
    <atom-carousel id="carousel" thumbnails>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-primary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 1
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-secondary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 2
        </div>
      </atom-carousel-item>
    </atom-carousel>

    <script>
      const carousel = document.getElementById('carousel')

      carousel.thumbnails = [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
      ]
    </script>
  `};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs\n  }\n}",...Default.parameters?.docs?.source}}},Loop.parameters={...Loop.parameters,docs:{...Loop.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs,\n    loop: true\n  }\n}",...Loop.parameters?.docs?.source}}},Autoplay.parameters={...Autoplay.parameters,docs:{...Autoplay.parameters?.docs,source:{originalSource:"{\n  render: args => createCarousel(args),\n  args: {\n    ...CarouselComponentArgs,\n    autoplay: 3000\n  }\n}",...Autoplay.parameters?.docs?.source}}},Thumbnails.parameters={...Thumbnails.parameters,docs:{...Thumbnails.parameters?.docs,source:{originalSource:"{\n  render: () => html`\n    <atom-carousel id=\"carousel\" thumbnails>\n      <atom-carousel-item>\n        <div\n          style=\"background-color: var(--color-brand-primary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center\"\n        >\n          Example 1\n        </div>\n      </atom-carousel-item>\n      <atom-carousel-item>\n        <div\n          style=\"background-color: var(--color-brand-secondary-regular); color: var(--color-neutral-white); height: 300px; display: flex; align-items: center; justify-content: center\"\n        >\n          Example 2\n        </div>\n      </atom-carousel-item>\n    </atom-carousel>\n\n    <script>\n      const carousel = document.getElementById('carousel')\n\n      carousel.thumbnails = [\n        'https://via.placeholder.com/50',\n        'https://via.placeholder.com/50',\n      ]\n    <\/script>\n  `\n}",...Thumbnails.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Loop","Autoplay","Thumbnails"]},"../../utils/storybook/enums/table.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>Category});let Category=function(Category){return Category.CSS_CUSTOM_PROPERTIES="CSS Custom Properties",Category.EVENTS="Events",Category.METHODS="Methods",Category.PROPERTIES="Properties",Category.SLOTS="Slots",Category}({})}}]);
//# sourceMappingURL=components-carousel-stories-carousel-core-stories.3292be66.iframe.bundle.js.map