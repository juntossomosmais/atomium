import{q as I,l as k}from"./index-B-FxYi2Q.js";import{C as r}from"./table-D060eKuu.js";import{M as w}from"./DocumentationWithoutStories-DzGwFXJM.js";import{w as x}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-CsSqwVd_.js";import"../sb-preview/runtime.js";import"./jsx-runtime-B7DlegB3.js";import"./index-Crg2u0Y9.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-DfpZBHbL.js";import"./preview-errors-B42RpLod.js";const A={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."},page:w}},decorators:[x],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:r.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:r.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:r.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:r.PROPERTIES}},primaryText:{control:"text",description:"Text of the primary button",table:{category:r.PROPERTIES}},secondaryText:{control:"text",description:"Text of the secondary button",table:{category:r.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:r.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:r.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:r.PROPERTIES},defaultValue:!1},disableSecondary:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:r.PROPERTIES}},disablePrimary:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:r.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:r.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:r.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:r.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:r.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:r.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:r.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:r.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:r.CSS_CUSTOM_PROPERTIES}}}},t={primaryText:"Primary",secondaryText:"Secondary",hasDivider:!1,disableSecondary:!1,disablePrimary:!1,isOpen:!1},G={title:"Components/Modal",...A},o=(e,O="light")=>({components:{AtomModal:I,AtomButton:k},setup(){return{args:e,themeColor:O}},template:`
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
        is-open="${e.isOpen}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),a={render:e=>o(e),args:{...t}},s={render:e=>o(e),args:{...t,hasDivider:!0}},n={render:e=>o(e),args:{...t,progress:.5}},i={render:e=>o(e),args:{...t,alertType:"alert"}},d={render:e=>o(e),args:{...t,alertType:"error"}},l={render:e=>o(e),args:{...t,headerTitle:"Title"}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var y,b,T;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5
  }
}`,...(T=(b=n.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var f,E,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert'
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var P,v,C;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error'
  }
}`,...(C=(v=d.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var M,R,D;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title'
  }
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const J=["Default","Divided","Progress","Alert","Error","HeaderTitle"];export{i as Alert,a as Default,s as Divided,d as Error,l as HeaderTitle,n as Progress,J as __namedExportsOrder,G as default};
