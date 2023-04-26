import * as lib_types_dist from 'lib/types/dist';

declare const decorators: ((StoryFn: lib_types_dist.PartialStoryFn<lib_types_dist.Renderer, lib_types_dist.Args>, context: lib_types_dist.StoryContext<lib_types_dist.Renderer, lib_types_dist.Args>) => unknown)[];
declare const parameters: {
    backgrounds: {
        grid: {
            cellSize: number;
            opacity: number;
            cellAmount: number;
        };
        values: {
            name: string;
            value: string;
        }[];
    };
};
declare const globals: {
    backgrounds: any;
};

export { decorators, globals, parameters };
