import type { PluginCapabilities } from './models';
export declare function getPluginCapabilities(workspaceRoot: string, pluginName: string): Promise<PluginCapabilities | null>;
export declare function listPluginCapabilities(pluginName: string): Promise<void>;
