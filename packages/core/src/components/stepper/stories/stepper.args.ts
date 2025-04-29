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
      description: 'The steps to display in the stepper',
    },
  },
}
