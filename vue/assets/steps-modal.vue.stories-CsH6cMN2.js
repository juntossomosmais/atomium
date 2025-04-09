import{v as P,N as M}from"./index-BY_xprlD.js";import{C as t}from"./table-D060eKuu.js";import{j as o,M as v,T as O,D as k,P as R,e as w}from"./index-CRw3f8pE.js";import{u as x}from"./index-B0bt54_u.js";import{w as A}from"./decorator-DFROgT0E.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-MNxWBaSk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-Bx-go_-4.js";import"./index-DrFu-skq.js";import"./v4-CtRu48qb.js";function p(e){const s={h3:"h3",...x(),...e.components};return o.jsxs(o.Fragment,{children:[o.jsx(v,{isTemplate:!0}),`
`,o.jsx(O,{}),`
`,o.jsx(k,{}),`
`,o.jsx(R,{}),`
`,o.jsx(s.h3,{id:"props",children:"Props"}),`
`,o.jsx(w,{})]})}function D(e={}){const{wrapper:s}={...x(),...e.components};return s?o.jsx(s,{...e,children:o.jsx(p,{...e})}):p(e)}const I={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"A wrapper for the Atom Modal component that includes step navigation functionality. For further details, refer to the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs)."},page:D}},decorators:[A],argTypes:{trigger:{description:"The ID of the element that will trigger the modal.",table:{category:t.PROPERTIES}},currentStep:{control:"number",description:"The index of the step currently being displayed.",defaultValue:{summary:0},table:{category:t.PROPERTIES}},stepsTitles:{control:"string",description:"A string containing the titles of each step, separated by commas.",table:{category:t.PROPERTIES}},isOpen:{control:"boolean",description:"When true, the modal is displayed.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},disablePrimaryButton:{control:"boolean",description:"This property is used to disable the primary button. When true the primary button wont be clickable.",table:{category:t.PROPERTIES}},disableSecondaryButton:{control:"boolean",description:"This property is used to disable the secondary button. When true the secondary button wont be clickable.",table:{category:t.PROPERTIES}},steps:{control:"number",description:"The total number of steps in the modal. Note: this must match the number of titles in `stepsTitles`.",table:{category:t.PROPERTIES}},closeOnFinish:{control:"boolean",description:"When true, the modal will close automatically after the last step.",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Emitted when the secondary button is clicked on the first step, passing the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Emitted when the close button is clicked. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Emitted after the modal is dismissed. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Emitted after the modal is presented. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomFinish:{action:"atomFinish",description:"Emitted when the primary button is clicked on the last step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Emitted when the primary button is clicked to proceed to the next step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Emitted when the secondary button is clicked to go back a step. The callback receives the `ion-modal` component as a parameter.",table:{category:t.EVENTS}},lockedInitialStep:{control:"number",description:"Specifies the step index at which the modal will start. Users are restricted from navigating to steps before this index. Attempting to go back beyond this step will emit atom cancel event from the modal.",table:{category:t.PROPERTIES}},step_x:{name:"step-x",description:"The slot where the content for each step will be rendered, with x as the step index.",table:{category:t.SLOTS}},"--atom-modal-zindex":{description:"The z-index of the modal, to change this value using CSS custom properties, change its value on root element. This needs to be done this way because the ion-modal is rendered on the body element.",defaultValue:{summary:"--zindex-1000"},table:{category:t.CSS_CUSTOM_PROPERTIES}}}},c={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,currentStep:1,isOpen:!1,closeOnFinish:!1,primaryButtonTextsByStep:"Continue, Continue, Finish",secondaryButtonTextsByStep:"Close, Back, Back",lockedInitialStep:1},U={title:"Components/Steps Modal",...I},l=(e,s="light")=>({components:{AtomStepsModal:M,AtomButton:P},setup(){return{args:e,themeColor:s}},template:`
    <div>
      <AtomButton id='open-modal-steps'>Open Modal</AtomButton>
      <AtomStepsModal
        steps="${e.steps}"
        trigger="open-modal-steps"
        steps-titles="${e.stepsTitles}"
        close-on-finish="${e.closeOnFinish}"
        primary-button-texts-by-step="${e.primaryButtonTextsByStep}"
        secondary-button-texts-by-step="${e.secondaryButtonTextsByStep}"
        is-open="${e.isOpen}"
      >
        <div slot="step-1">Step 1 Content</div>
        <div slot="step-2">Step 2 Content</div>
        <div slot="step-3">Step 3 Content</div>
      </AtomStepsModal>
    </div>
  `}),a={render:e=>l(e),args:{...c}},n={render:e=>l(e),args:{...c,currentStep:2}},r={render:e=>l(e),args:{...c,customInitialStep:2}},i={render:e=>l(e),args:{...c,closeOnFinish:!0}};var m,d,h;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(h=(d=a.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};var u,g,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    currentStep: 2
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,y,T;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    customInitialStep: 2
  }
}`,...(T=(y=r.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var E,f,C;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    closeOnFinish: true
  }
}`,...(C=(f=i.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};const q=["Default","CurrentStepAlreadySet","CustomInitialStep","CloseOnFinish"];export{i as CloseOnFinish,n as CurrentStepAlreadySet,r as CustomInitialStep,a as Default,q as __namedExportsOrder,U as default};
