import { StorybookConfig } from '@storybook/types';

declare const addons: StorybookConfig['addons'];
declare const webpackX: any;
declare const storyIndexersX: any;
declare const docsX: any;

export { addons, docsX as docs, storyIndexersX as storyIndexers, webpackX as webpack };
