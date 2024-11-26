import{p as I,q as k}from"./index-Dl-NxDoq.js";import{C as t}from"./table-D060eKuu.js";import{M as w}from"./DocumentationWithoutStories-_p2PQw9h.js";import{w as x}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-HaV7LZ5z.js";import"./iframe-0JJT1AOR.js";import"../sb-preview/runtime.js";import"./jsx-runtime-BleFxSyO.js";import"./index-DD0X7GiD.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-B6DPGDFZ.js";import"./preview-errors-B42RpLod.js";const A={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."},page:w}},decorators:[x],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:t.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:t.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:t.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:t.PROPERTIES}},primaryButtonText:{control:"text",description:"Text of the primary button",table:{category:t.PROPERTIES}},secondaryButtonText:{control:"text",description:"Text of the secondary button",table:{category:t.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:t.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:t.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:t.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:t.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:t.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:t.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:t.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},o={primaryButtonText:"Primary",secondaryButtonText:"Secondary",hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1},G={title:"Components/Modal",...A},r=(e,O="light")=>({components:{AtomModal:I,AtomButton:k},setup(){return{args:e,themeColor:O}},template:`
    <div>
      <AtomButton id='open-modal'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${e.alertType}"
        has-divider="${e.hasDivider}"
        primary-button-text="${e.primaryButtonText}"
        secondary-button-text="${e.secondaryButtonText}"
        trigger="open-modal"
        progress="${e.progress}"
        disable-primary-button="${e.disablePrimaryButton}"
        disable-secondary-button="${e.disableSecondaryButton}"
        is-open="${e.isOpen}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),a={render:e=>r(e),args:{...o}},n={render:e=>r(e),args:{...o,hasDivider:!0}},s={render:e=>r(e),args:{...o,progress:.5}},i={render:e=>r(e),args:{...o,alertType:"alert"}},d={render:e=>r(e),args:{...o,alertType:"error"}},l={render:e=>r(e),args:{...o,headerTitle:"Title"}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,y,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var f,E,S;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(D=(R=l.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};const J=["Default","Divided","Progress","Alert","Error","HeaderTitle"];export{i as Alert,a as Default,n as Divided,d as Error,l as HeaderTitle,s as Progress,J as __namedExportsOrder,G as default};
