import{I as g}from"./index-DfFLq1Ma.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-BNyNgq6y.js";const f={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        

Use concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        

Avoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        

Steppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`}}},argTypes:{steps:{control:"array",description:"The steps to display in the stepper. Each step should have a title and a completed state."},activeStep:{control:"number",description:"The index of the active step."},disabledUnrenderedStep:{control:"boolean",description:"If true, unrendered steps will be disabled.",defaultValue:!0},stepTitle:{control:"text",description:"The title of the step. Only used on mobile."}}},p={steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:2,disabledUnrenderedStep:!0,stepTitle:"Progress 3 of 5"},T={title:"Components/Stepper",...f},o=e=>({components:{AtomStepper:g},setup(){return{args:e}},template:`
    <AtomStepper
      :steps="args.steps"
      :activeStep="args.activeStep"
      :disabledUnrenderedStep="args.disabledUnrenderedStep"
      :stepTitle="args.stepTitle">
    </AtomStepper>
  `}),t={render:e=>o(e),args:p},r={render:e=>o(e),args:{...p,steps:[{title:"Step 1",completed:!1},{title:"Step 2",completed:!1},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:0,stepTitle:"Progress 1 of 5"}},s={render:e=>o(e),args:{...p,steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!0},{title:"Step 4",completed:!0},{title:"Step 5",completed:!0}],activeStep:4,stepTitle:"Progress 5 of 5"}};var n,a,l;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: defaultArgs
}`,...(l=(a=t.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var i,d,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: {
    ...defaultArgs,
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
    stepTitle: 'Progress 1 of 5'
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,S,u;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: {
    ...defaultArgs,
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
    stepTitle: 'Progress 5 of 5'
  }
}`,...(u=(S=s.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};const A=["InProgress","Uncompleted","Completed"];export{s as Completed,t as InProgress,r as Uncompleted,A as __namedExportsOrder,T as default};
