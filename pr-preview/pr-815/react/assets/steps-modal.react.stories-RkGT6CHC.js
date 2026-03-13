import"./chunk-DseTPa7n.js";import{t as e}from"./react-BeYaFARg.js";import{t}from"./jsx-runtime-DsGsusFP.js";import"./react-dom-BaYUCVRd.js";import"./index--pUmmU2V-CE9k8Uy1.js";import{T as n,i as r}from"./esm-BiOou3EM.js";import{t as i}from"./table-jqz5s6A8.js";import{t as a}from"./decorator-Ce3Kjdma.js";e();var o={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomNextStep`,`atomPreviousStep`,`atomCancel`,`atomFinish`]},docs:{description:{component:`A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).`}}},decorators:[a],argTypes:{trigger:{description:`The ID of the element that will trigger the modal.`,table:{category:i.PROPERTIES}},currentStep:{control:`number`,description:`The index of the step currently being displayed.`,defaultValue:{summary:0},table:{category:i.PROPERTIES}},stepsTitles:{control:`string`,description:`A string containing the titles of each step, separated by commas.`,table:{category:i.PROPERTIES}},isOpen:{control:`boolean`,description:`When true, the modal is displayed.`,defaultValue:{summary:!1},table:{category:i.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`This property is used to disable the primary button. When true the primary button wont be clickable.`,table:{category:i.PROPERTIES}},disableSecondaryButton:{control:`boolean`,description:`This property is used to disable the secondary button. When true the secondary button wont be clickable.`,table:{category:i.PROPERTIES}},steps:{control:`number`,description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:i.PROPERTIES}},closeOnFinish:{control:`boolean`,description:`When true, the modal will close automatically after the last step.`,defaultValue:{summary:!1},table:{category:i.PROPERTIES}},atomCancel:{action:`atomCancel`,description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomCloseClick:{action:`atomCloseClick`,description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomFinish:{action:`atomFinish`,description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomNextStep:{action:`atomNextStep`,description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},atomPreviousStep:{action:`atomPreviousStep`,description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:i.EVENTS}},lockedInitialStep:{control:`number`,description:`Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.`,table:{category:i.PROPERTIES}},step_x:{name:`step-x`,description:`The slot where the content for each step will be rendered, with x as the step index.`,table:{category:i.SLOTS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:i.PROPERTIES}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:i.CSS_CUSTOM_PROPERTIES}}}},s={trigger:`open-modal-steps`,stepsTitles:`Step 1, Step 2, Step 3`,steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:`Continue, Continue, Finish`,secondaryButtonTextsByStep:`Close, Back, Back`,lockedInitialStep:1},c=t(),l={title:`Components/Steps Modal`,component:n,...o},u=e=>(0,c.jsxs)(`div`,{children:[(0,c.jsx)(r,{id:e.trigger,children:`Open Modal`}),(0,c.jsxs)(n,{steps:e.steps,trigger:e.trigger,"steps-titles":e.stepsTitles,"close-on-finish":e.closeOnFinish,primaryButtonTextsByStep:e.primaryButtonTextsByStep,secondaryButtonTextsByStep:e.secondaryButtonTextsByStep,metaData:e.metaData,children:[(0,c.jsx)(`div`,{slot:`step-1`,children:`Step 1 Content`}),(0,c.jsx)(`div`,{slot:`step-2`,children:`Step 2 Content`}),(0,c.jsx)(`div`,{slot:`step-3`,children:`Step 3 Content`})]})]}),d={render:e=>u(e),args:{...s,trigger:`open-modal-1`}},f={render:e=>u(e),args:{...s,currentStep:2,trigger:`open-modal-2`}},p={render:e=>u(e),args:{...s,customInitialStep:2,trigger:`open-modal-3`}},m={render:e=>u(e),args:{...s,closeOnFinish:!0,trigger:`open-modal-4`}},h={render:e=>u(e),args:{...s,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`automated-test-modal`}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
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
    trigger: 'automated-test-modal'
  }
}`,...h.parameters?.docs?.source}}};var g=[`Default`,`CurrentStepAlreadySet`,`CustomInitialStep`,`CloseOnFinish`,`ProvidingMetaData`];export{m as CloseOnFinish,f as CurrentStepAlreadySet,p as CustomInitialStep,d as Default,h as ProvidingMetaData,g as __namedExportsOrder,l as default};