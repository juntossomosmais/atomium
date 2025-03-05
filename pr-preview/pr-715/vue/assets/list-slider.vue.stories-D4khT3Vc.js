import{M as n,N as m}from"./index-4McL3leK.js";import{C as e}from"./table-D060eKuu.js";import{w as c}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-8u_E6NaE.js";import"./v4-CtRu48qb.js";const p={parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}},actions:{handles:["clickNext","clickPrev"]}},decorators:[c],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:e.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:e.CSS_CUSTOM_PROPERTIES}},clickNext:{action:"clickNext",description:"Emitted when the next button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},clickPrev:{action:"clickPrev",description:"Emitted when the previous button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:e.EVENTS}}}},I={title:"Components/List Slider",...p},S=()=>({components:{AtomListSlider:m,AtomListSliderItem:n},setup(){return{}},template:`
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
  `}),t={render:()=>S()},i={render:()=>({components:{AtomListSlider:m,AtomListSliderItem:n},setup(){return{}},template:`
      <AtomListSlider centralized="true">
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
      </AtomListSlider>
    `})};var s,r,a;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => createListSlider()
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var l,o,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomListSlider,
      AtomListSliderItem
    },
    setup() {
      return {};
    },
    template: \`
      <AtomListSlider centralized="true">
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
      </AtomListSlider>
    \`
  })
}`,...(d=(o=i.parameters)==null?void 0:o.docs)==null?void 0:d.source}}};const g=["Default","Centralized"];export{i as Centralized,t as Default,g as __namedExportsOrder,I as default};
