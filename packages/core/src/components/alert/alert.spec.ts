import { newSpecPage } from '@stencil/core/testing'
import { AtomAlert } from './alert'

const messageTitle = 'Alert title'
const messageText = 'Alert text'

const createAlertColor = (color: string) => {
  return `
    <mock:shadow-root>
      <div class="atom-alert atom-color--${color}">
        <div class="atom-body">
          <div class="atom-content">
            <p class="atom-title">
              Alert title
            </p>
            <p class="atom-message">
              Alert text
            </p>
          </div>
        </div>
      </div>
    </mock:shadow-root>
  `
}

describe('AtomAlert', () => {
  it('should renders with default props', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert message-title="${messageTitle}" message-text="${messageText}"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert message-title="${messageTitle}" message-text="${messageText}"  role="alert">
        ${createAlertColor('neutral')}
      </atom-alert>
    `)
  })

  it('should add "atom-color--info" class when color prop is info', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert color="info" message-title="${messageTitle}" message-text="${messageText}"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert color="info" message-text="Alert text" message-title="Alert title" role="alert">
        ${createAlertColor('info')}
      </atom-alert>
    `)
  })

  it('should add "atom-color--success" class when color prop is success', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert color="success" message-title="${messageTitle}" message-text="${messageText}"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert color="success" message-text="Alert text" message-title="Alert title" role="alert">
        ${createAlertColor('success')}
      </atom-alert>
    `)
  })

  it('should add "atom-color--danger" class when color prop is danger', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert color="danger" message-title="${messageTitle}" message-text="${messageText}"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert color="danger" message-text="Alert text" message-title="Alert title" role="alert">
        ${createAlertColor('danger')}
      </atom-alert>
    `)
  })

  it('should add "atom-color--warning" class when color prop is warning', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert color="warning" message-title="${messageTitle}" message-text="${messageText}"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert color="warning" message-text="Alert text" message-title="Alert title" role="alert">
        ${createAlertColor('warning')}
      </atom-alert>
    `)
  })

  it('should add icon when icon prop is set', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert message-title="${messageTitle}" message-text="${messageText}" icon="alert"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert icon="alert" message-title="${messageTitle}" message-text="${messageText}" role="alert">
        <mock:shadow-root>
            <div class="atom-alert atom-color--neutral">
              <div class="atom-body">
                <atom-icon class="atom-icon" icon="alert"></atom-icon>
                <div class="atom-content">
                <p class="atom-title">
                  Alert title
                </p>
                <p class="atom-message">
                  Alert text
                </p>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </atom-alert>
    `)
  })

  it('should add close button when close prop is true', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert message-title="${messageTitle}" message-text="${messageText}" close="true"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert close="true" message-title="${messageTitle}" message-text="${messageText}" role="alert">
          <mock:shadow-root>
            <div class="atom-alert atom-color--neutral">
              <div class="atom-body">
                <div class="atom-content">
                <p class="atom-title">
                  Alert title
                </p>
                <p class="atom-message">
                  Alert text
                </p>
              </div>
            </div>
            <button aria-label="Close" class="atom-close" type="button">
              <atom-icon icon="close"></atom-icon>
            </button>
          </div>
        </mock:shadow-root>
      </atom-alert>
    `)
  })

  it('should add actions "action-text" prop is set', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: `<atom-alert message-title="${messageTitle}" message-text="${messageText}" action-text="Action example"></atom-alert>`,
    })

    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-alert action-text="Action example" message-title="${messageTitle}" message-text="${messageText}" role="alert">
        <mock:shadow-root>
          <div class="atom-alert atom-color--neutral">
            <div class="atom-body">
              <div class="atom-content">
              <p class="atom-title">
                Alert title
              </p>
              <p class="atom-message">
                Alert text
              </p>
            </div>
          </div>
          <div class="atom-actions">
            <button class="atom-actions__button" type="button">
              Action example
            </button>
          </div>
        </div>
      </mock:shadow-root>
    </atom-alert>
    `)
  })

  it('should emit atomAction event on action button click', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: '<atom-alert action-text="Action example"></atom-alert>',
    })

    await page.waitForChanges()

    const alertActionEl = page.root?.shadowRoot?.querySelector(
      '.atom-actions__button'
    ) as HTMLElement
    const spy = jest.fn()

    page.root?.addEventListener('atomAction', spy)
    alertActionEl?.click()

    page.root?.dispatchEvent(new CustomEvent('atomAction'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomClose event on alert close click', async () => {
    const page = await newSpecPage({
      components: [AtomAlert],
      html: '<atom-alert close="true"></atom-alert>',
    })

    await page.waitForChanges()

    const alertCloseEl = page.root?.shadowRoot?.querySelector(
      '.atom-close'
    ) as HTMLElement
    const spy = jest.fn()

    page.root?.addEventListener('atomClose', spy)
    alertCloseEl?.click()

    page.root?.dispatchEvent(new CustomEvent('atomClose'))

    expect(spy).toHaveBeenCalled()
  })
})
