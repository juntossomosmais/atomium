import * as react from 'react';
import react__default, { ComponentProps, FC, AnchorHTMLAttributes, MouseEvent, ReactNode, FunctionComponent, ReactElement, Component, RefObject, SyntheticEvent, DetailedHTMLProps, ButtonHTMLAttributes, ElementType } from 'react';
import * as _storybook_theming from '@storybook/theming';
import { Theme, CSSObject } from '@storybook/theming';
import { BuiltInParserName } from 'prettier';
import * as react_textarea_autosize from 'react-textarea-autosize';

declare const A: _storybook_theming.StyledComponent<react.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: react.ReactNode;
} & {
    theme?: _storybook_theming.Theme;
}, {}, {}>;

declare const Blockquote: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>, {}>;

declare const DefaultCodeBlock: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
}, react__default.DetailedHTMLProps<react__default.HTMLAttributes<HTMLElement>, HTMLElement>, {}>;
declare const Code: ({ className, children, ...props }: ComponentProps<typeof DefaultCodeBlock>) => JSX.Element;

declare const Div: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare const DL: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, {}>;

declare const H1: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const H2: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const H3: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const H4: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const H5: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const H6: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {}>;

declare const HR: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>, {}>;

declare const Img: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, {}>;

declare const LI: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, {}>;

declare const OL: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>, {}>;

declare const P: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {}>;

declare const Pre: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>, {}>;

declare const Span: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;

declare const Table: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {}>;

declare const TT: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>, {}>;

declare const UL: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {}>;

interface BadgeProps {
    status: 'positive' | 'negative' | 'neutral' | 'warning' | 'critical';
}
declare const Badge: FC<BadgeProps>;

interface LinkStylesProps {
    secondary?: boolean;
    tertiary?: boolean;
    nochrome?: boolean;
    inverse?: boolean;
    isButton?: boolean;
}
interface LinkInnerProps {
    withArrow?: boolean;
    containsIcon?: boolean;
}
type AProps = AnchorHTMLAttributes<HTMLAnchorElement>;
interface LinkProps extends LinkInnerProps, LinkStylesProps {
    cancel?: boolean;
    className?: string;
    style?: object;
    onClick?: (e: MouseEvent) => void;
    href?: string;
}
declare const Link$1: FC<LinkProps & AProps>;

declare const DocumentWrapper: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

interface SyntaxHighlighterRendererProps {
    rows: any[];
    stylesheet: string;
    useInlineStyles: boolean;
}
type SyntaxHighlighterRenderer = (props: SyntaxHighlighterRendererProps) => ReactNode;
interface SyntaxHighlighterCustomProps {
    language: string;
    copyable?: boolean;
    bordered?: boolean;
    padded?: boolean;
    format?: SyntaxHighlighterFormatTypes;
    formatter?: (type: SyntaxHighlighterFormatTypes, source: string) => string;
    className?: string;
    renderer?: SyntaxHighlighterRenderer;
}
type SyntaxHighlighterFormatTypes = boolean | 'dedent' | BuiltInParserName;
type LineTagPropsFunction = (lineNumber: number) => React.HTMLProps<HTMLElement>;
interface SyntaxHighlighterBaseProps {
    children?: React.ReactNode;
    codeTagProps?: React.HTMLProps<HTMLElement>;
    customStyle?: any;
    language?: string;
    lineNumberStyle?: any;
    lineProps?: LineTagPropsFunction | React.HTMLProps<HTMLElement>;
    showLineNumbers?: boolean;
    startingLineNumber?: number;
    style?: any;
    useInlineStyles?: boolean;
}
type SyntaxHighlighterProps = SyntaxHighlighterBaseProps & SyntaxHighlighterCustomProps;

declare const LazySyntaxHighlighter: react__default.LazyExoticComponent<react__default.FC<SyntaxHighlighterProps>>;
declare const SyntaxHighlighter: (props: ComponentProps<typeof LazySyntaxHighlighter>) => JSX.Element;

declare function createCopyToClipboardFunction(): (text: string) => Promise<void>;

