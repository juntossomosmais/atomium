import {
  AtomListSlider,
  AtomListSliderItem,
} from '@juntossomosmais/atomium/vue'
import { Meta, StoryObj } from '@storybook/vue3'

import './list-slider.css'

import { ListSliderStoryArgs } from './list-slider.args'

export default {
  title: 'Components/List Slider',
  ...ListSliderStoryArgs,
} as Meta

const createListSlider = () => ({
  components: { AtomListSlider, AtomListSliderItem },
  setup() {
    return {}
  },
  template: `
    <AtomListSlider>
      <AtomListSliderItem class="slide">
        <div>
          Example 1
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 2
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 3
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 4
        </div>
      </AtomListSliderItem>
      <AtomListSliderItem class="slide">
        <div>
          Example 5
        </div>
      </AtomListSliderItem>
    </AtomListSlider>
  `,
})

export const Default: StoryObj = {
  render: () => createListSlider(),
}

export const Centralized: StoryObj = {
  render: () => ({
    components: { AtomListSlider, AtomListSliderItem },
    setup() {
      return {}
    },
    template: `
      <AtomListSlider centralized="true">
        <AtomListSliderItem class="slide">
          <div>
            Example 1
          </div>
        </AtomListSliderItem>
        <AtomListSliderItem class="slide">
          <div>
            Example 2
          </div>
        </AtomListSliderItem>
      </AtomListSlider>
    `,
  }),
}
