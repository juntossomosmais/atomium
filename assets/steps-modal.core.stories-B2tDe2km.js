import{N as l}from"./iframe-Cu97PxhQ.js";import{C as t}from"./table-D060eKuu.js";import{w as d}from"./decorator-qQ6kGDSI.js";import"./preload-helper-PPVm8Dsz.js";const m={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."}}},decorators:[d],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:t.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:t.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:t.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"This property is used to disable the primary button. When true the primary button wont be clickable.",table:{category:t.PROPERTIES}},disableSecondaryButton:{control:"boolean",description:"This property is used to disable the secondary button. When true the secondary button wont be clickable.",table:{category:t.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:t.PROPERTIES}},closeOnFinish:{control:"boolean",description:"When true, the modal will close automatically after the last step.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},lockedInitialStep:{control:"number",description:"Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.",table:{category:t.PROPERTIES}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:t.SLOTS}},metaData:{control:"object",description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:t.PROPERTIES}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},o={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:"Continue, Continue, Finish",secondaryButtonTextsByStep:"Close, Back, Back",lockedInitialStep:1},b={title:"Components/Steps Modal",...m},a=e=>l`
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
  `,r={render:e=>a(e),args:{...o,trigger:"open-modal-1"}},s={render:e=>a(e),args:{...o,currentStep:2,trigger:"open-modal-2"}},n={render:e=>a(e),args:{...o,customInitialStep:2,trigger:"open-modal-3"}},i={render:e=>a(e),args:{...o,closeOnFinish:!0,trigger:"open-modal-4"}},c={render:e=>a(e),args:{...o,metaData:{primaryButtonTestId:"primary-btn",secondaryButtonTestId:"secondary-btn",closeButtonTestId:"close-btn"},trigger:"automated-test-modal"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const y=["Default","CurrentStepAlreadySet","CustomInitialStep","CloseOnFinish","ProvidingMetaData"];export{i as CloseOnFinish,s as CurrentStepAlreadySet,n as CustomInitialStep,r as Default,c as ProvidingMetaData,y as __namedExportsOrder,b as default};