interface ActionItem {
    title: string | JSX.Element;
    className?: string;
    onClick: (e: MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
}
interface ActionBarProps {
    actionItems: ActionItem[];
}
declare const ActionBar: FC<ActionBarProps>;

interface SpacedProps {
    children?: react__default.ReactNode;
    col?: number;
    row?: number;
    outer?: number | boolean;
}
declare const Spaced: FC<SpacedProps>;

interface PlaceholderProps {
    children?: react__default.ReactNode;
}
declare const Placeholder: FunctionComponent<PlaceholderProps>;

interface ScrollAreaProps {
    children?: react__default.ReactNode;
    horizontal?: boolean;
    vertical?: boolean;
    className?: string;
}
declare const ScrollArea: FC<ScrollAreaProps>;

type ZoomProps = {
    scale: number;
    children: ReactElement | ReactElement[];
};
declare function ZoomElement({ scale, children }: ZoomProps): JSX.Element;

type IZoomIFrameProps = {
    scale: number;
    children: ReactElement<HTMLIFrameElement>;
    iFrameRef: RefObject<HTMLIFrameElement>;
    active?: boolean;
};
declare class ZoomIFrame extends Component<IZoomIFrameProps> {
    iframe: HTMLIFrameElement;
    componentDidMount(): void;
    shouldComponentUpdate(nextProps: IZoomIFrameProps): boolean;
    setIframeInnerZoom(scale: number): void;
    setIframeZoom(scale: number): void;
    render(): ReactElement<HTMLIFrameElement, string | react.JSXElementConstructor<any>> & react.ReactNode;
}

declare const Zoom: {
    Element: typeof ZoomElement;
    IFrame: typeof ZoomIFrame;
};

declare const ErrorFormatter: FC<{
    error: Error;
}>;

declare const ButtonWrapper: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
} & {
    isLink?: boolean;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
    gray?: boolean;
    inForm?: boolean;
    disabled?: boolean;
    small?: boolean;
    outline?: boolean;
    containsIcon?: boolean;
    children?: ReactNode;
    href?: string;
}, react__default.DetailedHTMLProps<react__default.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {}>;
declare const Button: FC<ComponentProps<typeof ButtonWrapper>>;

type Sizes = '100%' | 'flex' | 'auto';
type Alignments = 'end' | 'center' | 'start';
type ValidationStates = 'valid' | 'error' | 'warn';

interface FieldProps {
    children?: ReactNode;
    label?: ReactNode;
}

declare const Form: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>, {}> & {
    Field: react.FC<FieldProps>;
    Input: _storybook_theming.StyledComponent<Pick<Omit<react.HTMLProps<HTMLInputElement>, "height" | "align" | "size" | "valid"> & {
        size?: Sizes;
        align?: Alignments;
        valid?: ValidationStates;
        height?: number;
    }, "download" | "href" | "hrefLang" | "media" | "rel" | "target" | "type" | "form" | "list" | "cite" | "cellPadding" | "cellSpacing" | "summary" | "width" | "alt" | "crossOrigin" | "height" | "sizes" | "src" | "srcSet" | "useMap" | "value" | "reversed" | "start" | "data" | "label" | "slot" | "span" | "style" | "title" | "pattern" | "className" | "color" | "content" | "translate" | "default" | "hidden" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "disabled" | "wrap" | "key" | "rows" | "align" | "as" | "size" | "open" | "multiple" | "max" | "method" | "min" | "name" | "controls" | "autoFocus" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "valid" | "accept" | "acceptCharset" | "action" | "allowFullScreen" | "allowTransparency" | "async" | "autoComplete" | "autoPlay" | "capture" | "charSet" | "challenge" | "checked" | "classID" | "cols" | "colSpan" | "coords" | "dateTime" | "defer" | "encType" | "frameBorder" | "headers" | "high" | "htmlFor" | "httpEquiv" | "integrity" | "keyParams" | "keyType" | "kind" | "loop" | "low" | "manifest" | "marginHeight" | "marginWidth" | "maxLength" | "mediaGroup" | "minLength" | "muted" | "noValidate" | "optimum" | "playsInline" | "poster" | "preload" | "readOnly" | "required" | "rowSpan" | "sandbox" | "scope" | "scoped" | "scrolling" | "seamless" | "selected" | "shape" | "srcDoc" | "srcLang" | "step" | "wmode"> & react.RefAttributes<any> & {
        theme?: _storybook_theming.Theme;
    } & {
        size?: Sizes;
        align?: Alignments;
        valid?: ValidationStates;
        height?: number;
    }, {}, {}> & {
        displayName: string;
    };
    Select: _storybook_theming.StyledComponent<Omit<react.SelectHTMLAttributes<HTMLSelectElement>, "height" | "align" | "size" | "valid"> & {
        size?: Sizes;
        align?: Alignments;
        valid?: ValidationStates;
        height?: number;
    } & react.RefAttributes<any> & {
        theme?: _storybook_theming.Theme;
    }, {}, {}> & {
        displayName: string;
    };
    Textarea: _storybook_theming.StyledComponent<Omit<react_textarea_autosize.TextareaAutosizeProps, "height" | "align" | "size" | "valid"> & {
        size?: Sizes;
        align?: Alignments;
        valid?: ValidationStates;
        height?: number;
    } & react.RefAttributes<any> & {
        theme?: _storybook_theming.Theme;
    }, {}, {}> & {
        displayName: string;
    };
    Button: react.FC<any>;
};

