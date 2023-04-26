import { defineContainer } from './vue-component-lib/utils';
import { applyPolyfills, defineCustomElements } from '@juntossomosmais/atomium/loader';
applyPolyfills().then(() => defineCustomElements());
export const AtomButton = defineContainer('atom-button', undefined, [
    'color',
    'fill',
    'size',
    'expand',
    'shape',
    'disabled',
    'type',
    'mode',
    'atomClick'
]);
export const AtomCol = defineContainer('atom-col', undefined, [
    'size',
    'sizeSm',
    'sizeMd',
    'sizeLg',
    'offset',
    'offsetSm',
    'offsetMd',
    'offsetLg',
    'push',
    'pull'
]);
export const AtomGrid = defineContainer('atom-grid', undefined, [
    'fixed'
]);
export const AtomIcon = defineContainer('atom-icon', undefined, [
    'icon',
    'color',
    'size'
]);
export const AtomInput = defineContainer('atom-input', undefined, [
    'color',
    'value',
    'type',
    'placeholder',
    'name',
    'minlength',
    'maxlength',
    'disabled',
    'required',
    'mode',
    'fill',
    'autofocus',
    'pattern',
    'accept',
    'multiple',
    'clearOnEdit',
    'clearInput',
    'inputmode',
    'labelPlacement',
    'label',
    'atomFocus',
    'atomBlur',
    'atomChange'
]);
export const AtomRow = defineContainer('atom-row', undefined);
export const AtomSelect = defineContainer('atom-select', undefined, [
    'color',
    'name',
    'interface',
    'placeholder',
    'cancelText',
    'okText',
    'disabled',
    'multiple',
    'size',
    'mode',
    'overlayDismiss',
    'label',
    'labelPlacement',
    'options',
    'atomBlur',
    'atomCancel',
    'atomChange',
    'atomDimiss',
    'atomFocus'
]);
export const IonAccordion = defineContainer('ion-accordion', undefined, [
    'value',
    'disabled',
    'readonly',
    'toggleIcon',
    'toggleIconSlot'
]);
export const IonAccordionGroup = defineContainer('ion-accordion-group', undefined, [
    'animated',
    'multiple',
    'value',
    'disabled',
    'readonly',
    'expand',
    'ionChange',
    'ionValueChange'
]);
export const IonActionSheet = defineContainer('ion-action-sheet', undefined, [
    'overlayIndex',
    'delegate',
    'hasController',
    'keyboardClose',
    'enterAnimation',
    'leaveAnimation',
    'buttons',
    'cssClass',
    'backdropDismiss',
    'header',
    'subHeader',
    'translucent',
    'animated',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'ionActionSheetDidPresent',
    'ionActionSheetWillPresent',
    'ionActionSheetWillDismiss',
    'ionActionSheetDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonAlert = defineContainer('ion-alert', undefined, [
    'overlayIndex',
    'delegate',
    'hasController',
    'keyboardClose',
    'enterAnimation',
    'leaveAnimation',
    'cssClass',
    'header',
    'subHeader',
    'message',
    'buttons',
    'inputs',
    'backdropDismiss',
    'translucent',
    'animated',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'ionAlertDidPresent',
    'ionAlertWillPresent',
    'ionAlertWillDismiss',
    'ionAlertDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonApp = defineContainer('ion-app', undefined);
export const IonAvatar = defineContainer('ion-avatar', undefined);
export const IonBackButton = defineContainer('ion-back-button', undefined, [
    'color',
    'defaultHref',
    'disabled',
    'icon',
    'text',
    'type',
    'routerAnimation'
]);
export const IonBackdrop = defineContainer('ion-backdrop', undefined, [
    'visible',
    'tappable',
    'stopPropagation',
    'ionBackdropTap'
]);
export const IonBadge = defineContainer('ion-badge', undefined, [
    'color'
]);
export const IonBreadcrumb = defineContainer('ion-breadcrumb', undefined, [
    'collapsed',
    'last',
    'showCollapsedIndicator',
    'color',
    'active',
    'disabled',
    'download',
    'href',
    'rel',
    'separator',
    'target',
    'routerDirection',
    'routerAnimation',
    'ionFocus',
    'ionBlur',
    'collapsedClick'
]);
export const IonBreadcrumbs = defineContainer('ion-breadcrumbs', undefined, [
    'color',
    'maxItems',
    'itemsBeforeCollapse',
    'itemsAfterCollapse',
    'ionCollapsedClick'
]);
export const IonButton = defineContainer('ion-button', undefined, [
    'color',
    'buttonType',
    'disabled',
    'expand',
    'fill',
    'routerDirection',
    'routerAnimation',
    'download',
    'href',
    'rel',
    'shape',
    'size',
    'strong',
    'target',
    'type',
    'form',
    'ionFocus',
    'ionBlur'
]);
export const IonButtons = defineContainer('ion-buttons', undefined, [
    'collapse'
]);
export const IonCard = defineContainer('ion-card', undefined, [
    'color',
    'button',
    'type',
    'disabled',
    'download',
    'href',
    'rel',
    'routerDirection',
    'routerAnimation',
    'target'
]);
export const IonCardContent = defineContainer('ion-card-content', undefined);
export const IonCardHeader = defineContainer('ion-card-header', undefined, [
    'color',
    'translucent'
]);
export const IonCardSubtitle = defineContainer('ion-card-subtitle', undefined, [
    'color'
]);
export const IonCardTitle = defineContainer('ion-card-title', undefined, [
    'color'
]);
export const IonCheckbox = defineContainer('ion-checkbox', undefined, [
    'color',
    'name',
    'checked',
    'indeterminate',
    'disabled',
    'value',
    'labelPlacement',
    'justify',
    'legacy',
    'ionChange',
    'ionFocus',
    'ionBlur',
    'ionStyle'
]);
export const IonChip = defineContainer('ion-chip', undefined, [
    'color',
    'outline',
    'disabled'
]);
export const IonCol = defineContainer('ion-col', undefined, [
    'offset',
    'offsetXs',
    'offsetSm',
    'offsetMd',
    'offsetLg',
    'offsetXl',
    'pull',
    'pullXs',
    'pullSm',
    'pullMd',
    'pullLg',
    'pullXl',
    'push',
    'pushXs',
    'pushSm',
    'pushMd',
    'pushLg',
    'pushXl',
    'size',
    'sizeXs',
    'sizeSm',
    'sizeMd',
    'sizeLg',
    'sizeXl'
]);
export const IonContent = defineContainer('ion-content', undefined, [
    'color',
    'fullscreen',
    'forceOverscroll',
    'scrollX',
    'scrollY',
    'scrollEvents',
    'ionScrollStart',
    'ionScroll',
    'ionScrollEnd'
]);
export const IonDatetime = defineContainer('ion-datetime', undefined, [
    'color',
    'name',
    'disabled',
    'readonly',
    'isDateEnabled',
    'min',
    'max',
    'presentation',
    'cancelText',
    'doneText',
    'clearText',
    'yearValues',
    'monthValues',
    'dayValues',
    'hourValues',
    'minuteValues',
    'locale',
    'firstDayOfWeek',
    'titleSelectedDatesFormatter',
    'multiple',
    'highlightedDates',
    'value',
    'showDefaultTitle',
    'showDefaultButtons',
    'showClearButton',
    'showDefaultTimeLabel',
    'hourCycle',
    'size',
    'preferWheel',
    'ionCancel',
    'ionChange',
    'ionValueChange',
    'ionFocus',
    'ionBlur',
    'ionStyle',
    'ionRender'
]);
export const IonDatetimeButton = defineContainer('ion-datetime-button', undefined, [
    'color',
    'disabled',
    'datetime'
]);
export const IonFab = defineContainer('ion-fab', undefined, [
    'horizontal',
    'vertical',
    'edge',
    'activated'
]);
export const IonFabButton = defineContainer('ion-fab-button', undefined, [
    'color',
    'activated',
    'disabled',
    'download',
    'href',
    'rel',
    'routerDirection',
    'routerAnimation',
    'target',
    'show',
    'translucent',
    'type',
    'size',
    'closeIcon',
    'ionFocus',
    'ionBlur'
]);
export const IonFabList = defineContainer('ion-fab-list', undefined, [
    'activated',
    'side'
]);
export const IonFooter = defineContainer('ion-footer', undefined, [
    'collapse',
    'translucent'
]);
export const IonGrid = defineContainer('ion-grid', undefined, [
    'fixed'
]);
export const IonHeader = defineContainer('ion-header', undefined, [
    'collapse',
    'translucent'
]);
export const IonIcon = defineContainer('ion-icon', undefined, [
    'mode',
    'color',
    'ios',
    'md',
    'flipRtl',
    'name',
    'src',
    'icon',
    'size',
    'lazy',
    'sanitize'
]);
export const IonImg = defineContainer('ion-img', undefined, [
    'alt',
    'src',
    'ionImgWillLoad',
    'ionImgDidLoad',
    'ionError'
]);
export const IonInfiniteScroll = defineContainer('ion-infinite-scroll', undefined, [
    'threshold',
    'disabled',
    'position',
    'ionInfinite'
]);
export const IonInfiniteScrollContent = defineContainer('ion-infinite-scroll-content', undefined, [
    'loadingSpinner',
    'loadingText'
]);
export const IonInput = defineContainer('ion-input', undefined, [
    'color',
    'accept',
    'autocapitalize',
    'autocomplete',
    'autocorrect',
    'autofocus',
    'clearInput',
    'clearOnEdit',
    'counter',
    'counterFormatter',
    'debounce',
    'disabled',
    'enterkeyhint',
    'errorText',
    'fill',
    'inputmode',
    'helperText',
    'label',
    'labelPlacement',
    'legacy',
    'max',
    'maxlength',
    'min',
    'minlength',
    'multiple',
    'name',
    'pattern',
    'placeholder',
    'readonly',
    'required',
    'shape',
    'spellcheck',
    'step',
    'size',
    'type',
    'value',
    'ionInput',
    'ionChange',
    'ionBlur',
    'ionFocus',
    'ionStyle'
]);
export const IonItem = defineContainer('ion-item', undefined, [
    'color',
    'button',
    'detail',
    'detailIcon',
    'disabled',
    'download',
    'fill',
    'shape',
    'href',
    'rel',
    'lines',
    'counter',
    'routerAnimation',
    'routerDirection',
    'target',
    'type',
    'counterFormatter'
]);
export const IonItemDivider = defineContainer('ion-item-divider', undefined, [
    'color',
    'sticky'
]);
export const IonItemGroup = defineContainer('ion-item-group', undefined);
export const IonItemOption = defineContainer('ion-item-option', undefined, [
    'color',
    'disabled',
    'download',
    'expandable',
    'href',
    'rel',
    'target',
    'type'
]);
export const IonItemOptions = defineContainer('ion-item-options', undefined, [
    'side',
    'ionSwipe'
]);
export const IonItemSliding = defineContainer('ion-item-sliding', undefined, [
    'disabled',
    'ionDrag'
]);
export const IonLabel = defineContainer('ion-label', undefined, [
    'color',
    'position',
    'ionColor',
    'ionStyle'
]);
export const IonList = defineContainer('ion-list', undefined, [
    'lines',
    'inset'
]);
export const IonListHeader = defineContainer('ion-list-header', undefined, [
    'color',
    'lines'
]);
export const IonLoading = defineContainer('ion-loading', undefined, [
    'overlayIndex',
    'delegate',
    'hasController',
    'keyboardClose',
    'enterAnimation',
    'leaveAnimation',
    'message',
    'cssClass',
    'duration',
    'backdropDismiss',
    'showBackdrop',
    'spinner',
    'translucent',
    'animated',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'ionLoadingDidPresent',
    'ionLoadingWillPresent',
    'ionLoadingWillDismiss',
    'ionLoadingDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonMenu = defineContainer('ion-menu', undefined, [
    'contentId',
    'menuId',
    'type',
    'disabled',
    'side',
    'swipeGesture',
    'maxEdgeStart',
    'ionWillOpen',
    'ionWillClose',
    'ionDidOpen',
    'ionDidClose',
    'ionMenuChange'
]);
export const IonMenuButton = defineContainer('ion-menu-button', undefined, [
    'color',
    'disabled',
    'menu',
    'autoHide',
    'type'
]);
export const IonMenuToggle = defineContainer('ion-menu-toggle', undefined, [
    'menu',
    'autoHide'
]);
export const IonModal = defineContainer('ion-modal', undefined, [
    'hasController',
    'overlayIndex',
    'delegate',
    'keyboardClose',
    'enterAnimation',
    'leaveAnimation',
    'breakpoints',
    'initialBreakpoint',
    'backdropBreakpoint',
    'handle',
    'handleBehavior',
    'component',
    'componentProps',
    'cssClass',
    'backdropDismiss',
    'showBackdrop',
    'animated',
    'presentingElement',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'keepContentsMounted',
    'canDismiss',
    'ionModalDidPresent',
    'ionModalWillPresent',
    'ionModalWillDismiss',
    'ionModalDidDismiss',
    'ionBreakpointDidChange',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonNav = defineContainer('ion-nav', undefined, [
    'delegate',
    'swipeGesture',
    'animated',
    'animation',
    'rootParams',
    'root',
    'ionNavWillLoad',
    'ionNavWillChange',
    'ionNavDidChange'
]);
export const IonNavLink = defineContainer('ion-nav-link', undefined, [
    'component',
    'componentProps',
    'routerDirection',
    'routerAnimation'
]);
export const IonNote = defineContainer('ion-note', undefined, [
    'color'
]);
export const IonPicker = defineContainer('ion-picker', undefined, [
    'overlayIndex',
    'delegate',
    'hasController',
    'keyboardClose',
    'enterAnimation',
    'leaveAnimation',
    'buttons',
    'columns',
    'cssClass',
    'duration',
    'showBackdrop',
    'backdropDismiss',
    'animated',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'ionPickerDidPresent',
    'ionPickerWillPresent',
    'ionPickerWillDismiss',
    'ionPickerDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonPickerColumn = defineContainer('ion-picker-column', undefined, [
    'col',
    'ionPickerColChange'
]);
export const IonPickerColumnInternal = defineContainer('ion-picker-column-internal', undefined, [
    'items',
    'value',
    'color',
    'numericInput',
    'ionChange'
]);
export const IonPickerInternal = defineContainer('ion-picker-internal', undefined, [
    'ionInputModeChange'
]);
export const IonPopover = defineContainer('ion-popover', undefined, [
    'hasController',
    'delegate',
    'overlayIndex',
    'enterAnimation',
    'leaveAnimation',
    'component',
    'componentProps',
    'keyboardClose',
    'cssClass',
    'backdropDismiss',
    'event',
    'showBackdrop',
    'translucent',
    'animated',
    'htmlAttributes',
    'triggerAction',
    'trigger',
    'size',
    'dismissOnSelect',
    'reference',
    'side',
    'alignment',
    'arrow',
    'isOpen',
    'keyboardEvents',
    'keepContentsMounted',
    'ionPopoverDidPresent',
    'ionPopoverWillPresent',
    'ionPopoverWillDismiss',
    'ionPopoverDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss',
    'ionMount'
]);
export const IonProgressBar = defineContainer('ion-progress-bar', undefined, [
    'type',
    'reversed',
    'value',
    'buffer',
    'color'
]);
export const IonRadio = defineContainer('ion-radio', undefined, [
    'color',
    'name',
    'disabled',
    'value',
    'labelPlacement',
    'legacy',
    'justify',
    'ionStyle',
    'ionFocus',
    'ionBlur'
]);
export const IonRadioGroup = defineContainer('ion-radio-group', undefined, [
    'allowEmptySelection',
    'name',
    'value',
    'ionChange',
    'ionValueChange'
]);
export const IonRange = defineContainer('ion-range', undefined, [
    'color',
    'debounce',
    'name',
    'dualKnobs',
    'min',
    'max',
    'pin',
    'pinFormatter',
    'snaps',
    'step',
    'ticks',
    'activeBarStart',
    'disabled',
    'value',
    'labelPlacement',
    'legacy',
    'ionChange',
    'ionInput',
    'ionStyle',
    'ionFocus',
    'ionBlur',
    'ionKnobMoveStart',
    'ionKnobMoveEnd'
]);
export const IonRefresher = defineContainer('ion-refresher', undefined, [
    'pullMin',
    'pullMax',
    'closeDuration',
    'snapbackDuration',
    'pullFactor',
    'disabled',
    'ionRefresh',
    'ionPull',
    'ionStart'
]);
export const IonRefresherContent = defineContainer('ion-refresher-content', undefined, [
    'pullingIcon',
    'pullingText',
    'refreshingSpinner',
    'refreshingText'
]);
export const IonReorder = defineContainer('ion-reorder', undefined);
export const IonReorderGroup = defineContainer('ion-reorder-group', undefined, [
    'disabled',
    'ionItemReorder'
]);
export const IonRippleEffect = defineContainer('ion-ripple-effect', undefined, [
    'type'
]);
export const IonRoute = defineContainer('ion-route', undefined, [
    'url',
    'component',
    'componentProps',
    'beforeLeave',
    'beforeEnter',
    'ionRouteDataChanged'
]);
export const IonRouteRedirect = defineContainer('ion-route-redirect', undefined, [
    'from',
    'to',
    'ionRouteRedirectChanged'
]);
export const IonRouter = defineContainer('ion-router', undefined, [
    'root',
    'useHash',
    'ionRouteWillChange',
    'ionRouteDidChange'
]);
export const IonRouterLink = defineContainer('ion-router-link', undefined, [
    'color',
    'href',
    'rel',
    'routerDirection',
    'routerAnimation',
    'target'
]);
export const IonRouterOutlet = defineContainer('ion-router-outlet', undefined, [
    'mode',
    'delegate',
    'animated',
    'animation',
    'swipeHandler',
    'ionNavWillLoad',
    'ionNavWillChange',
    'ionNavDidChange'
]);
export const IonRow = defineContainer('ion-row', undefined);
export const IonSearchbar = defineContainer('ion-searchbar', undefined, [
    'color',
    'animated',
    'autocomplete',
    'autocorrect',
    'cancelButtonIcon',
    'cancelButtonText',
    'clearIcon',
    'debounce',
    'disabled',
    'inputmode',
    'enterkeyhint',
    'placeholder',
    'searchIcon',
    'showCancelButton',
    'showClearButton',
    'spellcheck',
    'type',
    'value',
    'ionInput',
    'ionChange',
    'ionCancel',
    'ionClear',
    'ionBlur',
    'ionFocus',
    'ionStyle'
]);
export const IonSegment = defineContainer('ion-segment', undefined, [
    'color',
    'disabled',
    'scrollable',
    'swipeGesture',
    'value',
    'selectOnFocus',
    'ionChange',
    'ionSelect',
    'ionStyle'
]);
export const IonSegmentButton = defineContainer('ion-segment-button', undefined, [
    'disabled',
    'layout',
    'type',
    'value'
]);
export const IonSelect = defineContainer('ion-select', undefined, [
    'cancelText',
    'color',
    'compareWith',
    'disabled',
    'fill',
    'interface',
    'interfaceOptions',
    'justify',
    'label',
    'labelPlacement',
    'legacy',
    'multiple',
    'name',
    'okText',
    'placeholder',
    'selectedText',
    'shape',
    'value',
    'ionChange',
    'ionCancel',
    'ionDismiss',
    'ionFocus',
    'ionBlur',
    'ionStyle'
]);
export const IonSelectOption = defineContainer('ion-select-option', undefined, [
    'disabled',
    'value'
]);
export const IonSelectPopover = defineContainer('ion-select-popover', undefined, [
    'header',
    'subHeader',
    'message',
    'multiple',
    'options'
]);
export const IonSkeletonText = defineContainer('ion-skeleton-text', undefined, [
    'animated'
]);
export const IonSpinner = defineContainer('ion-spinner', undefined, [
    'color',
    'duration',
    'name',
    'paused'
]);
export const IonSplitPane = defineContainer('ion-split-pane', undefined, [
    'contentId',
    'disabled',
    'when',
    'ionSplitPaneVisible'
]);
export const IonTab = defineContainer('ion-tab', undefined, [
    'active',
    'delegate',
    'tab',
    'component'
]);
export const IonTabBar = defineContainer('ion-tab-bar', undefined, [
    'color',
    'selectedTab',
    'translucent',
    'ionTabBarChanged'
]);
export const IonTabButton = defineContainer('ion-tab-button', undefined, [
    'disabled',
    'download',
    'href',
    'rel',
    'layout',
    'selected',
    'tab',
    'target',
    'ionTabButtonClick'
]);
export const IonTabs = defineContainer('ion-tabs', undefined, [
    'useRouter',
    'ionNavWillLoad',
    'ionTabsWillChange',
    'ionTabsDidChange'
]);
export const IonText = defineContainer('ion-text', undefined, [
    'color'
]);
export const IonTextarea = defineContainer('ion-textarea', undefined, [
    'color',
    'autocapitalize',
    'autofocus',
    'clearOnEdit',
    'debounce',
    'disabled',
    'fill',
    'inputmode',
    'enterkeyhint',
    'maxlength',
    'minlength',
    'name',
    'placeholder',
    'readonly',
    'required',
    'spellcheck',
    'cols',
    'rows',
    'wrap',
    'autoGrow',
    'value',
    'counter',
    'counterFormatter',
    'errorText',
    'helperText',
    'label',
    'labelPlacement',
    'legacy',
    'shape',
    'ionChange',
    'ionInput',
    'ionStyle',
    'ionBlur',
    'ionFocus'
]);
export const IonThumbnail = defineContainer('ion-thumbnail', undefined);
export const IonTitle = defineContainer('ion-title', undefined, [
    'color',
    'size',
    'ionStyle'
]);
export const IonToast = defineContainer('ion-toast', undefined, [
    'overlayIndex',
    'delegate',
    'hasController',
    'color',
    'enterAnimation',
    'leaveAnimation',
    'cssClass',
    'duration',
    'header',
    'layout',
    'message',
    'keyboardClose',
    'position',
    'buttons',
    'translucent',
    'animated',
    'icon',
    'htmlAttributes',
    'isOpen',
    'trigger',
    'ionToastDidPresent',
    'ionToastWillPresent',
    'ionToastWillDismiss',
    'ionToastDidDismiss',
    'didPresent',
    'willPresent',
    'willDismiss',
    'didDismiss'
]);
export const IonToggle = defineContainer('ion-toggle', undefined, [
    'color',
    'name',
    'checked',
    'disabled',
    'value',
    'enableOnOffLabels',
    'labelPlacement',
    'legacy',
    'justify',
    'ionChange',
    'ionFocus',
    'ionBlur',
    'ionStyle'
]);
export const IonToolbar = defineContainer('ion-toolbar', undefined, [
    'color'
]);
//# sourceMappingURL=index.js.map