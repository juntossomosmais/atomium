import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const PopoverStoryArgs = {
  parameters: {
    actions: {
      handles: ['atomOpen', 'atomClose'],
    },
    decorators: [withActions],
    docs: {
      description: {
        component:
          'Popover is a component that provides more information to the user and allows them to perform quick actions within the context of the problem.',
      },
    },
    layout: 'centered',
  },
  argTypes: {
    placement: {
      control: 'select',
      defaultValue: { summary: 'top' },
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'left',
      ],
      description: 'Determines placement for popover',
      table: {
        category: Category.PROPERTIES,
      },
    },
    action: {
      control: 'select',
      defaultValue: { summary: 'hover' },
      options: ['hover', 'click'],
      description:
        'Determines the trigger action for the popover: `hover` or `click`.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    element: {
      control: 'text',
      description:
        'Specifies the element responsible for opening/closing the popover.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the popover is open or closed.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    label: {
      control: 'text',
      description: 'Determines a title for popover.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    text: {
      control: 'text',
      description: 'Determines a text for popover.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    actionText: {
      control: 'text',
      description: 'Determines a text for action button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    buttonAction: {
      description:
        'Event emitted when the action button is clicked. Action needs to be click to show the button.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomOpen: {
      description:
        'Event emitted when hover element, but for mobile when click in element.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomClose: {
      description: 'Event emitted when the popover is closed.',
      table: {
        category: Category.EVENTS,
      },
    },
  },
}

export const PopoverComponentArgs = {
  element: 'atomium-element',
  placement: 'top',
  text: 'Supporting line text lorem ipsum dolor sit amet, consectetur',
  action: 'hover',
  label: 'Title',
  actionText: 'Action Button',
  open: false,
}
