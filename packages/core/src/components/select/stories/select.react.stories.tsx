import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { AtomSelect } from '@juntossomosmais/atomium/react'

import { SelectComponentArgs, SelectStoryArgs } from './select.args'

export default {
  title: 'Components/Select',
  component: AtomSelect,
  ...SelectStoryArgs,
} as Meta

const createSelect = (args) => (
  <AtomSelect
    placeholder={args.placeholder}
    color={args.color}
    fill={args.fill}
    disabled={args.disabled}
    readonly={args.readonly}
    multiple={args.multiple}
    label={args.label}
    helper-text={args.helperText}
    error-text={args.errorText}
    icon={args.icon}
    mode={args.mode}
    options={[
      { id: '1', value: 'Red', disabled: false },
      { id: '2', value: 'Green', disabled: false },
      { id: '3', value: 'Blue', disabled: false },
      { id: '4', value: 'Disabled example', disabled: true },
    ]}
  />
)

export const Default: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
  },
}

export const Disabled: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
    disabled: true,
  },
}

export const SelectIcon: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
    icon: 'people',
  },
}

export const HelperText: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
    helperText: 'Example of helper text',
  },
}

export const ErrorText: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
    errorText: 'Example of error text',
  },
}

export const Multiple: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
    multiple: true,
  },
}
