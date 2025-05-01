import{E as p}from"./index-DAFwP35r.js";import"./vue.esm-bundler-UQm0beuB.js";import"./iframe-1rKBQxqj.js";const n={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        

Use concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        

Avoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        

Steppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`}}},argTypes:{steps:{control:"array",description:"The steps to display in the stepper. Each step should have a title and a completed state."},activeStep:{control:"number",description:"The index of the active step."},disabledUnrenderedStep:{control:"boolean",description:"If true, unrendered steps will be disabled.",defaultValue:!0},stepTitle:{control:"text",description:"The title of the step. Only used on mobile."}}},c={title:"Components/Stepper",...n},a=e=>({components:{AtomStepper:p},setup(){return{args:e}},template:`
    <AtomStepper steps="${e.steps}"></AtomStepper>
  `}),t={render:e=>a(e),args:{steps:[{title:"Step 1",completed:!0},{title:"Step 2",completed:!0},{title:"Step 3",completed:!1,actual:!0},{title:"Step 4",completed:!1,disabled:!0},{title:"Step 5",completed:!1,disabled:!0}]}};var s,r,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
      completed: false,
      actual: true
    }, {
      title: 'Step 4',
      completed: false,
      disabled: true
    }, {
      title: 'Step 5',
      completed: false,
      disabled: true
    }]
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const m=["Primary"];export{t as Primary,m as __namedExportsOrder,c as default};
