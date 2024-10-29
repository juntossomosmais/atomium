import{t as h,l as u}from"./index-Cvnu63rE.js";import{C as e}from"./table-D060eKuu.js";import{M as g}from"./DocumentationWithoutStories-Ctz5dIaS.js";import{w as S}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-BqkKpwRj.js";import"../sb-preview/runtime.js";import"./jsx-runtime-gLjKQz9p.js";import"./index-BTr65mBR.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-BdbgP9Jl.js";import"./preview-errors-B42RpLod.js";const b={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"Wrapper of Atom Modal component which implements steps logic. Read the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs) for more information."},page:g}},decorators:[S],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step that will be displayed",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"An string with the titles of the steps separated by commas",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be displayed",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},steps:{control:"number",description:"The number of steps that the modal will have. Obs: It needs to be the same number of steps-titles",table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Event emitted when the primary button is clicked on the last step. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Event emitted when the primary button is clicked. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Event emitted when the secondary button is clicked. The event callback receive ion-modal custom component as a param.",table:{category:e.EVENTS}},step_x:{name:"step-x",description:"The slot where the content of the step x will be rendered. Obs: x is the index of the step",table:{category:e.SLOTS}}}},c={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,isOpen:!1},R={title:"Components/StepsModal",...b},l=(t,d="light")=>({components:{AtomStepsModal:h,AtomButton:u},setup(){return{args:t,themeColor:d}},template:`
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
  `}),o={render:t=>l(t),args:{...c,currentStep:1}},a={render:t=>l(t),args:{...c,currentStep:2}};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 1
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,m,p;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const N=["Default","CurrentStepAlreadySet"];export{a as CurrentStepAlreadySet,o as Default,N as __namedExportsOrder,R as default};
