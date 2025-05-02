export const StepperStoryArgs = {
  decorators: [],
  parameters: {
    actions: {
      handles: [],
    },
    docs: {
      description: {
        component: `The Stepper is a visual representation of the user's progress through a set of steps, guiding them toward completion of a flow.
        \n\nUse concise titles, no longer than 2 or 3 words, that clearly indicate the purpose of that step.
        \n\nAvoid creating 6 or more steps in the same flow — a large number of steps can make the experience confusing and overwhelm the user.
        \n\nSteppers must be used in more than 3 steps, if the flow contains 2 steps consider using a button with the label indicating the next step (for example: “Proceed to payment”).`,
      },
    },
  },
  argTypes: {
    steps: {
      control: 'array',
      description:
        'The steps to display in the stepper. Each step should have a title and a completed state.',
    },
    activeStep: {
      control: 'number',
      description: 'The index of the active step.',
    },
    disabledUnrenderedStep: {
      control: 'boolean',
      description: 'If true, unrendered steps will be disabled.',
      defaultValue: true,
    },
    stepTitle: {
      control: 'text',
      description: 'The title of the step. Only used on mobile.',
    },
  },
}

export const defaultArgs = {
  steps: [
    { title: 'Step 1', completed: true },
    { title: 'Step 2', completed: true },
    { title: 'Step 3', completed: false },
    { title: 'Step 4', completed: false },
    { title: 'Step 5', completed: false },
  ],
  activeStep: 2,
  disabledUnrenderedStep: true,
  stepTitle: 'Progress 3 of 5',
}
