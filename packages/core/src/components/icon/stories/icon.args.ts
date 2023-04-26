import { withActions } from '@storybook/addon-actions/decorator'

export const IconStoryArgs = {
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
}

export const IconComponentArgs = {
  icon: 'heart',
  color: 'secondary',
  size: 'large',
}
