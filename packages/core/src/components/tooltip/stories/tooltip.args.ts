import { Category } from '@atomium/storybook-utils/enums/table'

export const TooltipStoryArgs = {
  parameters: {
    actions: {
      handles: ['atomClick'],
    },
    docs: {
      description: {
        component: 'Atom-Tooltip',
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
        'left',
      ],
      description: 'Determines placement for tooltip',
      table: {
        category: Category.PROPERTIES,
      },
    },
    element: {
      control: 'text',
      description:
        'Determines which element is responsible to open/close tooltip.',
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
  },
}

export const TooltipComponentArgs = {
  element: 'atomium-element',
  placement: 'top',
}
