import * as webpack$1 from 'webpack';

declare const webpack: (_: unknown, options: any) => Promise<webpack$1.Configuration>;
declare const entries: (_: unknown, options: any) => Promise<string[]>;
declare const babel: (config: any, options: any) => Promise<any>;
declare const previewMainTemplate: () => string;

export { babel, entries, previewMainTemplate, webpack };
