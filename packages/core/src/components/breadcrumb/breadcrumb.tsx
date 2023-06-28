import { Component, h, Host, Prop } from '@stencil/core'

type BreadcrumbItemProp = {
  redirect?: (event: MouseEvent) => void
  text: string
  title: string
}

@Component({
  tag: 'atom-breadcrumb',
  styleUrl: 'breadcrumb.scss',
  shadow: true,
})
export class AtomBreadcrumb {
  @Prop({ mutable: true }) items: BreadcrumbItemProp[] = []

  render() {
    return (
      <Host>
        <ion-breadcrumbs>
          {this.items.map((item) => (
            <ion-breadcrumb
              class="atom-breadcrumb"
              onClick={item.redirect}
              key={item.text}
            >
              <span title={item.title}>{item.text}</span>
              <atom-icon icon="caret-forward-outline" slot="separator" />
            </ion-breadcrumb>
          ))}
        </ion-breadcrumbs>
      </Host>
    )
  }
}
