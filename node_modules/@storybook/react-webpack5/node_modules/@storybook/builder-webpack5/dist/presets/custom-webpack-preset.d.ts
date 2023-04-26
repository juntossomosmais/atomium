import * as webpack$1 from 'webpack';
import { Configuration } from 'webpack';
import { O as Options } from '../index.d-1a1e1de1.js';
import 'file-system-cache';
import '@babel/core';
import 'express';
import 'http';

declare function webpack(config: Configuration, options: Options): Promise<any>;
declare const webpackInstance: () => Promise<typeof webpack$1>;
declare const webpackVersion: () => Promise<string>;

export { webpack, webpackInstance, webpackVersion };
