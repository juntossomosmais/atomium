import { withActions } from '@storybook/addon-actions/decorator'

export const SelectStoryArgs = {
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
}

export const SelectComponentArgs = {
  interface: 'popover',
  color: undefined,
  mode: 'md',
  disabled: false,
  multiple: false,
  label: 'Select',
  labelPlacement: 'stacked',
}
