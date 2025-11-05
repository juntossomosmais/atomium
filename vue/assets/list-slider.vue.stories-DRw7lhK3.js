import{R as s,S as r}from"./index-D9gi79PD.js";import{C as e}from"./table-D060eKuu.js";import{w as a}from"./decorator-DdMupD64.js";import"./vue.esm-bundler-X36X5nj_.js";import"./iframe-DdQc9Zgb.js";import"./v4-CtRu48qb.js";const o={parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}},actions:{handles:["clickNext","clickPrev"]}},decorators:[a],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:e.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},step:{description:"Number of items to advance or go back when navigating.",defaultValue:{summary:1},control:{type:"number"},table:{category:e.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:e.CSS_CUSTOM_PROPERTIES}},clickNext:{action:"clickNext",description:"Emitted when the next button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},clickPrev:{action:"clickPrev",description:"Emitted when the previous button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:e.EVENTS}}}},u={title:"Components/List Slider",...o},l=()=>({components:{AtomListSlider:r,AtomListSliderItem:s},setup(){return{}},template:`
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
  `}),t={render:()=>l()},i={render:()=>({components:{AtomListSlider:r,AtomListSliderItem:s},setup(){return{}},template:`
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
    `})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => createListSlider()
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const v=["Default","Centralized"];export{i as Centralized,t as Default,v as __namedExportsOrder,u as default};
