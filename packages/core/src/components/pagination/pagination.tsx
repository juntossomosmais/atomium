import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-pagination',
  styleUrl: 'pagination.scss',
  shadow: true,
})
export class AtomPagination {
  private readonly sibling = 1
  private readonly boundary = 1

  @Prop({ reflect: true, mutable: true })
  page: number

  @Prop()
  count: number

  @Event()
  atomChangePage: EventEmitter<number>

  private readonly handleChangePage = (page: number) => {
    if (this.page === page) return

    this.page = page
    this.atomChangePage.emit(this.page)
  }

  private readonly handleNextPage = () => {
    this.page += 1
    this.atomChangePage.emit(this.page)
  }

  private readonly handlePreviousPage = () => {
    this.page -= 1
    this.atomChangePage.emit(this.page)
  }

  makeItems() {
    const items = []

    if (this.count <= 1) {
      items.push({ type: 'page', number: 1 })

      return items
    }

    const siblingsStart = Math.max(
      Math.min(
        this.page - this.sibling,
        this.count - this.boundary - this.sibling * 2 - 1
      ),
      this.boundary + 2
    )
    const siblingsEnd = Math.min(
      Math.max(this.page + this.sibling, this.boundary + this.sibling * 2 + 2),
      this.count - (this.boundary - 1) - 2
    )

    // Start the start the first boundary pages, e.g: boundary = 1 = prev, 1
    for (let page = 1; page <= this.boundary; page++) {
      items.push({ type: 'page', number: page })
    }

    /*
      Check the siblings pages is greather than boundary with reserved pages
      boundary + 2 = current boundary reserved with 1 page and possibly space for ellipsis,
    */
    if (siblingsStart > this.boundary + 2) {
      items.push({ type: 'start-ellipsis' })
    } else if (this.boundary + 1 < this.count - this.boundary) {
      items.push({ type: 'page', number: this.boundary + 1 })
    }

    for (let i = siblingsStart; i <= siblingsEnd; i++) {
      items.push({ type: 'page', number: i })
    }

    if (siblingsEnd < this.count - this.boundary - 1) {
      items.push({ type: 'end-ellipsis' })
    } else if (this.count - this.boundary > this.boundary) {
      items.push({ type: 'page', number: this.count - this.boundary })
    }

    for (let i = this.count - this.boundary + 1; i <= this.count; i++) {
      items.push({ type: 'page', number: i })
    }

    return items
  }

  private readonly renderPages = () => {
    return this.makeItems().map((item) => {
      if (item.type === 'page') {
        const currentPage = item.number === this.page ? 'page' : undefined

        return (
          <li aria-current={currentPage}>
            <button
              class={{
                'atom-pagination__nav-item': true,
                'is-active': !!currentPage,
              }}
              onClick={() => this.handleChangePage(item.number)}
            >
              {item.number}
            </button>
          </li>
        )
      } else if (
        item.type === 'end-ellipsis' ||
        item.type === 'start-ellipsis'
      ) {
        return (
          <li>
            <span
              class={{
                'atom-pagination__nav-item': true,
                'has-ellipsis': true,
              }}
            >
              ...
            </span>
          </li>
        )
      }
    })
  }

  render() {
    return (
      <Host>
        <nav
          class={{
            'atom-pagination': true,
          }}
          aria-label='pagination'
        >
          <ul
            class={{
              'atom-pagination__nav': true,
            }}
          >
            <li>
              <atom-button
                shape='circle'
                disabled={this.page === 1}
                size='small'
                aria-label='Previous page'
                onClick={this.handlePreviousPage}
                color='secondary'
              >
                <atom-icon icon='chevron-left' size={32} />
              </atom-button>
            </li>
            {this.renderPages()}
            <li>
              <atom-button
                shape='circle'
                disabled={this.page === this.count}
                size='small'
                onClick={this.handleNextPage}
                aria-label='Next page'
                color='secondary'
              >
                <atom-icon icon='chevron-right' size={32} />
              </atom-button>
            </li>
          </ul>
        </nav>
      </Host>
    )
  }
}
