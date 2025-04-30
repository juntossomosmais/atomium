import { Meta, StoryObj } from '@storybook/web-components'
import { html } from 'lit'

import './list-slider.css'

import { ListSliderStoryArgs } from './list-slider.args'

export default {
  title: 'Components/List Slider',
  ...ListSliderStoryArgs,
} as Meta

const createListSlider = (args) => {
  return html`
    <atom-list-slider step="${args.step}">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 3</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 4</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 5</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 6</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 7</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 8</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 9</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 10</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `
}

export const Default: StoryObj = {
  render: (args) => createListSlider(args),
}

export const Centralized: StoryObj = {
  render: () => html`
    <atom-list-slider centralized="true">
      <atom-list-slider-item class="slide">
        <div>Example 1</div>
      </atom-list-slider-item>
      <atom-list-slider-item class="slide">
        <div>Example 2</div>
      </atom-list-slider-item>
    </atom-list-slider>
  `,
}
