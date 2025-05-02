import { AtomStepper } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { StepperStoryArgs, defaultArgs } from './stepper.args'

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
  args: defaultArgs,
}

export const Uncompleted: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    ...defaultArgs,
    steps: [
      { title: 'Step 1', completed: false },
      { title: 'Step 2', completed: false },
      { title: 'Step 3', completed: false },
      { title: 'Step 4', completed: false },
      { title: 'Step 5', completed: false },
    ],
    activeStep: 0,
    stepTitle: 'Progress 1 of 5',
  },
}

export const Completed: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    ...defaultArgs,
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: true },
      { title: 'Step 4', completed: true },
      { title: 'Step 5', completed: true },
    ],
    activeStep: 0,
    stepTitle: 'Progress 5 of 5',
  },
}
