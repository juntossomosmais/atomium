import { AtomCarousel, AtomCarouselItem } from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import './carousel.css'

import { CarouselComponentArgs, CarouselStoryArgs } from './carousel.args'

export default {
  title: 'Components/Carousel',
  components: [AtomCarousel, AtomCarouselItem],
  ...CarouselStoryArgs,
} as Meta

const createCarousel = (args) => (
  <AtomCarousel
    loop={args.loop}
    autoplay={args.autoplay}
    hasNavigation={args.hasNavigation}
    hasPagination={args.hasPagination}
  >
    <AtomCarouselItem className='slide'>
      <div>Example 1</div>
    </AtomCarouselItem>
    <AtomCarouselItem className='slide'>
      <div>Example 2</div>
    </AtomCarouselItem>
    <AtomCarouselItem className='slide'>
      <div>Example 3</div>
    </AtomCarouselItem>
  </AtomCarousel>
)

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

export const Thumbnails = () => {
  const thumbnails = [
    'https://via.placeholder.com/50',
    'https://via.placeholder.com/50',
  ]

  return (
    <AtomCarousel thumbnails={thumbnails}>
      <AtomCarouselItem className='slide'>
        <div>Example 1</div>
      </AtomCarouselItem>
      <AtomCarouselItem className='slide'>
        <div>Example 2</div>
      </AtomCarouselItem>
    </AtomCarousel>
  )
}
