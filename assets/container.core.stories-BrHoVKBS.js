import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-AbPZ34TI.js";var r,i,a=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Container is a component that wraps content in application using a max-width and padding to define the width of the content.`}}},argTypes:{hasPadding:{control:`boolean`,defaultValue:{summary:!0},description:`If false the container will not have padding`}}},i={hasPadding:!0}})),o=e((()=>{})),s,c,l,u;e((()=>{t(),a(),o(),s={title:`Components/Container`,...r},c=e=>n`
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
  `,l={render:e=>c(e),args:{...i}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    ...ContainerComponentArgs
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`]}))();export{l as Default,u as __namedExportsOrder,s as default};