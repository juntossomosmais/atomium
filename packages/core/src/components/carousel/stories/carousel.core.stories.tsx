import { Meta, StoryObj } from '@storybook/web-components'

import { CarouselStoryArgs } from './carousel.args'
import './style.css'
export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta
let carouselStoryId = 0

const createComponent = (args, itemClass: string) => {
  carouselStoryId++

  return `
  <atom-carousel
  id="carousel-${carouselStoryId}"
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
  ${args.speed !== undefined ? `speed="${args.speed}"` : ''} 
  ${
    args.centeredSlides !== undefined
      ? `centered-slides="${args.centeredSlides}"`
      : ''
  } >
    <atom-carousel-item><div class="${itemClass}">Slide 1</div></atom-carousel-item>
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
  <script>
  const  atomCarousel${carouselStoryId} = document.querySelector('atom-carousel#carousel-${carouselStoryId}');
    atomCarousel${carouselStoryId}.addEventListener('atomChange',(event)=>{
  console.log('atomChange', event)
    })
    atomCarousel${carouselStoryId}.addEventListener('atomClickPrev',(event)=>{
      console.log('atomClickPrev', event)

    })
    atomCarousel${carouselStoryId}.addEventListener('atomClickNext',(event)=>{
      console.log('atomClickNext', event)

    })
  </script>
  `
}

export const Default: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        slidesPerView: 'auto',
        spaceBetween: 40,
        paginationClickable: true,
        centeredSlides: true,
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

export const CenterItemContent: StoryObj = {
  render: () =>
    createComponent(
      {
        pagination: true,
        slidesPerView: 'auto',
        slidesPerGroup: 'auto',
        spaceBetween: 20,
        paginationClickable: true,
        centeredSlides: true,
      },
      'item-smaller'
    ),
}
