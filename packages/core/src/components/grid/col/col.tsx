import { Component, Element, h, Host, Prop } from '@stencil/core'

@Component({
  tag: 'atom-col',
  shadow: false,
})
export class AtomCol {
  @Prop() size?: 'auto' | string
  @Prop() sizeSm?: string
  @Prop() sizeMd?: string
  @Prop() sizeLg?: string
  @Prop() offset?: string
  @Prop() offsetSm?: string
  @Prop() offsetMd?: string
  @Prop() offsetLg?: string
  @Prop() push?: string
  @Prop() pull?: string

  @Element() private element!: HTMLElement

  componentDidLoad() {
    const ionCol = document.createElement('ion-col')
    const childNodes = this.element.childNodes

    Array.from(this.element.attributes).forEach((attr) => {
      ionCol.setAttribute(attr.name.replace('ato', 'ion'), attr.value)
    })
    Array.from(childNodes).forEach((child) => ionCol.appendChild(child))

    this.element.parentNode.replaceChild(ionCol, this.element)
  }

  render() {
    return (
      <Host
        size={this.size}
        sizeSm={this.sizeSm}
        sizeMd={this.sizeMd}
        sizeLg={this.sizeLg}
        offset={this.offset}
        offsetSm={this.offsetSm}
        offsetMd={this.offsetMd}
        offsetLg={this.offsetLg}
        push={this.push}
        pull={this.pull}
      >
        <slot />
      </Host>
    )
  }
}
