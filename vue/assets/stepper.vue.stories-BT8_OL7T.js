import{V as e}from"./iframe-DHKEqBzE.js";var t={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        

Use concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        

Avoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        

Steppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`}}},argTypes:{steps:{control:`array`,description:`The steps to display in the stepper. Each step should have a title and a completed state.`},activeStep:{control:`number`,description:`The index of the active step.`},disabledUnrenderedStep:{control:`boolean`,description:`If true, unrendered steps will be disabled.`,defaultValue:!0},stepTitle:{control:`text`,description:`The title of the step. Only used on mobile.`}}},n={steps:[{title:`Step 1`,completed:!0},{title:`Step 2`,completed:!0},{title:`Step 3`,completed:!1},{title:`Step 4`,completed:!1},{title:`Step 5`,completed:!1}],activeStep:2,disabledUnrenderedStep:!0,stepTitle:`Progress 3 of 5`},r={title:`Components/Stepper`,...t},i=t=>({components:{AtomStepper:e},setup(){return{args:t}},template:`
    <AtomStepper
      :steps="args.steps"
      :activeStep="args.activeStep"
      :disabledUnrenderedStep="args.disabledUnrenderedStep"
      :stepTitle="args.stepTitle">
    </AtomStepper>
  `}),a={render:e=>i(e),args:n},o={render:e=>i(e),args:{...n,steps:[{title:`Step 1`,completed:!1},{title:`Step 2`,completed:!1},{title:`Step 3`,completed:!1},{title:`Step 4`,completed:!1},{title:`Step 5`,completed:!1}],activeStep:0,stepTitle:`Progress 1 of 5`}},s={render:e=>i(e),args:{...n,steps:[{title:`Step 1`,completed:!0},{title:`Step 2`,completed:!0},{title:`Step 3`,completed:!0},{title:`Step 4`,completed:!0},{title:`Step 5`,completed:!0}],activeStep:4,stepTitle:`Progress 5 of 5`}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => createStepper(args),
  args: defaultArgs
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};var c=[`InProgress`,`Uncompleted`,`Completed`];export{s as Completed,a as InProgress,o as Uncompleted,c as __namedExportsOrder,r as default};