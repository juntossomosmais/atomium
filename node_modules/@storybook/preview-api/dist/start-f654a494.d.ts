import { Renderer, ProjectAnnotations, ArgsStoryFn } from '@storybook/types';
import { C as ClientApi } from './ClientApi-5a0be40f.js';

interface CoreClient_RendererImplementation<TRenderer extends Renderer> {
    decorateStory?: ProjectAnnotations<TRenderer>['applyDecorators'];
    render?: ArgsStoryFn<TRenderer>;
}
interface CoreClient_ClientAPIFacade {
    storiesOf: (...args: any[]) => never;
    raw: (...args: any[]) => never;
}
interface CoreClient_StartReturnValue<TRenderer extends Renderer> {
    forceReRender: () => void;
    configure: any;
    clientApi: ClientApi<TRenderer> | CoreClient_ClientAPIFacade;
}
declare function start<TRenderer extends Renderer>(renderToCanvas: ProjectAnnotations<TRenderer>['renderToCanvas'], { decorateStory, render }?: CoreClient_RendererImplementation<TRenderer>): CoreClient_StartReturnValue<TRenderer>;

export { start as s };
