import{t as h,l as u}from"./index-CqYQR31o.js";import{C as e}from"./table-D060eKuu.js";import{M as g}from"./DocumentationWithoutStories-B6eCZRGX.js";import{w as S}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-C1xyjpDG.js";import"../sb-preview/runtime.js";import"./jsx-runtime-CNLJf2Aw.js";import"./index-DTYgQk8H.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-y1Bl2-ss.js";import"./preview-errors-B42RpLod.js";const b={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."},page:g}},decorators:[S],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:e.SLOTS}}}},m={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,isOpen:!1},O={title:"Components/StepsModal",...b},l=(t,d="light")=>({components:{AtomStepsModal:h,AtomButton:u},setup(){return{args:t,themeColor:d}},template:`
    <div>
      <AtomButton id='open-modal-steps'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${t.steps}"
        trigger="open-modal-steps"
        steps-titles="${t.stepsTitles}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),o={render:t=>l(t),args:{...m,currentStep:1}},a={render:t=>l(t),args:{...m,currentStep:2}};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 1
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,p,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(c=(p=a.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const R=["Default","CurrentStepAlreadySet"];export{a as CurrentStepAlreadySet,o as Default,R as __namedExportsOrder,O as default};
