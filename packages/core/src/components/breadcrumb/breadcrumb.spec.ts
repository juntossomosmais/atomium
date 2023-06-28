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
  it('should render breadcrumb items correctly', async () => {
    const page = await newSpecPage({
      components: [AtomBreadcrumb],
      html: `<atom-breadcrumb />`,
    })

    page.rootInstance.items = breadcrumbItemsMock

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-breadcrumb>
        <mock:shadow-root>
          <ion-breadcrumbs>
            <ion-breadcrumb class="atom-breadcrumb">
              <span title="Go to first level">
                First level
              </span>
              <atom-icon icon="caret-forward-outline" slot="separator"></atom-icon>
            </ion-breadcrumb>
            <ion-breadcrumb class="atom-breadcrumb">
              <span title="Go to intermediary level">
                Intermediary level
              </span>
              <atom-icon icon="caret-forward-outline" slot="separator"></atom-icon>
            </ion-breadcrumb>
            <ion-breadcrumb class="atom-breadcrumb">
              <span title="This is the current level">
                Current level
              </span>
              <atom-icon icon="caret-forward-outline" slot="separator"></atom-icon>
            </ion-breadcrumb>
          </ion-breadcrumbs>
        </mock:shadow-root>
      </atom-breadcrumb>
    `)
  })
})
