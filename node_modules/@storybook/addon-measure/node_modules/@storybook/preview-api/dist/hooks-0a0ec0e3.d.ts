import * as _storybook_types from '@storybook/types';
import { InputType, StrictInputType, ArgTypes, GlobalTypes, StrictArgTypes, StrictGlobalTypes, Renderer, ModuleExports, NormalizedComponentAnnotations, ProjectAnnotations, NormalizedProjectAnnotations } from '@storybook/types';

declare const normalizeInputType: (inputType: InputType, key: string) => StrictInputType;
declare const normalizeInputTypes: (inputTypes: ArgTypes | GlobalTypes) => StrictArgTypes | StrictGlobalTypes;

declare function normalizeComponentAnnotations<TRenderer extends Renderer>(defaultExport: ModuleExports['default'], title?: string, importPath?: string): NormalizedComponentAnnotations<TRenderer>;

declare function normalizeProjectAnnotations<TRenderer extends Renderer>({ argTypes, globalTypes, argTypesEnhancers, ...annotations }: ProjectAnnotations<TRenderer>): NormalizedProjectAnnotations<TRenderer>;

declare const getValuesFromArgTypes: (argTypes?: ArgTypes) => ArgTypes<_storybook_types.Args>;

declare function useSharedState<S>(sharedId: string, defaultState?: S): [S, (s: S) => void];
declare function useAddonState<S>(addonId: string, defaultState?: S): [S, (s: S) => void];

export { normalizeInputTypes as a, normalizeComponentAnnotations as b, normalizeProjectAnnotations as c, useAddonState as d, getValuesFromArgTypes as g, normalizeInputType as n, useSharedState as u };
