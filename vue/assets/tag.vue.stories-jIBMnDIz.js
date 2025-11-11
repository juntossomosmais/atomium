import{a7 as h}from"./iframe-BWC7Cn59.js";import"./preload-helper-PPVm8Dsz.js";const b={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Tags are non-interactive elements used to categorize, highlight or organize items in the interface. Because they have short keywords, they help in the quick recognition of a category or element. 
 
 Wrapper of Ionic Badge component. Read the [Ionic documentation](https://ionicframework.com/docs/api/badge) for more information about the available properties and possibilities.`}}},argTypes:{color:{control:"select",options:["success","warning","danger","neutral","dark","light"],defaultValue:{summary:"success"},description:"The type of the tag, the component will receive the color according to its type."},icon:{control:"text",description:"The name of the icon to use."},label:{control:"text",description:"The label of the tag"},customBackgroundColor:{control:"text",description:"The background color"},customTextColor:{control:"text",description:"The text and icon (if exists) color"}}},k={title:"Components/Tag",...b},e=r=>({components:{AtomTag:h},setup(){return{args:r}},template:`
    <AtomTag
      icon="${r.icon}"
      customBackgroundColor="${r.customBackgroundColor}"
      customTextColor="${r.customTextColor}"
      color="${r.color}"
    >
      {{ args.label }}
    </AtomTag>
  `}),o={render:r=>e(r),args:{color:"success",label:"Promotion",icon:""}},a={render:r=>e(r),args:{color:"success",label:"Promotion",icon:"tag"}},n={render:r=>e(r),args:{color:"danger",label:"Canceled",icon:""}},s={render:r=>e(r),args:{color:"danger",label:"Canceled",icon:"close-circle-outline"}},c={render:r=>e(r),args:{color:"warning",label:"In Progress",icon:""}},t={render:r=>e(r),args:{color:"warning",label:"In Progress",icon:"timer-outline"}},i={render:r=>e(r),args:{color:"info",label:"Partial Delivery",icon:""}},l={render:r=>e(r),args:{color:"info",label:"Partial Delivery",icon:"truck"}},g={render:r=>e(r),args:{color:"dark",label:"Most rescued",icon:""}},d={render:r=>e(r),args:{color:"dark",label:"Most rescued",icon:"wallet-giftcard"}},m={render:r=>e(r),args:{color:"light",label:"More Points",icon:""}},u={render:r=>e(r),args:{color:"light",label:"More Points",icon:"plus-thick"}},p={render:r=>e(r),args:{label:"Most Loved",icon:"heart",customBackgroundColor:"#a006fa",customTextColor:"#00ff95"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: ''
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'success',
    label: 'Promotion',
    icon: 'tag'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: ''
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'danger',
    label: 'Canceled',
    icon: 'close-circle-outline'
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: ''
  }
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'warning',
    label: 'In Progress',
    icon: 'timer-outline'
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: ''
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'info',
    label: 'Partial Delivery',
    icon: 'truck'
  }
}`,...l.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: ''
  }
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'dark',
    label: 'Most rescued',
    icon: 'wallet-giftcard'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: ''
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    color: 'light',
    label: 'More Points',
    icon: 'plus-thick'
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createTag(args),
  args: {
    label: 'Most Loved',
    icon: 'heart',
    customBackgroundColor: '#a006fa',
    customTextColor: '#00ff95'
  }
}`,...p.parameters?.docs?.source}}};const I=["Success","SuccessWithIcon","Danger","DangerWithIcon","Warning","WarningWithIcon","Info","InfoWithIcon","Dark","DarkWithIcon","Light","LightWithIcon","CustomColor"];export{p as CustomColor,n as Danger,s as DangerWithIcon,g as Dark,d as DarkWithIcon,i as Info,l as InfoWithIcon,m as Light,u as LightWithIcon,o as Success,a as SuccessWithIcon,c as Warning,t as WarningWithIcon,I as __namedExportsOrder,k as default};
