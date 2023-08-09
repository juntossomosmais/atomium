import { Meta, StoryObj } from '@storybook/web-components'

import { CarouselStoryArgs } from './carouse.args'
import './style.css'
export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta
const createComponent = (args, itemClass: string) => {
  return `
  <atom-carousel 
  ${args.pagination !== undefined ? `pagination="${args.pagination}"` : ''} 
  ${args.navigation !== undefined ? `navigation="${args.navigation}"` : ''} 
  ${
    args.paginationClickable !== undefined
      ? `pagination-clickable="${args.paginationClickable}"`
      : ''
  } 
  ${
    args.spaceBetween !== undefined
      ? `space-between="${args.spaceBetween}"`
      : ''
  } 
  ${
    args.slidesPerView !== undefined
      ? `slides-per-view="${args.slidesPerView}"`
      : ''
  } 
  ${
    args.paginationType !== undefined
      ? `pagination-type="${args.paginationType}"`
      : ''
  } 

  
  ${args.loop !== undefined ? `loop="${args.loop}"` : ''} 
  ${args.autoplay !== undefined ? `autoplay="${args.autoplay}"` : ''} 
  ${args.speed !== undefined ? `speed="${args.speed}"` : ''} >
    <atom-carousel-item ><div class="${itemClass}">Slide 1</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 2</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 3</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 4</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 5</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 6</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 7</div></atom-carousel-item>
      <atom-carousel-item><div class="${itemClass}">Slide 8</div></atom-carousel-item>
      <atom-carousel-item lazy="true">
        <div class="${itemClass}">Slide 9
          <img loading="lazy" width="100px" src="https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"/>
        </div>
      </atom-carousel-item>
  </atom-carousel>
  `
}

export const Default: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        slidesPerView: 3,
        spaceBetween: 40,
        paginationClickable: true,
      },
      'item-default'
    ),
}

export const DisabledPagination: StoryObj = {
  render: () =>
    createComponent(
      { pagination: false, slidesPerView: 3, spaceBetween: 40 },
      'item-default'
    ),
}
export const LoopAndAutoplay: StoryObj = {
  render: () =>
    createComponent(
      {
        loop: true,
        autoplay: true,
        speed: 100,
        pagination: false,
        navigation: false,
        paginationClickable: true,
      },
      'item-loop'
    ),
}
export const PaginationType: StoryObj = {
  render: () =>
    createComponent(
      {
        paginationType: 'progressbar',
      },
      'item-pag-type'
    ),
}
