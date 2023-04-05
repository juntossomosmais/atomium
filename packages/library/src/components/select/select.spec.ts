import { newSpecPage } from '@stencil/core/testing'
import { AtoSelect } from './select'

const optionsMock = [
  { value: 'apple', selected: true },
  { value: 'banana', disabled: true },
  { value: 'orange' },
]

describe('AtoSelect', () => {
  it('should render an ion-select element', async () => {
    const page = await newSpecPage({
      components: [AtoSelect],
      html: '<ato-select />',
    })

    expect(page.root.shadowRoot.querySelector('ion-select')).toBeTruthy()
  })
  it('renders with all props', async () => {
    const page = await newSpecPage({
      components: [AtoSelect],
      html: `<ato-select
        name="test"
        interface="action-sheet"
        placeholder="Select an option"
        cancel-text="Cancel"
        ok-text="OK"
        disabled
        multiple
        size="large"
        color="secondary"
        mode="ios"
        overlay-dismiss
        label="Select a fruit"
        label-placement="stacked"
      ></ato-select>`,
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    expect(page.root).toEqualHtml(`
      <ato-select
        name="test"
        interface="action-sheet"
        placeholder="Select an option"
        cancel-text="Cancel"
        ok-text="OK"
        disabled
        multiple
        size="large"
        color="secondary"
        mode="ios"
        overlay-dismiss
        label="Select a fruit"
        label-placement="stacked"
      >
        <mock:shadow-root>
          <ion-item>
            <ion-select cancel-text="Cancel" color="secondary" disabled="" interface="action-sheet" label="Select a fruit" label-placement="stacked" mode="ios" multiple="" name="test" ok-text="OK" overlay-dismiss="" placeholder="Select an option">
              <ion-select-option value="apple">apple</ion-select-option>
              <ion-select-option value="banana" disabled>banana</ion-select-option>
              <ion-select-option value="orange">orange</ion-select-option>
            </ion-select>
          </ion-item>
        </mock:shadow-root>
      </ato-select>
    `)
  })

  it('emits atoChange event on select change', async () => {
    const page = await newSpecPage({
      components: [AtoSelect],
      html: '<ato-select />',
    })

    page.rootInstance.options = optionsMock
    await page.waitForChanges()

    const selectEl = page.root.shadowRoot.querySelector('ion-select')
    const spy = jest.fn()
    const selectValue = 'Option 2'

    page.root.addEventListener('atoChange', spy)
    selectEl.value = selectValue

    page.root.dispatchEvent(
      new CustomEvent('atoChange', { detail: { value: selectValue } })
    )

    expect(spy).toHaveBeenCalled()
  })
})
