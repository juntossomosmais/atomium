import { h } from '@stencil/core'
import { Meta, StoryObj } from '@storybook/react'

import { AtomSelect } from '@juntossomosmais/atomium/react'

import { SelectComponentArgs, SelectStoryArgs } from './select.args'

export default {
  title: 'Components/Select',
  component: AtomSelect,
  ...SelectStoryArgs,
} as Meta

const createSelect = (args) => (
  <AtomSelect
    name="select"
    placeholder="Select an option"
    interface={args.interface}
    color={args.color}
    mode={args.mode}
    disabled={args.disabled}
    multiple={args.multiple}
    label={args.label}
    label-placement={args.labelPlacement}
  />
)

export const Default: StoryObj = {
  render: (args) => createSelect(args),
  args: {
    ...SelectComponentArgs,
  },
}
