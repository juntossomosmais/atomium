import{E as O,l as I}from"./index-6Hh7SzVV.js";import{C as r}from"./table-D060eKuu.js";import{j as t}from"./jsx-runtime-ChUqBar0.js";import{M as j,T as $,D as V,P as _,C as N}from"./index-DvLjz5Jd.js";import{u as w}from"./index-D9yXCJ6g.js";import{w as B}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-Bw3PPIKl.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./preview-errors-B42RpLod.js";function p(e){const o=Object.assign({h3:"h3"},w(),e.components);return t.jsxs(t.Fragment,{children:[t.jsx(j,{isTemplate:!0}),`
`,t.jsx($,{}),`
`,t.jsx(V,{}),`
`,t.jsx(_,{}),`
`,t.jsx(o.h3,{id:"props",children:"Props"}),`
`,t.jsx(N,{})]})}function L(e={}){const{wrapper:o}=Object.assign({},w(),e.components);return o?t.jsx(o,Object.assign({},e,{children:t.jsx(p,e)})):p(e)}const X={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."},page:L}},decorators:[B],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:r.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:r.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:r.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:r.PROPERTIES}},primaryText:{control:"text",description:"Text of the primary button",table:{category:r.PROPERTIES}},secondaryText:{control:"text",description:"Text of the secondary button",table:{category:r.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:r.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:r.PROPERTIES}},disableSecondary:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:r.PROPERTIES}},disablePrimary:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:r.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:r.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve ion-modal custom component as a param.",table:{category:r.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve ion-modal custom component as a param.",table:{category:r.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:r.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:r.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:r.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:r.SLOTS}}}},a={primaryText:"Primary",secondaryText:"Secondary",hasDivider:!1,disableSecondary:!1,disablePrimary:!1},re={title:"Components/Button",...X},s=(e,o="light")=>({components:{AtomModal:O,AtomButton:I},setup(){return{args:e,themeColor:o}},template:`
    <div>
      <AtomButton id='open-modal'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${e.alertType}"
        has-divider="${e.hasDivider}"
        primary-text="${e.primaryText}"
        secondary-text="${e.secondaryText}"
        trigger="open-modal"
        progress="${e.progress}"
        disable-primary="${e.disablePrimary}"
        disable-secondary="${e.disableSecondary}"
      >
        {{ args.label }}
      </AtomModal>
    </div>
  `}),n={render:e=>s(e),args:{...a}},i={render:e=>s(e),args:{...a,hasDivider:!0}},c={render:e=>s(e),args:{...a,progress:.5}},d={render:e=>s(e),args:{...a,alertType:"alert"}},l={render:e=>s(e),args:{...a,alertType:"error"}},m={render:e=>s(e),args:{...a,headerTitle:"Title"}};var g,h,u;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(u=(h=n.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,b,T;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true
  }
}`,...(T=(b=i.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,E,P;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5
  }
}`,...(P=(E=c.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var S,v,C;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert'
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var x,D,M;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error'
  }
}`,...(M=(D=l.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var R,k,A;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title'
  }
}`,...(A=(k=m.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const te=["Default","Divided","Progress","Alert","Error","HeaderTitle"];export{d as Alert,n as Default,i as Divided,l as Error,m as HeaderTitle,c as Progress,te as __namedExportsOrder,re as default};
