import { newSpecPage } from '@stencil/core/testing'

import { AtomPagination } from './pagination'

describe('atom-pagination', () => {
  it('handles next page correctly', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="1" count="10"></atom-pagination>`,
    })

    const pagination = page.rootInstance

    pagination.handleNextPage()

    await page.waitForChanges()

    expect(pagination.page).toBe(2)
  })

  it('handles previous page correctly', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="2" count="10"></atom-pagination>`,
    })

    const pagination = page.rootInstance

    pagination.handlePreviousPage()

    await page.waitForChanges()

    expect(pagination.page).toBe(1)
  })

  it('generates correct pagination items', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="5" count="10"></atom-pagination>`,
    })

    const pagination = page.rootInstance
    const items = pagination.makeItems()

    expect(items).toEqual([
      { type: 'page', number: 1 },
      { type: 'start-ellipsis' },
      { type: 'page', number: 4 },
      { type: 'page', number: 5 },
      { type: 'page', number: 6 },
      { type: 'end-ellipsis' },
      { type: 'page', number: 10 },
    ])
  })
})

it('disables previous button on first page', async () => {
  const page = await newSpecPage({
    components: [AtomPagination],
    html: `<atom-pagination page="1" count="10"></atom-pagination>`,
  })

  const previousButton = page.root.shadowRoot.querySelector(
    'atom-button[aria-label="Previous page"]'
  )

  expect(previousButton).toHaveAttribute('disabled')
})

it('disables next button on last page', async () => {
  const page = await newSpecPage({
    components: [AtomPagination],
    html: `<atom-pagination page="10" count="10"></atom-pagination>`,
  })

  const nextButton = page.root.shadowRoot.querySelector(
    'atom-button[aria-label="Next page"]'
  )

  expect(nextButton).toHaveAttribute('disabled')
})

it('enables next button when not on last page', async () => {
  const page = await newSpecPage({
    components: [AtomPagination],
    html: `<atom-pagination page="5" count="10"></atom-pagination>`,
  })

  const nextButton = page.root.shadowRoot.querySelector(
    'atom-button[aria-label="Next page"]'
  )

  expect(nextButton).not.toHaveAttribute('disabled')
})

it('emits atomChangePage event on next page click', async () => {
  const page = await newSpecPage({
    components: [AtomPagination],
    html: `<atom-pagination page="1" count="10"></atom-pagination>`,
  })

  const pagination = page.rootInstance
  const nextButton = page.root.shadowRoot.querySelector(
    'atom-button[aria-label="Next page"]'
  )

  const changePageSpy = jest.spyOn(pagination.atomChangePage, 'emit')

  //@ts-expect-error is a test...
  nextButton.click()

  await page.waitForChanges()

  expect(changePageSpy).toHaveBeenCalledWith(2)
})
