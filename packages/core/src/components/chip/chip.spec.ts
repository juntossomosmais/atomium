import { newSpecPage } from '@stencil/core/testing'
import { AtomChip } from './chip'

describe('AtomChip', () => {
  it('should renders with default props', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip >${labelText}</atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip>
        <mock:shadow-root>
          <ion-chip class="atom-chip" tabindex="1">
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
        ${labelText}
      </atom-chip>
    `)
  })

  it('should add "has-activated" class when activated prop is true', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip activated></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip activated>
        <mock:shadow-root>
          <ion-chip class="atom-chip has-activated" tabindex="1">
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })

  it('should add icon when icon prop is set', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip icon="people"></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip icon="people">
        <mock:shadow-root>
          <ion-chip class="atom-chip" tabindex="1">
            <atom-icon class="atom-icon" icon="people"></atom-icon>
            <slot></slot>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })

  it('should add close button when close prop is true', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: `<atom-chip close></atom-chip>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-chip close>
        <mock:shadow-root>
          <ion-chip class="atom-chip" tabindex="1">
            <slot></slot>
            <atom-icon class="atom-close" icon="close"></atom-icon>
          </ion-chip>
        </mock:shadow-root>
      </atom-chip>
    `)
  })

  it('emits atomClick event on chip click', async () => {
    const page = await newSpecPage({
      components: [AtomChip],
      html: '<atom-chip>Click</atom-chip>',
    })

    await page.waitForChanges()

    const chipEl = page.root?.shadowRoot?.querySelector(
      'ion-chip'
    ) as HTMLElement
    const spy = jest.fn()

    page.root?.addEventListener('atomClick', spy)
    chipEl?.click()

    page.root?.dispatchEvent(new CustomEvent('atomClick'))

    expect(spy).toHaveBeenCalled()
  })
})
