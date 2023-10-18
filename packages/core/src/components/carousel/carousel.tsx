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

  // If you need more info please read the ADR 0012 at Caveat sections
  private injectStyles = [
    '.swiper-button-disabled { opacity: 0 !important}',
  ]
  componentWillLoad() {
    if(this.paginationType === 'thumbnails'){
      this.injectStyles = [
        ...this.injectStyles,
        '.atom-carousel__thumbnails { width: var(--spacing-giant); height: var(--spacing-giant); border-radius: var(--border-radius-medium); object-fit: contain; }',
        '.swiper-pagination-bullet { width: var(--spacing-giant); height: var(--spacing-giant); border-radius: var(--border-radius-medium); background: var(--color-neutral-white); border: 1px solid var(--color-neutral-light-2);}',
        '.swiper { padding-bottom: var(--spacing-giant); }',
      ]
    }
  }
  componentDidLoad() {
    this.swiperEl = this.host.querySelector('swiper-container')
    this.swiperEl.swiper?.on('slideChange', () => {
      this.atomChange.emit()
    })
    this.swiperEl.swiper?.on('navigationPrev', () => {
      this.atomClickPrev.emit()
    })
    this.swiperEl.swiper?.on('navigationNext', () => {
      this.atomClickNext.emit()
    })
    let params: { pagination: PaginationOptions } = {
      pagination: {
        clickable: this.paginationClickable,
      },
    }

    if(this.paginationType === 'thumbnails') {
      const urls = this.thumbnailImages.split(',')

      params = {
        pagination: {
          ...params.pagination,
          renderBullet: (index, className) => {
            return `<span class="${className}"><img class="atom-carousel__thumbnails" src="${urls[index]}" /></span>`
          }
        },
      }
    }

    Object.assign(this.swiperEl, params)
  }
  render() {
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
          injectStyles={this.injectStyles}
          touch-start-prevent-default='false'
        ></swiper-container>
      </Host>
    )
  }
}
