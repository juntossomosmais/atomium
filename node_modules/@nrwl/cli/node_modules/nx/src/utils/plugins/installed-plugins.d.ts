import type { PluginCapabilities } from './models';
import { PackageJson } from '../package-json';
export declare function findInstalledPlugins(): PackageJson[];
export declare function getInstalledPluginsAndCapabilities(workspaceRoot: string): Promise<Map<string, PluginCapabilities>>;
export declare function listInstalledPlugins(installedPlugins: Map<string, PluginCapabilities>): void;
