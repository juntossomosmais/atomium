# Storybook Addon Highlight

Storybook addon allows for highlighting specific DOM nodes within your story.

Use it to call attention to particular parts of the story. Or use it to enhance other addons that you might be building. For example, [Accessibility](https://storybook.js.org/addons/@storybook/addon-a11y/) addon uses it to highlight DOM nodes that are failing accessibility checks.

![](https://user-images.githubusercontent.com/42671/160146801-179eaa79-fff8-4bff-b17c-9262fdc94918.png)

## Usage

This addon requires Storybook 6.5 or later. Highlight is part of [essentials](https://storybook.js.org/docs/react/essentials/introduction) and so is installed in all new Storybooks by default. If you need to add it to your Storybook, you can run:

```sh
npm i -D @storybook/addon-highlight
```

Add `"@storybook/addon-highlight"` to the addons array in your `.storybook/main.js`:

```js
export default {
  addons: ['@storybook/addon-highlight'],
};
```

### Apply or clear highlights

Highlight DOM nodes by emitting the `HIGHLIGHT` event from within a story or an addon. The event payload must contain a list of selectors you want to highlight.

```js
import React, { useEffect } from 'react';
import { useChannel } from '@storybook/preview-api';
import { HIGHLIGHT, RESET_HIGHLIGHT } from '@storybook/addon-highlight';
import { MyComponent } form './MyComponent';

export default { component: MyComponent };

export const MyStory = () => {
  const emit = useChannel({});

  useEffect(() => {
    emit(HIGHLIGHT, {
      elements: ['.title', '.subtitle'],
    });
  }, []);

  return <MyComponent />;
};
```

Highlights are automatically cleared when the story changes. You can also manually clear them by emitting the `RESET_HIGHLIGHT` event.

```js
emit(RESET_HIGHLIGHT);
```

### Customize style

```js
emit(HIGHLIGHT, {
  elements: ['.title', '.subtitle'],
  color: 'red',
  style: 'solid', // 'dotted' | 'dashed' | 'solid' | 'double'
});
```
