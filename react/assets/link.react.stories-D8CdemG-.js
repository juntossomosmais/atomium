import{j as r}from"./iframe-2btVzJSD.js";import{x as n,u as g}from"./index-BZN0_ThS.js";import"./preload-helper-PPVm8Dsz.js";const p={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"secondary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:"select",options:["small","medium","large"],defaultValue:{summary:"medium"},description:"The link typhography size."}}},c=JSON.parse(JSON.stringify(p));c.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";c.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const l=JSON.parse(JSON.stringify(p));l.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";l.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const d=({children:e})=>r.jsx(r.Fragment,{children:e}),L={title:"Components/Link",component:n,...c},m=(e,u="It should be used inside Link (Next) component")=>r.jsx(d,{children:r.jsx("a",{children:r.jsx(n,{color:e.color,type:e.type,children:u})})}),o={render:e=>m(e),args:{type:"anchor",color:"primary",loading:!1}},t={render:e=>m(e),args:{...o.args,color:"secondary"}},a={render:e=>r.jsx(d,{children:r.jsx("a",{children:r.jsx(n,{color:e.color,type:e.type,loading:!0,children:"Loading..."})})}),args:{...o.args}},s={render:e=>r.jsx(d,{children:r.jsx("a",{children:r.jsxs(n,{color:e.color,type:e.type,children:["Nice example with icon",r.jsx(g,{icon:"heart",color:"primary"})]})})}),args:{...o.args}},i={render:e=>r.jsx(n,{color:e.color,type:e.type,children:"It is a button! and can be used to trigger user actions"}),args:{...o.args,type:"button"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <AtomLink color={args.color} type={args.type}>
      It is a button! and can be used to trigger user actions
    </AtomLink>,
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,...i.parameters?.docs?.source}}};const f=["Primary","Secondary","Loading","WithIcon","Button"];export{i as Button,a as Loading,o as Primary,t as Secondary,s as WithIcon,f as __namedExportsOrder,L as default};
