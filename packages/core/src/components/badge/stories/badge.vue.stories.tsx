import { AtomBadge } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { BadgeStoryArgs } from './badge.args'

export default {
  title: 'Components/Badge',
  ...BadgeStoryArgs,
} as Meta

const createBadge = (args) => ({
  components: { AtomBadge },
  setup() {
    return { args }
  },
  template: `
    <AtomBadge type="${args.type} shape='${args.shape}'" size="${args.size}">
    >{{ args.label }}</AtomBadge>
  `,
})

export const Primary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    type: 'primary',
    label: 'Badge',
    shape: 'rounded',
    size: 'default',
  },
}

export const Secondary: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'secondary',
  },
}

export const Success: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'success',
  },
}

export const Warning: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'warning',
  },
}

export const Danger: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'danger',
  },
}

export const Neutral: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'neutral',
  },
}

export const Dark: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'dark',
  },
}

export const Info: StoryObj = {
  render: (args) => createBadge(args),
  args: {
    ...Primary.args,
    type: 'info',
  },
}
