import { Options as Options$1 } from 'telejson';

declare const PARAM_KEY = "actions";
declare const ADDON_ID = "storybook/actions";
declare const PANEL_ID: string;
declare const EVENT_ID: string;
declare const CLEAR_ID: string;
declare const CYCLIC_KEY = "$___storybook.isCyclic";

interface Options {
    depth: number;
    clearOnStoryChange: boolean;
    limit: number;
}
type ActionOptions = Partial<Options> & Partial<Options$1>;

interface ActionDisplay {
    id: string;
    data: {
        name: string;
        args: any[];
    };
    count: number;
    options: ActionOptions;
}

type HandlerFunction = (...args: any[]) => void;

type ActionsMap<T extends string = string> = Record<T, HandlerFunction>;

interface ActionsFunction {
    <T extends string>(handlerMap: Record<T, string>, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(...handlers: T[]): ActionsMap<T>;
    <T extends string>(handler1: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, handler6: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, handler6: T, handler7: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, handler6: T, handler7: T, handler8: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, handler6: T, handler7: T, handler8: T, handler9: T, options?: ActionOptions): ActionsMap<T>;
    <T extends string>(handler1: T, handler2: T, handler3: T, handler4: T, handler5: T, handler6: T, handler7: T, handler8: T, handler9: T, handler10: T, options?: ActionOptions): ActionsMap<T>;
}

type DecoratorFunction = (args: any[]) => any[];

declare function action(name: string, options?: ActionOptions): HandlerFunction;

declare const actions: ActionsFunction;

declare const config: ActionOptions;
declare const configureActions: (options?: ActionOptions) => void;

export { ADDON_ID, ActionDisplay, ActionOptions, ActionsFunction, ActionsMap, CLEAR_ID, CYCLIC_KEY, DecoratorFunction, EVENT_ID, HandlerFunction, PANEL_ID, PARAM_KEY, action, actions, config, configureActions };
