import { AtomCarousel, AtomCarouselItem } from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3-vite'

import './carousel.css'

import { CarouselComponentArgs, CarouselStoryArgs } from './carousel.args'

export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta

const createCarousel = (args) => ({
  components: { AtomCarousel, AtomCarouselItem },
  setup() {
    return { args }
  },
  template: `
    <AtomCarousel
      loop="${args.loop}"
      autoplay="${args.autoplay}"
      hasNavigation="${args.hasNavigation}"
      hasPagination="${args.hasPagination}"
    >
      <AtomCarouselItem class="slide">
        <div>
          Example 1
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 2
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 3
        </div>
      </AtomCarouselItem>
    </AtomCarousel>
  `,
})

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

const createCarouselWithThumbnails = () => ({
  components: { AtomCarousel, AtomCarouselItem },
  data() {
    return {
      thumbnails: [
        'https://via.placeholder.com/50',
        'https://via.placeholder.com/50',
      ],
    }
  },
  template: `
    <AtomCarousel :thumbnails="thumbnails">
      <AtomCarouselItem class="slide">
        <div>
          Example 1
        </div>
      </AtomCarouselItem>
      <AtomCarouselItem class="slide">
        <div>
          Example 2
        </div>
      </AtomCarouselItem>
    </AtomCarousel>
  `,
})

export const Thumbnails = () => {
  return createCarouselWithThumbnails()
}
