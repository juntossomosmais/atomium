import{E as e}from"./iframe-Br9ztWDk.js";var t={title:`Components/Container`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Container is a component that wraps content in application using a max-width and padding to define the width of the content.`}}},argTypes:{hasPadding:{control:`boolean`,defaultValue:{summary:!0},description:`If false the container will not have padding`}}},n=t=>({components:{AtomContainer:e},setup(){return{args:t}},template:`
    <AtomContainer class="wrapper" hasPadding="${t.hasPadding}">
      <h1 class="title">Container Title</h1>
      <p class="text">
        This is a sample content inside the container to demonstrate its behavior
        and appearance with and without padding. Adjust the controls to see how it
        changes.
      </p>
    </AtomContainer>
  `}),r={render:e=>n(e),args:{hasPadding:!0}},i={render:e=>n(e),args:{hasPadding:!1}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: true
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: false
  }
}`,...i.parameters?.docs?.source}}};var a=[`Default`,`NoPadding`];export{r as Default,i as NoPadding,a as __namedExportsOrder,t as default};