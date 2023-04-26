import { ExecutorContext } from '@nrwl/devkit';
import { NodeExecutorOptions } from './schema';
export interface ExecutorEvent {
    outfile: string;
    success: boolean;
}
export declare function nodeExecutor(options: NodeExecutorOptions, context: ExecutorContext): AsyncGenerator<ExecutorEvent, void, unknown>;
export default nodeExecutor;
