import{j as o}from"./iframe-D1tf9FLi.js";import{K as d,C as m}from"./index-DCGZOIrA.js";import{C as e}from"./table-D060eKuu.js";import{w as p}from"./decorator-C-4D3IDP.js";import"./preload-helper-PPVm8Dsz.js";const h={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."}}},decorators:[p],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"This property is used to disable the primary button. When true the primary button wont be clickable.",table:{category:e.PROPERTIES}},disableSecondaryButton:{control:"boolean",description:"This property is used to disable the secondary button. When true the secondary button wont be clickable.",table:{category:e.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:e.PROPERTIES}},closeOnFinish:{control:"boolean",description:"When true, the modal will close automatically after the last step.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},lockedInitialStep:{control:"number",description:"Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.",table:{category:e.PROPERTIES}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:e.SLOTS}},metaData:{control:"object",description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:e.PROPERTIES}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:e.CSS_CUSTOM_PROPERTIES}}}},a={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:"Continue, Continue, Finish",secondaryButtonTextsByStep:"Close, Back, Back",lockedInitialStep:1},T={title:"Components/Steps Modal",component:d,...h},r=t=>o.jsxs("div",{children:[o.jsx(m,{id:t.trigger,children:"Open Modal"}),o.jsxs(d,{steps:t.steps,trigger:t.trigger,"steps-titles":t.stepsTitles,"close-on-finish":t.closeOnFinish,primaryButtonTextsByStep:t.primaryButtonTextsByStep,secondaryButtonTextsByStep:t.secondaryButtonTextsByStep,metaData:t.metaData,children:[o.jsx("div",{slot:"step-1",children:"Step 1 Content"}),o.jsx("div",{slot:"step-2",children:"Step 2 Content"}),o.jsx("div",{slot:"step-3",children:"Step 3 Content"})]})]}),s={render:t=>r(t),args:{...a,trigger:"open-modal-1"}},n={render:t=>r(t),args:{...a,currentStep:2,trigger:"open-modal-2"}},i={render:t=>r(t),args:{...a,customInitialStep:2,trigger:"open-modal-3"}},c={render:t=>r(t),args:{...a,closeOnFinish:!0,trigger:"open-modal-4"}},l={render:t=>r(t),args:{...a,metaData:{primaryButtonTestId:"primary-btn",secondaryButtonTestId:"secondary-btn",closeButtonTestId:"close-btn"},trigger:"automated-test-modal"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const E=["Default","CurrentStepAlreadySet","CustomInitialStep","CloseOnFinish","ProvidingMetaData"];export{c as CloseOnFinish,n as CurrentStepAlreadySet,i as CustomInitialStep,s as Default,l as ProvidingMetaData,E as __namedExportsOrder,T as default};
