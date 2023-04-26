export interface NxWebBabelPresetOptions {
    useBuiltIns?: boolean | string;
    decorators?: {
        decoratorsBeforeExport?: boolean;
        legacy?: boolean;
    };
    classProperties?: {
        loose?: boolean;
    };
}
