/// <reference types="node" />
import { ExecSyncOptions } from 'child_process';
export declare function runNxSync(cmd: string, options?: ExecSyncOptions & {
    cwd?: string;
}): void;
