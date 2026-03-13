import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./decorator-DapEhatt.js";import{t as r}from"./taggedTemplateLiteral-D9Q4odv2.js";var i={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomPrimaryClick`,`atomSecondaryClick`]},docs:{description:{component:`Wrapper of Ionic Modal component. Read the [Ionic documentation](https://ionicframework.com/docs/api/modal) for more information about the available properties and possibilities.`}}},decorators:[n],argTypes:{trigger:{description:`The id of the element that will trigger the modal`,table:{category:t.PROPERTIES}},id:{control:`text`,description:`The id of the modal`,table:{category:t.PROPERTIES}},hasDivider:{control:`boolean`,description:`if true, a divider will be added on the header and footer`,defaultValue:!1,table:{category:t.PROPERTIES}},hasFooter:{control:`boolean`,description:`If false, the footer will not be rendered. Default is true`,table:{category:t.PROPERTIES}},headerTitle:{control:`text`,description:`The title of the modal`,table:{category:t.PROPERTIES}},primaryButtonText:{control:`text`,description:`Text of the primary button`,table:{category:t.PROPERTIES}},secondaryButtonText:{control:`text`,description:`Text of the secondary button`,table:{category:t.PROPERTIES}},alertType:{control:`select`,options:[`alert`,`error`],description:`Type of alert icon. Available options: alert, error`,table:{category:t.PROPERTIES}},progress:{control:`number`,description:`Percentage of the progress bar's width`,table:{category:t.PROPERTIES}},isOpen:{control:`boolean`,description:`If true, the modal will be opened. Default is false`,table:{category:t.PROPERTIES},defaultValue:!1},disableSecondaryButton:{control:`boolean`,description:`If true, the secondary button will be disabled. Default is false`,table:{category:t.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`If true, the primary button will be disabled. Default is false`,table:{category:t.PROPERTIES}},canDismiss:{control:`boolean`,description:`If true, the modal can be dismissed by clicking outside the modal. Default is true`,table:{category:t.PROPERTIES}},atomCloseClick:{action:`atomCloseClick`,description:"Event emitted when the close button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Event emitted after the modal has dismissed. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Event emitted after the modal has presented. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomPrimaryClick:{action:`atomPrimaryClick`,description:"Event emitted when the primary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},atomSecondaryClick:{action:`atomSecondaryClick`,description:"Event emitted when the secondary button is clicked. The event callback recieve `ion-modal` custom component as a param.",table:{category:t.EVENTS}},default:{name:``,description:`The default slot is where the content of the modal will be rendered`,table:{category:t.SLOTS}},header:{name:`header`,description:`The header slot is where the custom header of the modal will be rendered. It is only rendered if the headerTitle property is not set`,table:{category:t.SLOTS}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:t.CSS_CUSTOM_PROPERTIES}},"--height":{description:`Height of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},"--max-height":{description:`Maximum height of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},"--max-width":{description:`Maximum width of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},"--min-height":{description:`Minimum height of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},"--min-width":{description:`Minimum width of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},"--width":{description:`Width of the modal.`,table:{category:t.CSS_CUSTOM_PROPERTIES}},present:{description:`Method to present the modal overlay after it has been created.`,table:{category:t.METHODS}},dismiss:{description:`Method to close the modal after it has been presented.`,table:{category:t.METHODS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:t.PROPERTIES}}}},a={primaryButtonText:`Primary`,secondaryButtonText:`Secondary`,hasDivider:!1,disableSecondaryButton:!1,disablePrimaryButton:!1,isOpen:!1,canDismiss:!0},o,s={title:`Components/Modal`,...i},c=t=>e(o||=r([`
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
  `]),t.trigger,t.alertType,t.hasDivider,t.primaryButtonText,t.secondaryButtonText,t.trigger,t.progress,t.hasFooter,t.headerTitle,t.disableSecondaryButton,t.disablePrimaryButton,t.isOpen,t.id,t.canDismiss,JSON.stringify(t.metaData||{})),l={render:e=>c(e),args:{...a,trigger:`open-modal`}},u={render:e=>c(e),args:{...a,hasDivider:!0,trigger:`open-modal-1`}},d={render:e=>c(e),args:{...a,progress:.5,trigger:`open-modal-2`}},f={render:e=>c(e),args:{...a,alertType:`alert`,trigger:`open-modal-3`}},p={render:e=>c(e),args:{...a,alertType:`error`,trigger:`open-modal-4`}},m={render:e=>c(e),args:{...a,headerTitle:`Title`,trigger:`open-modal-5`}},h={render:e=>c(e),args:{...a,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`open-modal-6`,id:`automated-test-modal`}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true,
    trigger: 'open-modal-1'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5,
    trigger: 'open-modal-2'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert',
    trigger: 'open-modal-3'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error',
    trigger: 'open-modal-4'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title',
    trigger: 'open-modal-5'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`Divided`,`Progress`,`Alert`,`ErrorModal`,`HeaderTitle`,`AutomatedTest`];export{f as Alert,h as AutomatedTest,l as Default,u as Divided,p as ErrorModal,m as HeaderTitle,d as Progress,g as __namedExportsOrder,s as default};