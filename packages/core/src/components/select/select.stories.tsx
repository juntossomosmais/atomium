import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoSelect } from '@atomium/core/dist'

type argsSelect = AtoSelect

export default {
  title: 'Ionic Components/Select',
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
<ato-select
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
  document.querySelector('ato-select').options = [
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
