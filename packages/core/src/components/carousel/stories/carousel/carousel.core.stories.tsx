import { Meta, StoryObj } from '@storybook/web-components'

import { CarouselStoryArgs } from './carouse.args'
export default {
  title: 'Components/Carousel',
  ...CarouselStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: () => `
  <atom-carousel pagination="true" pagination-clickable="true" navigation="true" space-between="40" slides-per-view="3">
  <atom-carousel-item ><div class="item-default">Slide 1</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 2</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 3</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 4</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 5</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 6</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 7</div></atom-carousel-item>
    <atom-carousel-item><div class="item-default">Slide 8</div></atom-carousel-item>
    <atom-carousel-item lazy="true">
      <div class="item-default">Slide 9
        <img loading="lazy" width="100px" src="https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"/>
      </div>
    </atom-carousel-item>
  </atom-carousel>
  <style>
  .item-default{
    height: 400px;
    width: 100% !important;
    background: coral;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  `,
}

export const LoopAndAutoplay: StoryObj = {
  render: () => `
  <atom-carousel pagination="true" pagination-clickable="true" navigation="true" loop="true" autoplay="true" speed="100">
    <atom-carousel-item><div class="item-loop">Slide 1</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 2</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 3</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 4</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 5</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 6</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 7</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 8</div></atom-carousel-item>
    <atom-carousel-item><div class="item-loop">Slide 9</div></atom-carousel-item>
  </atom-carousel>
  <style>
  .item-loop{
    height: 400px;
    width: 100% !important;
    background: cornflowerblue;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  `,
}

export const PaginationType: StoryObj = {
  render: () => `
  <atom-carousel pagination="true" pagination-clickable="true" navigation="true" pagination-type="progressbar">
    <atom-carousel-item><div class="item-pag-type">Slide 1</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 2</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 3</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 4</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 5</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 6</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 7</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 8</div></atom-carousel-item>
    <atom-carousel-item><div class="item-pag-type">Slide 9</div></atom-carousel-item>
  </atom-carousel>
  <style>
  .item-pag-type{
    height: 400px;
    width: 100% !important;
    background: crimson;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  `,
}