declare const top: "top";
declare const bottom: "bottom";
declare const right: "right";
declare const left: "left";
declare type BasePlacement = typeof top | typeof bottom | typeof right | typeof left;
declare type VariationPlacement = "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end";
declare type AutoPlacement = "auto" | "auto-start" | "auto-end";
declare type Placement = AutoPlacement | BasePlacement | VariationPlacement;
declare const beforeRead: "beforeRead";
declare const read: "read";
declare const afterRead: "afterRead";
declare const beforeMain: "beforeMain";
declare const main: "main";
declare const afterMain: "afterMain";
declare const beforeWrite: "beforeWrite";
declare const write: "write";
declare const afterWrite: "afterWrite";
declare type ModifierPhases = typeof beforeRead | typeof read | typeof afterRead | typeof beforeMain | typeof main | typeof afterMain | typeof beforeWrite | typeof write | typeof afterWrite;

declare type Obj = {
    [key: string]: any;
};
declare type VisualViewport = EventTarget & {
    width: number;
    height: number;
    offsetLeft: number;
    offsetTop: number;
    scale: number;
};
declare type Window = {
    innerHeight: number;
    offsetHeight: number;
    innerWidth: number;
    offsetWidth: number;
    pageXOffset: number;
    pageYOffset: number;
    getComputedStyle: typeof getComputedStyle;
    addEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
    removeEventListener(type: any, listener: any, optionsOrUseCapture?: any): void;
    Element: Element;
    HTMLElement: HTMLElement;
    Node: Node;
    toString(): "[object Window]";
    devicePixelRatio: number;
    visualViewport?: VisualViewport;
    ShadowRoot: ShadowRoot;
};
declare type Rect = {
    width: number;
    height: number;
    x: number;
    y: number;
};
declare type Offsets = {
    y: number;
    x: number;
};
declare type PositioningStrategy = "absolute" | "fixed";
declare type StateRects = {
    reference: Rect;
    popper: Rect;
};
declare type OffsetData = {
    [key in Placement]?: Offsets;
};
declare type State = {
    elements: {
        reference: Element | VirtualElement;
        popper: HTMLElement;
        arrow?: HTMLElement;
    };
    options: OptionsGeneric<any>;
    placement: Placement;
    strategy: PositioningStrategy;
    orderedModifiers: Array<Modifier<any, any>>;
    rects: StateRects;
    scrollParents: {
        reference: Array<Element | Window | VisualViewport>;
        popper: Array<Element | Window | VisualViewport>;
    };
    styles: {
        [key: string]: Partial<CSSStyleDeclaration>;
    };
    attributes: {
        [key: string]: {
            [key: string]: string | boolean;
        };
    };
    modifiersData: {
        arrow?: {
            x?: number;
            y?: number;
            centerOffset: number;
        };
        hide?: {
            isReferenceHidden: boolean;
            hasPopperEscaped: boolean;
            referenceClippingOffsets: SideObject;
            popperEscapeOffsets: SideObject;
        };
        offset?: OffsetData;
        preventOverflow?: Offsets;
        popperOffsets?: Offsets;
        [key: string]: any;
    };
    reset: boolean;
};
declare type SetAction<S> = S | ((prev: S) => S);
declare type Instance = {
    state: State;
    destroy: () => void;
    forceUpdate: () => void;
    update: () => Promise<Partial<State>>;
    setOptions: (setOptionsAction: SetAction<Partial<OptionsGeneric<any>>>) => Promise<Partial<State>>;
};
declare type ModifierArguments<Options extends Obj> = {
    state: State;
    instance: Instance;
    options: Partial<Options>;
    name: string;
};
declare type Modifier<Name, Options extends Obj> = {
    name: Name;
    enabled: boolean;
    phase: ModifierPhases;
    requires?: Array<string>;
    requiresIfExists?: Array<string>;
    fn: (arg0: ModifierArguments<Options>) => State | void;
    effect?: (arg0: ModifierArguments<Options>) => (() => void) | void;
    options?: Partial<Options>;
    data?: Obj;
};
declare type Options = {
    placement: Placement;
    modifiers: Array<Partial<Modifier<any, any>>>;
    strategy: PositioningStrategy;
    onFirstUpdate?: (arg0: Partial<State>) => void;
};
declare type OptionsGeneric<TModifier> = {
    placement: Placement;
    modifiers: Array<TModifier>;
    strategy: PositioningStrategy;
    onFirstUpdate?: (arg0: Partial<State>) => void;
};
declare type SideObject = {
    top: number;
    left: number;
    right: number;
    bottom: number;
};
declare type VirtualElement = {
    getBoundingClientRect: () => ClientRect | DOMRect;
    contextElement?: Element;
};

