import { Category } from '@atomium/storybook-utils/enums/table'
import { withActions } from '@storybook/addon-actions/decorator'

export const ListSliderStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'List Slider is a component that displays a list of items in a horizontal slider.',
      },
    },
    actions: {
      handles: ['clickNext', 'clickPrev'],
    },
  },
  decorators: [withActions],
  argTypes: {
    hasNavigation: {
      description: 'If `true`, the carousel will have navigation buttons.',
      defaultValue: { summary: true },
      table: {
        category: Category.PROPERTIES,
      },
    },
    centralized: {
      description:
        'If `true`, the items will be centralized in the slider when do not fit in the viewport.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    '--slider-height': {
      description: 'The min-height of the slider.',
      defaultValue: { summary: '42px' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--slider-gap': {
      description: 'Gap between each item in the slider.',
      defaultValue: { summary: '--spacing-base' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--button-navigation-size': {
      description: 'The size of the navigation buttons.',
      defaultValue: { summary: '--spacing-xxxxlarge' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    clickNext: {
      action: 'clickNext',
      description:
        'Emitted when the next button is clicked. The event detail is the click event.',
      table: {
        category: Category.EVENTS,
      },
    },
    clickPrev: {
      action: 'clickPrev',
      description:
        'Emitted when the previous button is clicked. The event detail is the click event.',
      table: {
        category: Category.EVENTS,
      },
    },
    'CustomEvent("transitionend")': {
      description:
        'The event dispatched when transition ends to use in the parent component, for example for add a class to the current slide or add a lazy load to the images.',
      table: {
        category: Category.EVENTS,
      },
    },
  },
}

export const ListSliderComponentArgs = {}
