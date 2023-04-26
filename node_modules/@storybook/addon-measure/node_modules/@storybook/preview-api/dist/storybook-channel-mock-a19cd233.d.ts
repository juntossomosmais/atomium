import { Channel } from '@storybook/channels';
import { Addon_StoryWrapper } from '@storybook/types';

declare class AddonStore {
    constructor();
    private channel;
    private serverChannel;
    private promise;
    private resolve;
    getChannel: () => Channel;
    getServerChannel: () => Channel;
    ready: () => Promise<Channel>;
    hasChannel: () => boolean;
    hasServerChannel: () => boolean;
    setChannel: (channel: Channel) => void;
    setServerChannel: (channel: Channel) => void;
}
declare const addons: AddonStore;

type MakeDecoratorResult = (...args: any) => any;
interface MakeDecoratorOptions {
    name: string;
    parameterName: string;
    skipIfNoParametersOrOptions?: boolean;
    wrapper: Addon_StoryWrapper;
}
declare const makeDecorator: ({ name, parameterName, wrapper, skipIfNoParametersOrOptions, }: MakeDecoratorOptions) => MakeDecoratorResult;

declare function mockChannel(): Channel;

export { AddonStore as A, MakeDecoratorResult as M, addons as a, mockChannel as b, MakeDecoratorOptions as c, makeDecorator as m };
