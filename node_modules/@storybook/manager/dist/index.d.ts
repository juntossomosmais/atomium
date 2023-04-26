import { FC } from 'react';

declare global {
	interface SymbolConstructor {
		readonly observable: symbol;
	}
}

type Addon_Types = Addon_TypesEnum | string;
declare enum Addon_TypesEnum {
    TAB = "tab",
    PANEL = "panel",
    TOOL = "tool",
    TOOLEXTRA = "toolextra",
    PREVIEW = "preview",
    NOTES_ELEMENT = "notes-element"
}

declare class Provider {
    getElements(_type: Addon_Types): void;
    handleAPI(_api: unknown): void;
    getConfig(): {};
}

interface RootProps {
    provider: Provider;
    history?: History;
}
declare const Root: FC<RootProps>;
declare function renderStorybookUI(domNode: HTMLElement, provider: Provider): void;

export { Provider, Root, RootProps, renderStorybookUI };
