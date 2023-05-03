import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

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
    size={args.size}
    disabled={args.disabled}
    loading={args.loading}
    type={args.type}
    mode={args.mode}
    expand={args.expand}
    href={args.href}
    rel={args.rel}
    target={args.target}
    download={args.download}
  >
    {args.label}
  </AtomButton>
)

export const Primary: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...ButtonComponentArgs,
  },
}

export const Secondary: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
  },
}

export const Text: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'clear',
  },
}
