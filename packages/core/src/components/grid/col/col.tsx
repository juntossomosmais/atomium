// This file is a copy of the original Ionic source code with the exception of gap logic
// link: https://github.com/ionic-team/ionic-framework/blob/main/core/src/components/col/col.tsx

import {
  Component,
  Element,
  forceUpdate,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core'

const win = typeof (window as any) !== 'undefined' ? (window as any) : undefined
const SUPPORTS_VARS =
  win && !!(win.CSS && win.CSS.supports && win.CSS.supports('--a: 0'))
const BREAKPOINTS = ['', 'xs', 'sm', 'md', 'lg', 'xl']

const SIZE_TO_MEDIA: any = {
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
  if ((window as any).matchMedia) {
    const mediaQuery = SIZE_TO_MEDIA[breakpoint]
    return window.matchMedia(mediaQuery).matches
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

  @Element() private element!: HTMLElement

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
      const columns = (this as any)[
        property + breakpoint.charAt(0).toUpperCase() + breakpoint.slice(1)
      ]

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
        : // If CSS supports variables we should use the grid columns var
        SUPPORTS_VARS
        ? `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100% - var(--grid-gap))`
        : // Convert the columns to a percentage by dividing by the total number
          // of columns (12) and then multiplying by 100
          (columns / 12) * 100 + '%'

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
    const amount = SUPPORTS_VARS
      ? // If CSS supports variables we should use the grid columns var
        `calc(calc(${columns} / var(--ion-grid-columns, 12)) * 100%)`
      : // Convert the columns to a percentage by dividing by the total number
      // of columns (12) and then multiplying by 100
      columns > 0 && columns < 12
      ? (columns / 12) * 100 + '%'
      : 'auto'

    return {
      [modifier]: amount,
    }
  }

  private calculateOffset(isRTL: boolean) {
    return this.calculatePosition(
      'offset',
      isRTL ? 'margin-right' : 'margin-left'
    )
  }

  private calculatePull(isRTL: boolean) {
    return this.calculatePosition('pull', isRTL ? 'left' : 'right')
  }

  private calculatePush(isRTL: boolean) {
    return this.calculatePosition('push', isRTL ? 'right' : 'left')
  }

  render() {
    const isRTL = document.dir === 'rtl'

    return (
      <Host
        style={{
          ...this.calculateOffset(isRTL),
          ...this.calculatePull(isRTL),
          ...this.calculatePush(isRTL),
          ...this.calculateSize(),
        }}
      >
        <slot />
      </Host>
    )
  }
}
