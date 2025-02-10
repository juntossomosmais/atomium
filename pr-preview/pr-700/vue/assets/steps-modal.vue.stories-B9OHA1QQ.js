import{D as f,x as C}from"./index-UvMY3B4Z.js";import{C as e}from"./table-D060eKuu.js";import{M as P}from"./DocumentationWithoutStories-ogt4gL0z.js";import{w as O}from"./decorator-CCfbKlgz.js";import"./vue.esm-bundler-cJVerQom.js";import"./iframe-DqWTx4R4.js";import"./index-Ra-UBqS8.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-DkDiOc0H.js";import"./index-ogSvIofg.js";import"./index-LjCHVMj_.js";import"./v4-CtRu48qb.js";const v={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."},page:P}},decorators:[O],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:e.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:e.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:e.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"This property is used to disable the primary button. When true the primary button wont be clickable.",table:{category:e.PROPERTIES}},disableSecondaryButton:{control:"boolean",description:"This property is used to disable the secondary button. When true the secondary button wont be clickable.",table:{category:e.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:e.PROPERTIES}},closeOnFinish:{control:"boolean",description:"When true, the modal will close automatically after the last step.",defaultValue:{summary:!1},table:{category:e.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:e.EVENTS}},lockedInitialStep:{control:"number",description:"Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.",table:{category:e.PROPERTIES}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:e.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:e.CSS_CUSTOM_PROPERTIES}}}},n={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:"Continue, Continue, Finish",secondaryButtonTextsByStep:"Close, Back, Back",lockedInitialStep:1},_={title:"Components/Steps Modal",...v},i=(t,T="light")=>({components:{AtomStepsModal:f,AtomButton:C},setup(){return{args:t,themeColor:T}},template:`
    <div>
      <AtomButton id='open-modal-steps'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${t.steps}"
        trigger="open-modal-steps"
        steps-titles="${t.stepsTitles}"
        close-on-finish="${t.closeOnFinish}"
        primary-button-texts-by-step="${t.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${t.secondaryButtonTextsByStep}"
        is-open="${t.isOpen}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),o={render:t=>i(t),args:{...n}},a={render:t=>i(t),args:{...n,currentStep:2}},s={render:t=>i(t),args:{...n,customInitialStep:2}},r={render:t=>i(t),args:{...n,closeOnFinish:!0}};var c,l,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,d,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,b,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2
  }
}`,...(g=(b=s.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var S,y,E;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true
  }
}`,...(E=(y=r.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const $=["Default","CurrentStepAlreadySet","CustomInitialStep","CloseOnFinish"];export{r as CloseOnFinish,a as CurrentStepAlreadySet,s as CustomInitialStep,o as Default,$ as __namedExportsOrder,_ as default};
