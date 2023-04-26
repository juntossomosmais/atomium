import { Remotes } from './models';
/**
 * Map remote names to a format that can be understood and used by Module
 * Federation.
 *
 * @param remotes - The remotes to map
 * @param remoteEntryExt - The file extension of the remoteEntry file
 * @param determineRemoteUrl - The function used to lookup the URL of the served remote
 */
export declare function mapRemotes(remotes: Remotes, remoteEntryExt: 'js' | 'mjs', determineRemoteUrl: (remote: string) => string): Record<string, string>;
/**
 * Map remote names to a format that can be understood and used by Module
 * Federation.
 *
 * @param remotes - The remotes to map
 * @param remoteEntryExt - The file extension of the remoteEntry file
 * @param determineRemoteUrl - The function used to lookup the URL of the served remote
 */
export declare function mapRemotesForSSR(remotes: Remotes, remoteEntryExt: 'js' | 'mjs', determineRemoteUrl: (remote: string) => string): Record<string, string>;
