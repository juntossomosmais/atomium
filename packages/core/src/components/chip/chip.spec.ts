import { newSpecPage } from '@stencil/core/testing'
import { AtomChip } from './chip'

describe('AtomChip', () => {
  it('renders with default props', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip >${labelText}</atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip>
        <mock:shadow-root>
          <ion-chip class="atom-chip">
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
        ${labelText}
      </atom-chip>
    `)
  })

  it('add "has-activated" class when activated prop is true', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip activated></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip activated>
        <mock:shadow-root>
          <ion-chip class="atom-chip has-activated">
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })

  it('add icon when icon prop is set', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip icon="people"></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip icon="people">
        <mock:shadow-root>
          <ion-chip class="atom-chip">
            <atom-icon class="atom-icon" icon="people"></atom-icon>
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })

  it('add close button when close prop is true', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip close></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip close>
        <mock:shadow-root>
          <ion-chip class="atom-chip">
            <slot></slot>
            <atom-icon class="atom-close" icon="close"></atom-icon>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })
})
