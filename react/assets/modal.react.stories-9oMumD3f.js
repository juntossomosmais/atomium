import{j as a}from"./iframe-Xde5Z66N.js";import{z as p,C as g}from"./index-_rCUTZzq.js";import{C as e}from"./table-D060eKuu.js";import{w as h}from"./decorator-Bqm8FLi4.js";import"./preload-helper-PPVm8Dsz.js";const u={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomPrimaryClick","atomSecondaryClick"]},docs:{description:{component:"Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities."}}},decorators:[h],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:e.PROPERTIES}},id:{control:"text",description:"The id of the modal",table:{category:e.PROPERTIES}},hasDivider:{control:"boolean",description:"if true, a divider will be added on the header and footer",defaultValue:!1,table:{category:e.PROPERTIES}},hasFooter:{control:"boolean",description:"If false, the footer will not be rendered. Default is true",table:{category:e.PROPERTIES}},headerTitle:{control:"text",description:"The title of the modal",table:{category:e.PROPERTIES}},primaryButtonText:{control:"text",description:"Text of the primary button",table:{category:e.PROPERTIES}},secondaryButtonText:{control:"text",description:"Text of the secondary button",table:{category:e.PROPERTIES}},alertType:{control:"select",options:["alert","error"],description:"Type of alert icon. Available options: alert, error",table:{category:e.PROPERTIES}},progress:{control:"number",description:"Percentage of the progress bar's width",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be opened. Default is false",table:{category:e.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:"boolean",description:"If true, the secondary button will be disabled. Default is false",table:{category:e.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"If true, the primary button will be disabled. Default is false",table:{category:e.PROPERTIES}},canDismiss:{control:"boolean",description:"If true, the modal can be dismissed by clicking outside the modal. Default is true",table:{category:e.PROPERTIES}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomPrimaryClick:{action:"atomPrimaryClick",description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},atomSecondaryClick:{action:"atomSecondaryClick",description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:e.EVENTS}},default:{name:"",description:"The default slot is where the content of the modal will be rendered",table:{category:e.SLOTS}},header:{name:"header",description:"The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set",table:{category:e.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:e.CSS_CUSTOM_PROPERTIES}},"--height":{description:"Height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:"Maximum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:"Maximum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:"Minimum height of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:"Minimum width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},"--width":{description:"Width of the modal.",table:{category:e.CSS_CUSTOM_PROPERTIES}},present:{description:"Method to present the modal overlay after it has been created.",table:{category:e.METHODS}},dismiss:{description:"Method to close the modal after it has been presented.",table:{category:e.METHODS}},metaData:{control:"object",description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:e.PROPERTIES}}}},o={primaryButtonText:"Primary",secondaryButtonText:"Secondary",hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},f={title:"Components/Modal",component:p,...u},r=t=>a.jsxs("div",{children:[a.jsx(g,{id:t.trigger,children:"Open Modal"}),a.jsxs(p,{alertType:t.alertType,hasDivider:t.hasDivider,primaryButtonText:t.primaryButtonText,secondaryButtonText:t.secondaryButtonText,trigger:t.trigger,progress:t.progress,disablePrimaryButton:t.disablePrimaryButton,disableSecondaryButton:t.disableSecondaryButton,isOpen:t.isOpen,canDismiss:t.canDismiss,id:t.id,metaData:t.metaData||{},children:[a.jsx("div",{slot:"header",children:"Custom Header"}),a.jsx("p",{children:"Modal Content"})]})]}),n={render:t=>r(t),args:{...o,trigger:"open-modal"}},s={render:t=>r(t),args:{...o,hasDivider:!0,trigger:"open-modal-2"}},i={render:t=>r(t),args:{...o,progress:.5,trigger:"open-modal-3"}},d={render:t=>r(t),args:{...o,alertType:"alert",trigger:"open-modal-4"}},l={render:t=>r(t),args:{...o,alertType:"error",trigger:"open-modal-5"}},c={render:t=>r(t),args:{...o,headerTitle:"Title",trigger:"open-modal-6"}},m={render:t=>r(t),args:{...o,metaData:{primaryButtonTestId:"primary-btn",secondaryButtonTestId:"secondary-btn",closeButtonTestId:"close-btn"},trigger:"open-modal-7"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn'
    },
    trigger: 'open-modal-7'
  }
}`,...m.parameters?.docs?.source}}};const P=["Default","Divided","Progress","Alert","ErrorModal","HeaderTitle","AutomatedTest"];export{d as Alert,m as AutomatedTest,n as Default,s as Divided,l as ErrorModal,c as HeaderTitle,i as Progress,P as __namedExportsOrder,f as default};
