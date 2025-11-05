import{x as o,u}from"./index-Dcgwn9tW.js";import"./iframe-Ao1sNE2_.js";import"./preload-helper-PPVm8Dsz.js";const d={parameters:{actions:{handles:[]},docs:{description:{component:"atom-link components are link children styled components. They are used to navigate to different pages (when used inside router components, such as router-link(Vue) and Link(Next)) or used to trigger user actions."}}},argTypes:{color:{control:"select",options:["primary","secondary"],defaultValue:{summary:"secondary"},description:"The link color."},type:{control:"select",options:["anchor","button"],defaultValue:{summary:"anchor"},description:"The atom-link type. Use anchor for navigation (combined with router-link or Link) and button for user actions."},loading:{control:"boolean",defaultValue:!1,description:"If `true`, the opacity of the link is reduced."},size:{control:"select",options:["small","medium","large"],defaultValue:{summary:"medium"},description:"The link typhography size."}}},i=JSON.parse(JSON.stringify(d));i.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside Link(Next)) or used to trigger user actions.<br/><br/> OBS: Link (Next) component does not render a anchor tag by default, so you need to wrap it with a tag for semantic reasons. You can create a wrapper component on your project to do this.";i.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with Link) and button for user actions.";const p=JSON.parse(JSON.stringify(d));p.parameters.docs.description.component="atom-link components are link children styled components. They are used to navigate to different pages (when used inside router-link or NuxtLink or used to trigger user actions.";p.argTypes.type.description="The atom-link type. Use anchor for navigation (combined with router-link or NuxtLink) and button for user actions.";const c=({children:e})=>h(React.Fragment,null,e),L={title:"Components/Link",component:o,...i},l=(e,m="It should be used inside Link (Next) component")=>h(c,null,h("a",null,h(o,{color:e.color,type:e.type},m))),r={render:e=>l(e),args:{type:"anchor",color:"primary",loading:!1}},n={render:e=>l(e),args:{...r.args,color:"secondary"}},t={render:e=>h(c,null,h("a",null,h(o,{color:e.color,type:e.type,loading:!0},"Loading..."))),args:{...r.args}},a={render:e=>h(c,null,h("a",null,h(o,{color:e.color,type:e.type},"Nice example with icon",h(u,{icon:"heart",color:"primary"})))),args:{...r.args}},s={render:e=>h(o,{color:e.color,type:e.type},"It is a button! and can be used to trigger user actions"),args:{...r.args,type:"button"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    type: 'anchor',
    color: 'primary',
    loading: false
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createLink(args),
  args: {
    ...Primary.args,
    color: 'secondary'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <AtomLink color={args.color} type={args.type}>
      It is a button! and can be used to trigger user actions
    </AtomLink>,
  args: {
    ...Primary.args,
    type: 'button'
  }
}`,...s.parameters?.docs?.source}}};const f=["Primary","Secondary","Loading","WithIcon","Button"];export{s as Button,t as Loading,r as Primary,n as Secondary,a as WithIcon,f as __namedExportsOrder,L as default};
