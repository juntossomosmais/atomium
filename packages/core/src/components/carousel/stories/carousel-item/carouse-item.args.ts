import { withActions } from '@storybook/addon-actions/decorator'

import { Category } from '@atomium/storybook-utils/enums/table'

export const CarouselItemStoryArgs = {
  decorators: [withActions],
  parameters: {
    docs: {
      source: {
        code: null,
      },
      description: {
        component: `Wrapper of Swiper Slide, simplified and with UI to match our Style Guide. Read the [Swiper documentation](https://swiperjs.com/element) for any issue or for more information.`,
      },
    },
  },
  argTypes: {
    lazy: {
      defaultValue: { summary: false },
      description:
        'Set to `true` if you use lazy loading images, to swiper-slide add preloader element.',
      table: {
        category: Category.PROPERTIES,
      },
    },
  },
}
