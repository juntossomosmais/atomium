import { Meta, StoryObj } from '@storybook/web-components'
import { CarouselItemStoryArgs } from './carouse-item.args'

export default {
  title: 'Components/Carousel Item',
  ...CarouselItemStoryArgs,
  withSource: false,
} as Meta

export const Default: StoryObj = {
  render: () =>
    `&lt;atom-carousel-item&gt;
      &lt;div class="item"&gt;Slide 1&lt;/div&gt;
    &lt;/atom-carousel-item&gt;
    `,
}
//
