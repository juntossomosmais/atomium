import { newSpecPage } from '@stencil/core/testing'

import { AtomListSlider } from './list-slider'
import { AtomListSliderItem } from './list-slider-item/list-slider-item'

class MockTouchEvent extends Event {
  touches: Touch[]
  changedTouches: Touch[]

  constructor(
    type: string,
    init: { touches?: Touch[]; changedTouches?: Touch[] }
  ) {
    super(type)
    this.touches = init.touches || []
    this.changedTouches = init.changedTouches || []
  }
}

describe('AtomListSlider', () => {
  beforeEach(() => {
    global.ResizeObserver = class ResizeObserver {
      observe() {}
      unobserve() {}
      disconnect() {}
    }
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
          <section aria-label="Carousel" class="atom-list-slider">
            <button aria-disabled="true" aria-label="Previous" class="navigation navigation--prev">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div aria-live="polite" class="sliders">
              <div class="wrapper">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="true" aria-label="Next" class="navigation navigation--next">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </section>
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

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-list-slider has-navigation="false">
        <mock:shadow-root>
          <section aria-label="Carousel" class="atom-list-slider">
            <button aria-disabled="true" aria-label="Previous" class="navigation navigation--prev" style="display: none;">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div aria-live="polite" class="sliders">
              <div class="wrapper">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="true" aria-label="Next" class="navigation navigation--next" style="display: none;">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </section>
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
          <section aria-label="Carousel" class="atom-list-slider">
            <button aria-disabled="true" aria-label="Previous" class="navigation navigation--prev">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div aria-live="polite" class="sliders">
              <div class="wrapper wrapper--centralized">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="true" aria-label="Next" class="navigation navigation--next">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </section>
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

  it('should navigate to the next slide when clicking on the next button', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider>
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()

    const nextButton = page.root?.shadowRoot?.querySelector(
      '.navigation--next'
    ) as HTMLElement

    nextButton?.click()

    expect(page.rootInstance.currentIndex).toBe(1)
  })

  it('should navigate to the previous slide when clicking on the previous button', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider>
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()

    const nextButton = page.root?.shadowRoot?.querySelector(
      '.navigation--next'
    ) as HTMLElement

    nextButton?.click()

    const prevButton = page.root?.shadowRoot?.querySelector(
      '.navigation--prev'
    ) as HTMLElement

    prevButton?.click()

    expect(page.rootInstance.currentIndex).toBe(0)
  })

  it('should remove event listeners on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider>
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()

    const instance = page.rootInstance

    const removeEventListenerSpy = jest.spyOn(
      instance.sliderWrapper,
      'removeEventListener'
    )
    const removeGlobalEventListenerSpy = jest.spyOn(
      globalThis,
      'removeEventListener'
    )

    instance.disconnectedCallback()

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchstart',
      instance.handleTouchStart
    )
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchend',
      instance.handleTouchEnd
    )
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'touchmove',
      instance.handleTouchMove
    )
    expect(removeGlobalEventListenerSpy).toHaveBeenCalledWith(
      'resize',
      instance.handleOnResize
    )

    removeEventListenerSpy.mockRestore()
    removeGlobalEventListenerSpy.mockRestore()
  })

  it('should handle touch events correctly', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider>
          <atom-list-slider-item style="width: 100px;">Slide 1</atom-list-slider-item>
          <atom-list-slider-item style="width: 100px;">Slide 2</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()

    const instance = page.rootInstance
    const wrapper = page?.root?.shadowRoot?.querySelector(
      '.wrapper'
    ) as HTMLElement

    instance.sliderItems = wrapper.querySelectorAll('slider-item')
    instance.currentIndex = 0

    const touchStartEvent = new MockTouchEvent('touchstart', {
      touches: [{ clientX: 100 }] as unknown as Touch[],
    })

    wrapper.dispatchEvent(touchStartEvent)
    expect(instance.touchStartX).toBe(100)
    expect(instance.isTouchMoved).toBe(false)

    const touchMoveEvent = new MockTouchEvent('touchmove', {})

    wrapper.dispatchEvent(touchMoveEvent)
    expect(instance.isTouchMoved).toBe(true)

    const touchEndEventLeft = new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 50 }] as unknown as Touch[],
    })

    wrapper.dispatchEvent(touchEndEventLeft)
    expect(instance.touchEndX).toBe(50)
    expect(instance.currentIndex).toBe(-1)

    const touchEndEventRight = new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 150 }] as unknown as Touch[],
    })

    wrapper.dispatchEvent(touchEndEventRight)
    expect(instance.touchEndX).toBe(150)
    expect(instance.currentIndex).toBe(0)
  })

  it('should navigate by step value when clicking on navigation buttons', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider step="2">
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
          <atom-list-slider-item>Slide 3</atom-list-slider-item>
          <atom-list-slider-item>Slide 4</atom-list-slider-item>
          <atom-list-slider-item>Slide 5</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()

    const nextButton = page.root?.shadowRoot?.querySelector(
      '.navigation--next'
    ) as HTMLElement

    nextButton?.click()
    await page.waitForChanges()

    expect(page.rootInstance.currentIndex).toBe(2)

    nextButton?.click()
    await page.waitForChanges()

    expect(page.rootInstance.currentIndex).toBe(4)
  })

  it('should navigate by step value when swiping', async () => {
    const page = await newSpecPage({
      components: [AtomListSlider, AtomListSliderItem],
      html: `
        <atom-list-slider step="3">
          <atom-list-slider-item>Slide 1</atom-list-slider-item>
          <atom-list-slider-item>Slide 2</atom-list-slider-item>
          <atom-list-slider-item>Slide 3</atom-list-slider-item>
          <atom-list-slider-item>Slide 4</atom-list-slider-item>
          <atom-list-slider-item>Slide 5</atom-list-slider-item>
          <atom-list-slider-item>Slide 6</atom-list-slider-item>
        </atom-list-slider>
      `,
    })

    await page.waitForChanges()
    const instance = page.rootInstance
    const wrapper = page?.root?.shadowRoot?.querySelector(
      '.wrapper'
    ) as HTMLElement

    instance.sliderItems = page.root?.querySelectorAll('atom-list-slider-item')
    instance.currentIndex = 0

    const touchStartEvent = new MockTouchEvent('touchstart', {
      touches: [{ clientX: 100 }] as unknown as Touch[],
    })

    wrapper.dispatchEvent(touchStartEvent)

    const touchMoveEvent = new MockTouchEvent('touchmove', {})

    wrapper.dispatchEvent(touchMoveEvent)

    const touchEndEventLeft = new MockTouchEvent('touchend', {
      changedTouches: [{ clientX: 50 }] as unknown as Touch[],
    })

    wrapper.dispatchEvent(touchEndEventLeft)
    await page.waitForChanges()

    expect(instance.currentIndex).toBe(3)
  })
})
