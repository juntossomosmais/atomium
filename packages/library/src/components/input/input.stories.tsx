import { Meta } from '@storybook/html'
import { AtoInput } from 'atomium/dist/types'

import readme from './readme.md'

export default {
  title: 'Components/Input',
  parameters: {
    notes: readme,
    actions: {
      handles: ['atoChange', 'atoFocus', 'atoBlur'],
    },
  },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    mode: {
      control: {
        type: 'select',
        options: ['ios', 'md'],
      },
    },
    expandable: {
      control: {
        type: 'boolean',
      },
    },
    fill: {
      control: {
        type: 'select',
        options: ['default', 'outline', 'solid'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    disabled: {
      control: 'boolean',
    },
    placeholder: {
      control: 'text',
    },
    type: {
      control: {
        type: 'inline-radio',
        options: { text: 'text', password: 'password' },
      },
    },
    autofocus: {
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
      control: {
        type: 'select',
        options: ['none', 'sentences', 'words', 'characters'],
      },
    },
    autocomplete: {
      control: {
        type: 'boolean',
      },
    },
    inputmode: {
      control: {
        type: 'select',
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
    labelPosition: {
      control: {
        type: 'select',
        options: ['fixed', 'stacked', 'floating'],
      },
    },
  },
} as Meta

export const Default = (args: AtoInput) => {
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

Default.args = {
  labelText: 'Example input',
  labelPosition: 'floating',
  fill: 'default',
  color: 'primary',
  mode: 'md',
  disabled: false,
  placeholder: 'Placeholder',
  readonly: false,
}
