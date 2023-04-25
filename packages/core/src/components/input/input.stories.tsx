import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoInput } from './input'

type argsInput = AtoInput

export default {
  title: 'Components/Input',
  parameters: {
    actions: {
      handles: ['atoChange', 'atoFocus', 'atoBlur'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
    },
    labelPlacement: {
      control: 'select',
      options: ['fixed', 'stacked', 'floating'],
    },
    placeholder: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    fill: {
      control: 'select',
      options: ['outline', 'solid'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'inline-radio',
      options: { text: 'text', password: 'password' },
    },
    mode: {
      control: 'select',
      options: ['ios', 'md'],
    },
    clearInput: {
      control: 'boolean',
    },
    clearOnEdit: {
      control: 'boolean',
    },
    pattern: {
      control: 'text',
    },
    required: {
      control: 'boolean',
    },
    inputmode: {
      control: 'select',
      options: [
        'none',
        'decimal',
        'numeric',
        'tel',
        'search',
        'text',
        'url',
        'email',
      ],
    },
  },
} as Meta<argsInput>

type Story = StoryObj<argsInput>

const createInput = (args: argsInput) => {
  return `
<ato-input
  label="${args.label}"
  label-placement="${args.labelPlacement}"
  fill="${args.fill}"
  color="${args.color}"
  mode="${args.mode}"
  disabled="${args.disabled}"
  placeholder="${args.placeholder}"
  type="${args.type}"
  clear-on-edit="${args.clearOnEdit}"
  pattern="${args.pattern}"
  required="${args.required}"
  inputmode="${args.inputmode}"
/>
  `
}

export const Default: Story = {
  render: (args) => createInput(args),
  args: {
    label: 'Example input',
    labelPlacement: 'floating',
    fill: 'outline',
    color: undefined,
    mode: 'md',
    disabled: false,
    placeholder: 'Placeholder',
    clearInput: false,
    clearOnEdit: false,
  },
}
