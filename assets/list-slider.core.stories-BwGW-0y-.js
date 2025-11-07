import{N as a}from"./iframe-Blq1RBz-.js";import{C as e}from"./table-D060eKuu.js";import{w as l}from"./decorator-CtnDteIu.js";import"./preload-helper-PPVm8Dsz.js";const r={parameters:{docs:{description:{component:"List Slider is a component that displays a list of items in a horizontal slider."}},actions:{handles:["clickNext","clickPrev"]}},decorators:[l],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:e.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},step:{description:"Number of items to advance or go back when navigating.",defaultValue:{summary:1},control:{type:"number"},table:{category:e.PROPERTIES}},"--slider-height":{description:"The min-height of the slider.",defaultValue:{summary:"42px"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:"Gap between each item in the slider.",defaultValue:{summary:"--spacing-base"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:"The size of the navigation buttons.",defaultValue:{summary:"--spacing-xxxxlarge"},table:{category:e.CSS_CUSTOM_PROPERTIES}},clickNext:{action:"clickNext",description:"Emitted when the next button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},clickPrev:{action:"clickPrev",description:"Emitted when the previous button is clicked. The event detail is the click event.",table:{category:e.EVENTS}},'CustomEvent("transitionend")':{description:"The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.",table:{category:e.EVENTS}}}},p={title:"Components/List Slider",...r},d=s=>a`
    <atom-list-slider step="${s.step}">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 3</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 4</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 5</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 6</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 7</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 8</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 9</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 10</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `,t={render:s=>d(s)},i={render:()=>a`
    <atom-list-slider centralized="true">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createListSlider(args)
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => html\`
    <atom-list-slider centralized="true">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
    </atom-list-slider>
  \`
}`,...i.parameters?.docs?.source}}};const v=["Default","Centralized"];export{i as Centralized,t as Default,v as __namedExportsOrder,p as default};
