import { withActions } from '@storybook/addon-actions/decorator'
import { Meta, StoryObj } from '@storybook/html'

import { AtoIcon } from './icon'

type argsIcon = AtoIcon

export default {
  title: 'Ionic Components/Icon',
  decorators: [withActions],
  argTypes: {
    icon: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'danger',
        'light',
        'medium',
        'dark',
      ],
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
    },
  },
} as Meta<argsIcon>

type Story = StoryObj<argsIcon>

const createIcon = (args: argsIcon) => {
  return `
    <ato-icon
      icon=${args.icon}
      color=${args.color}
      size=${args.size}
    />
  `
}

export const Default: Story = {
  render: (args) => createIcon(args),
  args: {
    icon: 'heart',
    color: 'secondary',
    size: 'large',
  },
}
