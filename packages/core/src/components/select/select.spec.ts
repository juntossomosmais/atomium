import { newSpecPage } from '@stencil/core/testing'

import { AtomSelect } from './select'

const optionsMock: {
  value: string
  selected?: boolean
  disabled?: boolean
  label?: string
  tag?: { color: string; label: string }
}[] = [
  { value: 'apple', selected: true },
  { value: 'banana', disabled: true },
  { value: 'orange', tag: { color: 'success', label: 'New' } },
]

describe('AtomSelect', () => {
  it('should render with default values', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select>
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('should render with selected value', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select value="apple" />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select value="apple">
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round" value="apple">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('should render with custom label', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    const withLabel = {
      value: 'apple',
      label: 'fake apple',
    }

    page.rootInstance.options = [withLabel, ...optionsMock.slice(1)]
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select >
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">fake apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('renders with all props', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `<atom-select
        name="test"
        label="Select a fruit"
        placeholder="Select an option"
        mode="ios"
        fill="outline"
        disabled
        multiple
      ></atom-select>`,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select disabled="" fill="outline" label="Select a fruit" mode="ios" multiple="" name="test" placeholder="Select an option">
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" disabled="" fill="outline" interface="popover" label="Select a fruit" label-placement="stacked" mode="ios" multiple="" name="test" placeholder="Select an option" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option value="banana" disabled>banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with icon', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select icon="account-multiple" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select icon="account-multiple">
        <mock:shadow-root>
          <ion-select class="atom-select has-icon" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <atom-icon class="atom-icon" icon="account-multiple"></atom-icon>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with helper text', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select helper-text="Helper text" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select helper-text="Helper text">
        <mock:shadow-root>
          <ion-select class="atom-select" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <div class="select-bottom">
            <div class="helper-text">Helper text</div>
          </div>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('render with error text and do not shows helper text', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: `
        <atom-select error-text="Error text" helper-text="Helper text" />
      `,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <atom-select error-text="Error text" helper-text="Helper text">
        <mock:shadow-root>
          <ion-select class="atom-select has-error" color="secondary" fill="solid" interface="popover" label-placement="stacked" mode="md" shape="round">
            <ion-select-option value="apple">apple</ion-select-option>
            <ion-select-option disabled="" value="banana">banana</ion-select-option>
            <ion-select-option value="orange">orange</ion-select-option>
          </ion-select>
          <div class="select-bottom">
            <div class="error-text">Error text</div>
          </div>
        </mock:shadow-root>
      </atom-select>
    `)
  })

  it('emits atomChange event on select change', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const selectValue = 'Option 2'
    const spy = jest.fn()

    page.root?.addEventListener('atomChange', spy)

    const customEvent = new CustomEvent('ionChange', {
      detail: { value: selectValue },
    })

    if (selectEl) {
      selectEl.dispatchEvent(customEvent)
    }

    expect(spy).toHaveBeenCalled()
    expect(spy).toBeCalledWith(expect.objectContaining({ detail: selectValue }))
  })

  it('emits atomFocus event on select focus', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector(
      'ion-select'
    ) as HTMLElement
    const spy = jest.fn()

    page.root?.addEventListener('ionFocus', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionFocus'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionFocus'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomBlur event on select blur', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spyIonBlur = jest.fn()

    page.root?.addEventListener('ionBlur', spyIonBlur)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionBlur'))
    }

    await page.waitForChanges()
    page.root?.dispatchEvent(new CustomEvent('ionBlur'))

    expect(spyIonBlur).toHaveBeenCalled()
  })

  it('emits atomCancel event on select cancel', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionCancel', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionCancel'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionCancel'))

    expect(spy).toHaveBeenCalled()
  })

  it('emits atomDismiss event on select dismiss', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const spy = jest.fn()

    page.root?.addEventListener('ionDismiss', spy)

    if (selectEl) {
      selectEl.dispatchEvent(new Event('ionDismiss'))
    }

    page.root?.dispatchEvent(new CustomEvent('ionDismiss'))

    expect(spy).toHaveBeenCalled()
  })

  it('should remove all event listeners on disconnect', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()

    const selectEl = page.root?.shadowRoot?.querySelector('ion-select')
    const handleDismiss = jest.fn()

    if (selectEl) {
      selectEl.addEventListener('ionCancel', handleDismiss)

      page.root?.shadowRoot?.removeChild(selectEl)
      page.rootInstance.disconnectedCallback()
    }

    await page.waitForChanges()

    expect(handleDismiss).not.toHaveBeenCalled()
  })

  it('should filter options with tag', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    await page.waitForChanges()
    const mockFiltered = optionsMock.filter((option) => option?.tag?.label)
    const instanceObjetct = page.rootInstance.filterOptionsWithTag(optionsMock)

    expect(Object.keys(instanceObjetct).length).toEqual(mockFiltered.length)
  })
  it('should filter options and attach tag element', async () => {
    const page = await newSpecPage({
      components: [AtomSelect],
      html: '<atom-select />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    const generateItems = (texts: Array<string>) => {
      return texts.map((text) => {
        const ionItem = document.createElement('ion-item')
        const ionRadio = document.createElement('ion-radio')
        const radioShadow = ionRadio.attachShadow({ mode: 'open' })

        radioShadow.innerHTML = `<div><p>${text}</p></div>`
        ionItem.textContent = text
        ionItem.appendChild(ionRadio)

        return ionItem
      })
    }

    const items = generateItems(['apple', 'banana', 'orange'])

    page.rootInstance.optionsWithTag =
      page.rootInstance.filterOptionsWithTag(optionsMock)

    jest
      .spyOn(document, 'querySelectorAll')
      .mockReturnValue(items as unknown as NodeListOf<HTMLElement>)

    await page.waitForChanges()

    page.rootInstance.setTagInSelectOptions()

    await page.waitForChanges()

    expect(items[0]).toEqualHtml(`
      <ion-item>
        apple
        <ion-radio>
          <mock:shadow-root>
            <div>
              <p>apple</p>
            </div>
          </mock:shadow-root>
        </ion-radio>
      </ion-item>
    `)

    expect(items[2]).toEqualHtml(`
      <ion-item>
        orange
        <ion-radio>
          <mock:shadow-root>
            <div style="justify-content: start;">
              <p style="margin-right: 0;">orange</p>
              <atom-tag class="atom-tag" color="success" style="margin-left: var(--spacing-xsmall);">
                  New
              </atom-tag>
            </div>
          </mock:shadow-root>
        </ion-radio>
      </ion-item>
    `)
  })
})
