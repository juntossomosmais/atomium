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

  it('generates correct pagination items when count is equal or less 1', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="1" count="1"></atom-pagination>`,
    })

    const pagination = page.rootInstance
    const items = pagination.makeItems()

    expect(items).toEqual([{ type: 'page', number: 1 }])
  })

  it('generates correct boundary pagination items', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="6" count="50"></atom-pagination>`,
    })

    const pagination = page.rootInstance

    pagination.boundary = 2
    const items = pagination.makeItems()

    // 1,2, ...rest-pages, 9, 10 <- should have two boundary pages in start and end
    expect(items).toEqual([
      { type: 'page', number: 1 },
      { type: 'page', number: 2 },
      { type: 'start-ellipsis' },
      { type: 'page', number: 5 },
      { type: 'page', number: 6 },
      { type: 'page', number: 7 },
      { type: 'end-ellipsis' },
      { type: 'page', number: 49 },
      { type: 'page', number: 50 },
    ])
  })

  it('generates correct start-ellipsis pagination when boundary is not reached', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="4" count="10"></atom-pagination>`,
    })

    const pagination = page.rootInstance
    const items = pagination.makeItems()

    expect(items).toEqual([
      { type: 'page', number: 1 },
      { type: 'page', number: 2 },
      { type: 'page', number: 3 },
      { type: 'page', number: 4 },
      { type: 'page', number: 5 },
      { type: 'end-ellipsis' },
      { type: 'page', number: 10 },
    ])
  })

  it('generates correct end-ellipsis pagination when boundary is not reached', async () => {
    const page = await newSpecPage({
      components: [AtomPagination],
      html: `<atom-pagination page="7" count="10"></atom-pagination>`,
    })

    const pagination = page.rootInstance
    const items = pagination.makeItems()

    expect(items).toEqual([
      { type: 'page', number: 1 },
      { type: 'start-ellipsis' },
      { type: 'page', number: 6 },
      { type: 'page', number: 7 },
      { type: 'page', number: 8 },
      { type: 'page', number: 9 },
      { type: 'page', number: 10 },
    ])
  })

  it('disables previous button on last page', async () => {
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
})
