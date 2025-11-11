// This file is a copy of the original Ionic source code with the exception of gap logic
// Link: https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/col/col.tsx
// You could read our ADR for this: apps/docs/stories/architecture-decision-records/0008-why-do-we-need-grids.stories.mdx

import { Component, forceUpdate, h, Host, Listen, Prop } from '@stencil/core'

const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl']

const SIZE_TO_MEDIA: Record<string, string> = {
  xs: '(min-width: 0px)',
  sm: '(min-width: 576px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 992px)',
  xl: '(min-width: 1200px)',
}

// Check if the window matches the media query
// at the breakpoint passed
// e.g. matchBreakpoint('sm') => true if screen width exceeds 576px
const matchBreakpoint = (breakpoint: string | undefined) => {
  if (breakpoint === undefined || breakpoint === '') {
    return true
  }

  if (typeof globalThis !== 'undefined' && 'matchMedia' in globalThis) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint]

    return globalThis.matchMedia(mediaQuery).matches
  }

  return false
}

@Component({
  tag: 'atom-col',
  shadow: true,
  styleUrl: 'col.scss',
})
export class AtomCol {
  @Prop() size?: 'auto' | string
  @Prop() sizeSm?: string
  @Prop() sizeMd?: string
  @Prop() sizeLg?: string
  @Prop() offset?: string
  @Prop() offsetSm?: string
  @Prop() offsetMd?: string
  @Prop() offsetLg?: string
  @Prop() push?: string
  @Prop() pull?: string

  @Listen('resize', { target: 'window' })
  onResize() {
    forceUpdate(this)
  }

  // Loop through all of the breakpoints to see if the media query
  // matches and grab the column value from the relevant prop if so
  private getColumns(property: string) {
    let matched

    for (const breakpoint of BREAKPOINTS) {
      const matches = matchBreakpoint(breakpoint)

      // Grab the value of the property, if it exists and our
      // media query matches we return the value
      const propName =
        property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)
      const columns = (this as Record<string, string | undefined>)[propName]

      if (matches && columns !== undefined) {
        matched = columns
      }
    }

    // Return the last matched columns since the breakpoints
    // increase in size and we want to return the largest match
    return matched
  }

  private calculateSize() {
    const columns = this.getColumns('size')

    // If size wasn't set for any breakpoint
    // or if the user set the size without a value
    // it means we need to stick with the default and return
    // e.g. <ion-col size-md>
    if (!columns || columns === '') {
      return
    }

    // If the size is set to auto then don't calculate a size
    const colSize =
      columns === 'auto'
        ? 'auto'
        : `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`

    return {
      flex: `0 0 ${colSize}`,
      width: `${colSize}`,
      'max-width': `${colSize}`,
    }
  }

  // Called by push, pull, and offset since they use the same calculations
  private calculatePosition(property: string, modifier: string) {
    const columns = this.getColumns(property)

    if (!columns) {
      return
    }

    // If the number of columns passed are greater than 0 and less than
    // 12 we can position the column, else default to auto
    const amount = `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`

    return {
      [modifier]: amount,
    }
  }

  private calculateOffset() {
    return this.calculatePosition('offset', 'margin-left')
  }

  private calculatePull() {
    return this.calculatePosition('pull', 'right')
  }

  private calculatePush() {
    return this.calculatePosition('push', 'left')
  }

  render() {
    return (
      <Host
        style={{
          ...this.calculateOffset(),
          ...this.calculatePull(),
          ...this.calculatePush(),
          ...this.calculateSize(),
        }}
      >
        <slot />
      </Host>
    )
  }
}
