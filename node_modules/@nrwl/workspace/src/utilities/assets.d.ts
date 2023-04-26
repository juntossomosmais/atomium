export type FileInputOutput = {
    input: string;
    output: string;
};
export type AssetGlob = FileInputOutput & {
    glob: string;
    ignore?: string[];
    dot?: boolean;
};
export declare function assetGlobsToFiles(assets: Array<AssetGlob | string>, rootDir: string, outDir: string): FileInputOutput[];
