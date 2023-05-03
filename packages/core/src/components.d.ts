/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Mode, TextFieldTypes } from "@ionic/core";
export { Color, Mode, TextFieldTypes } from "@ionic/core";
export namespace Components {
    interface AtomButton {
        "color": 'primary' | 'secondary';
        "disabled"?: boolean;
        "download"?: string;
        "expand"?: 'block' | 'full';
        "fill": 'clear' | 'outline' | 'solid';
        "href"?: string;
        "loading"?: boolean;
        "mode": Mode;
        "rel"?: string;
        "size": 'small' | 'default' | 'large';
        "target"?: string;
        "type": 'submit' | 'reset' | 'button';
    }
    interface AtomCol {
        "offset"?: string;
        "offsetLg"?: string;
        "offsetMd"?: string;
        "offsetSm"?: string;
        "pull"?: string;
        "push"?: string;
        "size"?: 'auto' | string;
        "sizeLg"?: string;
        "sizeMd"?: string;
        "sizeSm"?: string;
    }
    interface AtomGrid {
        "fixed"?: boolean;
    }
    interface AtomIcon {
        "color"?: Color;
        "icon"?: string;
        "size"?: 'small' | 'large';
    }
    interface AtomInput {
        "accept"?: string;
        "autofocus": boolean;
        "clearInput": boolean;
        "clearOnEdit": boolean;
        "color"?: 'primary' | 'secondary';
        "disabled": boolean;
        "fill": 'solid' | 'outline';
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'fixed' | 'stacked' | 'floating';
        "maxlength"?: number;
        "minlength"?: number;
        "mode": Mode;
        "multiple": boolean;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "required": boolean;
        "type": TextFieldTypes;
        "value": string;
    }
    interface AtomRow {
    }
    interface AtomSelect {
        "cancelText"?: string;
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "interface"?: 'popover' | 'action-sheet';
        "label"?: string;
        "labelPlacement"?: 'fixed' | 'stacked';
        "mode": Mode;
        "multiple"?: boolean;
        "name": string;
        "okText"?: string;
        "options": Array<{
    value: string
    selected?: boolean
    disabled?: boolean
  }>;
        "overlayDismiss"?: boolean;
        "placeholder": string;
        "size"?: 'small' | 'large';
    }
}
export interface AtomButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomButtonElement;
}
export interface AtomInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomInputElement;
}
export interface AtomSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomSelectElement;
}
declare global {
    interface HTMLAtomButtonElement extends Components.AtomButton, HTMLStencilElement {
    }
    var HTMLAtomButtonElement: {
        prototype: HTMLAtomButtonElement;
        new (): HTMLAtomButtonElement;
    };
    interface HTMLAtomColElement extends Components.AtomCol, HTMLStencilElement {
    }
    var HTMLAtomColElement: {
        prototype: HTMLAtomColElement;
        new (): HTMLAtomColElement;
    };
    interface HTMLAtomGridElement extends Components.AtomGrid, HTMLStencilElement {
    }
    var HTMLAtomGridElement: {
        prototype: HTMLAtomGridElement;
        new (): HTMLAtomGridElement;
    };
    interface HTMLAtomIconElement extends Components.AtomIcon, HTMLStencilElement {
    }
    var HTMLAtomIconElement: {
        prototype: HTMLAtomIconElement;
        new (): HTMLAtomIconElement;
    };
    interface HTMLAtomInputElement extends Components.AtomInput, HTMLStencilElement {
    }
    var HTMLAtomInputElement: {
        prototype: HTMLAtomInputElement;
        new (): HTMLAtomInputElement;
    };
    interface HTMLAtomRowElement extends Components.AtomRow, HTMLStencilElement {
    }
    var HTMLAtomRowElement: {
        prototype: HTMLAtomRowElement;
        new (): HTMLAtomRowElement;
    };
    interface HTMLAtomSelectElement extends Components.AtomSelect, HTMLStencilElement {
    }
    var HTMLAtomSelectElement: {
        prototype: HTMLAtomSelectElement;
        new (): HTMLAtomSelectElement;
    };
    interface HTMLElementTagNameMap {
        "atom-button": HTMLAtomButtonElement;
        "atom-col": HTMLAtomColElement;
        "atom-grid": HTMLAtomGridElement;
        "atom-icon": HTMLAtomIconElement;
        "atom-input": HTMLAtomInputElement;
        "atom-row": HTMLAtomRowElement;
        "atom-select": HTMLAtomSelectElement;
    }
}
declare namespace LocalJSX {
    interface AtomButton {
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "download"?: string;
        "expand"?: 'block' | 'full';
        "fill"?: 'clear' | 'outline' | 'solid';
        "href"?: string;
        "loading"?: boolean;
        "mode"?: Mode;
        "onAtomClick"?: (event: AtomButtonCustomEvent<any>) => void;
        "rel"?: string;
        "size"?: 'small' | 'default' | 'large';
        "target"?: string;
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface AtomCol {
        "offset"?: string;
        "offsetLg"?: string;
        "offsetMd"?: string;
        "offsetSm"?: string;
        "pull"?: string;
        "push"?: string;
        "size"?: 'auto' | string;
        "sizeLg"?: string;
        "sizeMd"?: string;
        "sizeSm"?: string;
    }
    interface AtomGrid {
        "fixed"?: boolean;
    }
    interface AtomIcon {
        "color"?: Color;
        "icon"?: string;
        "size"?: 'small' | 'large';
    }
    interface AtomInput {
        "accept"?: string;
        "autofocus"?: boolean;
        "clearInput"?: boolean;
        "clearOnEdit"?: boolean;
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "fill"?: 'solid' | 'outline';
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'fixed' | 'stacked' | 'floating';
        "maxlength"?: number;
        "minlength"?: number;
        "mode"?: Mode;
        "multiple"?: boolean;
        "name"?: string;
        "onAtomBlur"?: (event: AtomInputCustomEvent<void>) => void;
        "onAtomChange"?: (event: AtomInputCustomEvent<string>) => void;
        "onAtomFocus"?: (event: AtomInputCustomEvent<void>) => void;
        "pattern"?: string;
        "placeholder"?: string;
        "required"?: boolean;
        "type"?: TextFieldTypes;
        "value"?: string;
    }
    interface AtomRow {
    }
    interface AtomSelect {
        "cancelText"?: string;
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "interface"?: 'popover' | 'action-sheet';
        "label"?: string;
        "labelPlacement"?: 'fixed' | 'stacked';
        "mode"?: Mode;
        "multiple"?: boolean;
        "name"?: string;
        "okText"?: string;
        "onAtomBlur"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomCancel"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomChange"?: (event: AtomSelectCustomEvent<string>) => void;
        "onAtomDimiss"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomFocus"?: (event: AtomSelectCustomEvent<void>) => void;
        "options"?: Array<{
    value: string
    selected?: boolean
    disabled?: boolean
  }>;
        "overlayDismiss"?: boolean;
        "placeholder"?: string;
        "size"?: 'small' | 'large';
    }
    interface IntrinsicElements {
        "atom-button": AtomButton;
        "atom-col": AtomCol;
        "atom-grid": AtomGrid;
        "atom-icon": AtomIcon;
        "atom-input": AtomInput;
        "atom-row": AtomRow;
        "atom-select": AtomSelect;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atom-button": LocalJSX.AtomButton & JSXBase.HTMLAttributes<HTMLAtomButtonElement>;
            "atom-col": LocalJSX.AtomCol & JSXBase.HTMLAttributes<HTMLAtomColElement>;
            "atom-grid": LocalJSX.AtomGrid & JSXBase.HTMLAttributes<HTMLAtomGridElement>;
            "atom-icon": LocalJSX.AtomIcon & JSXBase.HTMLAttributes<HTMLAtomIconElement>;
            "atom-input": LocalJSX.AtomInput & JSXBase.HTMLAttributes<HTMLAtomInputElement>;
            "atom-row": LocalJSX.AtomRow & JSXBase.HTMLAttributes<HTMLAtomRowElement>;
            "atom-select": LocalJSX.AtomSelect & JSXBase.HTMLAttributes<HTMLAtomSelectElement>;
        }
    }
}
