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

export const Neutral: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    title: 'Meter',
    type: 'neutral',
    size: 'large',
    value: 'Lesgo',
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
