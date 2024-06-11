import { newSpecPage } from '@stencil/core/testing'

import { AtomListSlider } from './list-slider'
import { AtomListSliderItem } from './list-slider-item/list-slider-item'

describe('AtomListSlider', () => {
  let component: AtomListSlider

  beforeEach(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
    component = new AtomListSlider()
    const items = Array(5)
      .fill(null)
      .map((_, index) => {
        const item = document.createElement('div')

        Object.defineProperty(item, 'offsetWidth', {
          value: 100 + 10 * index,
        })

        return item
      })

    component.sliderItems = items as unknown as NodeListOf<HTMLElement>
    component.sliderGapValue = 10
    component.viewportWidth = 400
  })

  it('should render an atom-list-slider and atom-list-slider-item elements', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider>
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    expect(page?.root).toEqualHtml(`
      <atom-list-slider>
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-list-slider" role="region">
            <button aria-disabled="true" aria-label="Previous" class="navigation navigation--prev" role="button">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div aria-live="polite" class="sliders">
              <div class="wrapper" role="list">
                <slot></slot>
              </div>
            </div>
            <button aria-label="Next" class="navigation navigation--next" role="button">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </div>
        </mock:shadow-root>
        <atom-list-slider-item>
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          Slide 1
        </atom-list-slider-item>
        <atom-list-slider-item>
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          Slide 2
        </atom-list-slider-item>
      </atom-list-slider>
    `)
  })

  it('should remove navigation buttons when hasNavigation is false', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider has-navigation="false">
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    expect(page?.root).toEqualHtml(`
      <atom-list-slider has-navigation="false">
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-list-slider" role="region">
            <div aria-live="polite" class="sliders">
              <div class="wrapper" role="list">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <atom-list-slider-item>
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          Slide 1
        </atom-list-slider-item>
        <atom-list-slider-item>
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          Slide 2
        </atom-list-slider-item>
      </atom-list-slider>
    `)
  })

  it('should correctly calculate maxTranslateX', () => {
    component.handleMaxTranslateX()
    expect(component.maxTranslateX).toBe(240)
  })
})
