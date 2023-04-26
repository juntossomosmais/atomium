import { PluginItem } from '@babel/core';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
export declare type Preset = string | {
    name: string;
};
export interface Options {
    /**
     * Optionally set include paths.
     */
    include?: string[];
    /**
     * Provide settings for ForkTsCheckerWebpackPlugin.
     */
    forkTsCheckerWebpackPluginOptions?: Partial<ForkTsCheckerWebpackPlugin.Options>;
    /**
     * Enable compilation within the manager.
     */
    transpileManager?: boolean;
    babelOptions: {
        extends: string | null;
        plugins: PluginItem[] | null;
        presets: PluginItem[] | null;
    };
    framework: 'angular' | 'react' | 'vue';
}
