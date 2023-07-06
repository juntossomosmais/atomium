/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Color, Mode, TextFieldTypes } from "@ionic/core";
import { IonTypes } from "@ionic/core/dist/types/components";
export { Color, Mode, TextFieldTypes } from "@ionic/core";
export { IonTypes } from "@ionic/core/dist/types/components";
export namespace Components {
    interface AtomButton {
        "color": 'primary' | 'secondary';
        "disabled"?: boolean;
        "download"?: string;
        "expand"?: 'block';
        "fill": 'clear' | 'outline' | 'solid';
        "href"?: string;
        "loading"?: boolean;
        "mode": Mode;
        "rel"?: string;
        "shape"?: 'round' | 'circle';
        "size": 'small' | 'default' | 'large';
        "target"?: string;
        "type": 'submit' | 'reset' | 'button';
    }
    interface AtomChip {
        "activated": boolean;
        "close": boolean;
        "disabled": boolean;
        "icon"?: string;
        "mode": 'ios' | 'md';
        "outline": boolean;
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
        "autocomplete"?: 'on' | 'off';
        "autofocus": boolean;
        "clearInput": boolean;
        "clearOnEdit": boolean;
        "color"?: 'primary' | 'secondary' | 'danger';
        "counter": boolean;
        "counterFormatter"?: (
    inputLength: number,
    maxLength: number
  ) => string | undefined;
        "debounce": number;
        "disabled": boolean;
        "enterKeyHint": | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
        "errorText"?: string;
        "fill": 'solid' | 'outline';
        "getInputElement": () => Promise<HTMLInputElement>;
        "hasError": boolean;
        "helperText"?: string;
        "icon"?: string;
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'stacked' | 'floating';
        "max"?: string | number;
        "maxlength"?: number;
        "min"?: string | number;
        "minlength"?: number;
        "mode": Mode;
        "multiple": boolean;
        "name"?: string;
        "passwordToggle": boolean;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "setFocus": () => Promise<void>;
        "setInputEl": (inputEl: HTMLIonInputElement) => Promise<void>;
        "shape": 'round' | undefined;
        "step"?: string;
        "type": TextFieldTypes;
        "value"?: IonTypes.IonInput['value'];
    }
    interface AtomSelect {
        "color"?: 'primary' | 'secondary' | 'danger';
        "disabled"?: boolean;
        "errorText"?: string;
        "fill": 'solid' | 'outline';
        "helperText"?: string;
        "icon"?: string;
        "label"?: string;
        "mode": Mode;
        "multiple"?: boolean;
        "name": string;
        "options": Array<{
    id: string
    value: string
    selected?: boolean
    disabled?: boolean
  }>;
        "placeholder": string;
        "readonly"?: boolean;
        "value"?: IonTypes.IonSelect['value'];
    }
    interface AtomTextarea {
        "autoGrow": boolean;
        "autocomplete"?: 'on' | 'off';
        "autofocus": boolean;
        "clearOnEdit": boolean;
        "color"?: 'primary' | 'secondary' | 'danger';
        "cols"?: number;
        "counter": boolean;
        "counterFormatter"?: (
    inputLength: number,
    maxLength: number
  ) => string | undefined;
        "debounce": number;
        "disabled": boolean;
        "enterKeyHint": | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
        "errorText"?: string;
        "fill": 'solid' | 'outline';
        "getInputElement": () => Promise<HTMLTextAreaElement>;
        "hasError": boolean;
        "helperText"?: string;
        "icon"?: string;
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'stacked' | 'floating';
        "maxlength"?: number;
        "minlength"?: number;
        "mode": Mode;
        "name"?: string;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly": boolean;
        "required": boolean;
        "rows": number;
        "setFocus": () => Promise<void>;
        "setInputEl": (textareaEl: HTMLIonTextareaElement) => Promise<void>;
        "shape": 'round' | undefined;
        "step"?: string;
        "value"?: IonTypes.IonTextarea['value'];
        "wrap"?: 'hard' | 'soft' | 'off';
    }
    interface AtomUploadArea {
        "accept"?: string;
        "disabled": boolean;
        "icon"?: string;
        "id": string;
        "itemToUpload": string;
        "multiple": boolean;
        "setInputEl": (inputEl: HTMLInputElement) => Promise<void>;
    }
}
export interface AtomButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomButtonElement;
}
export interface AtomChipCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomChipElement;
}
export interface AtomInputCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomInputElement;
}
export interface AtomSelectCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomSelectElement;
}
export interface AtomTextareaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomTextareaElement;
}
export interface AtomUploadAreaCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomUploadAreaElement;
}
declare global {
    interface HTMLAtomButtonElement extends Components.AtomButton, HTMLStencilElement {
    }
    var HTMLAtomButtonElement: {
        prototype: HTMLAtomButtonElement;
        new (): HTMLAtomButtonElement;
    };
    interface HTMLAtomChipElement extends Components.AtomChip, HTMLStencilElement {
    }
    var HTMLAtomChipElement: {
        prototype: HTMLAtomChipElement;
        new (): HTMLAtomChipElement;
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
    interface HTMLAtomSelectElement extends Components.AtomSelect, HTMLStencilElement {
    }
    var HTMLAtomSelectElement: {
        prototype: HTMLAtomSelectElement;
        new (): HTMLAtomSelectElement;
    };
    interface HTMLAtomTextareaElement extends Components.AtomTextarea, HTMLStencilElement {
    }
    var HTMLAtomTextareaElement: {
        prototype: HTMLAtomTextareaElement;
        new (): HTMLAtomTextareaElement;
    };
    interface HTMLAtomUploadAreaElement extends Components.AtomUploadArea, HTMLStencilElement {
    }
    var HTMLAtomUploadAreaElement: {
        prototype: HTMLAtomUploadAreaElement;
        new (): HTMLAtomUploadAreaElement;
    };
    interface HTMLElementTagNameMap {
        "atom-button": HTMLAtomButtonElement;
        "atom-chip": HTMLAtomChipElement;
        "atom-col": HTMLAtomColElement;
        "atom-grid": HTMLAtomGridElement;
        "atom-icon": HTMLAtomIconElement;
        "atom-input": HTMLAtomInputElement;
        "atom-select": HTMLAtomSelectElement;
        "atom-textarea": HTMLAtomTextareaElement;
        "atom-upload-area": HTMLAtomUploadAreaElement;
    }
}
declare namespace LocalJSX {
    interface AtomButton {
        "color"?: 'primary' | 'secondary';
        "disabled"?: boolean;
        "download"?: string;
        "expand"?: 'block';
        "fill"?: 'clear' | 'outline' | 'solid';
        "href"?: string;
        "loading"?: boolean;
        "mode"?: Mode;
        "onAtomClick"?: (event: AtomButtonCustomEvent<any>) => void;
        "rel"?: string;
        "shape"?: 'round' | 'circle';
        "size"?: 'small' | 'default' | 'large';
        "target"?: string;
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface AtomChip {
        "activated"?: boolean;
        "close"?: boolean;
        "disabled"?: boolean;
        "icon"?: string;
        "mode"?: 'ios' | 'md';
        "onAtomClick"?: (event: AtomChipCustomEvent<any>) => void;
        "outline"?: boolean;
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
        "autocomplete"?: 'on' | 'off';
        "autofocus"?: boolean;
        "clearInput"?: boolean;
        "clearOnEdit"?: boolean;
        "color"?: 'primary' | 'secondary' | 'danger';
        "counter"?: boolean;
        "counterFormatter"?: (
    inputLength: number,
    maxLength: number
  ) => string | undefined;
        "debounce"?: number;
        "disabled"?: boolean;
        "enterKeyHint"?: | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
        "errorText"?: string;
        "fill"?: 'solid' | 'outline';
        "hasError"?: boolean;
        "helperText"?: string;
        "icon"?: string;
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'stacked' | 'floating';
        "max"?: string | number;
        "maxlength"?: number;
        "min"?: string | number;
        "minlength"?: number;
        "mode"?: Mode;
        "multiple"?: boolean;
        "name"?: string;
        "onAtomBlur"?: (event: AtomInputCustomEvent<void>) => void;
        "onAtomChange"?: (event: AtomInputCustomEvent<string>) => void;
        "onAtomFocus"?: (event: AtomInputCustomEvent<void>) => void;
        "onAtomInput"?: (event: AtomInputCustomEvent<string>) => void;
        "passwordToggle"?: boolean;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "shape"?: 'round' | undefined;
        "step"?: string;
        "type"?: TextFieldTypes;
        "value"?: IonTypes.IonInput['value'];
    }
    interface AtomSelect {
        "color"?: 'primary' | 'secondary' | 'danger';
        "disabled"?: boolean;
        "errorText"?: string;
        "fill"?: 'solid' | 'outline';
        "helperText"?: string;
        "icon"?: string;
        "label"?: string;
        "mode"?: Mode;
        "multiple"?: boolean;
        "name"?: string;
        "onAtomBlur"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomCancel"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomChange"?: (event: AtomSelectCustomEvent<string>) => void;
        "onAtomDismiss"?: (event: AtomSelectCustomEvent<void>) => void;
        "onAtomFocus"?: (event: AtomSelectCustomEvent<void>) => void;
        "options"?: Array<{
    id: string
    value: string
    selected?: boolean
    disabled?: boolean
  }>;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: IonTypes.IonSelect['value'];
    }
    interface AtomTextarea {
        "autoGrow"?: boolean;
        "autocomplete"?: 'on' | 'off';
        "autofocus"?: boolean;
        "clearOnEdit"?: boolean;
        "color"?: 'primary' | 'secondary' | 'danger';
        "cols"?: number;
        "counter"?: boolean;
        "counterFormatter"?: (
    inputLength: number,
    maxLength: number
  ) => string | undefined;
        "debounce"?: number;
        "disabled"?: boolean;
        "enterKeyHint"?: | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
        "errorText"?: string;
        "fill"?: 'solid' | 'outline';
        "hasError"?: boolean;
        "helperText"?: string;
        "icon"?: string;
        "inputmode"?: | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
        "label"?: string;
        "labelPlacement"?: 'stacked' | 'floating';
        "maxlength"?: number;
        "minlength"?: number;
        "mode"?: Mode;
        "name"?: string;
        "onAtomBlur"?: (event: AtomTextareaCustomEvent<void>) => void;
        "onAtomChange"?: (event: AtomTextareaCustomEvent<string>) => void;
        "onAtomFocus"?: (event: AtomTextareaCustomEvent<void>) => void;
        "onAtomInput"?: (event: AtomTextareaCustomEvent<string>) => void;
        "pattern"?: string;
        "placeholder"?: string;
        "readonly"?: boolean;
        "required"?: boolean;
        "rows"?: number;
        "shape"?: 'round' | undefined;
        "step"?: string;
        "value"?: IonTypes.IonTextarea['value'];
        "wrap"?: 'hard' | 'soft' | 'off';
    }
    interface AtomUploadArea {
        "accept"?: string;
        "disabled"?: boolean;
        "icon"?: string;
        "id"?: string;
        "itemToUpload"?: string;
        "multiple"?: boolean;
        "onAtomChange"?: (event: AtomUploadAreaCustomEvent<ChangeEvent>) => void;
        "onAtomInput"?: (event: AtomUploadAreaCustomEvent<InputEvent>) => void;
    }
    interface IntrinsicElements {
        "atom-button": AtomButton;
        "atom-chip": AtomChip;
        "atom-col": AtomCol;
        "atom-grid": AtomGrid;
        "atom-icon": AtomIcon;
        "atom-input": AtomInput;
        "atom-select": AtomSelect;
        "atom-textarea": AtomTextarea;
        "atom-upload-area": AtomUploadArea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atom-button": LocalJSX.AtomButton & JSXBase.HTMLAttributes<HTMLAtomButtonElement>;
            "atom-chip": LocalJSX.AtomChip & JSXBase.HTMLAttributes<HTMLAtomChipElement>;
            "atom-col": LocalJSX.AtomCol & JSXBase.HTMLAttributes<HTMLAtomColElement>;
            "atom-grid": LocalJSX.AtomGrid & JSXBase.HTMLAttributes<HTMLAtomGridElement>;
            "atom-icon": LocalJSX.AtomIcon & JSXBase.HTMLAttributes<HTMLAtomIconElement>;
            "atom-input": LocalJSX.AtomInput & JSXBase.HTMLAttributes<HTMLAtomInputElement>;
            "atom-select": LocalJSX.AtomSelect & JSXBase.HTMLAttributes<HTMLAtomSelectElement>;
            "atom-textarea": LocalJSX.AtomTextarea & JSXBase.HTMLAttributes<HTMLAtomTextareaElement>;
            "atom-upload-area": LocalJSX.AtomUploadArea & JSXBase.HTMLAttributes<HTMLAtomUploadAreaElement>;
        }
    }
}
