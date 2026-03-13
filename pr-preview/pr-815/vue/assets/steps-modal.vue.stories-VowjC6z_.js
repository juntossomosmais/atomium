import{H as e,x as t}from"./iframe-Br9ztWDk.js";import{t as n}from"./table-DZkiv1k4.js";import{t as r}from"./decorator-tF45y5qF.js";var i={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomNextStep`,`atomPreviousStep`,`atomCancel`,`atomFinish`]},docs:{description:{component:`A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).`}}},decorators:[r],argTypes:{trigger:{description:`The ID of the element that will trigger the modal.`,table:{category:n.PROPERTIES}},currentStep:{control:`number`,description:`The index of the step currently being displayed.`,defaultValue:{summary:0},table:{category:n.PROPERTIES}},stepsTitles:{control:`string`,description:`A string containing the titles of each step, separated by commas.`,table:{category:n.PROPERTIES}},isOpen:{control:`boolean`,description:`When true, the modal is displayed.`,defaultValue:{summary:!1},table:{category:n.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`This property is used to disable the primary button. When true the primary button wont be clickable.`,table:{category:n.PROPERTIES}},disableSecondaryButton:{control:`boolean`,description:`This property is used to disable the secondary button. When true the secondary button wont be clickable.`,table:{category:n.PROPERTIES}},steps:{control:`number`,description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:n.PROPERTIES}},closeOnFinish:{control:`boolean`,description:`When true, the modal will close automatically after the last step.`,defaultValue:{summary:!1},table:{category:n.PROPERTIES}},atomCancel:{action:`atomCancel`,description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomCloseClick:{action:`atomCloseClick`,description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomFinish:{action:`atomFinish`,description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomNextStep:{action:`atomNextStep`,description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},atomPreviousStep:{action:`atomPreviousStep`,description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:n.EVENTS}},lockedInitialStep:{control:`number`,description:`Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.`,table:{category:n.PROPERTIES}},step_x:{name:`step-x`,description:`The slot where the content for each step will be rendered, with x as the step index.`,table:{category:n.SLOTS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:n.PROPERTIES}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:n.CSS_CUSTOM_PROPERTIES}}}},a={trigger:`open-modal-steps`,stepsTitles:`Step 1, Step 2, Step 3`,steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:`Continue, Continue, Finish`,secondaryButtonTextsByStep:`Close, Back, Back`,lockedInitialStep:1},o={title:`Components/Steps Modal`,...i},s=(n,r=`light`)=>({components:{AtomStepsModal:e,AtomButton:t},setup(){return{args:n,themeColor:r}},template:`
    <div>
      <AtomButton id='${n.trigger}'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${n.steps}"
        trigger="${n.trigger}"
        steps-titles="${n.stepsTitles}"
        close-on-finish="${n.closeOnFinish}"
        primary-button-texts-by-step="${n.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${n.secondaryButtonTextsByStep}"
        is-open="${n.isOpen}"
        meta-data="${n.metaData}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),c={render:e=>s(e),args:{...a,trigger:`open-modal-1`}},l={render:e=>s(e),args:{...a,currentStep:2,trigger:`open-modal-2`}},u={render:e=>s(e),args:{...a,customInitialStep:2,trigger:`open-modal-3`}},d={render:e=>s(e),args:{...a,closeOnFinish:!0,trigger:`open-modal-4`}},f={render:e=>s(e),args:{...a,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`automated-test-modal`}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};var p=[`Default`,`CurrentStepAlreadySet`,`CustomInitialStep`,`CloseOnFinish`,`ProvidingMetaData`];export{d as CloseOnFinish,l as CurrentStepAlreadySet,u as CustomInitialStep,c as Default,f as ProvidingMetaData,p as __namedExportsOrder,o as default};