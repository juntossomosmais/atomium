import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { StepperStoryArgs } from './stepper.args'

export default {
  title: 'Components/Stepper',
  ...StepperStoryArgs,
} as Meta

const createStepper = (args) => {
  return html`
    <atom-stepper
      .steps=${args.steps}
      .activeStep=${args.activeStep}
      .disabledStep=${args.disabledStep}
      .stepTitle=${args.stepTitle}
    ></atom-stepper>
  `
}

export const Primary: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: false },
      { title: 'Step 4', completed: false },
      { title: 'Step 5', completed: false },
    ],
    activeStep: 2,
    disabledStep: [3, 4],
    stepTitle: 'Etapa 1 de 5',
  },
}
