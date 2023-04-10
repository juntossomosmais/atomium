import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoButton } from 'atomium/dist/types'

type argsButton = AtoButton & {
  label: string
}

export default {
  title: 'Ionic Components/Button',
  parameters: {
    actions: {
      handles: ['atoClick'],
    },
  },
  decorators: [withActions],
  argTypes: {
    label: {
      control: 'text',
      description: 'The label of the button',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: "The color to use from your application's color palette.",
    },
    fill: {
      control: 'select',
      options: ['solid', 'clear', 'outline'],
      description: 'The fill style to use.',
    },
    shape: {
      control: 'select',
      options: ['none', 'round'],
      description: 'The shape of the button.',
    },
    expand: {
      control: 'select',
      options: ['none', 'block', 'full'],
      description: 'Expands the button to fill its parent container.',
    },
    size: {
      control: 'select',
      options: ['small', 'default', 'large'],
      description: 'The size of the button.',
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the user cannot interact with the button.',
    },
    type: {
      control: 'select',
      options: ['submit', 'reset', 'button'],
      description: 'The type of the button.',
    },
    mode: {
      control: 'select',
      options: ['md', 'ios'],
      description: 'The mode determines which platform styles to use.',
    },
    atoClick: {
      action: 'atoClick',
      description: 'Emitted when the button is clicked.',
    },
  },
} as Meta<argsButton>

type Story = StoryObj<argsButton>

const createButton = (args: argsButton) => {
  return `
<ato-button
  color="${args.color}"
  fill="${args.fill}"
  shape="${args.shape}"
  expand="${args.expand}"
  size="${args.size}"
  disabled="${args.disabled}"
  type="${args.type}"
  mode="${args.mode}"
>
  ${args.label}
</ato-button>
  `
}

export const Default: Story = {
  render: (args) => createButton(args),
  args: {
    color: 'primary',
    fill: 'solid',
    shape: 'round',
    size: undefined,
    expand: undefined,
    disabled: false,
    type: 'button',
    mode: 'md',
    label: 'Button',
  },
}

export const Secondary: Story = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    color: 'secondary',
  },
}

export const Outline: Story = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    fill: 'outline',
  },
}

export const Clear: Story = {
  render: (args) => createButton(args),
  args: {
    ...Default.args,
    fill: 'clear',
  },
}
