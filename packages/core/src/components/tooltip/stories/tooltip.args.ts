import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from 'storybook/actions/decorator'

export const TooltipStoryArgs = {
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
        'auto',
        'auto-start',
        'auto-end',
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'right',
        'right-start',
        'right-end',
        'left',
        'left-start',
        'left-end',
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
    text: {
      control: 'text',
      description: 'Determines a text for tooltip.',
      table: {
        category: Category.PROPERTIES,
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
    '--background': {
      description: 'Custom background variable to tooltip.',
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
  },
}

export const TooltipComponentArgs = {
  element: 'atomium-element',
  placement: 'top',
  text: 'Tooltip',
  action: 'hover',
  open: false,
}
