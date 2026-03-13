import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{i as n,y as r}from"./esm-BiOou3EM.js";import{t as i}from"./table-jqz5s6A8.js";import{t as a}from"./decorator-Ce3Kjdma.js";e();var o={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[a],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:i.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:i.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:i.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:i.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:i.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:i.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:i.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:i.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:i.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:i.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:i.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:i.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:i.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:i.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:i.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:i.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:i.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:i.PROPERTIES}}}},s={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},c=t(),l={title:`Components/Modal`,component:r,...o},u=e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(n,{id:e.trigger,children:`Open Modal`}),(0,c.jsxs)(r,{alertType:e.alertType,hasDivider:e.hasDivider,primaryButtonText:e.primaryButtonText,secondaryButtonText:e.secondaryButtonText,trigger:e.trigger,progress:e.progress,disablePrimaryButton:e.disablePrimaryButton,disableSecondaryButton:e.disableSecondaryButton,isOpen:e.isOpen,canDismiss:e.canDismiss,id:e.id,metaData:e.metaData||{},children:[(0,c.jsx)(`div`,{slot:`header`,children:`Custom Header`}),(0,c.jsx)(`p`,{children:`Modal Content`})]})]}),d={render:e=>u(e),args:{...s,trigger:`open-modal`}},f={render:e=>u(e),args:{...s,hasDivider:!0,trigger:`open-modal-2`}},p={render:e=>u(e),args:{...s,progress:.5,trigger:`open-modal-3`}},m={render:e=>u(e),args:{...s,alertType:`alert`,trigger:`open-modal-4`}},h={render:e=>u(e),args:{...s,alertType:`error`,trigger:`open-modal-5`}},g={render:e=>u(e),args:{...s,headerTitle:`Title`,trigger:`open-modal-6`}},_={render:e=>u(e),args:{...s,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-7`}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`];export{m as Alert,_ as AutomatedTest,d as Default,f as Divided,h as ErrorModal,g as HeaderTitle,p as Progress,v as __namedExportsOrder,l as default};