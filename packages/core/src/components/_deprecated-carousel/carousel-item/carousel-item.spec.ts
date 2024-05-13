import { newSpecPage } from '@stencil/core/testing'

import { AtomDeprecatedCarousel } from '../carousel'

import { AtomDeprecatedCarouselItem } from './carousel-item'

describe('AtomDeprecatedCarouselItem', () => {
  it('should component replace atom-carousel-item with swiper-slide', async () => {
    const page = await newSpecPage({
      components: [AtomDeprecatedCarousel, AtomDeprecatedCarouselItem],
      html: `<atom-deprecated-carousel>
              <atom-deprecated-carousel-item> Slide 1</atom-deprecated-carousel-item>
              <atom-deprecated-carousel-item> Slide 2</atom-deprecated-carousel-item>
              </atom-deprecated-carousel>`,
    })

    await page.waitForChanges()
    expect(page.root?.innerHTML).not.toContain('<atom-deprecated-carousel-ite')
    expect(page.root?.innerHTML).toContain('<swiper-slide')
  })
})
