import { h } from '@stencil/core'
import { Meta, StoryObj } from '@storybook/react'

import { AtomButton } from '@juntossomosmais/atomium/react'

import { ButtonComponentArgs, ButtonStoryArgs } from './button.args'

export default {
  title: 'Components/Button',
  component: AtomButton,
  ...ButtonStoryArgs,
} as Meta

const createButton = (args) => (
  <AtomButton
    color={args.color}
    fill={args.fill}
    shape={args.shape}
    expand={args.expand}
    size={args.size}
    disabled={args.disabled}
    type={args.type}
    mode={args.mode}
  >
    {args.label}
  </AtomButton>
)

export const Default: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...ButtonComponentArgs,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    color: 'secondary',
  },
}

export const Outline: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    fill: 'outline',
  },
}

export const Clear: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    fill: 'clear',
  },
}
