import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoInput } from 'atomium/dist/types'

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
    labelText: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    labelPosition: {
      control: 'select',
      options: ['fixed', 'stacked', 'floating'],
    },
    fill: {
      control: 'select',
      options: ['default', 'outline', 'solid'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'inline-radio',
      options: { text: 'text', password: 'password' },
    },
    autofocus: {
      control: 'boolean',
    },
    mode: {
      control: 'select',
      options: ['ios', 'md'],
    },
    expandable: {
      control: 'boolean',
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
    readonly: {
      control: 'boolean',
    },
    required: {
      control: 'boolean',
    },
    spellcheck: {
      control: 'boolean',
    },
    autocapitalize: {
      control: 'select',
      options: ['none', 'sentences', 'words', 'characters'],
    },
    autocomplete: {
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
  label-text="${args.labelText}"
  label-position="${args.labelPosition}"
  fill="${args.fill}"
  color="${args.color}"
  mode="${args.mode}"
  expandable="${args.expandable}"
  size="${args.size}"
  disabled="${args.disabled}"
  placeholder="${args.placeholder}"
  type="${args.type}"
  autofocus="${args.autofocus}"
  clear-input="${args.clearInput}"
  clear-on-edit="${args.clearOnEdit}"
  pattern="${args.pattern}"
  readonly="${args.readonly}"
  required="${args.required}"
  spellcheck="${args.spellcheck}"
  autocapitalize="${args.autocapitalize}"
  autocomplete="${args.autocomplete}"
  inputmode="${args.inputmode}"
/>
  `
}

export const Default: Story = {
  render: (args) => createInput(args),
  args: {
    labelText: 'Example input',
    labelPosition: 'floating',
    fill: 'default',
    color: 'primary',
    mode: 'md',
    disabled: false,
    placeholder: 'Placeholder',
    readonly: false,
  },
}
