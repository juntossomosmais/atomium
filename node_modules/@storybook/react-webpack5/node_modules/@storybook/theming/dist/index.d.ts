import { E as EmotionCache, I as Interpolation, C as CSSInterpolation, S as SerializedStyles, K as Keyframes, a as ComponentSelector, T as Typography, b as Color, B as Background, c as ThemeVars, d as StorybookTheme } from './create-c2b2ce6d.js';
export { A as Animation, j as Brand, e as CSSObject, h as Easing, i as TextSize, g as background, f as color, l as create, k as themes, t as typography } from './create-c2b2ce6d.js';
import * as React$1 from 'react';
import { Provider, ReactElement, createElement, ReactNode } from 'react';

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>


interface StylisElement {
  type: string
  value: string
  props: Array<string> | string
  root: StylisElement | null
  parent: StylisElement | null
  children: Array<StylisElement> | string
  line: number
  column: number
  length: number
  return: string
}
type StylisPluginCallback = (
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
) => string | void

type StylisPlugin = (
  element: StylisElement,
  index: number,
  children: Array<StylisElement>,
  callback: StylisPluginCallback
) => string | void

interface Options {
  nonce?: string
  stylisPlugins?: Array<StylisPlugin>
  key: string
  container?: Node
  speedy?: boolean
  /** @deprecate use `insertionPoint` instead */
  prepend?: boolean
  insertionPoint?: HTMLElement
}

declare function createCache(options: Options): EmotionCache

type WithConditionalCSSProp<P> = 'className' extends keyof P
  ? string extends P['className' & keyof P]
    ? { css?: Interpolation<Theme> }
    : {}
  : {}

// unpack all here to avoid infinite self-referencing when defining our own JSX namespace
type ReactJSXElement = JSX.Element
type ReactJSXElementClass = JSX.ElementClass
type ReactJSXElementAttributesProperty = JSX.ElementAttributesProperty
type ReactJSXElementChildrenAttribute = JSX.ElementChildrenAttribute
type ReactJSXLibraryManagedAttributes<C, P> = JSX.LibraryManagedAttributes<C, P>
type ReactJSXIntrinsicAttributes = JSX.IntrinsicAttributes
type ReactJSXIntrinsicClassAttributes<T> = JSX.IntrinsicClassAttributes<T>
type ReactJSXIntrinsicElements = JSX.IntrinsicElements

declare namespace EmotionJSX {
  interface Element extends ReactJSXElement {}
  interface ElementClass extends ReactJSXElementClass {}
  interface ElementAttributesProperty
    extends ReactJSXElementAttributesProperty {}
  interface ElementChildrenAttribute extends ReactJSXElementChildrenAttribute {}

  type LibraryManagedAttributes<C, P> = WithConditionalCSSProp<P> &
    ReactJSXLibraryManagedAttributes<C, P>

  interface IntrinsicAttributes extends ReactJSXIntrinsicAttributes {}
  interface IntrinsicClassAttributes<T>
    extends ReactJSXIntrinsicClassAttributes<T> {}

  type IntrinsicElements = {
    [K in keyof ReactJSXIntrinsicElements]: ReactJSXIntrinsicElements[K] & {
      css?: Interpolation<Theme>
    }
  }
}

/**
 * @desc Utility type for getting props type of React component.
 * It takes `defaultProps` into an account - making props with defaults optional.
 */
type PropsOf<
  C extends keyof JSX.IntrinsicElements | React$1.JSXElementConstructor<any>
> = JSX.LibraryManagedAttributes<C, React$1.ComponentProps<C>>

// We need to use this version of Omit as it's distributive (Will preserve unions)
type DistributiveOmit<T, U> = T extends any
  ? Pick<T, Exclude<keyof T, U>>
  : never

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>


interface ThemeProviderProps {
  theme: Partial<Theme> | ((outerTheme: Theme) => Theme)
  children: React$1.ReactNode
}

declare function useTheme(): Theme

interface ThemeProvider {
  (props: ThemeProviderProps): React$1.ReactElement
}

declare const ThemeProvider: ThemeProvider

type withTheme = <
  C extends React$1.ComponentType<React$1.ComponentProps<C>>
