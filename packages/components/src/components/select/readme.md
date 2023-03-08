# ato-select



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute         | Description | Type                                                                                                                                             | Default     |
| ---------------- | ----------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `cancelText`     | `cancel-text`     |             | `string`                                                                                                                                         | `undefined` |
| `color`          | `color`           |             | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never>` | `'primary'` |
| `disabled`       | `disabled`        |             | `boolean`                                                                                                                                        | `undefined` |
| `interface`      | `interface`       |             | `"action-sheet" \| "popover"`                                                                                                                    | `'popover'` |
| `labelPosition`  | `label-position`  |             | `"fixed" \| "stacked"`                                                                                                                           | `'stacked'` |
| `labelText`      | `label-text`      |             | `string`                                                                                                                                         | `undefined` |
| `mode`           | `mode`            |             | `"ios" \| "md"`                                                                                                                                  | `'md'`      |
| `multiple`       | `multiple`        |             | `boolean`                                                                                                                                        | `undefined` |
| `name`           | `name`            |             | `string`                                                                                                                                         | `undefined` |
| `okText`         | `ok-text`         |             | `string`                                                                                                                                         | `undefined` |
| `options`        | --                |             | `{ value: string; selected?: boolean; disabled?: boolean; }[]`                                                                                   | `[]`        |
| `overlayDismiss` | `overlay-dismiss` |             | `boolean`                                                                                                                                        | `undefined` |
| `placeholder`    | `placeholder`     |             | `string`                                                                                                                                         | `undefined` |
| `size`           | `size`            |             | `"large" \| "small"`                                                                                                                             | `undefined` |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `atoBlur`   |             | `CustomEvent<void>`   |
| `atoCancel` |             | `CustomEvent<void>`   |
| `atoChange` |             | `CustomEvent<string>` |
| `atoDimiss` |             | `CustomEvent<void>`   |
| `atoFocus`  |             | `CustomEvent<void>`   |


## Dependencies

### Depends on

- ion-item
- ion-label
- ion-select
- ion-select-option

### Graph
```mermaid
graph TD;
  ato-select --> ion-item
  ato-select --> ion-label
  ato-select --> ion-select
  ato-select --> ion-select-option
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-select --> ion-select-popover
  ion-select --> ion-popover
  ion-select --> ion-action-sheet
  ion-select --> ion-alert
  ion-select-popover --> ion-item
  ion-select-popover --> ion-checkbox
  ion-select-popover --> ion-label
  ion-select-popover --> ion-radio-group
  ion-select-popover --> ion-radio
  ion-select-popover --> ion-list
  ion-select-popover --> ion-list-header
  ion-popover --> ion-backdrop
  ion-action-sheet --> ion-backdrop
  ion-action-sheet --> ion-icon
  ion-action-sheet --> ion-ripple-effect
  ion-alert --> ion-ripple-effect
  ion-alert --> ion-backdrop
  style ato-select fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
