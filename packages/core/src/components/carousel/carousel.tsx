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
  paginationType?: PaginationOptions['type'] = 'bullets'
  @Prop({ mutable: true })
  slidesPerGroup?: number | string = 1
  @Prop({ mutable: true })
  slidesPerView?: number | string = 1
  @Prop({ mutable: true })
  spaceBetween?: number = 0
  @Prop({ mutable: true }) speed?: number

  // If you need more info please read the ADR 0012 at Caveat sections
  private injectStyles = ['.swiper-button-disabled { opacity: 0 !important}']

  // If you need more info please read the ADR 0013
  private convertChildren() {
    this.swiperEl.innerHTML = this.host.innerHTML.replace(
      /atom-carousel-item/g,
      'swiper-slide'
    )
    let idx = 0
    while (idx < this.host.children.length) {
      if (this.host.children[idx].outerHTML.indexOf('atom-carousel-item') > -1)
        this.host.removeChild(this.host.children[idx])
      else idx++
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

    this.convertChildren()
  }
  render() {
    return (
      <Host>
        <swiper-container
          class='atom-carousel'
          pagination={this.pagination}
          pagination-clickable={this.pagination && this.paginationClickable}
          pagination-type={this.pagination && this.paginationType}
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
        ></swiper-container>
      </Host>
    )
  }
}
