/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { IconProps } from "./icons";
import { Color, Mode, TextFieldTypes } from "@ionic/core";
import { AutoplayOptions, PaginationOptions } from "swiper/types";
import { IonTypes } from "@ionic/core/dist/types/components";
export { IconProps } from "./icons";
export { Color, Mode, TextFieldTypes } from "@ionic/core";
export { AutoplayOptions, PaginationOptions } from "swiper/types";
export { IonTypes } from "@ionic/core/dist/types/components";
export namespace Components {
    interface AtomAlert {
        "actionText"?: string;
        "close": boolean;
        "color"?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
        "icon"?: IconProps;
        "messageText"?: string;
        "messageTitle"?: string;
    }
    interface AtomBadge {
        "type": | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'dark';
    }
    interface AtomBreadcrumb {
        "items": BreadcrumbItemProp[];
    }
    interface AtomButton {
        "color": 'primary' | 'secondary' | 'white';
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
    interface AtomCarousel {
        "autoplay"?: boolean;
        "autoplayDelay"?: AutoplayOptions['delay'];
        "freeMode"?: boolean;
        "loop"?: boolean;
        "navigation"?: boolean;
        "pagination"?: boolean;
        "paginationClickable"?: boolean;
        "paginationType"?: PaginationOptions['type'] | 'thumbnails';
        "slidesPerGroup"?: number | string;
        "slidesPerView"?: number | string;
        "spaceBetween"?: number;
        "speed"?: number;
        "thumbnailImages"?: string;
        "videoIcons"?: boolean;
    }
    interface AtomCarouselItem {
    }
    interface AtomChip {
        "activated": boolean;
        "close": boolean;
        "disabled": boolean;
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
        "icon"?: IconProps;
        "label"?: string;
        "mode": Mode;
        "multiple"?: boolean;
        "name": string;
        "options": Array<{
    id: string
    value: string
    label?: string
    selected?: boolean
    disabled?: boolean
  }>;
        "placeholder": string;
        "readonly"?: boolean;
        "value"?: IonTypes.IonSelect['value'];
    }
    interface AtomTag {
        "color": 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
        "customBackgroundColor"?: string;
        "customTextColor"?: string;
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
}
export interface AtomAlertCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomAlertElement;
}
export interface AtomButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomButtonElement;
}
export interface AtomCarouselCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAtomCarouselElement;
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
declare global {
    interface HTMLAtomAlertElementEventMap {
        "atomClose": any;
        "atomAction": any;
    }
    interface HTMLAtomAlertElement extends Components.AtomAlert, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomAlertElementEventMap>(type: K, listener: (this: HTMLAtomAlertElement, ev: AtomAlertCustomEvent<HTMLAtomAlertElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomAlertElementEventMap>(type: K, listener: (this: HTMLAtomAlertElement, ev: AtomAlertCustomEvent<HTMLAtomAlertElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomAlertElement: {
        prototype: HTMLAtomAlertElement;
        new (): HTMLAtomAlertElement;
    };
    interface HTMLAtomBadgeElement extends Components.AtomBadge, HTMLStencilElement {
    }
    var HTMLAtomBadgeElement: {
        prototype: HTMLAtomBadgeElement;
        new (): HTMLAtomBadgeElement;
    };
    interface HTMLAtomBreadcrumbElement extends Components.AtomBreadcrumb, HTMLStencilElement {
    }
    var HTMLAtomBreadcrumbElement: {
        prototype: HTMLAtomBreadcrumbElement;
        new (): HTMLAtomBreadcrumbElement;
    };
    interface HTMLAtomButtonElementEventMap {
        "click": any;
    }
    interface HTMLAtomButtonElement extends Components.AtomButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomButtonElementEventMap>(type: K, listener: (this: HTMLAtomButtonElement, ev: AtomButtonCustomEvent<HTMLAtomButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomButtonElementEventMap>(type: K, listener: (this: HTMLAtomButtonElement, ev: AtomButtonCustomEvent<HTMLAtomButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomButtonElement: {
        prototype: HTMLAtomButtonElement;
        new (): HTMLAtomButtonElement;
    };
    interface HTMLAtomCarouselElementEventMap {
        "atomClickPrev": string;
        "atomClickNext": string;
        "atomChange": string;
    }
    interface HTMLAtomCarouselElement extends Components.AtomCarousel, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomCarouselElementEventMap>(type: K, listener: (this: HTMLAtomCarouselElement, ev: AtomCarouselCustomEvent<HTMLAtomCarouselElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomCarouselElementEventMap>(type: K, listener: (this: HTMLAtomCarouselElement, ev: AtomCarouselCustomEvent<HTMLAtomCarouselElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomCarouselElement: {
        prototype: HTMLAtomCarouselElement;
        new (): HTMLAtomCarouselElement;
    };
    interface HTMLAtomCarouselItemElement extends Components.AtomCarouselItem, HTMLStencilElement {
    }
    var HTMLAtomCarouselItemElement: {
        prototype: HTMLAtomCarouselItemElement;
        new (): HTMLAtomCarouselItemElement;
    };
    interface HTMLAtomChipElementEventMap {
        "atomClick": any;
    }
    interface HTMLAtomChipElement extends Components.AtomChip, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomChipElementEventMap>(type: K, listener: (this: HTMLAtomChipElement, ev: AtomChipCustomEvent<HTMLAtomChipElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomChipElementEventMap>(type: K, listener: (this: HTMLAtomChipElement, ev: AtomChipCustomEvent<HTMLAtomChipElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
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
    interface HTMLAtomInputElementEventMap {
        "atomFocus": void;
        "atomBlur": void;
        "atomChange": string;
        "atomInput": string;
    }
    interface HTMLAtomInputElement extends Components.AtomInput, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomInputElementEventMap>(type: K, listener: (this: HTMLAtomInputElement, ev: AtomInputCustomEvent<HTMLAtomInputElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomInputElementEventMap>(type: K, listener: (this: HTMLAtomInputElement, ev: AtomInputCustomEvent<HTMLAtomInputElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomInputElement: {
        prototype: HTMLAtomInputElement;
        new (): HTMLAtomInputElement;
    };
    interface HTMLAtomSelectElementEventMap {
        "atomBlur": void;
        "atomCancel": void;
        "atomChange": string;
        "atomDismiss": void;
        "atomFocus": void;
    }
    interface HTMLAtomSelectElement extends Components.AtomSelect, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomSelectElementEventMap>(type: K, listener: (this: HTMLAtomSelectElement, ev: AtomSelectCustomEvent<HTMLAtomSelectElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomSelectElementEventMap>(type: K, listener: (this: HTMLAtomSelectElement, ev: AtomSelectCustomEvent<HTMLAtomSelectElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomSelectElement: {
        prototype: HTMLAtomSelectElement;
        new (): HTMLAtomSelectElement;
    };
    interface HTMLAtomTagElement extends Components.AtomTag, HTMLStencilElement {
    }
    var HTMLAtomTagElement: {
        prototype: HTMLAtomTagElement;
        new (): HTMLAtomTagElement;
    };
    interface HTMLAtomTextareaElementEventMap {
        "atomFocus": void;
        "atomBlur": void;
        "atomChange": string;
        "atomInput": string;
    }
    interface HTMLAtomTextareaElement extends Components.AtomTextarea, HTMLStencilElement {
        addEventListener<K extends keyof HTMLAtomTextareaElementEventMap>(type: K, listener: (this: HTMLAtomTextareaElement, ev: AtomTextareaCustomEvent<HTMLAtomTextareaElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLAtomTextareaElementEventMap>(type: K, listener: (this: HTMLAtomTextareaElement, ev: AtomTextareaCustomEvent<HTMLAtomTextareaElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLAtomTextareaElement: {
        prototype: HTMLAtomTextareaElement;
        new (): HTMLAtomTextareaElement;
    };
    interface HTMLElementTagNameMap {
        "atom-alert": HTMLAtomAlertElement;
        "atom-badge": HTMLAtomBadgeElement;
        "atom-breadcrumb": HTMLAtomBreadcrumbElement;
        "atom-button": HTMLAtomButtonElement;
        "atom-carousel": HTMLAtomCarouselElement;
        "atom-carousel-item": HTMLAtomCarouselItemElement;
        "atom-chip": HTMLAtomChipElement;
        "atom-col": HTMLAtomColElement;
        "atom-grid": HTMLAtomGridElement;
        "atom-icon": HTMLAtomIconElement;
        "atom-input": HTMLAtomInputElement;
        "atom-select": HTMLAtomSelectElement;
        "atom-tag": HTMLAtomTagElement;
        "atom-textarea": HTMLAtomTextareaElement;
    }
}
declare namespace LocalJSX {
    interface AtomAlert {
        "actionText"?: string;
        "close"?: boolean;
        "color"?: 'info' | 'success' | 'warning' | 'danger' | 'neutral';
        "icon"?: IconProps;
        "messageText"?: string;
        "messageTitle"?: string;
        "onAtomAction"?: (event: AtomAlertCustomEvent<any>) => void;
        "onAtomClose"?: (event: AtomAlertCustomEvent<any>) => void;
    }
    interface AtomBadge {
        "type"?: | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'danger'
    | 'neutral'
    | 'dark';
    }
    interface AtomBreadcrumb {
        "items"?: BreadcrumbItemProp[];
    }
    interface AtomButton {
        "color"?: 'primary' | 'secondary' | 'white';
        "disabled"?: boolean;
        "download"?: string;
        "expand"?: 'block';
        "fill"?: 'clear' | 'outline' | 'solid';
        "href"?: string;
        "loading"?: boolean;
        "mode"?: Mode;
        "onClick"?: (event: AtomButtonCustomEvent<any>) => void;
        "rel"?: string;
        "shape"?: 'round' | 'circle';
        "size"?: 'small' | 'default' | 'large';
        "target"?: string;
        "type"?: 'submit' | 'reset' | 'button';
    }
    interface AtomCarousel {
        "autoplay"?: boolean;
        "autoplayDelay"?: AutoplayOptions['delay'];
        "freeMode"?: boolean;
        "loop"?: boolean;
        "navigation"?: boolean;
        "onAtomChange"?: (event: AtomCarouselCustomEvent<string>) => void;
        "onAtomClickNext"?: (event: AtomCarouselCustomEvent<string>) => void;
        "onAtomClickPrev"?: (event: AtomCarouselCustomEvent<string>) => void;
        "pagination"?: boolean;
        "paginationClickable"?: boolean;
        "paginationType"?: PaginationOptions['type'] | 'thumbnails';
        "slidesPerGroup"?: number | string;
        "slidesPerView"?: number | string;
        "spaceBetween"?: number;
        "speed"?: number;
        "thumbnailImages"?: string;
        "videoIcons"?: boolean;
    }
    interface AtomCarouselItem {
    }
    interface AtomChip {
        "activated"?: boolean;
        "close"?: boolean;
        "disabled"?: boolean;
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
    label?: string
    selected?: boolean
    disabled?: boolean
  }>;
        "placeholder"?: string;
        "readonly"?: boolean;
        "value"?: IonTypes.IonSelect['value'];
    }
    interface AtomTag {
        "color"?: 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light';
        "customBackgroundColor"?: string;
        "customTextColor"?: string;
        "icon"?: IconProps;
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
        "icon"?: IconProps;
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
    interface IntrinsicElements {
        "atom-alert": AtomAlert;
        "atom-badge": AtomBadge;
        "atom-breadcrumb": AtomBreadcrumb;
        "atom-button": AtomButton;
        "atom-carousel": AtomCarousel;
        "atom-carousel-item": AtomCarouselItem;
        "atom-chip": AtomChip;
        "atom-col": AtomCol;
        "atom-grid": AtomGrid;
        "atom-icon": AtomIcon;
        "atom-input": AtomInput;
        "atom-select": AtomSelect;
        "atom-tag": AtomTag;
        "atom-textarea": AtomTextarea;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "atom-alert": LocalJSX.AtomAlert & JSXBase.HTMLAttributes<HTMLAtomAlertElement>;
            "atom-badge": LocalJSX.AtomBadge & JSXBase.HTMLAttributes<HTMLAtomBadgeElement>;
            "atom-breadcrumb": LocalJSX.AtomBreadcrumb & JSXBase.HTMLAttributes<HTMLAtomBreadcrumbElement>;
            "atom-button": LocalJSX.AtomButton & JSXBase.HTMLAttributes<HTMLAtomButtonElement>;
            "atom-carousel": LocalJSX.AtomCarousel & JSXBase.HTMLAttributes<HTMLAtomCarouselElement>;
            "atom-carousel-item": LocalJSX.AtomCarouselItem & JSXBase.HTMLAttributes<HTMLAtomCarouselItemElement>;
            "atom-chip": LocalJSX.AtomChip & JSXBase.HTMLAttributes<HTMLAtomChipElement>;
            "atom-col": LocalJSX.AtomCol & JSXBase.HTMLAttributes<HTMLAtomColElement>;
            "atom-grid": LocalJSX.AtomGrid & JSXBase.HTMLAttributes<HTMLAtomGridElement>;
            "atom-icon": LocalJSX.AtomIcon & JSXBase.HTMLAttributes<HTMLAtomIconElement>;
            "atom-input": LocalJSX.AtomInput & JSXBase.HTMLAttributes<HTMLAtomInputElement>;
            "atom-select": LocalJSX.AtomSelect & JSXBase.HTMLAttributes<HTMLAtomSelectElement>;
            "atom-tag": LocalJSX.AtomTag & JSXBase.HTMLAttributes<HTMLAtomTagElement>;
            "atom-textarea": LocalJSX.AtomTextarea & JSXBase.HTMLAttributes<HTMLAtomTextareaElement>;
        }
    }
}
