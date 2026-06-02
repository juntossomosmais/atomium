import{i as e}from"./preload-helper-xPQekRTU.js";import{O as t,t as n}from"./iframe-DOQph_gQ.js";var r,i=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Container is a component that wraps content in application using a max-width and padding to define the width of the content.`}}},argTypes:{hasPadding:{control:`boolean`,defaultValue:{summary:!0},description:`If false the container will not have padding`}}}})),a=e((()=>{})),o,s,c,l,u;e((()=>{n(),i(),a(),o={title:`Components/Container`,...r},s=e=>({components:{AtomContainer:t},setup(){return{args:e}},template:`
    <AtomContainer class="wrapper" hasPadding="${e.hasPadding}">
      <h1 class="title">Container Title</h1>
      <p class="text">
        This is a sample content inside the container to demonstrate its behavior
        and appearance with and without padding. Adjust the controls to see how it
        changes.
      </p>
    </AtomContainer>
  `}),c={render:e=>s(e),args:{hasPadding:!0}},l={render:e=>s(e),args:{hasPadding:!1}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: true
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: false
  }
}`,...l.parameters?.docs?.source}}},u=[`Default`,`NoPadding`]}))();export{c as Default,l as NoPadding,u as __namedExportsOrder,o as default};