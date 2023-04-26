import { Renderer, Args, StoryContext, StoryId, DecoratorApplicator } from '@storybook/types';

interface Hook {
    name: string;
    memoizedState?: any;
    deps?: any[] | undefined;
}
interface Effect {
    create: () => (() => void) | void;
    destroy?: (() => void) | void;
}
type AbstractFunction = (...args: any[]) => any;
declare class HooksContext<TRenderer extends Renderer, TArgs extends Args = Args> {
    hookListsMap: WeakMap<AbstractFunction, Hook[]>;
    mountedDecorators: Set<AbstractFunction>;
    prevMountedDecorators: Set<AbstractFunction>;
    currentHooks: Hook[];
    nextHookIndex: number;
    currentPhase: 'MOUNT' | 'UPDATE' | 'NONE';
    currentEffects: Effect[];
    prevEffects: Effect[];
    currentDecoratorName: string | null;
    hasUpdates: boolean;
    currentContext: StoryContext<TRenderer, TArgs> | null;
    renderListener: (storyId: StoryId) => void;
    constructor();
    init(): void;
    clean(): void;
    getNextHook(): Hook;
    triggerEffects(): void;
    addRenderListeners(): void;
    removeRenderListeners(): void;
}
declare const applyHooks: <TRenderer extends Renderer>(applyDecorators: DecoratorApplicator<TRenderer, Args>) => DecoratorApplicator<TRenderer, Args>;
declare function useMemo<T>(nextCreate: () => T, deps?: any[]): T;
declare function useCallback<T>(callback: T, deps?: any[]): T;
declare function useRef<T>(initialValue: T): {
    current: T;
};
declare function useState<S>(initialState: (() => S) | S): [S, (update: ((prevState: S) => S) | S) => void];
declare function useReducer<S, A>(reducer: (state: S, action: A) => S, initialState: S): [S, (action: A) => void];
declare function useReducer<S, I, A>(reducer: (state: S, action: A) => S, initialArg: I, init: (initialArg: I) => S): [S, (action: A) => void];
declare function useEffect(create: () => (() => void) | void, deps?: any[]): void;
interface Listener {
    (...args: any[]): void;
}
interface EventMap {
    [eventId: string]: Listener;
}
declare function useChannel(eventMap: EventMap, deps?: any[]): (eventName: string, ...args: any) => void;
declare function useStoryContext<TRenderer extends Renderer, TArgs extends Args = Args>(): StoryContext<TRenderer>;
declare function useParameter<S>(parameterKey: string, defaultValue?: S): S | undefined;
declare function useArgs<TArgs extends Args = Args>(): [
    TArgs,
    (newArgs: Partial<TArgs>) => void,
    (argNames?: (keyof TArgs)[]) => void
];
declare function useGlobals(): [Args, (newGlobals: Args) => void];

export { EventMap as E, HooksContext as H, Listener as L, useCallback as a, useChannel as b, useEffect as c, useGlobals as d, useMemo as e, useParameter as f, useReducer as g, useRef as h, useState as i, useStoryContext as j, applyHooks as k, useArgs as u };
