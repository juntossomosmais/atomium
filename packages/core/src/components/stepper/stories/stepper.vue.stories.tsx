import { AtomStepper } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { StepperStoryArgs } from './stepper.args'

export default {
  title: 'Components/Stepper',
  ...StepperStoryArgs,
} as Meta

const createStepper = (args) => ({
  components: { AtomStepper },
  setup() {
    return { args }
  },
  template: `
    <AtomStepper
      :steps="args.steps"
      :activeStep="args.activeStep"
      :disabledUnrenderedStep="args.disabledUnrenderedStep"
      :stepTitle="args.stepTitle">
    </AtomStepper>
  `,
})

export const InProgress: StoryObj = {
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
    disabledUnrenderedStep: true,
    stepTitle: 'Etapa 1 de 5',
  },
}

export const Uncompleted: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: false },
      { title: 'Step 2', completed: false },
      { title: 'Step 3', completed: false },
      { title: 'Step 4', completed: false },
      { title: 'Step 5', completed: false },
    ],
    activeStep: 0,
    disabledUnrenderedStep: true,
    stepTitle: 'Progress 1 of 5',
  },
}

export const Completed: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: true },
      { title: 'Step 4', completed: true },
      { title: 'Step 5', completed: true },
    ],
    activeStep: 4,
    disabledUnrenderedStep: false,
    stepTitle: 'Etapa 1 de 5',
  },
}
