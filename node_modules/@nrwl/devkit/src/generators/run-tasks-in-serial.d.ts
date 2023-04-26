import type { GeneratorCallback } from 'nx/src/config/misc-interfaces';
/**
 * Run tasks in serial
 *
 * @param tasks The tasks to run in serial.
 */
export declare function runTasksInSerial(...tasks: GeneratorCallback[]): GeneratorCallback;