declare const createPopper: <TModifier extends Partial<Modifier<any, any>>>(reference: Element | VirtualElement, popper: HTMLElement, options?: Partial<OptionsGeneric<TModifier>>) => Instance;

declare type TriggerType = 'click' | 'double-click' | 'right-click' | 'hover' | 'focus';
declare type Config = {
    /**
     * Whether to close the tooltip when its trigger is out of boundary
     * @default false
     */
    closeOnTriggerHidden?: boolean;
    /**
     * Event or events that trigger the tooltip
     * @default hover
     */
    trigger?: TriggerType | TriggerType[] | null;
    /**
     * Delay in hiding the tooltip (ms)
     * @default 0
     */
    delayHide?: number;
    /**
     * Delay in showing the tooltip (ms)
     * @default 0
     */
    delayShow?: number;
    /**
     * Whether to make the tooltip spawn at cursor position
     * @default false
     */
    followCursor?: boolean;
    /**
     * Options to MutationObserver, used internally for updating
     * tooltip position based on its DOM changes
     * @default  { attributes: true, childList: true, subtree: true }
     */
    mutationObserverOptions?: MutationObserverInit | null;
    /**
     * Whether tooltip is shown by default
     * @default false
     */
    defaultVisible?: boolean;
    /**
     * Used to create controlled tooltip
     */
    visible?: boolean;
    /**
     * Called when the visibility of the tooltip changes
     */
    onVisibleChange?: (state: boolean) => void;
    /**
     * If `true`, a click outside the trigger element closes the tooltip
     * @default true
     */
    closeOnOutsideClick?: boolean;
    /**
     * If `true`, hovering the tooltip will keep it open. Normally tooltip closes when the mouse cursor moves out of
     * the trigger element. If it moves to the tooltip element, the tooltip stays open.
     * @default false
     */
    interactive?: boolean;
    /**
     * Alias for popper.js placement, see https://popper.js.org/docs/v2/constructors/#placement
     */
    placement?: Placement;
    /**
     * Shorthand for popper.js offset modifier, see https://popper.js.org/docs/v2/modifiers/offset/
     * @default [0, 6]
     */
    offset?: [number, number];
};
declare type PopperOptions = Partial<Options> & {
    createPopper?: typeof createPopper;
};

interface WithHideFn {
    onHide: () => void;
}
interface WithTooltipPureProps extends Omit<Config, 'closeOnOutsideClick'>, PopperOptions {
    svg?: boolean;
    withArrows?: boolean;
    hasChrome?: boolean;
    tooltip: ReactNode | ((p: WithHideFn) => ReactNode);
    children: ReactNode;
    onDoubleClick?: () => void;
    /**
     * @deprecated use `defaultVisible` property instead. This property will be removed in SB 8.0
     */
    tooltipShown?: boolean;
    /**
     * @deprecated use `closeOnOutsideClick` property instead. This property will be removed in SB 8.0
     */
    closeOnClick?: boolean;
    /**
     * @deprecated use `onVisibleChange` property instead. This property will be removed in SB 8.0
     */
    onVisibilityChange?: (visibility: boolean) => void | boolean;
    /**
     * If `true`, a click outside the trigger element closes the tooltip
     * @default false
     */
    closeOnOutsideClick?: boolean;
}

declare const LazyWithTooltip: react__default.LazyExoticComponent<react__default.FC<Omit<WithTooltipPureProps, "onVisibleChange"> & {
    startOpen?: boolean;
    onVisibleChange?: (visible: boolean) => boolean | void;
}>>;
declare const WithTooltip: (props: ComponentProps<typeof LazyWithTooltip>) => JSX.Element;
declare const LazyWithTooltipPure: react__default.LazyExoticComponent<react__default.FC<WithTooltipPureProps>>;
declare const WithTooltipPure: (props: ComponentProps<typeof LazyWithTooltipPure>) => JSX.Element;

