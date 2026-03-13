import{P as e}from"./iframe-D71TlG5e.js";var t={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},n=JSON.parse(JSON.stringify(t));n.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,n.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`;var r=JSON.parse(JSON.stringify(t));r.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,r.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`;var i={title:`Components/Link`,...t},a=(t,n=`It should be used inside router components`)=>e`
    <a href="/nice-example">
      <atom-link
        type="${t.type}"
        color="${t.color}"
        loading="${t.loading}"
        size="${t.size}"
      >
        ${n}
      </atom-link>
    </a>
  `,o={render:e=>a(e),args:{type:`anchor`,color:`secondary`,size:`medium`,loading:!1}},s={render:e=>a(e),args:{type:`anchor`,color:`primary`,size:`medium`,loading:!1}},c={render:e=>a(e),args:{...s.args,color:`secondary`}},l={render:t=>e`
    <a href="/nice-example">
      <atom-link type="${t.type}" color="${t.color}" loading>
        Loading...
      </atom-link>
    </a>
  `,args:{...o.args}},u={render:t=>e`
    <a href="/nice-example">
      <atom-link type="${t.type}" color="${t.color}">
        <span> Nice example with icon </span>
        <atom-icon icon="heart" />
      </atom-link>
    </a>
  `,args:{...o.args,color:`secondary`}},d={render:t=>e`
    <atom-link type="${t.type}" color="${t.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  `,args:{...o.args,type:`button`}},f={render:t=>e`
    <atom-link size="${t.size}" color="${t.color}">
      It is a large link, using large font size
    </atom-link>
  `,args:{...o.args,size:`large`}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'secondary',
    size: 'medium',
    loading: false
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    size: 'medium',
    loading: false
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link type="\${args.type}" color="\${args.color}">
      It is a button! and can be used to trigger user actions
    </atom-link>
  \`,
  args: {
    ...Default.args,
    type: 'button'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => html\`
    <atom-link size="\${args.size}" color="\${args.color}">
      It is a large link, using large font size
    </atom-link>
  \`,
  args: {
    ...Default.args,
    size: 'large'
  }
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`,`Size`];export{d as Button,o as Default,l as Loading,s as Primary,c as Secondary,f as Size,u as WithIcon,p as __namedExportsOrder,i as default};