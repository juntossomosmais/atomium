import { Component, Host, h } from '@stencil/core'

@Component({
  tag: 'atom-stepper',
  styleUrl: 'stepper.scss',
  shadow: true,
})
export class AtomStepper {
  render() {
    return (
      <Host>
        <div></div>
      </Host>
    )
  }
}
