import { Meta, StoryObj } from '@storybook/web-components'
import { CarouselItemStoryArgs } from './carouse-item.args'

export default {
  title: 'Components/Carousel Item',
  ...CarouselItemStoryArgs,
} as Meta

export const Default: StoryObj = {
  render: () =>
    `<pre>
&lt;atom-carousel-item&gt;
    &lt;div class="item"&gt;Slide 1&lt;/div&gt;
&lt;/atom-carousel-item&gt;
    </pre>
    `,
}
export const Lazy: StoryObj = {
  render: () =>
    `<pre>
  &lt;atom-carousel-item&gt;
    &lt;div class="item"&gt;
      &lt;img
      loading="lazy"
        width="100%"
        src="https://user-images.githubusercontent.com/3603793/257943112-fb180815-7bd7-45f7-ad14-bd1677079931.png"
      /&gt;
  &lt;/div&gt;
&lt;/atom-carousel-item&gt;
</pre>`,
}
