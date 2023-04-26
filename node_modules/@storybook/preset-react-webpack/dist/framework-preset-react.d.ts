import { S as StorybookConfig } from './types-b181cc47.js';
import '@storybook/core-webpack';
import '@storybook/react-docgen-typescript-plugin';

declare const babel: StorybookConfig['babel'];
declare const babelDefault: StorybookConfig['babelDefault'];
declare const webpackFinal: StorybookConfig['webpackFinal'];

export { babel, babelDefault, webpackFinal };
