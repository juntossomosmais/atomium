import{t as h,l as u}from"./index-CTr7jQTp.js";import{C as e}from"./table-D060eKuu.js";import{M as S}from"./DocumentationWithoutStories-C_WfqLao.js";import{w as g}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-YnVAeq9X.js";import"../sb-preview/runtime.js";import"./jsx-runtime-yTZD5Xou.js";import"./index-a7eQhETb.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-CFvoRYbo.js";import"./preview-errors-B42RpLod.js";const b={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"Wrapper of Atom Modal component which implements steps logic. Read the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs) for more information."},page:S}},decorators:[g],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step that will be displayed",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"An string with the titles of the steps separated by commas",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be displayed",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},steps:{control:"number",description:"The number of steps that the modal will have. OBS: It needs to be the same number of steps-titles",table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Event emitted when the secondary button is clicked and the current step is 0. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Event emitted when the primary button is clicked on the last step. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Event emitted when the primary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Event emitted when the secondary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:e.EVENTS}},step_x:{name:"step-x",description:"The slot where the content of the step x will be rendered. Obs: x is the index of the step",table:{category:e.SLOTS}}}},p={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,isOpen:!1},R={title:"Components/StepsModal",...b},l=(t,d="light")=>({components:{AtomStepsModal:h,AtomButton:u},setup(){return{args:t,themeColor:d}},template:`
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
  `}),o={render:t=>l(t),args:{...p,currentStep:1}},a={render:t=>l(t),args:{...p,currentStep:2}};var s,r,n;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 1
  }
}`,...(n=(r=o.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};var i,m,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const N=["Default","CurrentStepAlreadySet"];export{a as CurrentStepAlreadySet,o as Default,N as __namedExportsOrder,R as default};
