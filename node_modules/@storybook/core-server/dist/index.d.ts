import { loadAllPresets } from '@storybook/core-common';
export { getPreviewBodyTemplate, getPreviewHeadTemplate } from '@storybook/core-common';
import { CLIOptions, LoadOptions, BuilderOptions } from '@storybook/types';
import { EventType } from '@storybook/telemetry';

type BuildStaticStandaloneOptions = CLIOptions & LoadOptions & BuilderOptions & {
    outputDir: string;
};
declare function buildStaticStandalone(options: BuildStaticStandaloneOptions): Promise<void>;

declare function buildDevStandalone(options: CLIOptions & LoadOptions & BuilderOptions): Promise<{
    port: number;
    address: string;
    networkAddress: string;
}>;

type TelemetryOptions = {
    cliOptions: CLIOptions;
    presetOptions?: Parameters<typeof loadAllPresets>[0];
    printError?: (err: any) => void;
};
declare function sendTelemetryError(error: Error, eventType: EventType, options: TelemetryOptions): Promise<void>;
declare function withTelemetry<T>(eventType: EventType, options: TelemetryOptions, run: () => Promise<T>): Promise<T>;

declare function build(options?: any, frameworkOptions?: any): Promise<void | {
    port: number;
    address: string;
    networkAddress: string;
}>;

export { BuildStaticStandaloneOptions, build, buildDevStandalone, buildStaticStandalone, sendTelemetryError, withTelemetry };
