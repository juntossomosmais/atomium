import { Category } from '@atomium/storybook-utils/enums/table'

export const CarouselStoryArgs = {
  parameters: {
    docs: {
      description: {
        component:
          'Carousel is a slideshow for cycling through a series of content.',
      },
    },
  },
  argTypes: {
    hasNavigation: {
      control: 'boolean',
      description: 'If `true`, the carousel will have navigation buttons.',
      defaultValue: true,
      table: {
        category: Category.PROPERTIES,
      },
    },
    hasPagination: {
      control: 'boolean',
      description: 'If `true`, the carousel will have pagination buttons.',
      defaultValue: true,
      table: {
        category: Category.PROPERTIES,
      },
    },
    loop: {
      control: 'boolean',
      description: 'If `true`, the user cannot interact with the button.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    autoplay: {
      description:
        'When set a number, the carousel will autoplay. The number is the interval of autoplay in milliseconds.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    thumbnails: {
      description:
        'An array of strings representing the thumbnails. When set, the carousel will have thumbnails as pagination.',
      table: {
        category: Category.PROPERTIES,
      },
    },
    '--carousel-height': {
      description: 'The height of the carousel.',
      defaultValue: { summary: '42px' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--thumbnail-size': {
      description: 'The height of the thumbnail.',
      defaultValue: { summary: '64px' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
    '--thumbnail-object-fit': {
      description: 'The object-fit of the thumbnail.',
      defaultValue: { summary: 'contain' },
      table: {
        category: Category.CSS_CUSTOM_PROPERTIES,
      },
    },
  },
}

export const CarouselComponentArgs = {
  loop: false,
  hasNavigation: true,
  hasPagination: true,
}
