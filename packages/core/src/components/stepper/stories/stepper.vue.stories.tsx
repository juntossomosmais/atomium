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
    <AtomStepper steps="${args.steps}"></AtomStepper>
  `,
})

export const Primary: StoryObj = {
  render: (args) => createStepper(args),
  args: {
    steps: [
      { title: 'Step 1', completed: true },
      { title: 'Step 2', completed: true },
      { title: 'Step 3', completed: false, actual: true },
      { title: 'Step 4', completed: false, disabled: true },
      { title: 'Step 5', completed: false, disabled: true },
    ],
  },
}
