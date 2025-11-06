import { Meta, StoryObj } from '@storybook/web-components-vite'
import { html } from 'lit'

import './carousel.css'

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
      <atom-carousel-item class="slide">
        <div>Example 1</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 2</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 3</div>
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
    autoplay: 6000,
  },
}

export const Thumbnails: StoryObj = {
  render: () => html`
    <atom-carousel id="carousel" thumbnails>
      <atom-carousel-item class="slide">
        <div>Example 1</div>
      </atom-carousel-item>
      <atom-carousel-item class="slide">
        <div>Example 2</div>
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
