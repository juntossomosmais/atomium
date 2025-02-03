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
  @Prop() renderText: string

  render() {
    return (
      <Host>
        <h1 class='title'>{this.title}</h1>
        <div class={`atom-meter is-${this.size}`}>
          <div class={`within is-${this.type}`} />
        </div>
      </Host>
    )
  }
}
