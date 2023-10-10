import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const TooltipStoryArgs = {
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['atomClick'],
    },
    docs: {
      description: {
        component:
          'Wrapper of Ionic Chip component. Read the [Ionic documentation](https://ionicframework.com/docs/api/chip) for more information about the available properties and possibilities.',
      },
    },
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the user cannot interact with the chip.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    activated: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the chip will be activated.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    icon: {
      control: 'text',
      description: 'If have an value, the chip will have an icon.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    close: {
      control: 'boolean',
      defaultValue: { summary: false },
      description: 'If true, the chip will have a close button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    mode: {
      control: 'select',
      options: ['md', 'ios'],
      defaultValue: { summary: 'md' },
      description: 'The mode determines which platform styles to use.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomClick: {
      action: 'atomClick',
      description: 'Emitted when the chip is clicked.',
      table: {
        category: 'Events',
      },
    },
  },
}

export const TooltipComponentArgs = {
  action: 'hover',
  element: 'atomium-element'
}
