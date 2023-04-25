import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtomSelect } from './select'

type argsSelect = AtomSelect

export default {
  title: 'Components/Select',
  parameters: {
    actions: {
      handles: ['atomChange', 'atomFocus', 'atomBlur'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
    },
    labelPlacement: {
      control: 'select',
      options: ['stacked', 'fixed'],
    },
    interface: {
      control: 'select',
      options: ['popover', 'action-sheet'],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    multiple: {
      control: 'boolean',
    },
    mode: {
      control: 'select',
      options: ['ios', 'md'],
    },
    disabled: {
      control: 'boolean',
    },
  },
} as Meta<argsSelect>

type Story = StoryObj<argsSelect>

const createSelect = (args: argsSelect) => {
  return `
<atom-select
  name='select'
  placeholder='Select an option'
  interface=${args.interface}
  color=${args.color}
  mode=${args.mode}
  disabled=${args.disabled}
  multiple=${args.multiple}
  label=${args.label}
  label-placement=${args.labelPlacement}
/>

<script>
  document.querySelector('atom-select').options = [
    { value: 'Red', disabled: false },
    { value: 'Green', disabled: false },
    { value: 'Blue', disabled: false },
    { value: 'Disabled example', selected: false, disabled: true },
  ]
</script>
  `
}

export const Default: Story = {
  render: (args) => createSelect(args),
  args: {
    interface: 'popover',
    color: undefined,
    mode: 'md',
    disabled: false,
    multiple: false,
    label: 'Select',
    labelPlacement: 'stacked',
  },
}
