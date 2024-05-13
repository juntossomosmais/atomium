import { newSpecPage } from '@stencil/core/testing'

import { AtomDeprecatedCarousel } from './carousel'

describe('AtomDeprecatedCarousel', () => {
  it('should component use swiper-container', async () => {
    const page = await newSpecPage({
      components: [AtomDeprecatedCarousel],
      html: `<atom-deprecated-carousel>
              <atom-deprecated-carousel-item> Slide 1</atom-deprecated-carousel-item>
              <atom-deprecated-carousel-item> Slide 2</atom-deprecated-carousel-item>
              </atom-deprecated-carousel>`,
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
      components: [AtomDeprecatedCarousel],
      html: `<atom-deprecated-carousel center-insufficient-slides="true" pagination="false"
      navigation="false" slides-per-group="4" slides-per-view="2" watch-slides-progress="true">
              <atom-deprecated-carousel-item> Slide 1</atom-deprecated-carousel-item>
              <atom-deprecated-carousel-item> Slide 2</atom-deprecated-carousel-item>
              </atom-deprecated-carousel>`,
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
    expect(swiperContainer?.outerHTML).toContain('center-insufficient-slides')
    expect(swiperContainer?.outerHTML).toContain('watch-slides-progress')
  })

  it('should render component with default props', async () => {
    const page = await newSpecPage({
      components: [AtomDeprecatedCarousel],
      html: `<atom-deprecated-carousel>
              <atom-deprecated-carousel-item> Slide 1</atom-deprecated-carousel-item>
              <atom-deprecated-carousel-item> Slide 2</atom-deprecated-carousel-item>
              </atom-deprecated-carousel>`,
    })

    await page.waitForChanges()

    const swiperContainer = page.root?.querySelector('swiper-container')

    expect(swiperContainer?.outerHTML).toContain('navigation=')
    expect(swiperContainer?.outerHTML).toContain('slides-per-view="1"')
    expect(swiperContainer?.outerHTML).toContain('slides-per-group="1"')
  })
})
