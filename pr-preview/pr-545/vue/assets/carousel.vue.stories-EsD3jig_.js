import{u as v,v as E}from"./index-_kN1yx53.js";import{C as a}from"./table-D060eKuu.js";import"./vue.esm-bundler-Dk4JuX4g.js";import"./iframe-KVfH_WUI.js";import"../sb-preview/runtime.js";const S={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:a.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:a.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:a.CSS_CUSTOM_PROPERTIES}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:a.EVENTS}}}},n={loop:!1,hasNavigation:!0,hasPagination:!0},O={title:"Components/Carousel",...S},l=e=>({components:{AtomCarousel:v,AtomCarouselItem:E},setup(){return{args:e}},template:`
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
  `}),t={render:e=>l(e),args:{...n}},o={render:e=>l(e),args:{...n,loop:!0}},r={render:e=>l(e),args:{...n,autoplay:6e3}},T=()=>({components:{AtomCarousel:v,AtomCarouselItem:E},data(){return{thumbnails:["https://via.placeholder.com/50","https://via.placeholder.com/50"]}},template:`
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
  `}),s=()=>T();var i,u,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 6000
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return createCarouselWithThumbnails();
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const _=["Default","Loop","Autoplay","Thumbnails"];export{r as Autoplay,t as Default,o as Loop,s as Thumbnails,_ as __namedExportsOrder,O as default};
