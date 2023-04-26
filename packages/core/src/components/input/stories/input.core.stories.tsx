import { Meta, StoryObj } from '@storybook/html'

import { InputComponentArgs, InputStoryArgs } from './input.args'

export default {
  title: 'Components/Input',
  ...InputStoryArgs,
} as Meta

const createInput = (args) => {
  return `
<atom-input
  label=${args.label}
  label-placement=${args.labelPlacement}
  fill=${args.fill}
  color=${args.color}
  mode=${args.mode}
  disabled=${args.disabled}
  placeholder=${args.placeholder}
  type=${args.type}
  clear-on-edit=${args.clearOnEdit}
  pattern=${args.pattern}
  required=${args.required}
  inputmode=${args.inputmode}
/>
`
}

export const Default: StoryObj = {
  render: (args) => createInput(args),
  args: {
    ...InputComponentArgs,
  },
}
