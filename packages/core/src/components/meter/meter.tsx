import { Component, h, Host, Prop } from '@stencil/core'

import { isMobile } from '../../utils/screens'

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
  @Prop() min: number
  @Prop() max: number
  @Prop() actual: number

  private getProgress = () => {
    if (this.actual >= this.max) return 100

    if (this.actual <= this.min) return 0

    return ((this.actual - this.min) / (this.max - this.min)) * 100
  }

  render() {
    return (
      <Host>
        <div
          class={`container-text ${this.centerTitle ? 'hasCenterTitle' : ''} ${isMobile() ? 'is-mobile' : ''}`}
        >
          <h1 class={`title ${isMobile() ? 'is-mobile' : ''}`}>{this.title}</h1>
          {!this.centerTitle && !isMobile() && <slot />}
        </div>
        <div class={`atom-meter is-${this.size}`}>
          <div
            class={`within is-${this.type}`}
            style={{ width: `${this.getProgress()}%` }}
          />
        </div>
        {!this.centerTitle && isMobile() && (
          <div class='container-text hasMarginTop'>
            <slot />
          </div>
        )}
      </Host>
    )
  }
}
