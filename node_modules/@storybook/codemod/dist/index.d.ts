export { default as updateAddonInfo } from './transforms/update-addon-info.js';
export { packageNames, default as updateOrganisationName } from './transforms/update-organisation-name.js';

declare function listCodemods(): string[];
declare function runCodemod(codemod: any, { glob, logger, dryRun, rename, parser }: {
    glob: any;
    logger: any;
    dryRun: any;
    rename: any;
    parser: any;
}): Promise<void>;

export { listCodemods, runCodemod };
