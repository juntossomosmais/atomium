import { newSpecPage } from '@stencil/core/testing'

import { AtomCarousel } from './carousel'

describe('AtomCarousel', () => {
  it('should component use swiper-container', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel>
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })

    await page.waitForChanges()
    expect(page.root?.innerHTML).toContain('swiper-container')
    const swiperContainer = page.root?.querySelector('swiper-container')

    expect(swiperContainer?.outerHTML).toContain(
      'touch-start-prevent-default="false"'
    )
    expect(swiperContainer?.outerHTML).toContain('class="atom-carousel"')
  })

  it('should render component with passed props', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel pagination="false" navigation="false" slides-per-group="4" slides-per-view="2">
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })

    await page.waitForChanges()

    const swiperContainer = page.root?.querySelector('swiper-container')

    expect(swiperContainer?.outerHTML).not.toContain('pagination=')
    expect(swiperContainer?.outerHTML).not.toContain(
      'pagination-type="bullets"'
    )
    expect(swiperContainer?.outerHTML).not.toContain('navigation')
    expect(swiperContainer?.outerHTML).toContain('slides-per-view="2"')
    expect(swiperContainer?.outerHTML).toContain('slides-per-group="4"')
  })

  it('should render component with default props', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel>
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })

    await page.waitForChanges()

    const swiperContainer = page.root?.querySelector('swiper-container')

    expect(swiperContainer?.outerHTML).toContain('navigation=')
    expect(swiperContainer?.outerHTML).toContain('slides-per-view="1"')
    expect(swiperContainer?.outerHTML).toContain('slides-per-group="1"')
  })
})
