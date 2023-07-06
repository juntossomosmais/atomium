import { Config } from '@stencil/core'
import { OutputTargetCustom } from '@stencil/core/internal'
import { sass } from '@stencil/sass'

import { reactOutputTarget } from '@stencil/react-output-target'
import { vueOutputTarget } from '@stencil/vue-output-target'

export const config: Config = {
  namespace: 'core',
  plugins: [
    sass({
      injectGlobalPaths: ['../../node_modules/@ionic/core/css/core.css'],
    }),
  ],
  globalScript: 'src/global/global.ts',
  globalStyle: 'src/global/global.scss',
  outputTargets: [
    vueOutputTarget({
      componentCorePackage: '@juntossomosmais/atomium',
      proxiesFile: '../vue/src/components/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
    }),
    reactOutputTarget({
      componentCorePackage: '@juntossomosmais/atomium',
      proxiesFile: '../react/src/components/index.ts',
      includeDefineCustomElements: true,
      includePolyfills: true,
      // Since Ionic components are imported in `global.ts`
      // we need to exclude them here to avoid unnecessary imports in the React output module
      excludeComponents: [
        'ion-accordion',
        'ion-accordion-group',
        'ion-action-sheet',
        'ion-alert',
        'ion-app',
        'ion-avatar',
        'ion-back-button',
        'ion-backdrop',
        'ion-badge',
        'ion-breadcrumb',
        'ion-breadcrumbs',
        'ion-button',
        'ion-buttons',
        'ion-card',
        'ion-card-content',
        'ion-card-header',
        'ion-card-subtitle',
        'ion-card-title',
        'ion-checkbox',
        'ion-chip',
        'ion-col',
        'ion-content',
        'ion-datetime',
        'ion-datetime-button',
        'ion-fab',
        'ion-fab-button',
        'ion-fab-list',
        'ion-footer',
        'ion-grid',
        'ion-header',
        'ion-icon',
        'ion-img',
        'ion-infinite-scroll',
        'ion-infinite-scroll-content',
        'ion-input',
        'ion-item',
        'ion-item-divider',
        'ion-item-group',
        'ion-item-option',
        'ion-item-options',
        'ion-item-sliding',
        'ion-label',
        'ion-list',
        'ion-list-header',
        'ion-loading',
        'ion-menu',
        'ion-menu-button',
        'ion-menu-toggle',
        'ion-modal',
        'ion-nav',
        'ion-nav-link',
        'ion-note',
        'ion-picker',
        'ion-picker-column',
        'ion-picker-column-internal',
        'ion-picker-internal',
        'ion-popover',
        'ion-progress-bar',
        'ion-radio',
        'ion-radio-group',
        'ion-range',
        'ion-refresher',
        'ion-refresher-content',
        'ion-reorder',
        'ion-reorder-group',
        'ion-ripple-effect',
        'ion-route',
        'ion-route-redirect',
        'ion-router',
        'ion-router-link',
        'ion-router-outlet',
        'ion-row',
        'ion-searchbar',
        'ion-segment',
        'ion-segment-button',
        'ion-select',
        'ion-select-option',
        'ion-select-popover',
        'ion-skeleton-text',
        'ion-spinner',
        'ion-split-pane',
        'ion-tab',
        'ion-tab-bar',
        'ion-tab-button',
        'ion-tabs',
        'ion-text',
        'ion-textarea',
        'ion-thumbnail',
        'ion-title',
        'ion-toast',
        'ion-toggle',
        'ion-toolbar',
      ],
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      generateTypeDeclarations: true,
    },
  ] as OutputTargetCustom[],
}
