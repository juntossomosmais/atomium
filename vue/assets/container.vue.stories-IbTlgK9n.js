import{ai as r}from"./iframe-BWC7Cn59.js";import"./preload-helper-PPVm8Dsz.js";const o={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Container is a component that wraps content in application using a max-width and padding to define the width of the content."}}},argTypes:{hasPadding:{control:"boolean",defaultValue:{summary:!0},description:"If false the container will not have padding"}}},d={title:"Components/Container",...o},n=e=>({components:{AtomContainer:r},setup(){return{args:e}},template:`
    <AtomContainer class="wrapper" hasPadding="${e.hasPadding}">
      <h1 class="title">Container Title</h1>
      <p class="text">
        This is a sample content inside the container to demonstrate its behavior
        and appearance with and without padding. Adjust the controls to see how it
        changes.
      </p>
    </AtomContainer>
  `}),a={render:e=>n(e),args:{hasPadding:!0}},t={render:e=>n(e),args:{hasPadding:!1}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: false
  }
}`,...t.parameters?.docs?.source}}};const c=["Default","NoPadding"];export{a as Default,t as NoPadding,c as __namedExportsOrder,d as default};
