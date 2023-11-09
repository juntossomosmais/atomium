# Atomium - Icons

> This directory contains the collection of icons used in the Atomium design system.

## Table of Contents

- [Usage](#usage)
- [Adding a New Icon](#adding-a-new-icon)
- [How it works](#how-it-works)
- [Benefits of Using a CDN for Icons](#benefits-of-using-a-cdn-for-icons)

## Usage

### React

```jsx
import { AtomIcon } from '@atomium';

const MyComponent = () => (
  <AtomIcon name="my-icon" />
);
```

### Web Components

```html
  <atom-icon name="my-icon"></atom-icon>
```

## Adding a New Icon

To add a new icon, follow these steps:

1. Create an SVG file with the name of your icon. For example, if you want to add an icon named `my-icon`, create a file named `my-icon.svg` in the svg directory.
2. Run `npm run icons:build` to generate the type for your icon.
3. Once the SVG file is added, a pipeline (found in `.github/workflows/icons.yml`) will automatically build the module and upload it to the CDN.

## How it works

In our component library, we have a wrapper for the Icon (provided from Ionic Components). This wrapper, available in the `@atomium/core` package, allows you to leverage the logic provided by Ionic to load icons from the CDN. The wrapper will retrieve the icon from the CDN and render it as an SVG within the shadow DOM.

## Benefits of Using a CDN for Icons

We have chosen to serve icons through a CDN due to the numerous advantages it offers:

1. **Reduced bundle size:** By serving icons through a CDN, we alleviate the need to include them in the project's bundle. This helps to optimize the performance of your application.

2. **Cross-platform compatibility:** The CDN allows us to use the same icon in various projects regardless of the underlying technology stack. Whether you're working with React, Vue, Angular, Svelte, or any other framework, the same icon can be utilized seamlessly.

