import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const IconStoryArgs = {
  decorators: [withActions],
  argTypes: {
    icon: {
      control: 'text',
      table: {
        category: Category.PROPERTIES,
      },
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
      table: {
        category: Category.PROPERTIES,
      },
    },
    size: {
      control: 'select',
      options: ['small', 'large'],
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}

export const IconComponentArgs = {
  icon: 'heart',
  color: 'secondary',
  size: 'large',
}
