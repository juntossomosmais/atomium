import{E as u}from"./index-CZKRqwmD.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-974k63A7.js";const f={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        

Use concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        

Avoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        

Steppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`}}},argTypes:{steps:{control:"array",description:"The steps to display in the stepper. Each step should have a title and a completed state."},activeStep:{control:"number",description:"The index of the active step."},disabledUnrenderedStep:{control:"boolean",description:"If true, unrendered steps will be disabled.",defaultValue:!0},stepTitle:{control:"text",description:"The title of the step. Only used on mobile."}}},v={title:"Components/Stepper",...f},s=e=>({components:{AtomStepper:u},setup(){return{args:e}},template:`
    <AtomStepper
      :steps="args.steps"
      :activeStep="args.activeStep"
      :disabledUnrenderedStep="args.disabledUnrenderedStep"
      :stepTitle="args.stepTitle">
    </AtomStepper>
  `}),t={render:e=>s(e),args:{steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:2,disabledUnrenderedStep:!0,stepTitle:"Etapa 1 de 5"}},r={render:e=>s(e),args:{steps:[{title:"Step 1",completed:!1},{title:"Step 2",completed:!1},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:0,disabledUnrenderedStep:!0,stepTitle:"Progress 1 of 5"}},p={render:e=>s(e),args:{steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!0},{title:"Step 4",completed:!0},{title:"Step 5",completed:!0}],activeStep:4,disabledUnrenderedStep:!1,stepTitle:"Etapa 1 de 5"}};var n,o,a;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: {
    steps: [{
      title: 'Step 1',
      completed: true
    }, {
      title: 'Step 2',
      completed: true
    }, {
      title: 'Step 3',
      completed: false
    }, {
      title: 'Step 4',
      completed: false
    }, {
      title: 'Step 5',
      completed: false
    }],
    activeStep: 2,
    disabledUnrenderedStep: true,
    stepTitle: 'Etapa 1 de 5'
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};var l,d,i;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: {
    steps: [{
      title: 'Step 1',
      completed: false
    }, {
      title: 'Step 2',
      completed: false
    }, {
      title: 'Step 3',
      completed: false
    }, {
      title: 'Step 4',
      completed: false
    }, {
      title: 'Step 5',
      completed: false
    }],
    activeStep: 0,
    disabledUnrenderedStep: true,
    stepTitle: 'Progress 1 of 5'
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,S;p.parameters={...p.parameters,docs:{...(c=p.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: {
    steps: [{
      title: 'Step 1',
      completed: true
    }, {
      title: 'Step 2',
      completed: true
    }, {
      title: 'Step 3',
      completed: true
    }, {
      title: 'Step 4',
      completed: true
    }, {
      title: 'Step 5',
      completed: true
    }],
    activeStep: 4,
    disabledUnrenderedStep: false,
    stepTitle: 'Etapa 1 de 5'
  }
}`,...(S=(m=p.parameters)==null?void 0:m.docs)==null?void 0:S.source}}};const T=["InProgress","Uncompleted","Completed"];export{p as Completed,t as InProgress,r as Uncompleted,T as __namedExportsOrder,v as default};
