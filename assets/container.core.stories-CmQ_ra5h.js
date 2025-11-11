import{N as n}from"./iframe-Cu97PxhQ.js";import"./preload-helper-PPVm8Dsz.js";const a={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Container is a component that wraps content in application using a max-width and padding to define the width of the content."}}},argTypes:{hasPadding:{control:"boolean",defaultValue:{summary:!0},description:"If false the container will not have padding"}}},o={hasPadding:!0},c={title:"Components/Container",...a},r=e=>n`
    <atom-container class="wrapper" has-padding="${e.hasPadding}">
      <section>
        <h1 class="title">Container Title</h1>
        <p class="text">
          This is a sample content inside the container to demonstrate its
          behavior and appearance with and without padding. Adjust the controls
          to see how it changes.
        </p>
      </section>
    </atom-container>
  `,t={render:e=>r(e),args:{...o}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    ...ContainerComponentArgs
  }
}`,...t.parameters?.docs?.source}}};const d=["Default"];export{t as Default,d as __namedExportsOrder,c as default};
