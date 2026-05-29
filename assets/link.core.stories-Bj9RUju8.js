import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-BGas7WAn.js";var r,i,a,o=e((()=>{r={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},i=JSON.parse(JSON.stringify(r)),i.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,i.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`,a=JSON.parse(JSON.stringify(r)),a.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,a.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`})),s,c,l,u,d,f,p,m,h,g;e((()=>{t(),o(),s={title:`Components/Link`,...r},c=(e,t=`It should be used inside router components`)=>n`
    <a href="/nice-example">
      <atom-link
        type="${e.type}"
        color="${e.color}"
        loading="${e.loading}"
        size="${e.size}"
      >
        ${t}
      </atom-link>
    </a>
  `,l={render:e=>c(e),args:{type:`anchor`,color:`secondary`,size:`medium`,loading:!1}},u={render:e=>c(e),args:{type:`anchor`,color:`primary`,size:`medium`,loading:!1}},d={render:e=>c(e),args:{...u.args,color:`secondary`}},f={render:e=>n`
    <a href="/nice-example">
      <atom-link type="${e.type}" color="${e.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,args:{...l.args}},p={render:e=>n`
    <a href="/nice-example">
      <atom-link type="${e.type}" color="${e.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,args:{...l.args,color:`secondary`}},m={render:e=>n`
    <atom-link type="${e.type}" color="${e.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,args:{...l.args,type:`button`}},h={render:e=>n`
    <atom-link size="${e.size}" color="${e.color}">
      It is a large link, using large font size
    </atom-link>
  `,args:{...l.args,size:`large`}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'secondary',
    size: 'medium',
    loading: false
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    size: 'medium',
    loading: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link type="\${args.type}" color="\${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  \`,
  args: {
    ...Default.args,
    type: 'button'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link size="\${args.size}" color="\${args.color}">
      It is a large link, using large font size
    </atom-link>
  \`,
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`,`Size`]}))();export{m as Button,l as Default,f as Loading,u as Primary,d as Secondary,h as Size,p as WithIcon,g as __namedExportsOrder,s as default};