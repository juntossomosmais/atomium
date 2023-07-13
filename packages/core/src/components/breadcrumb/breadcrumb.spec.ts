import { newSpecPage } from '@stencil/core/testing'

import { AtomBreadcrumb } from './breadcrumb'

const breadcrumbItemsMock = [
  {
    text: 'First level',
    title: 'Go to first level',
    redirect: () => console.log('/first'),
  },
  {
    text: 'Intermediary level',
    title: 'Go to intermediary level',
    redirect: () => console.log('/intermediary'),
  },
  {
    text: 'Current level',
    title: 'This is the current level',
  },
]

describe('atom-breadcrumb', () => {
  it('should render breadcrumb items and mobile back button correctly', async () => {
    const page = await newSpecPage({
      components: [AtomBreadcrumb],
      html: `<atom-breadcrumb />`,
    })

    page.rootInstance.items = breadcrumbItemsMock

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-breadcrumb>
        <mock:shadow-root>
          <button class="atom-button__back" type="button">
            <atom-icon icon="arrow-back-outline" size="small"></atom-icon>
            Voltar
          </button>
          <ion-breadcrumbs class="atom-breadcrumbs">
            <ion-breadcrumb class="atom-breadcrumb">
              <span class="atom-breadcrumb__text" title="Go to first level">
                First level
              </span>
              <atom-icon icon="caret-forward-sharp" slot="separator"></atom-icon>
            </ion-breadcrumb>
            <ion-breadcrumb class="atom-breadcrumb">
              <span class="atom-breadcrumb__text" title="Go to intermediary level">
                Intermediary level
              </span>
              <atom-icon icon="caret-forward-sharp" slot="separator"></atom-icon>
            </ion-breadcrumb>
            <ion-breadcrumb class="atom-breadcrumb">
              <span class="atom-breadcrumb__text" title="This is the current level">
                Current level
              </span>
              <atom-icon icon="caret-forward-sharp" slot="separator"></atom-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </mock:shadow-root>
      </atom-breadcrumb>
    `)
  })

  it('should not render mobile back button when only one breadcrumb item is sent as prop', async () => {
    const page = await newSpecPage({
      components: [AtomBreadcrumb],
      html: `<atom-breadcrumb />`,
    })

    page.rootInstance.items = [breadcrumbItemsMock[0]]

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-breadcrumb>
        <mock:shadow-root>
          <ion-breadcrumbs class="atom-breadcrumbs">
            <ion-breadcrumb class="atom-breadcrumb">
              <span class="atom-breadcrumb__text" title="Go to first level">
                First level
              </span>
              <atom-icon icon="caret-forward-sharp" slot="separator"></atom-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </mock:shadow-root>
      </atom-breadcrumb>
    `)
  })
})
