import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-DzLKyHdf.js";import{a as r,b as i,t as a}from"./esm-BEOjjh0U.js";import{n as o,t as s}from"./table-CVkdcsHV.js";import{n as c,t as l}from"./decorator-C3U0UClq.js";var u,d,f=e((()=>{o(),l(),u={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[c],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:s.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:s.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:s.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:s.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:s.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:s.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:s.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:s.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:s.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:s.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:s.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:s.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:s.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:s.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:s.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:s.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:s.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:s.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:s.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:s.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:s.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:s.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:s.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:s.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:s.PROPERTIES}}}},d={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0}})),p,m,h,g,_,v,y,b,x,S,C;e((()=>{a(),n(),f(),p=t(),m={title:`Components/Modal`,component:i,...u},h=e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(r,{id:e.trigger,children:`Open Modal`}),(0,p.jsxs)(i,{alertType:e.alertType,hasDivider:e.hasDivider,primaryButtonText:e.primaryButtonText,secondaryButtonText:e.secondaryButtonText,trigger:e.trigger,progress:e.progress,disablePrimaryButton:e.disablePrimaryButton,disableSecondaryButton:e.disableSecondaryButton,isOpen:e.isOpen,canDismiss:e.canDismiss,id:e.id,metaData:e.metaData||{},children:[(0,p.jsx)(`div`,{slot:`header`,children:`Custom Header`}),(0,p.jsx)(`p`,{children:`Modal Content`})]})]}),g={render:e=>h(e),args:{...d,trigger:`open-modal`}},_={render:e=>h(e),args:{...d,hasDivider:!0,trigger:`open-modal-2`}},v={render:e=>h(e),args:{...d,progress:.5,trigger:`open-modal-3`}},y={render:e=>h(e),args:{...d,alertType:`alert`,trigger:`open-modal-4`}},b={render:e=>h(e),args:{...d,alertType:`error`,trigger:`open-modal-5`}},x={render:e=>h(e),args:{...d,headerTitle:`Title`,trigger:`open-modal-6`}},S={render:e=>h(e),args:{...d,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-7`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-2'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-3'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-4'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-5'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-6'
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`]}))();export{y as Alert,S as AutomatedTest,g as Default,_ as Divided,b as ErrorModal,x as HeaderTitle,v as Progress,C as __namedExportsOrder,m as default};