import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./decorator-DapEhatt.js";var r={title:`Components/List Slider`,parameters:{docs:{description:{component:`List Slider is a component that displays a list of items in a horizontal slider.`}},actions:{handles:[`clickNext`,`clickPrev`]}},decorators:[n],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:t.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},step:{description:`Number of items to advance or go back when navigating.`,defaultValue:{summary:1},control:{type:`number`},table:{category:t.PROPERTIES}},"--slider-height":{description:`The min-height of the slider.`,defaultValue:{summary:`42px`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:`Gap between each item in the slider.`,defaultValue:{summary:`--spacing-base`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:t.CSS_CUSTOM_PROPERTIES}},clickNext:{action:`clickNext`,description:`Emitted when the next button is clicked. The event detail is the click event.`,table:{category:t.EVENTS}},clickPrev:{action:`clickPrev`,description:`Emitted when the previous button is clicked. The event detail is the click event.`,table:{category:t.EVENTS}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:t.EVENTS}}}},i=t=>e`
    <atom-list-slider step="${t.step}">
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
  `,a={render:e=>i(e)},o={render:()=>e`
    <atom-list-slider centralized="true">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createListSlider(args)
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};var s=[`Default`,`Centralized`];export{o as Centralized,a as Default,s as __namedExportsOrder,r as default};