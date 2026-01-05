import{N as n}from"./iframe-BElrKgc3.js";import"./preload-helper-PPVm8Dsz.js";const l={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"secondary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:"select",options:["small","medium","large"],defaultValue:{summary:"medium"},description:"The link typhography size."}}},p=JSON.parse(JSON.stringify(l));p.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";p.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const m=JSON.parse(JSON.stringify(l));m.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";m.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const k={title:"Components/Link",...l},d=(e,u="It should be used inside router components")=>n`
    <a href="/nice-example">
      <atom-link
        type="${e.type}"
        color="${e.color}"
        loading="${e.loading}"
        size="${e.size}"
      >
        ${u}
      </atom-link>
    </a>
  `,r={render:e=>d(e),args:{type:"anchor",color:"secondary",size:"medium",loading:!1}},o={render:e=>d(e),args:{type:"anchor",color:"primary",size:"medium",loading:!1}},a={render:e=>d(e),args:{...o.args,color:"secondary"}},t={render:e=>n`
    <a href="/nice-example">
      <atom-link type="${e.type}" color="${e.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,args:{...r.args}},s={render:e=>n`
    <a href="/nice-example">
      <atom-link type="${e.type}" color="${e.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,args:{...r.args,color:"secondary"}},i={render:e=>n`
    <atom-link type="${e.type}" color="${e.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,args:{...r.args,type:"button"}},c={render:e=>n`
    <atom-link size="${e.size}" color="${e.color}">
      It is a large link, using large font size
    </atom-link>
  `,args:{...r.args,size:"large"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'secondary',
    size: 'medium',
    loading: false
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    size: 'medium',
    loading: false
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <a href="/nice-example">
      <atom-link type="\${args.type}" color="\${args.color}" loading>
        Loading...
      </atom-link>
    </a>
  \`,
  args: {
    ...Default.args
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <a href="/nice-example">
      <atom-link type="\${args.type}" color="\${args.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  \`,
  args: {
    ...Default.args,
    color: 'secondary'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link type="\${args.type}" color="\${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  \`,
  args: {
    ...Default.args,
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link size="\${args.size}" color="\${args.color}">
      It is a large link, using large font size
    </atom-link>
  \`,
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","Primary","Secondary","Loading","WithIcon","Button","Size"];export{i as Button,r as Default,t as Loading,o as Primary,a as Secondary,c as Size,s as WithIcon,h as __namedExportsOrder,k as default};