>(
  component: C
) => React$1.FC<DistributiveOmit<PropsOf<C>, 'theme'> & { theme?: Theme }>

declare const withTheme: withTheme

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>


// tslint:disable-next-line: no-empty-interface
interface Theme {}
declare const CacheProvider: Provider<EmotionCache>

declare function css(
  template: TemplateStringsArray,
  ...args: Array<CSSInterpolation>
): SerializedStyles
declare function css(...args: Array<CSSInterpolation>): SerializedStyles

interface GlobalProps {
  styles: Interpolation<Theme>
}

/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
declare function Global(props: GlobalProps): ReactElement

declare function keyframes(
  template: TemplateStringsArray,
  ...args: Array<CSSInterpolation>
): Keyframes
declare function keyframes(...args: Array<CSSInterpolation>): Keyframes

interface ArrayClassNamesArg extends Array<ClassNamesArg> {}
type ClassNamesArg =
  | undefined
  | null
  | string
  | boolean
  | { [className: string]: boolean | null | undefined }
  | ArrayClassNamesArg

interface ClassNamesContent {
  css(template: TemplateStringsArray, ...args: Array<CSSInterpolation>): string
  css(...args: Array<CSSInterpolation>): string
  cx(...args: Array<ClassNamesArg>): string
  theme: Theme
}
interface ClassNamesProps {
  children(content: ClassNamesContent): ReactNode
}
/**
 * @desc
 * JSX generic are supported only after TS@2.9
 */
declare function ClassNames(props: ClassNamesProps): ReactElement

declare const jsx: typeof createElement
declare namespace jsx {
  namespace JSX {
    interface Element extends EmotionJSX.Element {}
    interface ElementClass extends EmotionJSX.ElementClass {}
    interface ElementAttributesProperty
      extends EmotionJSX.ElementAttributesProperty {}
    interface ElementChildrenAttribute
      extends EmotionJSX.ElementChildrenAttribute {}
    type LibraryManagedAttributes<C, P> = EmotionJSX.LibraryManagedAttributes<
      C,
      P
    >
    interface IntrinsicAttributes extends EmotionJSX.IntrinsicAttributes {}
    interface IntrinsicClassAttributes<T>
      extends EmotionJSX.IntrinsicClassAttributes<T> {}
    type IntrinsicElements = EmotionJSX.IntrinsicElements
  }
}

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>


/** Same as StyledOptions but shouldForwardProp must be a type guard */
interface FilteringStyledOptions<
  Props = Record<string, any>,
  ForwardedProps extends keyof Props & string = keyof Props & string
> {
  label?: string
  shouldForwardProp?: (propName: string) => propName is ForwardedProps
  target?: string
}

interface StyledOptions<Props = Record<string, any>> {
  label?: string
  shouldForwardProp?: (propName: string) => boolean
  target?: string
}

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
interface StyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {}
> extends React$1.FC<ComponentProps & SpecificComponentProps & JSXProps>,
    ComponentSelector {
  withComponent<C extends React$1.ComponentClass<React$1.ComponentProps<C>>>(
    component: C
  ): StyledComponent<
    ComponentProps & PropsOf<C>,
    {},
    { ref?: React$1.Ref<InstanceType<C>> }
  >
  withComponent<C extends React$1.ComponentType<React$1.ComponentProps<C>>>(
    component: C
  ): StyledComponent<ComponentProps & PropsOf<C>>
  withComponent<Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag
  ): StyledComponent<ComponentProps, JSX.IntrinsicElements[Tag]>
}

/**
 * @typeparam ComponentProps  Props which will be included when withComponent is called
 * @typeparam SpecificComponentProps  Props which will *not* be included when withComponent is called
 */
interface CreateStyledComponent<
  ComponentProps extends {},
  SpecificComponentProps extends {} = {},
  JSXProps extends {} = {}