interface TooltipMessageProps {
    title?: ReactNode;
    desc?: ReactNode;
    links?: {
        title: string;
        href?: string;
        onClick?: () => void;
    }[];
}
declare const TooltipMessage: FC<TooltipMessageProps>;

interface TooltipNoteProps {
    note: string;
}
declare const TooltipNote: FC<TooltipNoteProps>;

declare const icons: {
    readonly user: JSX.Element;
    readonly useralt: JSX.Element;
    readonly useradd: JSX.Element;
    readonly users: JSX.Element;
    readonly profile: JSX.Element;
    readonly facehappy: JSX.Element;
    readonly faceneutral: JSX.Element;
    readonly facesad: JSX.Element;
    readonly accessibility: JSX.Element;
    readonly accessibilityalt: JSX.Element;
    readonly arrowup: JSX.Element;
    readonly arrowdown: JSX.Element;
    readonly arrowleft: JSX.Element;
    readonly arrowright: JSX.Element;
    readonly arrowupalt: JSX.Element;
    readonly arrowdownalt: JSX.Element;
    readonly arrowleftalt: JSX.Element;
    readonly arrowrightalt: JSX.Element;
    readonly expandalt: JSX.Element;
    readonly collapse: JSX.Element;
    readonly expand: JSX.Element;
    readonly unfold: JSX.Element;
    readonly transfer: JSX.Element;
    readonly redirect: JSX.Element;
    readonly undo: JSX.Element;
    readonly reply: JSX.Element;
    readonly sync: JSX.Element;
    readonly upload: JSX.Element;
    readonly download: JSX.Element;
    readonly back: JSX.Element;
    readonly proceed: JSX.Element;
    readonly refresh: JSX.Element;
    readonly globe: JSX.Element;
    readonly compass: JSX.Element;
    readonly location: JSX.Element;
    readonly pin: JSX.Element;
    readonly time: JSX.Element;
    readonly dashboard: JSX.Element;
    readonly timer: JSX.Element;
    readonly home: JSX.Element;
    readonly admin: JSX.Element;
    readonly info: JSX.Element;
    readonly question: JSX.Element;
    readonly support: JSX.Element;
    readonly alert: JSX.Element;
    readonly email: JSX.Element;
    readonly phone: JSX.Element;
    readonly link: JSX.Element;
    readonly unlink: JSX.Element;
    readonly bell: JSX.Element;
    readonly rss: JSX.Element;
    readonly sharealt: JSX.Element;
    readonly share: JSX.Element;
    readonly circlehollow: JSX.Element;
    readonly circle: JSX.Element;
    readonly bookmarkhollow: JSX.Element;
    readonly bookmark: JSX.Element;
    readonly hearthollow: JSX.Element;
    readonly heart: JSX.Element;
    readonly starhollow: JSX.Element;
    readonly star: JSX.Element;
    readonly certificate: JSX.Element;
    readonly verified: JSX.Element;
    readonly thumbsup: JSX.Element;
    readonly shield: JSX.Element;
    readonly basket: JSX.Element;
    readonly beaker: JSX.Element;
    readonly hourglass: JSX.Element;
    readonly flag: JSX.Element;
    readonly cloudhollow: JSX.Element;
    readonly cloud: JSX.Element;
    readonly edit: JSX.Element;
    readonly cog: JSX.Element;
    readonly nut: JSX.Element;
    readonly wrench: JSX.Element;
    readonly ellipsis: JSX.Element;
    readonly check: JSX.Element;
    readonly form: JSX.Element;
    readonly batchdeny: JSX.Element;
    readonly batchaccept: JSX.Element;
    readonly controls: JSX.Element;
    readonly plus: JSX.Element;
    readonly closeAlt: JSX.Element;
    readonly cross: JSX.Element;
    readonly trash: JSX.Element;
    readonly pinalt: JSX.Element;
    readonly unpin: JSX.Element;
    readonly add: JSX.Element;
    readonly subtract: JSX.Element;
    readonly close: JSX.Element;
    readonly delete: JSX.Element;
    readonly passed: JSX.Element;
    readonly changed: JSX.Element;
    readonly failed: JSX.Element;
    readonly clear: JSX.Element;
    readonly comment: JSX.Element;
    readonly commentadd: JSX.Element;
    readonly requestchange: JSX.Element;
    readonly comments: JSX.Element;
    readonly lock: JSX.Element;
    readonly unlock: JSX.Element;
    readonly key: JSX.Element;
    readonly outbox: JSX.Element;
    readonly credit: JSX.Element;
    readonly button: JSX.Element;
    readonly type: JSX.Element;
    readonly pointerdefault: JSX.Element;
    readonly pointerhand: JSX.Element;
    readonly browser: JSX.Element;
    readonly tablet: JSX.Element;
    readonly mobile: JSX.Element;
    readonly watch: JSX.Element;
    readonly sidebar: JSX.Element;
    readonly sidebaralt: JSX.Element;
    readonly sidebaralttoggle: JSX.Element;
    readonly sidebartoggle: JSX.Element;
    readonly bottombar: JSX.Element;
    readonly bottombartoggle: JSX.Element;
    readonly cpu: JSX.Element;
    readonly database: JSX.Element;
    readonly memory: JSX.Element;
    readonly structure: JSX.Element;
    readonly box: JSX.Element;
    readonly power: JSX.Element;
    readonly photo: JSX.Element;
    readonly component: JSX.Element;
    readonly grid: JSX.Element;
    readonly outline: JSX.Element;
    readonly photodrag: JSX.Element;
    readonly search: JSX.Element;
    readonly zoom: JSX.Element;
    readonly zoomout: JSX.Element;
    readonly zoomreset: JSX.Element;
    readonly eye: JSX.Element;
    readonly eyeclose: JSX.Element;
    readonly lightning: JSX.Element;
    readonly lightningoff: JSX.Element;
    readonly contrast: JSX.Element;
    readonly switchalt: JSX.Element;
    readonly mirror: JSX.Element;
    readonly grow: JSX.Element;
    readonly paintbrush: JSX.Element;
    readonly ruler: JSX.Element;
    readonly stop: JSX.Element;
    readonly camera: JSX.Element;
    readonly video: JSX.Element;
    readonly speaker: JSX.Element;
    readonly play: JSX.Element;
    readonly playback: JSX.Element;
    readonly playnext: JSX.Element;
    readonly rewind: JSX.Element;
    readonly fastforward: JSX.Element;
    readonly stopalt: JSX.Element;
    readonly sidebyside: JSX.Element;
    readonly stacked: JSX.Element;
    readonly sun: JSX.Element;
    readonly moon: JSX.Element;
    readonly book: JSX.Element;
    readonly document: JSX.Element;
    readonly copy: JSX.Element;
    readonly category: JSX.Element;
    readonly folder: JSX.Element;
    readonly print: JSX.Element;
    readonly graphline: JSX.Element;
    readonly calendar: JSX.Element;
    readonly graphbar: JSX.Element;
    readonly menu: JSX.Element;
    readonly menualt: JSX.Element;
    readonly filter: JSX.Element;
    readonly docchart: JSX.Element;
    readonly doclist: JSX.Element;
    readonly markup: JSX.Element;
    readonly bold: JSX.Element;
    readonly italic: JSX.Element;
    readonly paperclip: JSX.Element;
    readonly listordered: JSX.Element;
    readonly listunordered: JSX.Element;
    readonly paragraph: JSX.Element;
    readonly markdown: JSX.Element;
    readonly repository: JSX.Element;
    readonly commit: JSX.Element;
    readonly branch: JSX.Element;
    readonly pullrequest: JSX.Element;
    readonly merge: JSX.Element;
    readonly apple: JSX.Element;
    readonly linux: JSX.Element;
    readonly ubuntu: JSX.Element;
    readonly windows: JSX.Element;
    readonly storybook: JSX.Element;
    readonly azuredevops: JSX.Element;
    readonly bitbucket: JSX.Element;
    readonly chrome: JSX.Element;
    readonly chromatic: JSX.Element;
    readonly componentdriven: JSX.Element;
    readonly discord: JSX.Element;
    readonly facebook: JSX.Element;
    readonly figma: JSX.Element;
    readonly gdrive: JSX.Element;
    readonly github: JSX.Element;
    readonly gitlab: JSX.Element;
    readonly google: JSX.Element;
    readonly graphql: JSX.Element;
    readonly medium: JSX.Element;
    readonly redux: JSX.Element;
    readonly twitter: JSX.Element;
    readonly youtube: JSX.Element;
    readonly vscode: JSX.Element;
};
type IconKey = keyof typeof icons;

