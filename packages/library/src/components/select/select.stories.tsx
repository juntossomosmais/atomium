import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoSelect } from 'atomium/dist/types'

type argsSelect = AtoSelect

export default {
  title: 'Components/Select',
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
    interface: {
      control: 'select',
      options: ['popover', 'action-sheet'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    labelPosition: {
      control: 'select',
      options: ['stacked', 'fixed'],
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

export const Primary: Story = {
  render: (args) => createSelect(args),
  args: {
    interface: 'popover',
    color: 'primary',
    mode: 'md',
    disabled: false,
    multiple: false,
    labelText: 'Select',
    labelPosition: 'stacked',
  },
}
