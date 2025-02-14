import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const RichTooltipStoryArgs = {
  parameters: {
    actions: {
      handles: ['atomOpen', 'atomClose'],
    },
    decorators: [withActions],
    docs: {
      description: {
        component:
          'Tooltip is a small pop-up box that appears when a user moves a mouse over an element',
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
      description: 'Determines placement for tooltip',
      table: {
        category: Category.PROPERTIES,
      },
    },
    action: {
      control: 'select',
      defaultValue: { summary: 'hover' },
      options: ['hover', 'click'],
      description:
        'Determines the trigger action for the tooltip: `hover` or `click`.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    element: {
      control: 'text',
      description:
        'Specifies the element responsible for opening/closing the tooltip.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    open: {
      control: 'boolean',
      description: 'Controls whether the tooltip is open or closed.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    label: {
      control: 'text',
      description: 'Determines a title for tooltip.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    text: {
      control: 'text',
      description: 'Determines a text for tooltip.',
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
      description: 'Event emitted when the tooltip is closed.',
      table: {
        category: Category.EVENTS,
      },
    },
  },
}

export const RichTooltipComponentArgs = {
  element: 'atomium-element',
  placement: 'top',
  text: 'Supporting line text lorem ipsum dolor sit amet, consectetur',
  action: 'hover',
  label: 'Title',
  actionText: 'Action Button',
  open: false,
}
