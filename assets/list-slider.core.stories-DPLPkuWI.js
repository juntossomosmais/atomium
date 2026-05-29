import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-BGas7WAn.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-CAdn4odz.js";var s=e((()=>{})),c,l=e((()=>{r(),o(),c={parameters:{docs:{description:{component:`List Slider is a component that displays a list of items in a horizontal slider.`}},actions:{handles:[`clickNext`,`clickPrev`]}},decorators:[a],argTypes:{hasNavigation:{description:"If `true`, the carousel will have navigation buttons.",defaultValue:{summary:!0},table:{category:i.PROPERTIES}},centralized:{description:"If `true`, the items will be centralized in the slider when do not fit in the viewport.",defaultValue:{summary:!1},table:{category:i.PROPERTIES}},step:{description:`Number of items to advance or go back when navigating.`,defaultValue:{summary:1},control:{type:`number`},table:{category:i.PROPERTIES}},"--slider-height":{description:`The min-height of the slider.`,defaultValue:{summary:`42px`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--slider-gap":{description:`Gap between each item in the slider.`,defaultValue:{summary:`--spacing-base`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--button-navigation-size":{description:`The size of the navigation buttons.`,defaultValue:{summary:`--spacing-xxxxlarge`},table:{category:i.CSS_CUSTOM_PROPERTIES}},clickNext:{action:`clickNext`,description:`Emitted when the next button is clicked. The event detail is the click event.`,table:{category:i.EVENTS}},clickPrev:{action:`clickPrev`,description:`Emitted when the previous button is clicked. The event detail is the click event.`,table:{category:i.EVENTS}},'CustomEvent("transitionend")':{description:`The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.`,table:{category:i.EVENTS}}}}})),u,d,f,p,m;e((()=>{t(),s(),l(),u={title:`Components/List Slider`,...c},d=e=>n`
    <atom-list-slider step="${e.step}">
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
  `,f={render:e=>d(e)},p={render:()=>n`
    <atom-list-slider centralized="true">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createListSlider(args)
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m=[`Default`,`Centralized`]}))();export{p as Centralized,f as Default,m as __namedExportsOrder,u as default};