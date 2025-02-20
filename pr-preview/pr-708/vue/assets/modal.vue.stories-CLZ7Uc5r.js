import{l as I,m as w}from"./index-DMIr1GWi.js";import"./index-LwuSNJVC.js";import{C as e}from"./table-D060eKuu.js";import{M as x}from"./DocumentationWithoutStories-Cu8DCj1d.js";import{w as k}from"./decorator-CCfbKlgz.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-C7v5Ov2Q.js";import"./index-D3YC7GI_.js";import"./index-qD9s0IOr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DkDiOc0H.js";import"./index-ogSvIofg.js";import"./index-BhldpUds.js";import"./v4-CtRu48qb.js";const A={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."},page:x}},decorators:[k],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:e.PROPERTIES}},id:{control:"text",description:"The id of the modal",table:{category:e.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:e.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:e.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:e.PROPERTIES}},primaryButtonText:{control:"text",description:"Text of the primary button",table:{category:e.PROPERTIES}},secondaryButtonText:{control:"text",description:"Text of the secondary button",table:{category:e.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:e.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:e.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:e.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:e.PROPERTIES}},canDismiss:{control:"boolean",description:"If true, the modal can be dismissed by clicking outside the modal. Default is true",table:{category:e.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:e.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:e.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--height":{description:"Height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:"Maximum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:"Maximum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:"Minimum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:"Minimum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--width":{description:"Width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},present:{description:"Method to present the modal overlay after it has been created.",table:{category:e.METHODS}},dismiss:{description:"Method to close the modal after it has been presented.",table:{category:e.METHODS}}}},o={primaryButtonText:"Primary",secondaryButtonText:"Secondary",hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},G={title:"Components/Modal",...A},r=(t,D="light")=>({components:{AtomModal:I,AtomButton:w},setup(){return{args:t,themeColor:D}},template:`
    <div>
      <AtomButton id='open-modal'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${t.alertType}"
        has-divider="${t.hasDivider}"
        primary-button-text="${t.primaryButtonText}"
        secondary-button-text="${t.secondaryButtonText}"
        trigger="open-modal"
        progress="${t.progress}"
        disable-primary-button="${t.disablePrimaryButton}"
        disable-secondary-button="${t.disableSecondaryButton}"
        is-open="${t.isOpen}"
        can-dismiss="${t.canDismiss}"
        id="${t.id}"
      >
        <div slot='header'>Custom Header</div>
        <p>Modal Content</p>
      </AtomModal>
    </div>
  `}),a={render:t=>r(t),args:{...o}},i={render:t=>r(t),args:{...o,hasDivider:!0}},s={render:t=>r(t),args:{...o,progress:.5}},n={render:t=>r(t),args:{...o,alertType:"alert"}},d={render:t=>r(t),args:{...o,alertType:"error"}},l={render:t=>r(t),args:{...o,headerTitle:"Title"}};var c,m,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true
  }
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,y,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var S,f,E;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert'
  }
}`,...(E=(f=n.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var P,M,R;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error'
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var C,O,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title'
  }
}`,...(v=(O=l.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};const J=["Default","Divided","Progress","Alert","ErrorModal","HeaderTitle"];export{n as Alert,a as Default,i as Divided,d as ErrorModal,l as HeaderTitle,s as Progress,J as __namedExportsOrder,G as default};
