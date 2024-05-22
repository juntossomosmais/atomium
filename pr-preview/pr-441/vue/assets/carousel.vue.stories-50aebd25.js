import{t as A,u as v}from"./index-f89a0642.js";import{C as a}from"./table-de46f45e.js";import"./vue.esm-bundler-8a51a326.js";import"./iframe-39833bf9.js";import"../sb-preview/runtime.js";const E={parameters:{docs:{description:{component:"Carousel is a slideshow for cycling through a series of content."}}},argTypes:{hasNavigation:{control:"boolean",description:"If `true`, the carousel will have navigation buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},hasPagination:{control:"boolean",description:"If `true`, the carousel will have pagination buttons.",defaultValue:!0,table:{category:a.PROPERTIES}},loop:{control:"boolean",description:"If `true`, the carousel will loop and navigation buttons could be click to go to the first or last slide.",table:{category:a.PROPERTIES}},autoplay:{description:"When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.",table:{category:a.PROPERTIES}},thumbnails:{description:"An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.",table:{category:a.PROPERTIES}},"--carousel-height":{description:"The height of the carousel.",defaultValue:{summary:"42px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-size":{description:"The height of the thumbnail.",defaultValue:{summary:"64px"},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--thumbnail-object-fit":{description:"The object-fit of the thumbnail.",defaultValue:{summary:"contain"},table:{category:a.CSS_CUSTOM_PROPERTIES}}}},l={loop:!1,hasNavigation:!0,hasPagination:!0},_={title:"Components/Carousel",...E},n=e=>({components:{AtomCarousel:A,AtomCarouselItem:v},setup(){return{args:e}},template:`
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
  `}),o={render:e=>n(e),args:{...l}},t={render:e=>n(e),args:{...l,loop:!0}},r={render:e=>n(e),args:{...l,autoplay:3e3}},I=()=>({components:{AtomCarousel:A,AtomCarouselItem:v},data(){return{thumbnails:["https://via.placeholder.com/50","https://via.placeholder.com/50"]}},template:`
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
  `}),s=()=>I();var i,u,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs
  }
}`,...(c=(u=o.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var m,p,d;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var h,g,C;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 3000
  }
}`,...(C=(g=r.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  return createCarouselWithThumbnails();
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const x=["Default","Loop","Autoplay","Thumbnails"];export{r as Autoplay,o as Default,t as Loop,s as Thumbnails,x as __namedExportsOrder,_ as default};
