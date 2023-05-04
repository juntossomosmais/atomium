import { newSpecPage } from '@stencil/core/testing'
import { AtomButton } from './button'

describe('AtomButton', () => {
  it('should render an ion-button element', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button></atom-button>',
    })

    expect(page.root?.shadowRoot?.querySelector('ion-button')).toBeTruthy()
  })

  it('renders with all props', async () => {
    const labelText = 'Click me'

    const page = await newSpecPage({
      components: [AtomButton],
      html: `<atom-button>${labelText}</atom-button>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-button>
        <mock:shadow-root>
          <ion-button class="atom-button" color="primary" fill="solid" mode="md" shape="round" size="default" type="button">
            <span class="slot">
              <slot></slot>
            </span>
          </ion-button>
        </mock:shadow-root>
        ${labelText}
      </atom-button>
    `)
  })

  it('shows a spinner when loading', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button loading="true"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-button loading="true">
        <mock:shadow-root>
          <ion-button class="atom-button is-loading" color="primary" fill="solid" mode="md" shape="round" size="default" type="button">
            <span class="loading">
              <ion-spinner color="light"></ion-spinner>
            </span>
            <span class="slot">
              <slot></slot>
            </span>
          </ion-button>
        </mock:shadow-root>
      </atom-button>
    `)
  })

  it('change color to "medium" when disabled', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button disabled="true"></atom-button>',
    })

    await page.waitForChanges()

    expect(page.root?.shadowRoot).toEqualHtml(`
      <ion-button class="atom-button" color="medium" disabled="" fill="solid" mode="md" shape="round" size="default" type="button">
        <span class="slot">
          <slot></slot>
        </span>
      </ion-button>
    `)
  })

  it('emits atoClick event on button click', async () => {
    const page = await newSpecPage({
      components: [AtomButton],
      html: '<atom-button>Click</atom-button>',
    })

    await page.waitForChanges()

    const buttonEl = page.root?.shadowRoot?.querySelector('ion-button')
    const spy = jest.fn()

    page.root?.addEventListener('atomClick', spy)
    buttonEl?.click()

    page.root?.dispatchEvent(new CustomEvent('atomClick'))

    expect(spy).toHaveBeenCalled()
  })
})
