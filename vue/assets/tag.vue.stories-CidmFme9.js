import{i as e}from"./preload-helper-xPQekRTU.js";import{G as t,t as n}from"./iframe-CuGYy1kt.js";var r,i=e((()=>{r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. 
 
 Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities.`}}},argTypes:{color:{control:`select`,options:[`success`,`warning`,`danger`,`neutral`,`dark`,`light`],defaultValue:{summary:`success`},description:`The type of the tag, the component will receive the color according to its type.`},icon:{control:`text`,description:`The name of the icon to use.`},label:{control:`text`,description:`The label of the tag`},customBackgroundColor:{control:`text`,description:`The background color`},customTextColor:{control:`text`,description:`The text and icon (if exists) color`}}}})),a,o,s,c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{n(),i(),a={title:`Components/Tag`,...r},o=e=>({components:{AtomTag:t},setup(){return{args:e}},template:`
    <AtomTag
      icon="${e.icon}"
      customBackgroundColor="${e.customBackgroundColor}"
      customTextColor="${e.customTextColor}"
      color="${e.color}"
    >
      {{ args.label }}
    </AtomTag>
  `}),s={render:e=>o(e),args:{color:`success`,label:`Promotion`,icon:``}},c={render:e=>o(e),args:{color:`success`,label:`Promotion`,icon:`tag`}},l={render:e=>o(e),args:{color:`danger`,label:`Canceled`,icon:``}},u={render:e=>o(e),args:{color:`danger`,label:`Canceled`,icon:`close-circle-outline`}},d={render:e=>o(e),args:{color:`warning`,label:`In Progress`,icon:``}},f={render:e=>o(e),args:{color:`warning`,label:`In Progress`,icon:`timer-outline`}},p={render:e=>o(e),args:{color:`info`,label:`Partial Delivery`,icon:``}},m={render:e=>o(e),args:{color:`info`,label:`Partial Delivery`,icon:`truck`}},h={render:e=>o(e),args:{color:`dark`,label:`Most rescued`,icon:``}},g={render:e=>o(e),args:{color:`dark`,label:`Most rescued`,icon:`wallet-giftcard`}},_={render:e=>o(e),args:{color:`light`,label:`More Points`,icon:``}},v={render:e=>o(e),args:{color:`light`,label:`More Points`,icon:`plus-thick`}},y={render:e=>o(e),args:{label:`Most Loved`,icon:`heart`,customBackgroundColor:`#a006fa`,customTextColor:`#00ff95`}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: ''
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: ''
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: ''
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: 'truck'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: ''
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: ''
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95'
  }
}`,...y.parameters?.docs?.source}}},b=[`Success`,`SuccessWithIcon`,`Danger`,`DangerWithIcon`,`Warning`,`WarningWithIcon`,`Info`,`InfoWithIcon`,`Dark`,`DarkWithIcon`,`Light`,`LightWithIcon`,`CustomColor`]}))();export{y as CustomColor,l as Danger,u as DangerWithIcon,h as Dark,g as DarkWithIcon,p as Info,m as InfoWithIcon,_ as Light,v as LightWithIcon,s as Success,c as SuccessWithIcon,d as Warning,f as WarningWithIcon,b as __namedExportsOrder,a as default};