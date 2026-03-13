import{N as e,P as t}from"./iframe-Br9ztWDk.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={title:`Components/List Slider`,parameters:{docs:{description:{component:`List Slider is a component that displays a list of items in a horizontal slider.`}},actions:{handles:[`clickNext`,`clickPrev`]}},decorators:[r],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:n.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:n.PROPERTIES}},step:{description:`Number of items to advance or go back when navigating.`,defaultValue:{summary:1},control:{type:`number`},table:{category:n.PROPERTIES}},"--slider-height":{description:`The min-height of the slider.`,defaultValue:{summary:`42px`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:`Gap between each item in the slider.`,defaultValue:{summary:`--spacing-base`},table:{category:n.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:n.CSS_CUSTOM_PROPERTIES}},clickNext:{action:`clickNext`,description:`Emitted when the next button is clicked. The event detail is the click event.`,table:{category:n.EVENTS}},clickPrev:{action:`clickPrev`,description:`Emitted when the previous button is clicked. The event detail is the click event.`,table:{category:n.EVENTS}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:n.EVENTS}}}},a=()=>({components:{AtomListSlider:e,AtomListSliderItem:t},setup(){return{}},template:`
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
  `}),o={render:()=>a()},s={render:()=>({components:{AtomListSlider:e,AtomListSliderItem:t},setup(){return{}},template:`
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
    `})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => createListSlider()
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`Default`,`Centralized`];export{s as Centralized,o as Default,c as __namedExportsOrder,i as default};