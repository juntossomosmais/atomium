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
    .hasCenterTitle=${args.hasCenterTitle}
    .min=${args.min}
    .max=${args.max}
    .actual=${args.actual}
  >
    <div>${args.content || `${args.actual} of ${args.max}`}</div>
  </atom-meter>`
}

export const Neutral: StoryObj = {
  render: (args) => createMeter(args),
  args: {
    title: 'Meter',
    type: 'neutral',
    hasCenterTitle: false,
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
