import { ComponentCompilerMeta } from '@stencil/core/internal';
import { ComponentModelConfig } from './types';
export declare const createComponentDefinition: (importTypes: string, componentModelConfig: ComponentModelConfig[] | undefined, includeCustomElement?: boolean) => (cmpMeta: Pick<ComponentCompilerMeta, 'properties' | 'tagName' | 'methods' | 'events'>) => string;
