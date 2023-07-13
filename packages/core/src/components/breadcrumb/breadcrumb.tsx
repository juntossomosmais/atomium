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
        {this.items.length > 1 && (
          <button
            class="atom-button__back"
            type="button"
            onClick={this.items[this.items.length - 2].redirect}
          >
            <atom-icon icon="arrow-back-outline" size="small" />
            Voltar
          </button>
        )}

        <ion-breadcrumbs class="atom-breadcrumbs">
          {this.items.map((item) => (
            <ion-breadcrumb
              class="atom-breadcrumb"
              onClick={item.redirect}
              key={item.text}
            >
              <span class="atom-breadcrumb__text" title={item.title}>
                {item.text}
              </span>
              <atom-icon icon="caret-forward-sharp" slot="separator" />
            </ion-breadcrumb>
          ))}
        </ion-breadcrumbs>
      </Host>
    )
  }
}
