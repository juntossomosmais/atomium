import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class AtomSpinner {
  @Prop() type: 'primary' | 'secondary' | 'dark' = 'primary'
  @Prop() size: number = 40

  render() {
    const customSize = {
      '--size': `${this.size}px`,
    }

    return (
      <Host>
        <div class='container'>
          <div
            class='atom-spinner__top-border'
            data-type={this.type}
            style={customSize}
          />
          <div class='atom-spinner' data-type={this.type} style={customSize} />
        </div>
      </Host>
    )
  }
}
