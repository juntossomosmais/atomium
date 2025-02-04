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
    <AtomMeter
      type="${args.type}"
      size="${args.size}"
      title="${args.title}"
      centerTitle="${args.centerTitle}"
      min="${args.min}"
      max="${args.max}"
      actual="${args.actual}"
    >
      Children
    </AtomMeter>
  `,
})

export const Neutral: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    title: 'Meter',
    type: 'neutral',
    centerTitle: false,
    size: 'large',
    min: 1,
    max: 6,
    actual: 4,
    content: '',
  },
}

export const Success: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'success',
  },
}

export const Warning: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'warning',
  },
}

export const Danger: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Neutral.args,
    type: 'danger',
  },
}

export const Small: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Neutral.args,
    title: 'Small Meter',
    size: 'small',
  },
}
