import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import { CarouselComponentArgs, CarouselStoryArgs } from './carousel.args'

export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta

const createCarousel = (args) => {
  return html`
    <atom-carousel
      loop=${args.loop}
      autoplay=${args.autoplay}
      has-navigation=${args.hasNavigation}
      has-pagination=${args.hasPagination}
    >
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-primary-regular); color: #fff; height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 1
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-secondary-regular); color: #fff; height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 2
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-contextual-success-regular); color: #fff; height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 3
        </div>
      </atom-carousel-item>
    </atom-carousel>
  `
}

export const Default: StoryObj = {
  render: (args) => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
  },
}

export const Loop: StoryObj = {
  render: (args) => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    loop: true,
  },
}

export const Autoplay: StoryObj = {
  render: (args) => createCarousel(args),
  args: {
    ...CarouselComponentArgs,
    autoplay: 3000,
  },
}

export const Thumbnails: StoryObj = {
  render: () => html`
    <atom-carousel id="carousel" thumbnails>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-primary-regular); color: #fff; height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 1
        </div>
      </atom-carousel-item>
      <atom-carousel-item>
        <div
          style="background-color: var(--color-brand-secondary-regular); color: #fff; height: 300px; display: flex; align-items: center; justify-content: center"
        >
          Example 2
        </div>
      </atom-carousel-item>
    </atom-carousel>

    <script>
      const carousel = document.getElementById('carousel')

      carousel.thumbnails = [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
      ]
    </script>
  `,
}
