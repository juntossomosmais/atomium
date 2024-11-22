import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class AtomSpinner {
  @Prop() type: 'primary' | 'secondary' | 'dark' = 'primary'
  @Prop() size: number = 20

  render() {
    return (
      <Host>
        <section>
          <div class='atom-spinner' />
          <div data-type={this.type} class='atom-spinner__top-border' />
        </section>
      </Host>
    )
  }
}
