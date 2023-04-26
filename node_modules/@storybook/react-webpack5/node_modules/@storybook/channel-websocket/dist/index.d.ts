import { ChannelHandler, Channel } from '@storybook/channels';

type OnError = (message: Event) => void;
interface WebsocketTransportArgs {
    url: string;
    onError: OnError;
}
interface CreateChannelArgs {
    url: string;
    async?: boolean;
    onError?: OnError;
}
declare class WebsocketTransport {
    private socket;
    private handler;
    private buffer;
    private isReady;
    constructor({ url, onError }: WebsocketTransportArgs);
    setHandler(handler: ChannelHandler): void;
    send(event: any): void;
    private sendLater;
    private sendNow;
    private flush;
    private connect;
}
declare function createChannel({ url, async, onError, }: CreateChannelArgs): Channel;

export { WebsocketTransport, createChannel, createChannel as default };
