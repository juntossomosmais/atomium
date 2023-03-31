import { Meta } from '@storybook/html'
import { AtoSelect } from 'atomium/dist/types'

import readme from './readme.md'

export default {
  title: 'Components/Select',
  parameters: {
    notes: readme,
  },
  argTypes: {
    labelText: {
      control: 'text',
    },
    interface: {
      control: {
        type: 'select',
        options: ['popover', 'action-sheet'],
      },
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary'],
      },
    },
    labelPosition: {
      control: {
        type: 'select',
        options: ['fixed', 'stacked'],
      },
    },
    multiple: {
      control: 'boolean',
    },
    mode: {
      control: {
        type: 'select',
        options: ['ios', 'md'],
      },
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta

export const Default = (args: AtoSelect) => {
  return `
    <ato-select
      name='select'
      placeholder='Select an option'
      interface=${args.interface}
      color=${args.color}
      mode=${args.mode}
      disabled=${args.disabled}
      multiple=${args.multiple}
      label-text=${args.labelText}
      label-position=${args.labelPosition}
    />

    <script>
      document.querySelector('ato-select').options = [
        { value: 'Red', disabled: false },
        { value: 'Green', disabled: false },
        { value: 'Blue', disabled: false },
        { value: 'Disabled example', selected: false, disabled: true },
      ]
    </script>
  `
}

Default.args = {
  interface: 'popover',
  color: 'primary',
  mode: 'md',
  disabled: false,
  multiple: false,
  labelText: 'Select',
  labelPosition: 'floating',
}
