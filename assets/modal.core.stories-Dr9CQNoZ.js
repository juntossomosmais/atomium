import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-Dh_ljuHc.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-OmfoF_yh.js";import{n as s,t as c}from"./taggedTemplateLiteral-DJvUgAmF.js";var l,u,d=e((()=>{r(),o(),l={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[a],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:i.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:i.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:i.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:i.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:i.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:i.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:i.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:i.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:i.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:i.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:i.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:i.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:i.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:i.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:i.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:i.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:i.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:i.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:i.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:i.PROPERTIES}}}},u={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0}})),f,p,m,h,g,_,v,y,b,x,S;e((()=>{t(),d(),s(),p={title:`Components/Modal`,...l},m=e=>n(f||=c([`
    <div>
      <atom-button id="`,`">open modal</atom-button>
      <atom-modal
        alert-type="`,`"
        has-divider="`,`"
        primary-button-text="`,`"
        secondary-button-text="`,`"
        trigger=`,`
        progress="`,`"
        has-footer="`,`"
        header-title="`,`"
        disable-secondary-button="`,`"
        disable-primary-button="`,`"
        is-open="`,`"
        id="`,`"
        can-dismiss="`,`"
      >
        <div slot="header">Custom Header</div>
        <p>Modal Content</p>
      </<atom-modal>
    </div>

     <script>
     ;(function () {
      // for automated test section
      const modal = document.querySelector('#automated-test-modal')

      if(modal) {
        modal.metaData = `,`
      }

      })()
      <\/script>
  `]),e.trigger,e.alertType,e.hasDivider,e.primaryButtonText,e.secondaryButtonText,e.trigger,e.progress,e.hasFooter,e.headerTitle,e.disableSecondaryButton,e.disablePrimaryButton,e.isOpen,e.id,e.canDismiss,JSON.stringify(e.metaData||{})),h={render:e=>m(e),args:{...u,trigger:`open-modal`}},g={render:e=>m(e),args:{...u,hasDivider:!0,trigger:`open-modal-1`}},_={render:e=>m(e),args:{...u,progress:.5,trigger:`open-modal-2`}},v={render:e=>m(e),args:{...u,alertType:`alert`,trigger:`open-modal-3`}},y={render:e=>m(e),args:{...u,alertType:`error`,trigger:`open-modal-4`}},b={render:e=>m(e),args:{...u,headerTitle:`Title`,trigger:`open-modal-5`}},x={render:e=>m(e),args:{...u,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-6`,id:`automated-test-modal`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-1'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-2'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-3'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-4'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-5'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn'
    },
    trigger: 'open-modal-6',
    id: 'automated-test-modal'
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`]}))();export{v as Alert,x as AutomatedTest,h as Default,g as Divided,y as ErrorModal,b as HeaderTitle,_ as Progress,S as __namedExportsOrder,p as default};