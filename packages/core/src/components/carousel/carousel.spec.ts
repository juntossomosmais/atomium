import { newSpecPage } from '@stencil/core/testing'

import { AtomCarousel } from './carousel'

describe('AtomCarousel', () => {
  it('should render an atom-carousel and atom-carousel-item elements', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel>
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    expect(page?.root).toEqualHtml(`
      <atom-carousel>
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-carousel" role="region">
            <button aria-disabled="true" aria-label="Previous" class="carousel-navigation navigation--prev" role="button">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div class="carousel-sliders">
              <div class="carousel-wrapper" role="list">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="false" aria-label="Next" class="carousel-navigation navigation--next" role="button">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </div>
          <div aria-label="Pagination" class="carousel-pagination" role="navigation">
            <button aria-controls="carousel-item-0" aria-selected="" class="active carousel-pagination--bullets carousel-pagination__item" role="tab">
              <span class="pagination-text">
                1
              </span>
            </button>
            <button aria-controls="carousel-item-1" class="carousel-pagination--bullets carousel-pagination__item" role="tab">
              <span class="pagination-text">
                2
              </span>
            </button>
          </div>
        </mock:shadow-root>
        <atom-carousel-item>
          Slide 1
        </atom-carousel-item>
        <atom-carousel-item>
          Slide 2
        </atom-carousel-item>
      </atom-carousel>
    `)
  })

  it('should render an atom-carousel with navigation and pagination disabled', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel has-navigation="false" has-pagination="false">
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    expect(page?.root).toEqualHtml(`
      <atom-carousel has-navigation="false" has-pagination="false">
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-carousel" role="region">
            <div class="carousel-sliders">
              <div class="carousel-wrapper" role="list">
                <slot></slot>
              </div>
            </div>
          </div>
        </mock:shadow-root>
        <atom-carousel-item>
          Slide 1
        </atom-carousel-item>
        <atom-carousel-item>
          Slide 2
        </atom-carousel-item>
      </atom-carousel>
    `)
  })

  it('should render an atom-carousel with thumbnails', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel thumbnails>
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    page.rootInstance.thumbnails = [
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    ]

    await page.waitForChanges()

    expect(page?.root).toEqualHtml(`
      <atom-carousel thumbnails>
        <mock:shadow-root>
          <div aria-label="Carousel" class="atom-carousel" role="region">
            <button aria-disabled="true" aria-label="Previous" class="carousel-navigation navigation--prev" role="button">
              <atom-icon icon="chevron-left"></atom-icon>
            </button>
            <div class="carousel-sliders">
              <div class="carousel-wrapper" role="list">
                <slot></slot>
              </div>
            </div>
            <button aria-disabled="false" aria-label="Next" class="carousel-navigation navigation--next" role="button">
              <atom-icon icon="chevron-right"></atom-icon>
            </button>
          </div>
          <div aria-label="Pagination" class="carousel-pagination" role="navigation">
            <button aria-controls="carousel-item-0" aria-selected="" class="active carousel-pagination--thumbnails carousel-pagination__item" role="tab">
              <img alt="1" aria-hidden="true" class="thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==">
            </button>
            <button aria-controls="carousel-item-1" class="carousel-pagination--thumbnails carousel-pagination__item" role="tab">
            <img alt="2" aria-hidden="true" class="thumbnail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==">
          </button>
          </div>
        </mock:shadow-root>
        <atom-carousel-item>
          Slide 1
        </atom-carousel-item>
        <atom-carousel-item>
          Slide 2
        </atom-carousel-item>
      </atom-carousel>
    `)
  })

  it('should change slide when clicking on pagination item', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel>
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    page.rootInstance.handleMoveToPaginationItem(1)

    await page.waitForChanges()

    expect(page?.rootInstance.currentIdx).toBe(1)
  })

  it('should change slide when clicking on navigation button', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel>
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    const nextButton = page.root?.shadowRoot?.querySelector(
      '.navigation--next'
    ) as HTMLElement

    nextButton?.click()

    await page.waitForChanges()

    expect(page?.rootInstance.currentIdx).toBe(1)
  })

  it('should working with loop', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel loop>
          <atom-carousel-item>Slide 1</atom-carousel-item>
          <atom-carousel-item>Slide 2</atom-carousel-item>
        </atom-carousel>
      `,
    })

    const prevButton = page.root?.shadowRoot?.querySelector(
      '.navigation--prev'
    ) as HTMLElement

    prevButton?.click()

    await page.waitForChanges()

    expect(page?.rootInstance.currentIdx).toBe(1)
  })

  it('should to hidden navigation and pagination when only one slide', async () => {
    const page = await newSpecPage({
      components: [AtomCarousel],
      html: `
        <atom-carousel>
          <atom-carousel-item>Slide 1</atom-carousel-item>
        </atom-carousel>
      `,
    })

    expect(page?.rootInstance.hasNavigation).toBe(false)
    expect(page?.rootInstance.hasPagination).toBe(false)
  })
})
