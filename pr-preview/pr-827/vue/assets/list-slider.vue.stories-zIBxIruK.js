import{i as e}from"./preload-helper-xPQekRTU.js";import{F as t,I as n,t as r}from"./iframe-Bh0p7hu1.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-CbEWp_u4.js";var c=e((()=>{})),l,u=e((()=>{i(),s(),l={parameters:{docs:{description:{component:`List Slider is a component that displays a list of items in a horizontal slider.`}},actions:{handles:[`clickNext`,`clickPrev`]}},decorators:[o],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:a.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:a.PROPERTIES}},step:{description:`Number of items to advance or go back when navigating.`,defaultValue:{summary:1},control:{type:`number`},table:{category:a.PROPERTIES}},"--slider-height":{description:`The min-height of the slider.`,defaultValue:{summary:`42px`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:`Gap between each item in the slider.`,defaultValue:{summary:`--spacing-base`},table:{category:a.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:a.CSS_CUSTOM_PROPERTIES}},clickNext:{action:`clickNext`,description:`Emitted when the next button is clicked. The event detail is the click event.`,table:{category:a.EVENTS}},clickPrev:{action:`clickPrev`,description:`Emitted when the previous button is clicked. The event detail is the click event.`,table:{category:a.EVENTS}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:a.EVENTS}}}}})),d,f,p,m,h;e((()=>{r(),c(),u(),d={title:`Components/List Slider`,...l},f=()=>({components:{AtomListSlider:t,AtomListSliderItem:n},setup(){return{}},template:`
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
  `}),p={render:()=>f()},m={render:()=>({components:{AtomListSlider:t,AtomListSliderItem:n},setup(){return{}},template:`
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
    `})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => createListSlider()
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`Default`,`Centralized`]}))();export{m as Centralized,p as Default,h as __namedExportsOrder,d as default};