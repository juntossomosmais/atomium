import * as lib_types_dist from 'lib/types/dist';

declare const decorators: ((StoryFn: lib_types_dist.PartialStoryFn<lib_types_dist.Renderer, lib_types_dist.Args>, context: lib_types_dist.StoryContext<lib_types_dist.Renderer, lib_types_dist.Args>) => unknown)[];
declare const globals: {
    measureEnabled: boolean;
};

export { decorators, globals };
