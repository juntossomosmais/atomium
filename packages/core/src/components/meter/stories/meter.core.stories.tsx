import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { MeterStoryArgs } from './meter.args'

export default {
  title: 'Components/Meter',
  ...MeterStoryArgs,
} as Meta

const createMeter = (args) => {
  return html`<atom-meter
    .type=${args.type}
    .size=${args.size}
    .title=${args.title}
    .value=${args.value}
  ></atom-meter>`
}

export const Horizontal: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    title: 'Meter',
    type: 'success',
    size: 'large',
    value: 'Lesgo',
  },
}

export const Vertical: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    ...Horizontal.args,
    type: 'neutral',
  },
}
