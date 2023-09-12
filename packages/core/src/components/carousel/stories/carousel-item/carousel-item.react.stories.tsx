import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { CarouselItemStoryArgs } from './carouse-item.args'

import { AtomCarouselItem } from '@juntossomosmais/atomium/react'
export default {
  title: 'Components/Carousel Item',
  ...CarouselItemStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: () => (
    <AtomCarouselItem>
      <div>Slide 1</div>
    </AtomCarouselItem>
  ),
}

export const Lazy: StoryObj = {
  render: () => (
    <AtomCarouselItem lazy={true}>
      <div>
        <img
          loading='lazy'
          width='100%'
          src='https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png'
        />
      </div>
    </AtomCarouselItem>
  ),
}
