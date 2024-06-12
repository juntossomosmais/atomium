import { newSpecPage } from '@stencil/core/testing'

import { AtomListSlider } from './list-slider'
import { AtomListSliderItem } from './list-slider-item/list-slider-item'

describe('AtomListSlider', () => {
  beforeEach(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
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

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-list-slider has-navigation="false">
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
            <button aria-disabled="true" aria-label="Next" class="navigation navigation--next" role="button">
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

  it('should centralize the slider when centralized is true', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider centralized="true">
          <atom-list-slider-item style="width: 100px">Slide 1</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    page.rootInstance.viewportWidth = 1000

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-list-slider centralized="true">
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-list-slider" role="region">
            <button aria-disabled="true" aria-label="Previous" class="navigation navigation--prev" role="button">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div aria-live="polite" class="sliders">
              <div class="wrapper wrapper--centralized" role="list">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="true" aria-label="Next" class="navigation navigation--next" role="button">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </div>
        </mock:shadow-root>
        <atom-list-slider-item style="width: 100px;">
          <mock:shadow-root>
            <slot></slot>
          </mock:shadow-root>
          Slide 1
        </atom-list-slider-item>
      </atom-list-slider>
    `)
  })
})
