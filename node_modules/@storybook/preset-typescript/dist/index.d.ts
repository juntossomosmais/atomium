import { Configuration } from 'webpack';
import { Options } from './options';
export declare const babel: (config: {
    extends: string | null;
    plugins: import("@babel/core").PluginItem[] | null;
    presets: import("@babel/core").PluginItem[] | null;
}, options: Options) => {
    extends: string | null;
    plugins: import("@babel/core").PluginItem[] | null;
    presets: import("@babel/core").PluginItem[] | null;
};
export declare const managerBabel: (config: {
    extends: string | null;
    plugins: import("@babel/core").PluginItem[] | null;
    presets: import("@babel/core").PluginItem[] | null;
}, options: Options) => {
    extends: string | null;
    plugins: import("@babel/core").PluginItem[] | null;
    presets: import("@babel/core").PluginItem[] | null;
};
export declare const managerWebpack: (webpackConfig: Configuration | undefined, options: Options) => Configuration;
export declare const webpack: (webpackConfig: Configuration | undefined, options: Options) => Configuration;