interface ItemProps {
    disabled?: boolean;
}
declare const Item: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
} & ItemProps, react__default.DetailedHTMLProps<react__default.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, {}>;
type LinkWrapperType = FC<any>;
interface ListItemProps extends Omit<ComponentProps<typeof Item>, 'href' | 'title'> {
    loading?: boolean;
    /**
     * @deprecated This property will be removed in SB 8.0
     * Use `icon` property instead.
     */
    left?: ReactNode;
    title?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
    icon?: keyof typeof icons | ReactElement;
    active?: boolean;
    disabled?: boolean;
    href?: string;
    LinkWrapper?: LinkWrapperType;
    isIndented?: boolean;
}
declare const ListItem: FC<ListItemProps>;

interface Link extends Omit<ListItemProps, 'onClick'> {
    id: string;
    isGatsby?: boolean;
    onClick?: (event: SyntheticEvent, item: ListItemProps) => void;
}
interface TooltipLinkListProps {
    links: Link[];
    LinkWrapper?: LinkWrapperType;
}
declare const TooltipLinkList: FC<TooltipLinkListProps>;

declare const TabBar: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
}, react__default.DetailedHTMLProps<react__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface TabWrapperProps {
    active: boolean;
    render?: () => JSX.Element;
    children?: ReactNode;
}
declare const TabWrapper: FC<TabWrapperProps>;
interface TabsProps {
    children?: FuncChildren[] | ReactNode;
    id?: string;
    tools?: ReactNode;
    selected?: string;
    actions?: {
        onSelect: (id: string) => void;
    } & Record<string, any>;
    backgroundColor?: string;
    absolute?: boolean;
    bordered?: boolean;
    menuName?: string;
}
declare const Tabs: FC<TabsProps>;
type FuncChildren = ({ active }: {
    active: boolean;
}) => JSX.Element;
interface TabsStateProps {
    children: FuncChildren[] | ReactNode;
    initial: string;
    absolute: boolean;
    bordered: boolean;
    backgroundColor: string;
    menuName: string;
}
interface TabsStateState {
    selected: string;
}
declare class TabsState extends Component<TabsStateProps, TabsStateState> {
    static defaultProps: TabsStateProps;
    constructor(props: TabsStateProps);
    handlers: {
        onSelect: (id: string) => void;
    };
    render(): JSX.Element;
}

