import{i as e}from"./preload-helper-xPQekRTU.js";import{U as t,X as n}from"./iframe-m4nl3XFf.js";import{X as r,c as i,t as a}from"./dist-Cqn0MxZv.js";import{n as o,t as s}from"./table-CVkdcsHV.js";import{n as c,t as l}from"./decorator-DZM0saJy.js";var u,d,f=e((()=>{o(),l(),u={parameters:{actions:{handles:[`atomCloseClick`,`atomDidDismiss`,`atomDidPresent`,`atomNextStep`,`atomPreviousStep`,`atomCancel`,`atomFinish`]},docs:{description:{component:`A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs).`}}},decorators:[c],argTypes:{trigger:{description:`The ID of the element that will trigger the modal.`,table:{category:s.PROPERTIES}},currentStep:{control:`number`,description:`The index of the step currently being displayed.`,defaultValue:{summary:0},table:{category:s.PROPERTIES}},stepsTitles:{control:`string`,description:`A string containing the titles of each step, separated by commas.`,table:{category:s.PROPERTIES}},isOpen:{control:`boolean`,description:`When true, the modal is displayed.`,defaultValue:{summary:!1},table:{category:s.PROPERTIES}},disablePrimaryButton:{control:`boolean`,description:`This property is used to disable the primary button. When true the primary button wont be clickable.`,table:{category:s.PROPERTIES}},disableSecondaryButton:{control:`boolean`,description:`This property is used to disable the secondary button. When true the secondary button wont be clickable.`,table:{category:s.PROPERTIES}},steps:{control:`number`,description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:s.PROPERTIES}},closeOnFinish:{control:`boolean`,description:`When true, the modal will close automatically after the last step.`,defaultValue:{summary:!1},table:{category:s.PROPERTIES}},atomCancel:{action:`atomCancel`,description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomCloseClick:{action:`atomCloseClick`,description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomDidDismiss:{action:`atomDidDismiss`,description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomDidPresent:{action:`atomDidPresent`,description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomFinish:{action:`atomFinish`,description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomNextStep:{action:`atomNextStep`,description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},atomPreviousStep:{action:`atomPreviousStep`,description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:s.EVENTS}},lockedInitialStep:{control:`number`,description:`Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.`,table:{category:s.PROPERTIES}},step_x:{name:`step-x`,description:`The slot where the content for each step will be rendered, with x as the step index.`,table:{category:s.SLOTS}},metaData:{control:`object`,description:'Object containing meta-data such as data-testid for modal actions. Example: `{ primaryButtonTestId: "primary-btn", secondaryButtonTestId: "secondary-btn", closeButtonTestId: "close-btn" }`',table:{category:s.PROPERTIES}},"--atom-modal-zindex":{description:`The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.`,defaultValue:{summary:`--zindex-1000`},table:{category:s.CSS_CUSTOM_PROPERTIES}}}},d={trigger:`open-modal-steps`,stepsTitles:`Step 1, Step 2, Step 3`,steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:`Continue, Continue, Finish`,secondaryButtonTextsByStep:`Close, Back, Back`,lockedInitialStep:1}})),p,m,h,g,_,v,y,b,x;e((()=>{n(),a(),f(),p=t(),m={title:`Components/Steps Modal`,component:i,...u},h=e=>(0,p.jsxs)(`div`,{children:[(0,p.jsx)(r,{id:e.trigger,children:`Open Modal`}),(0,p.jsxs)(i,{steps:e.steps,trigger:e.trigger,"steps-titles":e.stepsTitles,"close-on-finish":e.closeOnFinish,primaryButtonTextsByStep:e.primaryButtonTextsByStep,secondaryButtonTextsByStep:e.secondaryButtonTextsByStep,metaData:e.metaData,children:[(0,p.jsx)(`div`,{slot:`step-1`,children:`Step 1 Content`}),(0,p.jsx)(`div`,{slot:`step-2`,children:`Step 2 Content`}),(0,p.jsx)(`div`,{slot:`step-3`,children:`Step 3 Content`})]})]}),g={render:e=>h(e),args:{...d,trigger:`open-modal-1`}},_={render:e=>h(e),args:{...d,currentStep:2,trigger:`open-modal-2`}},v={render:e=>h(e),args:{...d,customInitialStep:2,trigger:`open-modal-3`}},y={render:e=>h(e),args:{...d,closeOnFinish:!0,trigger:`open-modal-4`}},b={render:e=>h(e),args:{...d,metaData:{primaryButtonTestId:`primary-btn`,secondaryButtonTestId:`secondary-btn`,closeButtonTestId:`close-btn`},trigger:`automated-test-modal`}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    trigger: 'open-modal-1'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2,
    trigger: 'open-modal-2'
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2,
    trigger: 'open-modal-3'
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true,
    trigger: 'open-modal-4'
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x=[`Default`,`CurrentStepAlreadySet`,`CustomInitialStep`,`CloseOnFinish`,`ProvidingMetaData`]}))();export{y as CloseOnFinish,_ as CurrentStepAlreadySet,v as CustomInitialStep,g as Default,b as ProvidingMetaData,x as __namedExportsOrder,m as default};