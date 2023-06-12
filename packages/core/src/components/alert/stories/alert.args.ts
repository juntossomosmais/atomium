import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const AlertStoryArgs = {
  decorators: [withActions],
  parameters: {
    actions: {
      handles: ['atomClose', 'atomAction'],
    },
    docs: {
      description: {
        component:
          'Alerts are used to provide feedback to the user about the status of a task or process. Alerts can be used to notify the user about information or errors, success or warnings, or to confirm an action.',
      },
    },
  },
  argTypes: {
    messageTitle: {
      control: 'text',
      description:
        'The title of the alert, this property accepts HTML strings.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    messageText: {
      control: 'text',
      description:
        'The text message of the alert, this property accepts HTML strings.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    actionText: {
      control: 'text',
      description: 'The text of the action button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    color: {
      control: 'select',
      description: 'The color to use from your application palette.',
      options: ['info', 'success', 'warning', 'danger', 'neutral'],
      defaultValue: { summary: 'neutral' },
      table: {
        category: Category.PROPERTIES,
      },
    },
    icon: {
      control: 'text',
      description: 'The name of the icon to use.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    close: {
      control: 'boolean',
      description: 'If `true`, the alert can be closed.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomAction: {
      description: 'Event emitted when the action button is clicked.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomClose: {
      description: 'Event emitted when the alert is closed.',
      table: {
        category: Category.EVENTS,
      },
    },
  },
}

export const AlertComponentArgs = {
  color: 'neutral',
  close: true,
  messageTitle: 'Title example of alert',
  messageText: 'Nice message example',
  actionText: 'Action example',
}
