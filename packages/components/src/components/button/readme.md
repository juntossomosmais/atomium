# at-button



<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description | Type                                                                                                                                             | Default     |
| ---------- | ---------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------- |
| `color`    | `color`    |             | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never>` | `'primary'` |
| `disabled` | `disabled` |             | `boolean`                                                                                                                                        | `undefined` |
| `fill`     | `fill`     |             | `"clear" \| "outline" \| "solid"`                                                                                                                | `'solid'`   |
| `mode`     | `mode`     |             | `"ios" \| "md"`                                                                                                                                  | `'md'`      |
| `size`     | `size`     |             | `"default" \| "large" \| "small"`                                                                                                                | `'default'` |
| `type`     | `type`     |             | `"button" \| "reset" \| "submit"`                                                                                                                | `'button'`  |


## Events

| Event         | Description | Type               |
| ------------- | ----------- | ------------------ |
| `buttonClick` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-button

### Graph
```mermaid
graph TD;
  ato-button --> ion-button
  ion-button --> ion-ripple-effect
  style ato-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
