import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core'
import 'swiper/swiper-element-bundle.js'
import { AutoplayOptions, PaginationOptions, Swiper } from 'swiper/types'

import { renderThumbs } from './utils/render-thumbs'

interface SwiperElement extends HTMLElement {
  swiper: Swiper
}
@Component({
  tag: 'atom-carousel',
  styleUrl: 'carousel.scss',
  shadow: false,
})
export class AtomCarousel {
  @Element() host!: HTMLElement
  private swiperEl: SwiperElement
  @Event() atomClickPrev!: EventEmitter<string>
  @Event() atomClickNext!: EventEmitter<string>
  @Event() atomChange!: EventEmitter<string>

  @Prop({ mutable: true })
  autoplay?: boolean
  @Prop({ mutable: true })
  autoplayDelay?: AutoplayOptions['delay']
  @Prop({ mutable: true })
  centeredSlides?: boolean = false
  @Prop({ mutable: true })
  centerInsufficientSlides?: boolean = false
  @Prop({ mutable: true })
  freeMode?: boolean
  @Prop({ mutable: true })
  loop?: boolean
  @Prop({ mutable: true })
  navigation?: boolean = true
  @Prop({ mutable: true })
  pagination?: boolean = true
  @Prop({ mutable: true })
  paginationClickable?: boolean
  @Prop({ mutable: true })
  paginationType?: PaginationOptions['type'] | 'thumbnails' = 'bullets'
  @Prop({ mutable: true })
  slidesPerGroup?: number | string = 1
  @Prop({ mutable: true })
  slidesPerView?: number | string = 1
  @Prop({ mutable: true })
  spaceBetween?: number = 0
  @Prop({ mutable: true })
  speed?: number
  @Prop({ mutable: true })
  thumbnailImages?: string = ''
  @Prop({ mutable: true })
  videoIcons?: boolean = false
  @Prop({ mutable: true })
  navigationButtonSize?: 'medium' | 'xxlarge' = 'medium'

  componentDidLoad() {
    this.swiperEl = this.host.querySelector('swiper-container')

    const children = this.host.querySelectorAll('atom-carousel-item')

    children.forEach((child) => {
      const slide = child.querySelector('swiper-slide')

      if (slide) {
        this.swiperEl.appendChild(slide)
        this.host.removeChild(child)
      }
    })

    this.swiperEl.swiper?.on('slideChange', () => {
      this.atomChange.emit()
    })
    this.swiperEl.swiper?.on('navigationPrev', () => {
      this.atomClickPrev.emit()
    })
    this.swiperEl.swiper?.on('navigationNext', () => {
      this.atomClickNext.emit()
    })

    let params: { pagination: PaginationOptions } = this.pagination && {
      pagination: {
        type:
          this.paginationType === 'thumbnails' ? 'custom' : this.paginationType,
        clickable: this.paginationClickable,
      },
    }

    if (this.paginationType === 'thumbnails') {
      const urls = this.thumbnailImages ? this.thumbnailImages.split(',') : []

      params = {
        pagination: {
          ...params.pagination,
          renderCustom: (_swiper, current, total) =>
            renderThumbs(current, total, urls, this.videoIcons),
        },
      }
    }

    Object.assign(this.swiperEl, params)
  }
  render() {
    const injectStyles = [
      '.swiper-button-disabled { opacity: 0 !important}',
      '.swiper-pagination-custom { display: flex; justify-content: center; column-gap: var(--spacing-base); } ',
      `.swiper-button-next { width: var(--spacing-${this.navigationButtonSize}); height: var(--spacing-${this.navigationButtonSize}); }`,
      `.swiper-button-prev { width: var(--spacing-${this.navigationButtonSize}); height: var(--spacing-${this.navigationButtonSize}); }`,
    ]

    return (
      <Host>
        <swiper-container
          class='atom-carousel'
          navigation={this.navigation}
          space-between={this.spaceBetween}
          loop={this.loop}
          speed={this.speed}
          slides-per-group={this.slidesPerGroup}
          slides-per-view={this.slidesPerView}
          free-mode={this.freeMode}
          autoplay={this.autoplay}
          autoplay-delay={this.autoplayDelay}
          injectStyles={injectStyles}
          touch-start-prevent-default='false'
          center-insufficient-slides={this.centerInsufficientSlides}
          centered-slides={this.centeredSlides}
        ></swiper-container>
      </Host>
    )
  }
}
