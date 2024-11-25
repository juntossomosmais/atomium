import { AtomSpinner } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { SpinnerStoryArgs } from './spinner.args'

export default {
  title: 'Components/Spinner',
  ...SpinnerStoryArgs,
} as Meta

const createSpinner = (args) => ({
  components: { AtomSpinner },
  setup() {
    return { args }
  },
  template: `<AtomSpinner type="${args.type}" size="${args.size}" />`,
})

export const Primary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    size: 40,
    type: 'primary',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}

export const Dark: StoryObj = {
  render: (args) => createSpinner(args),
  args: {
    ...Primary.args,
    type: 'dark',
  },
}
