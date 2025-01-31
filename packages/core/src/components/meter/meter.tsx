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
  // deve virar a callback que igao falou

  render() {
    return (
      <Host>
        <p>{this.title}</p>
        <div class='atom-meter'>
          <div class={`within is-${this.type}`} />
        </div>
      </Host>
    )
  }
}
