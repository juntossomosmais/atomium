import { AtomButton, AtomIcon } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { ButtonComponentArgs, ButtonStoryArgs } from './button.args'

export default {
  title: 'Components/Button',
  component: AtomButton,
  ...ButtonStoryArgs,
} as Meta

const createButton = (args, themeColor = 'light') => (
  <div className={`theme-${themeColor}`}>
    <AtomButton
      color={args.color}
      fill={args.fill}
      size={args.size}
      disabled={args.disabled}
      loading={args.loading}
      type={args.type}
      mode={args.mode}
      expand={args.expand}
    >
      {args.label}
    </AtomButton>
  </div>
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

export const OutlineFilled: StoryObj = {
  render: (args) => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    fill: 'outline-filled',
    color: 'secondary',
  },
}

export const White: StoryObj = {
  render: (args) => createButton(args, 'dark'),
  args: {
    ...Primary.args,
    color: 'white',
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

export const CircleButton: StoryObj = {
  render: (args: any) => (
    <AtomButton
      color={args.color}
      fill={args.fill}
      size={args.size}
      disabled={args.disabled}
      loading={args.loading}
      type={args.type}
      mode={args.mode}
      expand={args.expand}
      shape={args.shape}
    >
      <AtomIcon icon='heart' />
    </AtomButton>
  ),
  args: {
    ...Primary.args,
    color: 'secondary',
    fill: 'outline',
    shape: 'circle',
  },
}

export const Disabled: StoryObj = {
  render: (args) => createButton(args),
  args: {
    ...Primary.args,
    disabled: true,
  },
}

export const IconAndText: StoryObj = {
  render: (args: any) => (
    <AtomButton
      color={args.color}
      fill={args.fill}
      size={args.size}
      disabled={args.disabled}
      loading={args.loading}
      type={args.type}
      mode={args.mode}
      expand={args.expand}
      shape={args.shape}
    >
      <AtomIcon icon='heart' />
      {args.label}
    </AtomButton>
  ),
  args: {
    ...Primary.args,
  },
}

export const Link: StoryObj = {
  render: (args: any) => (
    <AtomButton
      color={args.color}
      fill={args.fill}
      size={args.size}
      disabled={args.disabled}
      loading={args.loading}
      type={args.type}
      mode={args.mode}
      expand={args.expand}
      shape={args.shape}
      download={args.download}
      href={args.href}
      target={args.target}
    >
      {args.label}
    </AtomButton>
  ),
  args: {
    ...Primary.args,
    href: undefined,
    download: undefined,
    target: undefined,
  },
  argTypes: {
    href: {
      options: ['Download', 'Navigate'],
      mapping: {
        Download: '/custom/jsm.svg',
        Navigate: 'https://www.juntossomosmais.com.br',
      },
    },
    download: {
      control: 'text',
    },
    target: {
      options: ['_blank', '_self', '_parent', '_top'],
    },
  },
}
