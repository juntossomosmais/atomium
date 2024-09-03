import { AtomSelect } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import { SelectComponentArgs, SelectStoryArgs } from './select.args'

export default {
  title: 'Components/Select',
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
const createSelect = (args, options = optionsDefault) => ({
  components: { AtomSelect },
  setup() {
    return { args, options }
  },
  template: `
    <AtomSelect
      placeholder="${args.placeholder}"
      color="${args.color}"
      fill="${args.fill}"
      disabled="${args.disabled}"
      readonly="${args.readonly}"
      multiple="${args.multiple}"
      label="${args.label}"
      helperText="${args.helperText}"
      errorText="${args.errorText}"
      ${args.icon ? `icon="${args.icon}"` : ''}
      mode="${args.mode}"
      value="${args.value}"
      :options="options"
    />
  `,
})

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
const optionWhitTag = [
  ...optionsDefault,
  {
    id: '3',
    value: 'Nice Green',
    disabled: false,
    tag: { color: 'success', label: 'New ' },
  },
]

export const WhitTag: StoryObj = {
  render: (args) => createSelect(args, optionWhitTag),
  args: {
    ...SelectComponentArgs,
  },
}
