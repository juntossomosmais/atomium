import{y as a,z as o}from"./index-s2VcJ2KJ.js";import{C as e}from"./table-D060eKuu.js";import"./vue.esm-bundler-Cotndkpi.js";import"./iframe-37gUtr6K.js";import"../sb-preview/runtime.js";const l={parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}}},argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:e.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:e.CSS_CUSTOM_PROPERTIES}}}},u={title:"Components/List Slider",...l},d=()=>({components:{AtomListSlider:a,AtomListSliderItem:o},setup(){return{}},template:`
    <AtomListSlider>
      <AtomListSliderItem class="slide">
        <div>
          Example 1
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 2
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 3
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 4
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 5
        </div>
      </AtomListSliderItem>
    </AtomListSlider>
  `}),t={render:()=>d()};var i,s,r;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => createListSlider()
}`,...(r=(s=t.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,u as default};
