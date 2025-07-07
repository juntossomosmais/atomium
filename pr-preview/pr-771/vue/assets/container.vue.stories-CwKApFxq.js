import{P as p}from"./index-RhM5Kf0-.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-ypJoz2hp.js";const m={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Container is a component that wraps content in application using a max-width and padding to define the width of the content."}}},argTypes:{hasPadding:{control:"boolean",defaultValue:{summary:!0},description:"If false the container will not have padding"}}},u={title:"Components/Container",...m},c=e=>({components:{AtomContainer:p},setup(){return{args:e}},template:`
    <AtomContainer class="wrapper" hasPadding="${e.hasPadding}">
      <h1 class="title">Container Title</h1>
      <p class="text">
        This is a sample content inside the container to demonstrate its behavior
        and appearance with and without padding. Adjust the controls to see how it
        changes.
      </p>
    </AtomContainer>
  `}),a={render:e=>c(e),args:{hasPadding:!0}},t={render:e=>c(e),args:{hasPadding:!1}};var n,r,o;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: true
  }
}`,...(o=(r=a.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var s,i,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createContainer(args),
  args: {
    hasPadding: false
  }
}`,...(d=(i=t.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};const f=["Default","NoPadding"];export{a as Default,t as NoPadding,f as __namedExportsOrder,u as default};
