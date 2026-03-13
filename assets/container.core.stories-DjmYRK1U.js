import{H as e}from"./storybook-CfikGCXO.js";var t={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Container is a component that wraps content in application using a max-width and padding to define the width of the content.`}}},argTypes:{hasPadding:{control:`boolean`,defaultValue:{summary:!0},description:`If false the container will not have padding`}}},n={hasPadding:!0},r={title:`Components/Container`,...t},i=t=>e`
    <atom-container class="wrapper" has-padding="${t.hasPadding}">
      <section>
        <h1 class="title">Container Title</h1>
        <p class="text">
          This is a sample content inside the container to demonstrate its
          behavior and appearance with and without padding. Adjust the controls
          to see how it changes.
        </p>
      </section>
    </atom-container>
  `,a={render:e=>i(e),args:{...n}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    ...ContainerComponentArgs
  }
}`,...a.parameters?.docs?.source}}};var o=[`Default`];export{a as Default,o as __namedExportsOrder,r as default};