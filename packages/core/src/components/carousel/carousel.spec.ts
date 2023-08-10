import { newSpecPage } from '@stencil/core/testing'

import { AtomCarousel } from './carousel'

describe('AtomCarousel', () => {
  it('should component convert atom-carousel-item to and swiper-slide', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel>
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })
    expect(page.root?.innerHTML).not.toContain('atom-carousel-item')
    expect(page.root?.children[0].tagName.toLowerCase()).toBe(
      'swiper-container'
    )
    expect(page.root?.children[0].children[0].tagName.toLowerCase()).toBe(
      'swiper-slide'
    )
  })

  it('should render component with passed props props', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel pagination="false" navigation="false" slides-per-group="4" slides-per-view="2">
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })
    expect(page.root?.children[0]?.outerHTML).not.toContain('pagination=')
    expect(page.root?.children[0]?.outerHTML).not.toContain(
      'pagination-type="bullets"'
    )
    expect(page.root?.children[0]?.outerHTML).not.toContain('navigation')
    expect(page.root?.children[0]?.outerHTML).toContain('slides-per-view="2"')
    expect(page.root?.children[0]?.outerHTML).toContain('slides-per-group="4"')
  })

  it('should render component with default props', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `<atom-carousel>
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })
    expect(page.root?.children[0]?.outerHTML).toContain('pagination=')
    expect(page.root?.children[0]?.outerHTML).toContain(
      'pagination-type="bullets"'
    )
    expect(page.root?.children[0]?.outerHTML).toContain('navigation=')
    expect(page.root?.children[0]?.outerHTML).toContain('slides-per-view="1"')
    expect(page.root?.children[0]?.outerHTML).toContain('slides-per-group="1"')
  })
})
