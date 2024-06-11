import { Category } from '@atomium/storybook-utils/enums/table'

export const ListSliderStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'List Slider is a component that displays a list of items in a horizontal slider.',
      },
    },
  },
  argTypes: {
    hasNavigation: {
      description: 'If `true`, the carousel will have navigation buttons.',
      defaultValue: { summary: true },
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
  },
}

export const ListSliderComponentArgs = {}
