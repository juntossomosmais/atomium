import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-DZfjrrNX.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./decorator-CJKY9S-1.js";var s,c,l=e((()=>{r(),o(),s={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomNextStep`,`atomPreviousStep`,`atomCancel`,`atomFinish`]},docs:{description:{component:`A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).`}}},decorators:[a],argTypes:{trigger:{description:`The ID of the element that will trigger the modal.`,table:{category:i.PROPERTIES}},currentStep:{control:`number`,description:`The index of the step currently being displayed.`,defaultValue:{summary:0},table:{category:i.PROPERTIES}},stepsTitles:{control:`string`,description:`A string containing the titles of each step, separated by commas.`,table:{category:i.PROPERTIES}},isOpen:{control:`boolean`,description:`When true, the modal is displayed.`,defaultValue:{summary:!1},table:{category:i.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`This property is used to disable the primary button. When true the primary button wont be clickable.`,table:{category:i.PROPERTIES}},disableSecondaryButton:{control:`boolean`,description:`This property is used to disable the secondary button. When true the secondary button wont be clickable.`,table:{category:i.PROPERTIES}},steps:{control:`number`,description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:i.PROPERTIES}},closeOnFinish:{control:`boolean`,description:`When true, the modal will close automatically after the last step.`,defaultValue:{summary:!1},table:{category:i.PROPERTIES}},atomCancel:{action:`atomCancel`,description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomCloseClick:{action:`atomCloseClick`,description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomFinish:{action:`atomFinish`,description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomNextStep:{action:`atomNextStep`,description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomPreviousStep:{action:`atomPreviousStep`,description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},lockedInitialStep:{control:`number`,description:`Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.`,table:{category:i.PROPERTIES}},step_x:{name:`step-x`,description:`The slot where the content for each step will be rendered, with x as the step index.`,table:{category:i.SLOTS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:i.PROPERTIES}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:i.CSS_CUSTOM_PROPERTIES}}}},c={trigger:`open-modal-steps`,stepsTitles:`Step 1, Step 2, Step 3`,steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:`Continue, Continue, Finish`,secondaryButtonTextsByStep:`Close, Back, Back`,lockedInitialStep:1}})),u,d,f,p,m,h,g,_;e((()=>{t(),l(),u={title:`Components/Steps Modal`,...s},d=e=>n`
    <div>
      <atom-button id="${e.trigger}">Open Modal</atom-button>
      <atom-steps-modal
        steps="3"
        trigger="${e.trigger}"
        steps-titles="${e.stepsTitles}"
        current-step="${e.currentStep}"
        close-on-finish="${e.closeOnFinish}"
        primary-button-texts-by-step="${e.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${e.secondaryButtonTextsByStep}"
        is-open="${e.isOpen}"
        custom-initial-step="${e.customInitialStep}
        meta-data="${e.metaData}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </atom-steps-modal>
      <script>
    </div>
  `,f={render:e=>d(e),args:{...c,trigger:`open-modal-1`}},p={render:e=>d(e),args:{...c,currentStep:2,trigger:`open-modal-2`}},m={render:e=>d(e),args:{...c,customInitialStep:2,trigger:`open-modal-3`}},h={render:e=>d(e),args:{...c,closeOnFinish:!0,trigger:`open-modal-4`}},g={render:e=>d(e),args:{...c,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`automated-test-modal`}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    metaData: {
      primaryButtonTestId: 'primary-btn',
      secondaryButtonTestId: 'secondary-btn',
      closeButtonTestId: 'close-btn'
    },
    trigger: 'automated-test-modal'
  }
}`,...g.parameters?.docs?.source}}},_=[`Default`,`CurrentStepAlreadySet`,`CustomInitialStep`,`CloseOnFinish`,`ProvidingMetaData`]}))();export{h as CloseOnFinish,p as CurrentStepAlreadySet,m as CustomInitialStep,f as Default,g as ProvidingMetaData,_ as __namedExportsOrder,u as default};