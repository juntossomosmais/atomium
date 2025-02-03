import { Component, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'atom-meter',
  styleUrl: 'meter.scss',
  shadow: true,
})
export class AtomMeter {
  @Prop() type: 'success' | 'neutral' | 'warning' | 'danger' = 'neutral'
  @Prop() size: 'small' | 'large' = 'large'
  @Prop() title: string
  @Prop() min: number = 0
  @Prop() max: number
  @Prop() actual: number

  render() {
    const getProgress = () => {
      if (this.actual >= this.max) return 100

      if (this.actual <= this.min) return 0

      return ((this.actual - this.min) / (this.max - this.min)) * 100
    }

    return (
      <Host>
        <div class='container-text'>
          <h1 class='title'>{this.title}</h1>
          <slot />
        </div>
        <div class={`atom-meter is-${this.size}`}>
          <div
            class={`within is-${this.type}`}
            style={{ width: `${getProgress()}%` }}
          />
        </div>
      </Host>
    )
  }
}
