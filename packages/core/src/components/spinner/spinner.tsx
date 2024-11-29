import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'atom-spinner',
  styleUrl: 'spinner.scss',
  shadow: true,
})
export class AtomSpinner {
  @Prop() type: 'primary' | 'secondary' | 'dark' = 'primary'
  @Prop() size: number = 40

  render() {
    const colors = {
      primary: 'var(--color-neutral-white)',
      secondary: 'var(--color-brand-secondary-regular)',
      dark: 'var(--color-neutral-light-1)',
    }

    return (
      <Host>
        <svg
          width={this.size}
          height={this.size}
          viewBox='0 0 25 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12ZM3.86 12C3.86 16.7717 7.72826 20.64 12.5 20.64C17.2717 20.64 21.14 16.7717 21.14 12C21.14 7.22826 17.2717 3.36 12.5 3.36C7.72826 3.36 3.86 7.22826 3.86 12Z'
            fill={`${
              this.type === 'primary'
                ? 'var(--color-brand-primary-light-1)'
                : 'var(--color-neutral-light-4)'
            }`}
          />
          <path
            d='M6.16927 3.84985C5.60009 3.1171 5.72815 2.04993 6.53315 1.58857C7.682 0.930167 8.93534 0.464485 10.2434 0.214033C12.1034 -0.142081 14.0212 -0.0529419 15.8401 0.474155C17.659 1.00125 19.3273 1.95134 20.7086 3.24675C21.6801 4.1578 22.4903 5.22147 23.1091 6.39212C23.5427 7.21241 23.0803 8.1827 22.2075 8.49758C21.3347 8.81247 20.3851 8.3481 19.9075 7.55263C19.4979 6.87038 18.9946 6.24566 18.4102 5.69765C17.4156 4.76495 16.2145 4.08089 14.9049 3.70138C13.5953 3.32187 12.2144 3.25769 10.8753 3.51409C10.0884 3.66474 9.32909 3.92355 8.61816 4.28108C7.78924 4.69795 6.73844 4.5826 6.16927 3.84985Z'
            fill={colors[this.type]}
          />
        </svg>
      </Host>
    )
  }
}
