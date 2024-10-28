import{q as w,l as x}from"./index-CZH373j2.js";import{C as t}from"./table-D060eKuu.js";import{M as O}from"./DocumentationWithoutStories-BNKfjn8x.js";import{w as R}from"./decorator-DZmxGtIB.js";import"./vue.esm-bundler-B2N54QI-.js";import"./iframe-oDBf8XSw.js";import"../sb-preview/runtime.js";import"./jsx-runtime-Drrs_iFP.js";import"./index-zKSK8ToN.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./doctrine-Z_8G-UDG.js";import"./index-DrFu-skq.js";import"./index-CAeWxb4b.js";import"./preview-errors-B42RpLod.js";const N={parameters:{actions:{handles:["atomCloseClick","atomDidDismiss","atomDidPresent","atomNextStep","atomPreviousStep","atomCancel","atomFinish"]},docs:{description:{component:"Wrapper of Atom Modal component which implements steps logic. Read the [Atom Modal documentation](https://juntossomosmais.github.io/atomium/?path=/docs/components-modal--docs) for more information."},page:O}},decorators:[R],argTypes:{trigger:{description:"The id of the element that will trigger the modal",table:{category:t.PROPERTIES}},currentStep:{control:"number",description:"The index of the step that will be displayed",defaultValue:{summary:0},table:{category:t.PROPERTIES}},stepsTitles:{control:"string",description:"An string with the titles of the steps separated by commas",table:{category:t.PROPERTIES}},isOpen:{control:"boolean",description:"If true, the modal will be displayed",defaultValue:{summary:!1},table:{category:t.PROPERTIES}},steps:{control:"number",description:"The number of steps that the modal will have. OBS: It needs to be the same number of steps-titles",table:{category:t.PROPERTIES}},atomCancel:{action:"atomCancel",description:"Event emitted when the secondary button is clicked and the current step is 0. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomCloseClick:{action:"atomCloseClick",description:"Event emitted when the close button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomDidDismiss:{action:"atomDidDismiss",description:"Event emitted after the modal has dismissed. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomDidPresent:{action:"atomDidPresent",description:"Event emitted after the modal has presented. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomFinish:{action:"atomFinish",description:"Event emitted when the primary button is clicked on the last step. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomNextStep:{action:"atomNextStep",description:"Event emitted when the primary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},atomPreviousStep:{action:"atomPreviousStep",description:"Event emitted when the secondary button is clicked. The event callback recieve ion-modal custom component as a param.",table:{category:t.EVENTS}},step_x:{name:"step-x",description:"The slot where the content of the step x will be rendered. Obs: x is the index of the step",table:{category:t.SLOTS}}}},r={trigger:"open-modal-steps",stepsTitles:"Step 1, Step 2, Step 3",steps:3,isOpen:!0},J={title:"Components/StepsModal",...N},o=(e,k="light")=>({components:{AtomModal:w,AtomButton:x},setup(){return{args:e,themeColor:k}},template:`
    <div>
      <AtomButton id='open-modal'>Open Modal</AtomButton>
      <AtomModal
        alert-type="${e.alertType}"
        has-divider="${e.hasDivider}"
        primary-text="${e.primaryText}"
        secondary-text="${e.secondaryText}"
        trigger="open-modal"
        progress="${e.progress}"
        disable-primary="${e.disablePrimary}"
        disable-secondary="${e.disableSecondary}"
      >
        {{ args.label }}
      </AtomModal>
    </div>
  `}),a={render:e=>o(e),args:{...r}},s={render:e=>o(e),args:{...r,hasDivider:!0}},n={render:e=>o(e),args:{...r,progress:.5}},i={render:e=>o(e),args:{...r,alertType:"alert"}},c={render:e=>o(e),args:{...r,alertType:"error"}},m={render:e=>o(e),args:{...r,headerTitle:"Title"}};var d,l,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs
  }
}`,...(p=(l=a.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,h,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    hasDivider: true
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var b,T,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    progress: 0.5
  }
}`,...(y=(T=n.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var v,E,S;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'alert'
  }
}`,...(S=(E=i.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var M,f,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    alertType: 'error'
  }
}`,...(A=(f=c.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var C,P,D;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => createModal(args),
  args: {
    ...ModalComponentArgs,
    headerTitle: 'Title'
  }
}`,...(D=(P=m.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const K=["Default","Divided","Progress","Alert","Error","HeaderTitle"];export{i as Alert,a as Default,s as Divided,c as Error,m as HeaderTitle,n as Progress,K as __namedExportsOrder,J as default};
