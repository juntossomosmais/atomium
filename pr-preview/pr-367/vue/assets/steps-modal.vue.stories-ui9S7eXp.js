import{t as y,l as b}from"./index-Cnsu1ell.js";import{C as e}from"./table-D060eKuu.js";import{M as E}from"./DocumentationWithoutStories-Dne-S_dv.js";import{w as T}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-DEwcPWQ6.js";import"../sb-preview/runtime.js";import"./jsx-runtime-M9d0V80o.js";import"./index-dwqx55zO.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-fuGU2Xul.js";import"./preview-errors-B42RpLod.js";const f={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."},page:E}},decorators:[T],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:e.PROPERTIES}},closeOnFinish:{control:"boolean",description:"When true, the modal will close automatically after the last step.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:e.SLOTS}}}},r={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryText:"Next",secondaryText:"Previous"},I={title:"Components/Steps Modal",...f},n=(t,S="light")=>({components:{AtomStepsModal:y,AtomButton:b},setup(){return{args:t,themeColor:S}},template:`
    <div>
      <AtomButton id='open-modal-steps'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${t.steps}"
        trigger="open-modal-steps"
        steps-titles="${t.stepsTitles}"
        close-on-finish="${t.closeOnFinish}"
        primary-text="${t.primaryText}"
        secondary-text="${t.secondaryText}"
        is-open="${t.isOpen}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),o={render:t=>n(t),args:{...r}},a={render:t=>n(t),args:{...r,currentStep:2}},s={render:t=>n(t),args:{...r,closeOnFinish:!0}};var i,c,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,m,d;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var h,u,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const $=["Default","CurrentStepAlreadySet","CloseOnFinish"];export{s as CloseOnFinish,a as CurrentStepAlreadySet,o as Default,$ as __namedExportsOrder,I as default};
