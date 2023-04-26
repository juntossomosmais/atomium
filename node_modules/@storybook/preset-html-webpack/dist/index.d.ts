import { StorybookConfig } from '@storybook/core-webpack';
export { BuilderResult, StorybookConfig, TypescriptOptions } from '@storybook/core-webpack';

declare const webpack: StorybookConfig['webpack'];

export { webpack };
