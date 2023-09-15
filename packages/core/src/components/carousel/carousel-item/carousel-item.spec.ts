import { newSpecPage } from '@stencil/core/testing'

import { AtomCarousel } from '../carousel'
import { AtomCarouselItem } from './carousel-item'

describe('AtomCarouselItem', () => {
  it('should component replace atom-carousel-item with swiper-slide', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel, AtomCarouselItem],
      html: `<atom-carousel>
              <atom-carousel-item> Slide 1</atom-carousel-item>
              <atom-carousel-item> Slide 2</atom-carousel-item>
              </atom-carousel>`,
    })
    await page.waitForChanges()
    expect(page.root?.innerHTML).not.toContain('<atom-carousel-ite')
    expect(page.root?.innerHTML).toContain('<swiper-slide')

    const swiperSlide = page.root?.querySelector('swiper-slide')
    expect(swiperSlide?.outerHTML).not.toContain('lazy=')
  })

  it('should render component with passed lazy prop', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel, AtomCarouselItem],
      html: `<atom-carousel pagination="false" navigation="false" slides-per-group="4" slides-per-view="2">
              <atom-carousel-item lazy> Slide 1</atom-carousel-item>
              </atom-carousel>`,
    })
    await page.waitForChanges()

    const swiperSlide = page.root?.querySelector('swiper-slide')
    expect(swiperSlide?.outerHTML).toContain('lazy=')
  })
})
