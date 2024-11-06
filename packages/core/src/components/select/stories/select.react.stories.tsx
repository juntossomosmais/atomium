import { AtomSelect } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { SelectComponentArgs, SelectStoryArgs } from './select.args'

export default {
  title: 'Components/Select',
  component: AtomSelect,
  ...SelectStoryArgs,
} as Meta

const optionsDefault = [
  { id: '1', value: 'Red', disabled: false },
  {
    id: '2',
    value: 'Green',
    disabled: false,
  },
  { id: '3', value: 'Blue', disabled: false },
  {
    id: '4',
    value: 'nice_blue',
    disabled: false,
    label: 'Nice Blue',
  },
  { id: '5', value: 'Disabled example', disabled: true },
]

const createSelect = (args, options = optionsDefault) => (
  <AtomSelect
    placeholder={args.placeholder}
    fill={args.fill}
    disabled={args.disabled}
    readonly={args.readonly}
    multiple={args.multiple}
    label={args.label}
    helper-text={args.helperText}
    error-text={args.errorText}
    icon={args.icon}
    mode={args.mode}
    value={args.value}
    options={options}
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
    icon: 'account-multiple',
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

const optionWithTag = [
  {
    id: '1',
    value: 'Nice Green',
    disabled: false,
    tag: { color: 'success', label: 'New ' },
  },
  {
    id: '2',
    value: 'Nice Red',
    disabled: false,
    tag: { color: 'danger', label: 'Old ' },
  },
]

export const WithTag: StoryObj = {
  render: (args) => createSelect(args, optionWithTag),
  args: {
    ...SelectComponentArgs,
  },
}
