import { h } from '@stencil/core'
import { Meta, StoryObj } from '@storybook/react'

import { AtomInput } from '@juntossomosmais/atomium/react'

import { InputComponentArgs, InputStoryArgs } from './input.args'

export default {
  title: 'Components/Input',
  component: AtomInput,
  ...InputStoryArgs,
} as Meta

const createInput = (args) => (
  <AtomInput
    label={args.label}
    labelPlacement={args.labelPlacement}
    fill={args.fill}
    color={args.color}
    mode={args.mode}
    disabled={args.disabled}
    placeholder={args.placeholder}
    type={args.type}
    clearOnEdit={args.clearOnEdit}
    pattern={args.pattern}
    required={args.required}
    inputmode={args.inputmode}
  />
)

export const Default: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
  },
}
