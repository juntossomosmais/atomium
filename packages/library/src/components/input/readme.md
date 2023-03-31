# at-input



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute        | Description | Type                                                                                                                                             | Default      |
| ---------------- | ---------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| `accept`         | `accept`         |             | `string`                                                                                                                                         | `undefined`  |
| `autocapitalize` | `autocapitalize` |             | `"characters" \| "none" \| "sentences" \| "words"`                                                                                               | `'none'`     |
| `autocomplete`   | `autocomplete`   |             | `"off" \| "on"`                                                                                                                                  | `undefined`  |
| `autofocus`      | `autofocus`      |             | `boolean`                                                                                                                                        | `false`      |
| `clearIcon`      | `clear-icon`     |             | `string`                                                                                                                                         | `undefined`  |
| `clearInput`     | `clear-input`    |             | `boolean`                                                                                                                                        | `false`      |
| `clearOnEdit`    | `clear-on-edit`  |             | `boolean`                                                                                                                                        | `false`      |
| `color`          | `color`          |             | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never>` | `'primary'`  |
| `debounce`       | `debounce`       |             | `number`                                                                                                                                         | `undefined`  |
| `disabled`       | `disabled`       |             | `boolean`                                                                                                                                        | `false`      |
| `expandable`     | `expandable`     |             | `boolean`                                                                                                                                        | `false`      |
| `fill`           | `fill`           |             | `"default" \| "outline" \| "solid"`                                                                                                              | `'default'`  |
| `icon`           | `icon`           |             | `string`                                                                                                                                         | `undefined`  |
| `inputmode`      | `inputmode`      |             | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"`                                                            | `'none'`     |
| `labelPosition`  | `label-position` |             | `"fixed" \| "floating" \| "stacked"`                                                                                                             | `'floating'` |
| `labelText`      | `label-text`     |             | `string`                                                                                                                                         | `undefined`  |
| `maxlength`      | `maxlength`      |             | `number`                                                                                                                                         | `undefined`  |
| `minlength`      | `minlength`      |             | `number`                                                                                                                                         | `undefined`  |
| `mode`           | `mode`           |             | `"ios" \| "md"`                                                                                                                                  | `'md'`       |
| `multiple`       | `multiple`       |             | `boolean`                                                                                                                                        | `false`      |
| `name`           | `name`           |             | `string`                                                                                                                                         | `undefined`  |
| `pattern`        | `pattern`        |             | `string`                                                                                                                                         | `undefined`  |
| `placeholder`    | `placeholder`    |             | `string`                                                                                                                                         | `undefined`  |
| `readonly`       | `readonly`       |             | `boolean`                                                                                                                                        | `false`      |
| `required`       | `required`       |             | `boolean`                                                                                                                                        | `false`      |
| `size`           | `size`           |             | `"default" \| "large" \| "small"`                                                                                                                | `'default'`  |
| `spellcheck`     | `spellcheck`     |             | `boolean`                                                                                                                                        | `false`      |
| `type`           | `type`           |             | `"date" \| "datetime-local" \| "email" \| "month" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "time" \| "url" \| "week"`         | `'text'`     |
| `value`          | `value`          |             | `string`                                                                                                                                         | `undefined`  |


## Events

| Event       | Description | Type                  |
| ----------- | ----------- | --------------------- |
| `atoBlur`   |             | `CustomEvent<void>`   |
| `atoChange` |             | `CustomEvent<string>` |
| `atoFocus`  |             | `CustomEvent<void>`   |


## Dependencies

### Depends on

- ion-item
- ion-label
- ion-input

### Graph
```mermaid
graph TD;
  ato-input --> ion-item
  ato-input --> ion-label
  ato-input --> ion-input
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-item --> ion-note
  ion-input --> ion-icon
  style ato-input fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
