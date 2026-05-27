import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t}from"./iframe-DzLKyHdf.js";import{g as n,m as r,t as i}from"./esm-BEOjjh0U.js";var a,o,s,c=e((()=>{a={parameters:{actions:{handles:[]},docs:{description:{component:`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions.`}}},argTypes:{color:{control:`select`,options:[`primary`,`secondary`],defaultValue:{summary:`secondary`},description:`The link color.`},type:{control:`select`,options:[`anchor`,`button`],defaultValue:{summary:`anchor`},description:`The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions.`},loading:{control:`boolean`,defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:`select`,options:[`small`,`medium`,`large`],defaultValue:{summary:`medium`},description:`The link typhography size.`}}},o=JSON.parse(JSON.stringify(a)),o.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.`,o.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.`,s=JSON.parse(JSON.stringify(a)),s.parameters.docs.description.component=`atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.`,s.argTypes.type.description=`The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.`})),l,u,d,f,p,m,h,g,_,v;e((()=>{i(),c(),l=t(),u=({children:e})=>(0,l.jsx)(l.Fragment,{children:e}),d={title:`Components/Link`,component:n,...o},f=(e,t=`It should be used inside Link (Next) component`)=>(0,l.jsx)(u,{children:(0,l.jsx)(`a`,{children:(0,l.jsx)(n,{color:e.color,type:e.type,children:t})})}),p={render:e=>f(e),args:{type:`anchor`,color:`primary`,loading:!1}},m={render:e=>f(e),args:{...p.args,color:`secondary`}},h={render:e=>(0,l.jsx)(u,{children:(0,l.jsx)(`a`,{children:(0,l.jsx)(n,{color:e.color,type:e.type,loading:!0,children:`Loading...`})})}),args:{...p.args}},g={render:e=>(0,l.jsx)(u,{children:(0,l.jsx)(`a`,{children:(0,l.jsxs)(n,{color:e.color,type:e.type,children:[`Nice example with icon`,(0,l.jsx)(r,{icon:`heart`,color:`primary`})]})})}),args:{...p.args}},_={render:e=>(0,l.jsx)(n,{color:e.color,type:e.type,children:`It is a button! and can be used to trigger user actions`}),args:{...p.args,type:`button`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => <AtomLink color={args.color} type={args.type}>
      It is a button! and can be used to trigger user actions
    </AtomLink>,
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,..._.parameters?.docs?.source}}},v=[`Primary`,`Secondary`,`Loading`,`WithIcon`,`Button`]}))();export{_ as Button,h as Loading,p as Primary,m as Secondary,g as WithIcon,v as __namedExportsOrder,d as default};