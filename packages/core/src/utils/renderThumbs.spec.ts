import { renderThumbs } from './renderThumbs'

describe('renderThumbs', () => {
  it('should return an array of thumbnail URLs', () => {
    const current = 1
    const total = 1
    const urls = ['example/image1.jpg']
    const expected = `<span class=\"swiper-pagination-thumb swiper-pagination-bullet swiper-pagination-thumb-active swiper-pagination-bullet-active\" part=\"thumb thumb-active\"><img src=\"example/image1.jpg\" alt=\"Slide 1\" part=\"thumb-img\"></span>`
    const result = renderThumbs(current, total, urls)

    expect(result).toEqual(expected)
  })

  it('should return an empty array if no URLs are provided', () => {
    const current = 1
    const total = 0
    const urls: string[] = []
    const expected: string[] = []
    const result = renderThumbs(current, total, urls)

    expect(result).toEqual(expected)
  })

  it('should return an array of the correct length', () => {
    const current = 1
    const total = 1
    const urls = ['example/image1.jpg']
    const expected = `<span class=\"swiper-pagination-thumb swiper-pagination-bullet swiper-pagination-thumb-active swiper-pagination-bullet-active\" part=\"thumb thumb-active\"><img src=\"example/image1.jpg\" alt=\"Slide 1\" part=\"thumb-img\"></span>`
    const result = renderThumbs(current, total, urls)

    expect(result.length).toEqual(expected.length)
  })
})