interface BarButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    href?: void;
    target?: void;
}
interface BarLinkProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    disabled?: void;
    href: string;
}
interface TabButtonProps {
    active?: boolean;
    textColor?: string;
}
declare const TabButton: _storybook_theming.StyledComponent<Pick<BarButtonProps | BarLinkProps, "href" | "target" | "type" | "slot" | "style" | "title" | "className" | "color" | "translate" | "hidden" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "disabled" | "key"> & react__default.RefAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    theme?: _storybook_theming.Theme;
} & TabButtonProps, {}, {}>;
interface IconButtonProps {
    active?: boolean;
    disabled?: boolean;
}
declare const IconButton: _storybook_theming.StyledComponent<Pick<BarButtonProps | BarLinkProps, "href" | "target" | "type" | "slot" | "style" | "title" | "className" | "color" | "translate" | "hidden" | "children" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "id" | "lang" | "nonce" | "placeholder" | "spellCheck" | "tabIndex" | "radioGroup" | "role" | "about" | "datatype" | "inlist" | "prefix" | "property" | "resource" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "disabled" | "key"> & react__default.RefAttributes<HTMLAnchorElement | HTMLButtonElement> & {
    theme?: _storybook_theming.Theme;
} & IconButtonProps, {}, {}>;
declare const IconButtonSkeleton: () => JSX.Element;

declare const Separator: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
} & SeparatorProps, react__default.DetailedHTMLProps<react__default.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {}>;
declare const interleaveSeparators: (list: any[]) => any;
interface SeparatorProps {
    force?: boolean;
}

declare const Bar: _storybook_theming.StyledComponent<ScrollAreaProps & {
    children?: react__default.ReactNode;
} & {
    scrollable?: boolean;
} & {
    theme?: _storybook_theming.Theme;
} & {
    border?: boolean;
    scrollable?: boolean;
}, {}, {}>;
interface FlexBarProps extends ComponentProps<typeof Bar> {
    border?: boolean;
    backgroundColor?: string;
}
declare const FlexBar: FC<FlexBarProps>;

