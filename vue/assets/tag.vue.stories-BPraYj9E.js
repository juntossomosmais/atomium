import{U as e}from"./iframe-DHKEqBzE.js";var t={title:`Components/Tag`,decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. 
 
 Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities.`}}},argTypes:{color:{control:`select`,options:[`success`,`warning`,`danger`,`neutral`,`dark`,`light`],defaultValue:{summary:`success`},description:`The type of the tag, the component will receive the color according to its type.`},icon:{control:`text`,description:`The name of the icon to use.`},label:{control:`text`,description:`The label of the tag`},customBackgroundColor:{control:`text`,description:`The background color`},customTextColor:{control:`text`,description:`The text and icon (if exists) color`}}},n=t=>({components:{AtomTag:e},setup(){return{args:t}},template:`
    <AtomTag
      icon="${t.icon}"
      customBackgroundColor="${t.customBackgroundColor}"
      customTextColor="${t.customTextColor}"
      color="${t.color}"
    >
      {{ args.label }}
    </AtomTag>
  `}),r={render:e=>n(e),args:{color:`success`,label:`Promotion`,icon:``}},i={render:e=>n(e),args:{color:`success`,label:`Promotion`,icon:`tag`}},a={render:e=>n(e),args:{color:`danger`,label:`Canceled`,icon:``}},o={render:e=>n(e),args:{color:`danger`,label:`Canceled`,icon:`close-circle-outline`}},s={render:e=>n(e),args:{color:`warning`,label:`In Progress`,icon:``}},c={render:e=>n(e),args:{color:`warning`,label:`In Progress`,icon:`timer-outline`}},l={render:e=>n(e),args:{color:`info`,label:`Partial Delivery`,icon:``}},u={render:e=>n(e),args:{color:`info`,label:`Partial Delivery`,icon:`truck`}},d={render:e=>n(e),args:{color:`dark`,label:`Most rescued`,icon:``}},f={render:e=>n(e),args:{color:`dark`,label:`Most rescued`,icon:`wallet-giftcard`}},p={render:e=>n(e),args:{color:`light`,label:`More Points`,icon:``}},m={render:e=>n(e),args:{color:`light`,label:`More Points`,icon:`plus-thick`}},h={render:e=>n(e),args:{label:`Most Loved`,icon:`heart`,customBackgroundColor:`#a006fa`,customTextColor:`#00ff95`}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: ''
  }
}`,...r.parameters?.docs?.source}}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag'
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: ''
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: ''
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: ''
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: 'truck'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: ''
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: ''
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95'
  }
}`,...h.parameters?.docs?.source}}};var g=[`Success`,`SuccessWithIcon`,`Danger`,`DangerWithIcon`,`Warning`,`WarningWithIcon`,`Info`,`InfoWithIcon`,`Dark`,`DarkWithIcon`,`Light`,`LightWithIcon`,`CustomColor`];export{h as CustomColor,a as Danger,o as DangerWithIcon,d as Dark,f as DarkWithIcon,l as Info,u as InfoWithIcon,p as Light,m as LightWithIcon,r as Success,i as SuccessWithIcon,s as Warning,c as WarningWithIcon,g as __namedExportsOrder,t as default};