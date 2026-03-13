import"./react-BeYaFARg.js";import{t as e}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index-BIuA1NfB-Jxohl6WW.js";import{h as t,p as n}from"./esm-AmgW3jIi.js";var r={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},i=JSON.parse(JSON.stringify(r));i.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,i.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`;var a=JSON.parse(JSON.stringify(r));a.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,a.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`;var o=e(),s=({children:e})=>(0,o.jsx)(o.Fragment,{children:e}),c={title:`Components/Link`,component:t,...i},l=(e,n=`It should be used inside Link (Next) component`)=>(0,o.jsx)(s,{children:(0,o.jsx)(`a`,{children:(0,o.jsx)(t,{color:e.color,type:e.type,children:n})})}),u={render:e=>l(e),args:{type:`anchor`,color:`primary`,loading:!1}},d={render:e=>l(e),args:{...u.args,color:`secondary`}},f={render:e=>(0,o.jsx)(s,{children:(0,o.jsx)(`a`,{children:(0,o.jsx)(t,{color:e.color,type:e.type,loading:!0,children:`Loading...`})})}),args:{...u.args}},p={render:e=>(0,o.jsx)(s,{children:(0,o.jsx)(`a`,{children:(0,o.jsxs)(t,{color:e.color,type:e.type,children:[`Nice example with icon`,(0,o.jsx)(n,{icon:`heart`,color:`primary`})]})})}),args:{...u.args}},m={render:e=>(0,o.jsx)(t,{color:e.color,type:e.type,children:`It is a button! and can be used to trigger user actions`}),args:{...u.args,type:`button`}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <Link>
      <a>
        <AtomLink color={args.color} type={args.type} loading>
          Loading...
        </AtomLink>
      </a>
    </Link>,
  args: {
    ...Primary.args
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Link>
      <a>
        <AtomLink color={args.color} type={args.type}>
          Nice example with icon
          <AtomIcon icon='heart' color='primary' />
        </AtomLink>
      </a>
    </Link>,
  args: {
    ...Primary.args
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <AtomLink color={args.color} type={args.type}>
      It is a button! and can be used to trigger user actions
    </AtomLink>,
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,...m.parameters?.docs?.source}}};var h=[`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`];export{m as Button,f as Loading,u as Primary,d as Secondary,p as WithIcon,h as __namedExportsOrder,c as default};