import { Component, Element, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'atom-meter',
  styleUrl: 'meter.scss',
  shadow: true,
})
export class AtomMeter {
  @Prop() type?: 'success' | 'neutral' | 'warning' | 'danger' = 'neutral'
  @Prop() size?: 'small' | 'large' = 'large'
  @Prop() title: string
  @Prop() centerTitle?: boolean = false
  @Prop() min: number = 0
  @Prop() max: number
  @Prop() actual: number

  @Element() el: HTMLElement

  private isMobile = () => {
    return window.matchMedia('(max-width: 768px)').matches
  }

  private getProgress = () => {
    if (this.actual >= this.max) return 100

    if (this.actual <= this.min) return 0

    return ((this.actual - this.min) / (this.max - this.min)) * 100
  }

  render() {
    return (
      <Host>
        <div
          class={`container-text ${this.centerTitle ? 'hasCenterTitle' : ''} ${this.isMobile() ? 'is-mobile' : ''}`}
        >
          <h1 class={`title ${this.isMobile() ? 'is-mobile' : ''}`}>
            {this.title}
          </h1>
          {!this.centerTitle && !this.isMobile() && <slot />}
        </div>
        <div class={`atom-meter is-${this.size}`}>
          <div
            class={`within is-${this.type}`}
            style={{ width: `${this.getProgress()}%` }}
          />
        </div>
        {!this.centerTitle && this.isMobile() && (
          <div class='container-text hasMarginTop'>
            <slot />
          </div>
        )}
      </Host>
    )
  }
}
