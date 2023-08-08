import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import { CarouselStoryArgs } from './carouse.args'

import { AtomCarousel, AtomCarouselItem } from '@juntossomosmais/atomium/react'
import './style.css'

export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta

const createComponent = (args, itemClass) => (
  <AtomCarousel {...args}>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 1</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 2</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 3</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 4</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 5</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 6</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 7</div>
    </AtomCarouselItem>
    <AtomCarouselItem>
      <div className={itemClass}>Slide 8</div>
    </AtomCarouselItem>
    <AtomCarouselItem lazy={true}>
      <div className={itemClass}>
        <img
          loading="lazy"
          width="100%"
          src="https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"
        />
      </div>
    </AtomCarouselItem>
  </AtomCarousel>
)

export const Default: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        paginationClickable: true,
        navigation: true,
        spaceBetween: 40,
        slidesPerView: 3,
      },
      'item-default'
    ),
}

export const LoopAndAutoplay: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        navigation: true,
        loop: true,
        autoplay: true,
        speed: 100,
      },
      'item-loop'
    ),
}

export const PaginationType: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        navigation: true,
        paginationType: 'progressbar',
      },
      'item-pag-type'
    ),
}
