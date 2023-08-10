import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const CarouselStoryArgs = {
  decorators: [withActions],
  parameters: {
    docs: {
      description: {
        component: `Wrapper of Swiper Element, simplified and with UI to match our Style Guide. Read the [Swiper documentation](https://swiperjs.com/element) for any issue or for more information.`,
      },
    },
    actions: {
      handles: ['atomClickPrev', 'atomClickNext', 'atomChange'],
    },
  },
  argTypes: {
    autoplay: {
      description: 'Set to `true` to enable carousel autoplay',
      defaultValue: { summary: false },

      table: {
        category: Category.PROPERTIES,
      },
    },
    autoplayDelay: {
      description: 'Delay between transitions (in ms)',
      defaultValue: { summary: 0 },

      table: {
        category: Category.PROPERTIES,
      },
    },
    freeMode: {
      description: 'Set to `true` to enable free mode functionality',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    loop: {
      description: ' Set to `true` to enable continuous loop mode',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    navigation: {
      description: 'If `true`, enable pagination.',
      defaultValue: { summary: true },
      table: {
        category: Category.PROPERTIES,
      },
    },
    pagination: {
      description: 'If `true`, enable pagination.',
      defaultValue: { summary: true },
      table: {
        category: Category.PROPERTIES,
      },
    },
    paginationClickable: {
      description:
        'If `true` then clicking on pagination button will cause transition to appropriate slide. Only for bullets pagination type.',
      defaultValue: { summary: false },
      table: {
        category: Category.PROPERTIES,
      },
    },
    paginationType: {
      options: ['bullets', 'fraction', 'progressbar', 'custom'],
      description:
        ' String with type of pagination. Types: `bullets`, `fraction`, `progressbar` or `custom`.',
      defaultValue: { summary: 'bullets' },
      table: {
        category: Category.PROPERTIES,
      },
    },

    slidesPerGroup: {
      description:
        'Set numbers of slides to define and enable group sliding. Useful to use with slidesPerView > 1',
      defaultValue: { summary: 1 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    slidesPerView: {
      description:
        "Number of slides per view (slides visible at the same time on slider's container).",
      defaultValue: { summary: 1 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    spaceBetween: {
      description: 'Distance between slides in px.',
      defaultValue: { summary: 0 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    speed: {
      description: 'Duration of transition between slides (in ms)',
      defaultValue: { summary: 300 },
      table: {
        category: Category.PROPERTIES,
      },
    },
    atomChange: {
      action: 'atomChange',
      description: 'Emitted when the visible item changes.',
      table: {
        category: Category.EVENTS,
      },
    },
    atomClickPrev: {
      action: 'atomClickPrev',
      description: 'Emitted when clicked on the left navigation handler',
      table: {
        category: Category.EVENTS,
      },
    },
    atomClickNext: {
      action: 'atomClickNext',
      description: 'Emitted when clicked on the right navigation handler',
      table: {
        category: Category.EVENTS,
      },
    },
  },
}