> {
  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {} = {}>(
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: Theme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >

  (
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<ComponentProps & SpecificComponentProps & { theme: Theme }>
    >
  ): StyledComponent<ComponentProps, SpecificComponentProps, JSXProps>

  /**
   * @typeparam AdditionalProps  Additional props to add to your styled component
   */
  <AdditionalProps extends {}>(
    template: TemplateStringsArray,
    ...styles: Array<
      Interpolation<
        ComponentProps &
          SpecificComponentProps &
          AdditionalProps & { theme: Theme }
      >
    >
  ): StyledComponent<
    ComponentProps & AdditionalProps,
    SpecificComponentProps,
    JSXProps
  >
}

/**
 * @desc
 * This function accepts a React component or tag ('div', 'a' etc).
 *
 * @example styled(MyComponent)({ width: 100 })
 * @example styled(MyComponent)(myComponentProps => ({ width: myComponentProps.width })
 * @example styled('div')({ width: 100 })
 * @example styled('div')<Props>(props => ({ width: props.width })
 */
interface CreateStyled$1 {
  <
    C extends React$1.ComponentClass<React$1.ComponentProps<C>>,
    ForwardedProps extends keyof React$1.ComponentProps<C> &
      string = keyof React$1.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React$1.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
    },
    {},
    {
      ref?: React$1.Ref<InstanceType<C>>
    }
  >

  <C extends React$1.ComponentClass<React$1.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React$1.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
    },
    {},
    {
      ref?: React$1.Ref<InstanceType<C>>
    }
  >

  <
    C extends React$1.ComponentType<React$1.ComponentProps<C>>,
    ForwardedProps extends keyof React$1.ComponentProps<C> &
      string = keyof React$1.ComponentProps<C> & string
  >(
    component: C,
    options: FilteringStyledOptions<React$1.ComponentProps<C>, ForwardedProps>
  ): CreateStyledComponent<
    Pick<PropsOf<C>, ForwardedProps> & {
      theme?: Theme
    }
  >

  <C extends React$1.ComponentType<React$1.ComponentProps<C>>>(
    component: C,
    options?: StyledOptions<React$1.ComponentProps<C>>
  ): CreateStyledComponent<
    PropsOf<C> & {
      theme?: Theme
    }
  >

  <
    Tag extends keyof JSX.IntrinsicElements,
    ForwardedProps extends keyof JSX.IntrinsicElements[Tag] &
      string = keyof JSX.IntrinsicElements[Tag] & string
  >(
    tag: Tag,
    options: FilteringStyledOptions<JSX.IntrinsicElements[Tag], ForwardedProps>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React$1.ElementType },
    Pick<JSX.IntrinsicElements[Tag], ForwardedProps>
  >

  <Tag extends keyof JSX.IntrinsicElements>(
    tag: Tag,
    options?: StyledOptions<JSX.IntrinsicElements[Tag]>
  ): CreateStyledComponent<
    { theme?: Theme; as?: React$1.ElementType },
    JSX.IntrinsicElements[Tag]
  >
}

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>


type StyledTags = {
  [Tag in keyof JSX.IntrinsicElements]: CreateStyledComponent<
    {
      theme?: Theme
      as?: React.ElementType
    },
    JSX.IntrinsicElements[Tag]
  >
}

interface CreateStyled extends CreateStyled$1, StyledTags {}

declare const styled: CreateStyled

// Definitions by: Junyoung Clare Jang <https://github.com/Ailrun>
// TypeScript Version: 2.1

declare function isPropValid(prop: string): boolean

type Value = string | number;
interface Return {
    [key: string]: {
        [key: string]: Value;
    };
}
declare const createReset: ({ typography }: {
    typography: Typography;
}) => Return;
declare const createGlobal: ({ color, background, typography, }: {
    color: Color;
    background: Background;
    typography: Typography;
}) => Return;

declare const convert: (inherit?: ThemeVars) => StorybookTheme;

declare const ensure: (input: ThemeVars) => StorybookTheme;

declare const lightenColor: (color: string) => string;
declare const darkenColor: (color: string) => string;

declare const ignoreSsrWarning = "/* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */";

export { Background, CacheProvider, ClassNames, Color, Global, Keyframes, StorybookTheme, StyledComponent, ThemeProvider, ThemeVars, Typography, convert, createCache, createGlobal, createReset, css, darkenColor as darken, ensure, ignoreSsrWarning, isPropValid, jsx, keyframes, lightenColor as lighten, styled, useTheme, withTheme };

interface Theme extends StorybookTheme {}
export type { Theme };