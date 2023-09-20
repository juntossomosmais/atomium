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
  })
})
