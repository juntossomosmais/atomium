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
        component: "Wrapper of Swiper Slide, simplified and with UI to match our Style Guide. Read the [Swiper documentation](https://swiperjs.com/element) for any issue or for more information. <br/> Event tho we do have a AtomCarouselItem component this was only created in order to achieve compatibility with JSX, in fact this is a _virtual component_, read more about it at [ADR 0013](./?path=/docs/docs-architecture-decision-records-adr-0013-why-using-a-virtual-carousel-item--docs). <br/>  <blockquote> This story page is only code writing sample, its not fully working.</blockquote>",
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