interface AddonPanelProps {
    active: boolean;
    children: ReactNode;
}
declare const AddonPanel: ({ active, children }: AddonPanelProps) => JSX.Element;

declare const Svg: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
}, react__default.SVGProps<SVGSVGElement>, {}>;
interface IconsProps extends ComponentProps<typeof Svg> {
    icon: IconType;
    useSymbol?: boolean;
}
declare const Icons: FunctionComponent<IconsProps>;
type IconType = keyof typeof icons;
interface SymbolsProps extends ComponentProps<typeof Svg> {
    icons?: IconKey[];
}
declare const Symbols: react__default.NamedExoticComponent<SymbolsProps>;

declare const StorybookLogo: FC<{
    alt: string;
}>;

declare const StorybookIcon: FC;

declare const ProgressWrapper: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react__default.ElementType<any>;
}, react__default.DetailedHTMLProps<react__default.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;
interface Progress {
    value: number;
    message: string;
    modules?: {
        complete: number;
        total: number;
    };
}
interface LoaderProps {
    progress?: Progress;
    error?: Error;
    size?: number;
}
declare const Loader: FC<LoaderProps & ComponentProps<typeof ProgressWrapper>>;

declare const getStoryHref: (baseUrl: string, storyId: string, additionalParams?: Record<string, string>) => string;

declare const nameSpaceClassNames: ({ ...props }: {
    [x: string]: any;
}, key: string) => {
    [x: string]: any;
};

/**
 * This is a "local" reset to style subtrees with Storybook styles
 *
 * We can't style individual elements (e.g. h1, h2, etc.) in here
 * because the CSS specificity is too high, so those styles can too
 * easily override child elements that are not expecting it.
 */
declare const ResetWrapper: _storybook_theming.StyledComponent<{
    theme?: _storybook_theming.Theme;
    as?: react.ElementType<any>;
}, react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {}>;

declare const codeCommon: ({ theme }: {
    theme: Theme;
}) => CSSObject;
declare const withReset: ({ theme }: {
    theme: Theme;
}) => CSSObject;

declare const components: {
    h1: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    h2: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    h3: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    h4: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    h5: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    h6: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) => JSX.Element;
    pre: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => JSX.Element;
    a: (props: react.DetailedHTMLProps<react.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => JSX.Element;
    hr: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLHRElement>, HTMLHRElement>) => JSX.Element;
    dl: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDListElement>, HTMLDListElement>) => JSX.Element;
    blockquote: (props: react.DetailedHTMLProps<react.BlockquoteHTMLAttributes<HTMLElement>, HTMLElement>) => JSX.Element;
    table: (props: react.DetailedHTMLProps<react.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>) => JSX.Element;
    img: (props: react.DetailedHTMLProps<react.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => JSX.Element;
    div: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
    span: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>) => JSX.Element;
    li: (props: react.DetailedHTMLProps<react.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => JSX.Element;
    ul: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLUListElement>, HTMLUListElement>) => JSX.Element;
    ol: (props: react.DetailedHTMLProps<react.OlHTMLAttributes<HTMLOListElement>, HTMLOListElement>) => JSX.Element;
    p: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>) => JSX.Element;
    code: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLElement>, HTMLElement>) => JSX.Element;
    tt: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLTitleElement>, HTMLTitleElement>) => JSX.Element;
    resetwrapper: (props: react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => JSX.Element;
};
declare const resetComponents: Record<string, ElementType>;

export { A, ActionBar, ActionItem, AddonPanel, Badge, Bar, Blockquote, Button, Code, DL, Div, DocumentWrapper, ErrorFormatter, FlexBar, Form, H1, H2, H3, H4, H5, H6, HR, IconButton, IconButtonSkeleton, Icons, IconsProps, Img, LI, Link$1 as Link, ListItem, Loader, OL, P, Placeholder, Pre, ResetWrapper, ScrollArea, Separator, Spaced, Span, StorybookIcon, StorybookLogo, Symbols, SyntaxHighlighter, SyntaxHighlighterFormatTypes, SyntaxHighlighterProps, SyntaxHighlighterRendererProps, TT, TabBar, TabButton, TabWrapper, Table, Tabs, TabsState, TooltipLinkList, Link as TooltipLinkListLink, TooltipMessage, TooltipNote, UL, WithTooltip, WithTooltipPure, Zoom, codeCommon, components, createCopyToClipboardFunction, getStoryHref, icons, interleaveSeparators, nameSpaceClassNames, resetComponents, withReset };
