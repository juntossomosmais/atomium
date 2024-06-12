import {
  AtomListSlider,
  AtomListSliderItem,
} from '@juntossomosmais/atomium/react'
import { Meta, StoryObj } from '@storybook/react'
import React from 'react'

import './list-slider.css'

import { ListSliderStoryArgs } from './list-slider.args'

export default {
  title: 'Components/List Slider',
  components: [AtomListSlider, AtomListSliderItem],
  ...ListSliderStoryArgs,
} as Meta

const createListSlider = () => (
  <AtomListSlider>
    <AtomListSliderItem className='slide'>
      <div>Example 1</div>
    </AtomListSliderItem>
    <AtomListSliderItem className='slide'>
      <div>Example 2</div>
    </AtomListSliderItem>
    <AtomListSliderItem className='slide'>
      <div>Example 3</div>
    </AtomListSliderItem>
    <AtomListSliderItem className='slide'>
      <div>Example 4</div>
    </AtomListSliderItem>
    <AtomListSliderItem className='slide'>
      <div>Example 5</div>
    </AtomListSliderItem>
  </AtomListSlider>
)

export const Default: StoryObj = {
  render: () => createListSlider(),
}
