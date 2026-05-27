import{i as e}from"./preload-helper-xPQekRTU.js";import{C as t,W as n,t as r}from"./iframe-DXL-kbP2.js";import{n as i,t as a}from"./table-CVkdcsHV.js";import{n as o,t as s}from"./decorator-7EPknXwd.js";var c,l,u=e((()=>{i(),s(),c={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomNextStep`,`atomPreviousStep`,`atomCancel`,`atomFinish`]},docs:{description:{component:`A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).`}}},decorators:[o],argTypes:{trigger:{description:`The ID of the element that will trigger the modal.`,table:{category:a.PROPERTIES}},currentStep:{control:`number`,description:`The index of the step currently being displayed.`,defaultValue:{summary:0},table:{category:a.PROPERTIES}},stepsTitles:{control:`string`,description:`A string containing the titles of each step, separated by commas.`,table:{category:a.PROPERTIES}},isOpen:{control:`boolean`,description:`When true, the modal is displayed.`,defaultValue:{summary:!1},table:{category:a.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`This property is used to disable the primary button. When true the primary button wont be clickable.`,table:{category:a.PROPERTIES}},disableSecondaryButton:{control:`boolean`,description:`This property is used to disable the secondary button. When true the secondary button wont be clickable.`,table:{category:a.PROPERTIES}},steps:{control:`number`,description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:a.PROPERTIES}},closeOnFinish:{control:`boolean`,description:`When true, the modal will close automatically after the last step.`,defaultValue:{summary:!1},table:{category:a.PROPERTIES}},atomCancel:{action:`atomCancel`,description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomCloseClick:{action:`atomCloseClick`,description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomFinish:{action:`atomFinish`,description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomNextStep:{action:`atomNextStep`,description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},atomPreviousStep:{action:`atomPreviousStep`,description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:a.EVENTS}},lockedInitialStep:{control:`number`,description:`Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.`,table:{category:a.PROPERTIES}},step_x:{name:`step-x`,description:`The slot where the content for each step will be rendered, with x as the step index.`,table:{category:a.SLOTS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:a.PROPERTIES}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:a.CSS_CUSTOM_PROPERTIES}}}},l={trigger:`open-modal-steps`,stepsTitles:`Step 1, Step 2, Step 3`,steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:`Continue, Continue, Finish`,secondaryButtonTextsByStep:`Close, Back, Back`,lockedInitialStep:1}})),d,f,p,m,h,g,_,v;e((()=>{r(),u(),d={title:`Components/Steps Modal`,...c},f=(e,r=`light`)=>({components:{AtomStepsModal:n,AtomButton:t},setup(){return{args:e,themeColor:r}},template:`
    <div>
      <AtomButton id='${e.trigger}'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${e.steps}"
        trigger="${e.trigger}"
        steps-titles="${e.stepsTitles}"
        close-on-finish="${e.closeOnFinish}"
        primary-button-texts-by-step="${e.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${e.secondaryButtonTextsByStep}"
        is-open="${e.isOpen}"
        meta-data="${e.metaData}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),p={render:e=>f(e),args:{...l,trigger:`open-modal-1`}},m={render:e=>f(e),args:{...l,currentStep:2,trigger:`open-modal-2`}},h={render:e=>f(e),args:{...l,customInitialStep:2,trigger:`open-modal-3`}},g={render:e=>f(e),args:{...l,closeOnFinish:!0,trigger:`open-modal-4`}},_={render:e=>f(e),args:{...l,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`automated-test-modal`}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
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
    trigger: 'automated-test-modal'
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`CurrentStepAlreadySet`,`CustomInitialStep`,`CloseOnFinish`,`ProvidingMetaData`]}))();export{g as CloseOnFinish,m as CurrentStepAlreadySet,h as CustomInitialStep,p as Default,_ as ProvidingMetaData,v as __namedExportsOrder,d as default};