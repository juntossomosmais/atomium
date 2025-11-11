import{j as a}from"./iframe-CVDO5_AA.js";import{J as n}from"./index-CTj1LZ5D.js";import"./preload-helper-PPVm8Dsz.js";const l={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        

Use concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        

Avoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        

Steppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`}}},argTypes:{steps:{control:"array",description:"The steps to display in the stepper. Each step should have a title and a completed state."},activeStep:{control:"number",description:"The index of the active step."},disabledUnrenderedStep:{control:"boolean",description:"If true, unrendered steps will be disabled.",defaultValue:!0},stepTitle:{control:"text",description:"The title of the step. Only used on mobile."}}},p={steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:2,disabledUnrenderedStep:!0,stepTitle:"Progress 3 of 5"},m={title:"Components/Stepper",component:n,...l},o=e=>a.jsx(n,{steps:e.steps,activeStep:e.activeStep,disabledUnrenderedStep:e.disabledUnrenderedStep,stepTitle:e.stepTitle}),t={render:e=>o(e),args:p},s={render:e=>o(e),args:{...p,steps:[{title:"Step 1",completed:!1},{title:"Step 2",completed:!1},{title:"Step 3",completed:!1},{title:"Step 4",completed:!1},{title:"Step 5",completed:!1}],activeStep:0,stepTitle:"Progress 1 of 5"}},r={render:e=>o(e),args:{...p,steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!0},{title:"Step 4",completed:!0},{title:"Step 5",completed:!0}],activeStep:4,stepTitle:"Progress 5 of 5"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: defaultArgs
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const S=["InProgress","Uncompleted","Completed"];export{r as Completed,t as InProgress,s as Uncompleted,S as __namedExportsOrder,m as default};
