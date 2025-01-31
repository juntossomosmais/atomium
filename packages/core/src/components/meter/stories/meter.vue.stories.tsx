import { AtomMeter } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { MeterStoryArgs } from './meter.args'

export default {
  title: 'Components/Meter',
  ...MeterStoryArgs,
} as Meta

const createMeter = (args) => ({
  components: { AtomMeter },
  setup() {
    return { args }
  },
  template: `
    <AtomMeter type="${args.type}" />
  `,
})

export const Primary: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    type: 'primary',
    label: 'Meter',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}
