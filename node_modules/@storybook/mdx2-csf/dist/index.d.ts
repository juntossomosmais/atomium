import { Buffer } from 'buffer';

declare const wrapperJs: string;

// Type definitions for non-npm package Unist 2.0
// Project: https://github.com/syntax-tree/unist
// Definitions by: bizen241 <https://github.com/bizen241>
//                 Jun Lu <https://github.com/lujun2>
//                 Hernan Rajchert <https://github.com/hrajchert>
//                 Titus Wormer <https://github.com/wooorm>
//                 Junyoung Choi <https://github.com/rokt33r>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

/**
 * Syntactic units in unist syntax trees are called nodes.
 */
interface Node$1 {
    /**
     * The variant of a node.
     */
    type: string;

    /**
     * Information from the ecosystem.
     */
    data?: Data;

    /**
     * Location of a node in a source document.
     * Must not be present if a node is generated.
     */
    position?: Position$2;

    [key: string]: unknown;
}

/**
 * Information associated by the ecosystem with the node.
 * Space is guaranteed to never be specified by unist or specifications
 * implementing unist.
 */
interface Data {
    [key: string]: unknown;
}

/**
 * Location of a node in a source file.
 */
interface Position$2 {
    /**
     * Place of the first character of the parsed source region.
     */
    start: Point$1;

    /**
     * Place of the first character after the parsed source region.
     */
    end: Point$1;

    /**
     * Start column at each index (plus start line) in the source region,
     * for elements that span multiple lines.
     */
    indent?: number[];
}

/**
 * One place in a source file.
 */
interface Point$1 {
    /**
     * Line in a source file (1-indexed integer).
     */
    line: number;

    /**
     * Column in a source file (1-indexed integer).
     */
    column: number;
    /**
     * Character in a source file (0-indexed integer).
     */
    offset?: number;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment, @typescript-eslint/prefer-ts-expect-error


/**
 * This is the same as `Buffer` if node types are included, `never` otherwise.
 */
type MaybeBuffer = any extends Buffer ? never : Buffer

/**
 * Contents of the file.
 * Can either be text, or a Buffer like structure.
 * This does not directly use type `Buffer`, because it can also be used in a
 * browser context.
 * Instead this leverages `Uint8Array` which is the base type for `Buffer`,
 * and a native JavaScript construct.
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
type VFileValue$1 = string | MaybeBuffer

/**
 * This map registers the type of the `data` key of a `VFile`.
 *
 * This type can be augmented to register custom `data` types.
 *
 * @example
 * declare module 'vfile' {
 *   interface VFileDataRegistry {
 *     // `file.data.name` is typed as `string`
 *     name: string
 *   }
 * }
 */
// eslint-disable-next-line @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface
interface VFileDataMap {}

/**
 * Place to store custom information.
 *
 * Known attributes can be added to @see {@link VFileDataMap}
 */
// eslint-disable-next-line @typescript-eslint/naming-convention
type VFileData$1 = Record<string, unknown> & Partial<VFileDataMap>

type URL$1 = {
  hash: string
  host: string
  hostname: string
  href: string
  origin: string
  password: string
  pathname: string
  port: string
  protocol: string
  search: string
  searchParams: any
  username: string
  toString: () => string
  toJSON: () => string
}

declare class VFileMessage extends Error {
  /**
   * Constructor of a message for `reason` at `place` from `origin`.
   * When an error is passed in as `reason`, copies the `stack`.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   */
  constructor(
    reason: string | Error,
    place?: Node | Position$1 | Point,
    origin?: string
  )
  /**
   * Reason for message.
   * @type {string}
   */
  reason: string
  /**
   * If true, marks associated file as no longer processable.
   * @type {boolean?}
   */
  fatal: boolean | null
  /**
   * Starting line of error.
   * @type {number?}
   */
  line: number | null
  /**
   * Starting column of error.
   * @type {number?}
   */
  column: number | null
  /**
   * Namespace of warning.
   * @type {string?}
   */
  source: string | null
  /**
   * Category of message.
   * @type {string?}
   */
  ruleId: string | null
  /**
   * Full range information, when available.
   * Has start and end properties, both set to an object with line and column, set to number?.
   * @type {Position?}
   */
  position: Position$1 | null
  /**
   * You can use this to specify the source value that’s being reported, which
   * is deemed incorrect.
   * @type {string?}
   */
  actual: string | null
  /**
   * You can use this to suggest values that should be used instead of
   * `actual`, one or more values that are deemed as acceptable.
   * @type {Array<string>?}
   */
  expected: Array<string> | null
  /**
   * You may add a file property with a path of a file (used throughout the VFile ecosystem).
   * @type {string?}
   */
  file: string | null
  /**
   * You may add a url property with a link to documentation for the message.
   * @type {string?}
   */
  url: string | null
  /**
   * You may add a note property with a long form description of the message (supported by vfile-reporter).
   * @type {string?}
   */
  note: string | null
}
type Node = Node$1
type Position$1 = Position$2
type Point = Point$1

declare class VFile$1 {
  /**
   * Create a new virtual file.
   *
   * If `options` is `string` or `Buffer`, treats it as `{value: options}`.
   * If `options` is a `VFile`, shallow copies its data over to the new file.
   * All other given fields are set on the newly created `VFile`.
   *
   * Path related properties are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * It’s not possible to set either `dirname` or `extname` without setting
   * either `history`, `path`, `basename`, or `stem` as well.
   *
   * @param {VFileCompatible} [value]
   */
  constructor(value?: VFileCompatible$1 | undefined)
  /**
   * Place to store custom information.
   * It’s OK to store custom data directly on the file, moving it to `data`
   * gives a little more privacy.
   * @type {VFileData}
   */
  data: VFileData
  /**
   * List of messages associated with the file.
   * @type {Array<VFileMessage>}
   */
  messages: Array<VFileMessage>
  /**
   * List of file paths the file moved between.
   * @type {Array<string>}
   */
  history: Array<string>
  /**
   * Base of `path`.
   * Defaults to `process.cwd()` (`/` in browsers).
   * @type {string}
   */
  cwd: string
  /**
   * Raw value.
   * @type {VFileValue}
   */
  value: VFileValue
  /**
   * Whether a file was saved to disk.
   * This is used by vfile reporters.
   * @type {boolean}
   */
  stored: boolean
  /**
   * Sometimes files have a non-string representation.
   * This can be stored in the `result` field.
   * One example is when turning markdown into React nodes.
   * This is used by unified to store non-string results.
   * @type {unknown}
   */
  result: unknown
  /**
   * Sometimes files have a source map associated with them.
   * This can be stored in the `map` field.
   * This should be a `RawSourceMap` type from the `source-map` module.
   * @type {Map|undefined}
   */
  map: Map | undefined
  /**
   * Set full path (`~/index.min.js`).
   * Cannot be nullified.
   *
   * @param {string|URL} path
   */
  set path(arg: string)
  /**
   * Access full path (`~/index.min.js`).
   *
   * @returns {string}
   */
  get path(): string
  /**
   * Set parent path (`~`).
   * Cannot be set if there's no `path` yet.
   */
  set dirname(arg: string | undefined)
  /**
   * Access parent path (`~`).
   */
  get dirname(): string | undefined
  /**
   * Set basename (`index.min.js`).
   * Cannot contain path separators.
   * Cannot be nullified either (use `file.path = file.dirname` instead).
   */
  set basename(arg: string | undefined)
  /**
   * Access basename (including extname) (`index.min.js`).
   */
  get basename(): string | undefined
  /**
   * Set extname (including dot) (`.js`).
   * Cannot be set if there's no `path` yet and cannot contain path separators.
   */
  set extname(arg: string | undefined)
  /**
   * Access extname (including dot) (`.js`).
   */
  get extname(): string | undefined
  /**
   * Set stem (w/o extname) (`index.min`).
   * Cannot be nullified, and cannot contain path separators.
   */
  set stem(arg: string | undefined)
  /**
   * Access stem (w/o extname) (`index.min`).
   */
  get stem(): string | undefined
  /**
   * Serialize the file.
   *
   * @param {BufferEncoding} [encoding='utf8'] If `file.value` is a buffer, `encoding` is used to serialize buffers.
   * @returns {string}
   */
  toString(encoding?: BufferEncoding | undefined): string
  /**
   * Create a message and associates it w/ the file.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  message(
    reason: string | Error,
    place?:
      | Node$1<Data>
      | Position$2
      | Point$1
      | undefined,
    origin?: string | undefined
  ): VFileMessage
  /**
   * Info: create a message, associate it with the file, and mark the fatality
   * as `null`.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {VFileMessage}
   */
  info(
    reason: string | Error,
    place?:
      | Node$1<Data>
      | Position$2
      | Point$1
      | undefined,
    origin?: string | undefined
  ): VFileMessage
  /**
   * Fail: create a message, associate it with the file, mark the fatality as
   * `true`.
   * Note: fatal errors mean a file is no longer processable.
   * Calls `message()` internally.
   *
   * @param {string|Error} reason Reason for message (`string` or `Error`). Uses the stack and message of the error if given.
   * @param {Node|Position|Point} [place] Place at which the message occurred in a file (`Node`, `Position`, or `Point`, optional).
   * @param {string} [origin] Place in code the message originates from (`string`, optional).
   * @returns {never}
   */
  fail(
    reason: string | Error,
    place?:
      | Node$1<Data>
      | Position$2
      | Point$1
      | undefined,
    origin?: string | undefined
  ): never
}
type URL = URL$1
type VFileData = VFileData$1
type VFileValue = VFileValue$1
/**
 * Encodings supported by the buffer class.
 * This is a copy of the typing from Node, copied to prevent Node globals from
 * being needed.
 * Copied from: <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/90a4ec8/types/node/buffer.d.ts#L170>
 */
type BufferEncoding =
  | 'ascii'
  | 'utf8'
  | 'utf-8'
  | 'utf16le'
  | 'ucs2'
  | 'ucs-2'
  | 'base64'
  | 'base64url'
  | 'latin1'
  | 'binary'
  | 'hex'
/**
 * Things that can be passed to the constructor.
 */
type VFileCompatible$1 = VFileValue | VFileOptions | VFile$1 | URL
type VFileCoreOptions = {
  value?: VFileValue$1 | undefined
  cwd?: string | undefined
  history?: string[] | undefined
  path?: string | URL$1 | undefined
  basename?: string | undefined
  stem?: string | undefined
  extname?: string | undefined
  dirname?: string | undefined
  data?: VFileData$1 | undefined
}
/**
 * Raw source map, see:
 * <https://github.com/mozilla/source-map/blob/58819f0/source-map.d.ts#L15-L23>.
 */
type Map = {
  version: number
  sources: Array<string>
  names: Array<string>
  sourceRoot?: string | undefined
  sourcesContent?: Array<string> | undefined
  mappings: string
  file: string
}
/**
 * Configuration: a bunch of keys that will be shallow copied over to the new
 * file.
 */
type VFileOptions = {
  [key: string]: unknown
} & VFileCoreOptions

// TypeScript Version: 4.0


/* eslint-disable @typescript-eslint/ban-types, @typescript-eslint/naming-convention */

type VFileWithOutput<Result> = Result extends Uint8Array // Buffer.
  ? VFile$1
  : Result extends object // Custom result type
  ? VFile$1 & {result: Result}
  : VFile$1

// Get the right most non-void thing.
type Specific<Left = void, Right = void> = Right extends void ? Left : Right

// Create a processor based on the input/output of a plugin.
type UsePlugin<
  ParseTree extends Node$1 | void = void,
  CurrentTree extends Node$1 | void = void,
  CompileTree extends Node$1 | void = void,
  CompileResult = void,
  Input = void,
  Output = void
> = Output extends Node$1
  ? Input extends string
    ? // If `Input` is `string` and `Output` is `Node`, then this plugin
      // defines a parser, so set `ParseTree`.
      Processor<
        Output,
        Specific<Output, CurrentTree>,
        Specific<Output, CompileTree>,
        CompileResult
      >
    : Input extends Node$1
    ? // If `Input` is `Node` and `Output` is `Node`, then this plugin defines a
      // transformer, its output defines the input of the next, so set
      // `CurrentTree`.
      Processor<
        Specific<Input, ParseTree>,
        Output,
        Specific<CompileTree, Output>,
        CompileResult
      >
    : // Else, `Input` is something else and `Output` is `Node`:
      never
  : Input extends Node$1
  ? // If `Input` is `Node` and `Output` is not a `Node`, then this plugin
    // defines a compiler, so set `CompileTree` and `CompileResult`
    Processor<
      Specific<Input, ParseTree>,
      Specific<Input, CurrentTree>,
      Input,
      Output
    >
  : // Else, `Input` is not a `Node` and `Output` is not a `Node`.
    // Maybe it’s untyped, or the plugin throws an error (`never`), so lets
    // just keep it as it was.
    Processor<ParseTree, CurrentTree, CompileTree, CompileResult>

/* eslint-enable @typescript-eslint/ban-types, @typescript-eslint/naming-convention */

/**
 * Processor allows plugins to be chained together to transform content.
 * The chain of plugins defines how content flows through it.
 *
 * @typeParam ParseTree
 *   The node that the parser yields (and `run` receives).
 * @typeParam CurrentTree
 *   The node that the last attached plugin yields.
 * @typeParam CompileTree
 *   The node that the compiler receives (and `run` yields).
 * @typeParam CompileResult
 *   The thing that the compiler yields.
 */
interface Processor<
  ParseTree extends Node$1 | void = void,
  CurrentTree extends Node$1 | void = void,
  CompileTree extends Node$1 | void = void,
  CompileResult = void
> extends FrozenProcessor<ParseTree, CurrentTree, CompileTree, CompileResult> {
  /**
   * Configure the processor to use a plugin.
   *
   * @typeParam PluginParameters
   *   Plugin settings.
   * @typeParam Input
   *   Value that is accepted by the plugin.
   *
   *   *   If the plugin returns a transformer, then this should be the node
   *       type that the transformer expects.
   *   *   If the plugin sets a parser, then this should be `string`.
   *   *   If the plugin sets a compiler, then this should be the node type that
   *       the compiler expects.
   * @typeParam Output
   *   Value that the plugin yields.
   *
   *   *   If the plugin returns a transformer, then this should be the node
   *       type that the transformer yields, and defaults to `Input`.
   *   *   If the plugin sets a parser, then this should be the node type that
   *       the parser yields.
   *   *   If the plugin sets a compiler, then this should be the result that
   *       the compiler yields (`string`, `Buffer`, or something else).
   * @param plugin
   *   Plugin (function) to use.
   *   Plugins are deduped based on identity: passing a function in twice will
   *   cause it to run only once.
   * @param settings
   *   Configuration for plugin, optional.
   *   Plugins typically receive one options object, but could receive other and
   *   more values.
   *   It’s also possible to pass a boolean instead of settings: `true` (to turn
   *   a plugin on) or `false` (to turn a plugin off).
   * @returns
   *   Current processor.
   */
  use<
    PluginParameters extends any[] = any[],
    Input = Specific<Node$1, CurrentTree>,
    Output = Input
  >(
    plugin: Plugin<PluginParameters, Input, Output>,
    ...settings: PluginParameters | [boolean]
  ): UsePlugin<
    ParseTree,
    CurrentTree,
    CompileTree,
    CompileResult,
    Input,
    Output
  >

  /**
   * Configure the processor with a tuple of a plugin and setting(s).
   *
   * @typeParam PluginParameters
   *   Plugin settings.
   * @typeParam Input
   *   Value that is accepted by the plugin.
   *
   *   *   If the plugin returns a transformer, then this should be the node
   *       type that the transformer expects.
   *   *   If the plugin sets a parser, then this should be `string`.
   *   *   If the plugin sets a compiler, then this should be the node type that
   *       the compiler expects.
   * @typeParam Output
   *   Value that the plugin yields.
   *
   *   *   If the plugin returns a transformer, then this should be the node
   *       type that the transformer yields, and defaults to `Input`.
   *   *   If the plugin sets a parser, then this should be the node type that
   *       the parser yields.
   *   *   If the plugin sets a compiler, then this should be the result that
   *       the compiler yields (`string`, `Buffer`, or something else).
   * @param tuple
   *   A tuple where the first item is a plugin (function) to use and other
   *   items are options.
   *   Plugins are deduped based on identity: passing a function in twice will
   *   cause it to run only once.
   *   It’s also possible to pass a boolean instead of settings: `true` (to turn
   *   a plugin on) or `false` (to turn a plugin off).
   * @returns
   *   Current processor.
   */
  use<
    PluginParameters extends any[] = any[],
    Input = Specific<Node$1, CurrentTree>,
    Output = Input
  >(
    tuple:
      | PluginTuple<PluginParameters, Input, Output>
      | [Plugin<PluginParameters, Input, Output>, boolean]
  ): UsePlugin<
    ParseTree,
    CurrentTree,
    CompileTree,
    CompileResult,
    Input,
    Output
  >

  /**
   * Configure the processor with a preset or list of plugins and presets.
   *
   * @param presetOrList
   *   Either a list of plugins, presets, and tuples, or a single preset: an
   *   object with a `plugins` (list) and/or `settings`
   *   (`Record<string, unknown>`).
   * @returns
   *   Current processor.
   */
  use(
    presetOrList: Preset | PluggableList
  ): Processor<ParseTree, CurrentTree, CompileTree, CompileResult>
}

/**
 * A frozen processor is just like a regular processor, except no additional
 * plugins can be added.
 * A frozen processor can be created by calling `.freeze()` on a processor.
 * An unfrozen processor can be created by calling a processor.
 */
interface FrozenProcessor<
  ParseTree extends Node$1 | void = void,
  CurrentTree extends Node$1 | void = void,
  CompileTree extends Node$1 | void = void,
  CompileResult = void
> {
  /**
   * Clone current processor
   *
   * @returns
   *   New unfrozen processor that is configured to function the same as its
   *   ancestor.
   *   But when the descendant processor is configured it does not affect the
   *   ancestral processor.
   */
  (): Processor<ParseTree, CurrentTree, CompileTree, CompileResult>

  /**
   * Internal list of configured plugins.
   *
   * @private
   */
  attachers: Array<[Plugin, ...unknown[]]>

  Parser?: Parser<Specific<Node$1, ParseTree>> | undefined
  Compiler?:
    | Compiler<Specific<Node$1, CompileTree>, Specific<unknown, CompileResult>>
    | undefined

  /**
   * Parse a file.
   *
   * @param file
   *   File to parse.
   *   `VFile` or anything that can be given to `new VFile()`, optional.
   * @returns
   *   Resulting tree.
   */
  parse(file?: VFileCompatible$1 | undefined): Specific<Node$1, ParseTree>

  /**
   * Compile a file.
   *
   * @param node
   *   Node to compile.
   * @param file
   *   `VFile` or anything that can be given to `new VFile()`, optional.
   * @returns
   *   New content: compiled text (`string` or `Buffer`) or something else.
   *   This depends on which plugins you use: typically text, but could for
   *   example be a React node.
   */
  stringify(
    node: Specific<Node$1, CompileTree>,
    file?: VFileCompatible$1 | undefined
  ): CompileTree extends Node$1 ? CompileResult : unknown

  /**
   * Run transforms on the given tree.
   *
   * @param node
   *   Tree to transform.
   * @param callback
   *   Callback called with an error or the resulting node.
   * @returns
   *   Nothing.
   */
  run(
    node: Specific<Node$1, ParseTree>,
    callback: RunCallback<Specific<Node$1, CompileTree>>
  ): void

  /**
   * Run transforms on the given node.
   *
   * @param node
   *   Tree to transform.
   * @param file
   *   File associated with `node`.
   *   `VFile` or anything that can be given to `new VFile()`.
   * @param callback
   *   Callback called with an error or the resulting node.
   * @returns
   *   Nothing.
   */
  run(
    node: Specific<Node$1, ParseTree>,
    file: VFileCompatible$1 | undefined,
    callback: RunCallback<Specific<Node$1, CompileTree>>
  ): void

  /**
   * Run transforms on the given node.
   *
   * @param node
   *   Tree to transform.
   * @param file
   *   File associated with `node`.
   *   `VFile` or anything that can be given to `new VFile()`.
   * @returns
   *   Promise that resolves to the resulting tree.
   */
  run(
    node: Specific<Node$1, ParseTree>,
    file?: VFileCompatible$1 | undefined
  ): Promise<Specific<Node$1, CompileTree>>

  /**
   * Run transforms on the given node, synchronously.
   * Throws when asynchronous transforms are configured.
   *
   * @param node
   *   Tree to transform.
   * @param file
   *   File associated with `node`.
   *   `VFile` or anything that can be given to `new VFile()`, optional.
   * @returns
   *   Resulting tree.
   */
  runSync(
    node: Specific<Node$1, ParseTree>,
    file?: VFileCompatible$1 | undefined
  ): Specific<Node$1, CompileTree>

  /**
   * Process a file.
   *
   * This performs all phases of the processor:
   *
   * 1.  Parse a file into a unist node using the configured `Parser`
   * 2.  Run transforms on that node
   * 3.  Compile the resulting node using the `Compiler`
   *
   * The result from the compiler is stored on the file.
   * What the result is depends on which plugins you use.
   * The result is typically text (`string` or `Buffer`), which can be retrieved
   * with `file.toString()` (or `String(file)`).
   * In some cases, such as when using `rehypeReact` to create a React node,
   * the result is stored on `file.result`.
   *
   * @param file
   *   `VFile` or anything that can be given to `new VFile()`.
   * @param callback
   *   Callback called with an error or the resulting file.
   * @returns
   *   Nothing.
   */
  process(
    file: VFileCompatible$1 | undefined,
    callback: ProcessCallback<VFileWithOutput<CompileResult>>
  ): void

  /**
   * Process a file.
   *
   * This performs all phases of the processor:
   *
   * 1.  Parse a file into a unist node using the configured `Parser`
   * 2.  Run transforms on that node
   * 3.  Compile the resulting node using the `Compiler`
   *
   * The result from the compiler is stored on the file.
   * What the result is depends on which plugins you use.
   * The result is typically text (`string` or `Buffer`), which can be retrieved
   * with `file.toString()` (or `String(file)`).
   * In some cases, such as when using `rehypeReact` to create a React node,
   * the result is stored on `file.result`.
   *
   * @param file
   *   `VFile` or anything that can be given to `new VFile()`.
   * @returns
   *   Promise that resolves to the resulting `VFile`.
   */
  process(file: VFileCompatible$1): Promise<VFileWithOutput<CompileResult>>

  /**
   * Process a file, synchronously.
   * Throws when asynchronous transforms are configured.
   *
   * This performs all phases of the processor:
   *
   * 1.  Parse a file into a unist node using the configured `Parser`
   * 2.  Run transforms on that node
   * 3.  Compile the resulting node using the `Compiler`
   *
   * The result from the compiler is stored on the file.
   * What the result is depends on which plugins you use.
   * The result is typically text (`string` or `Buffer`), which can be retrieved
   * with `file.toString()` (or `String(file)`).
   * In some cases, such as when using `rehypeReact` to create a React node,
   * the result is stored on `file.result`.
   *
   * @param file
   *   `VFile` or anything that can be given to `new VFile()`, optional.
   * @returns
   *   Resulting file.
   */
  processSync(
    file?: VFileCompatible$1 | undefined
  ): VFileWithOutput<CompileResult>

  /**
   * Get an in-memory key-value store accessible to all phases of the process.
   *
   * @returns
   *   Key-value store.
   */
  data(): Record<string, unknown>

  /**
   * Set an in-memory key-value store accessible to all phases of the process.
   *
   * @param data
   *   Key-value store.
   * @returns
   *   Current processor.
   */
  data(
    data: Record<string, unknown>
  ): Processor<ParseTree, CurrentTree, CompileTree, CompileResult>

  /**
   * Get an in-memory value by key.
   *
   * @param key
   *   Key to get.
   * @returns
   *   The value at `key`.
   */
  data(key: string): unknown

  /**
   * Set an in-memory value by key.
   *
   * @param key
   *   Key to set.
   * @param value
   *   Value to set.
   * @returns
   *   Current processor.
   */
  data(
    key: string,
    value: unknown
  ): Processor<ParseTree, CurrentTree, CompileTree, CompileResult>

  /**
   * Freeze a processor.
   * Frozen processors are meant to be extended and not to be configured or
   * processed directly.
   *
   * Once a processor is frozen it cannot be unfrozen.
   * New processors working just like it can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly, by calling `.freeze()`, but
   * `.parse()`, `.run()`, `.stringify()`, and `.process()` call `.freeze()` to
   * freeze a processor too.
   *
   * @returns
   *   Frozen processor.
   */
  freeze(): FrozenProcessor<ParseTree, CurrentTree, CompileTree, CompileResult>
}

/**
 * A plugin is a function.
 * It configures the processor and in turn can receive options.
 * Plugins can configure processors by interacting with parsers and compilers
 * (at `this.Parser` or `this.Compiler`) or by specifying how the syntax tree
 * is handled (by returning a `Transformer`).
 *
 * @typeParam PluginParameters
 *   Plugin settings.
 * @typeParam Input
 *   Value that is accepted by the plugin.
 *
 *   *   If the plugin returns a transformer, then this should be the node
 *       type that the transformer expects.
 *   *   If the plugin sets a parser, then this should be `string`.
 *   *   If the plugin sets a compiler, then this should be the node type that
 *       the compiler expects.
 * @typeParam Output
 *   Value that the plugin yields.
 *
 *   *   If the plugin returns a transformer, then this should be the node
 *       type that the transformer yields, and defaults to `Input`.
 *   *   If the plugin sets a parser, then this should be the node type that
 *       the parser yields.
 *   *   If the plugin sets a compiler, then this should be the result that
 *       the compiler yields (`string`, `Buffer`, or something else).
 * @this
 *   The current processor.
 *   Plugins can configure the processor by interacting with `this.Parser` or
 *   `this.Compiler`, or by accessing the data associated with the whole process
 *   (`this.data`).
 * @param settings
 *   Configuration for plugin.
 *   Plugins typically receive one options object, but could receive other and
 *   more values.
 *   Users can also pass a boolean instead of settings: `true` (to turn
 *   a plugin on) or `false` (to turn a plugin off).
 *   When a plugin is turned off, it won’t be called.
 *
 *   When creating your own plugins, please accept only a single object!
 *   It allows plugins to be reconfigured and it helps users to know that every
 *   plugin accepts one options object.
 * @returns
 *   Plugins can return a `Transformer` to specify how the syntax tree is
 *   handled.
 */
type Plugin<
  PluginParameters extends any[] = any[],
  Input = Node$1,
  Output = Input
> = (
  this: Input extends Node$1
    ? Output extends Node$1
      ? // This is a transform, so define `Input` as the current tree.
        Processor<void, Input>
      : // Compiler.
        Processor<void, Input, Input, Output>
    : Output extends Node$1
    ? // Parser.
      Processor<Output, Output>
    : // No clue.
      Processor,
  ...settings: PluginParameters
) => // If both `Input` and `Output` are `Node`, expect an optional `Transformer`.
Input extends Node$1
  ? Output extends Node$1
    ? Transformer<Input, Output> | void
    : void
  : void

/**
 * Presets provide a sharable way to configure processors with multiple plugins
 * and/or settings.
 */
interface Preset {
  plugins?: PluggableList
  settings?: Record<string, unknown>
}

/**
 * A tuple of a plugin and its setting(s).
 * The first item is a plugin (function) to use and other items are options.
 * Plugins are deduped based on identity: passing a function in twice will
 * cause it to run only once.
 *
 * @typeParam PluginParameters
 *   Plugin settings.
 * @typeParam Input
 *   Value that is accepted by the plugin.
 *
 *   *   If the plugin returns a transformer, then this should be the node
 *       type that the transformer expects.
 *   *   If the plugin sets a parser, then this should be `string`.
 *   *   If the plugin sets a compiler, then this should be the node type that
 *       the compiler expects.
 * @typeParam Output
 *   Value that the plugin yields.
 *
 *   *   If the plugin returns a transformer, then this should be the node
 *       type that the transformer yields, and defaults to `Input`.
 *   *   If the plugin sets a parser, then this should be the node type that
 *       the parser yields.
 *   *   If the plugin sets a compiler, then this should be the result that
 *       the compiler yields (`string`, `Buffer`, or something else).
 */
type PluginTuple<
  PluginParameters extends any[] = any[],
  Input = Node$1,
  Output = Input
> = [Plugin<PluginParameters, Input, Output>, ...PluginParameters]

/**
 * A union of the different ways to add plugins and settings.
 *
 * @typeParam PluginParameters
 *   Plugin settings.
 */
type Pluggable<PluginParameters extends any[] = any[]> =
  | PluginTuple<PluginParameters, any, any>
  | Plugin<PluginParameters, any, any>
  | Preset

/**
 * A list of plugins and presets.
 */
type PluggableList = Pluggable[]

/**
 * Transformers modify the syntax tree or metadata of a file.
 * A transformer is a function that is called each time a file is passed
 * through the transform phase.
 * If an error occurs (either because it’s thrown, returned, rejected, or passed
 * to `next`), the process stops.
 *
 * @typeParam Input
 *   Node type that the transformer expects.
 * @typeParam Output
 *   Node type that the transformer yields.
 * @param node
 *   Tree to be transformed.
 * @param file
 *   File associated with node.
 * @param next
 *   Callback that you must call when done.
 *   Note: this is given if you accept three parameters in your transformer.
 *   If you accept up to two parameters, it’s not given, and you can return
 *   a promise.
 * @returns
 *   Any of the following:
 *
 *   * `void` — If nothing is returned, the next transformer keeps using same
 *     tree.
 *   * `Error` — Can be returned to stop the process.
 *   * `Node` — Can be returned and results in further transformations and
 *     `stringify`s to be performed on the new tree.
 *   * `Promise` — If a promise is returned, the function is asynchronous, and
 *      must be resolved (optionally with a `Node`) or rejected (optionally with
 *      an `Error`).
 *
 *   If you accept a `next` callback, nothing should be returned.
 */
type Transformer<
  Input extends Node$1 = Node$1,
  Output extends Node$1 = Input
> = (
  node: Input,
  file: VFile$1,
  next: TransformCallback<Output>
) => Promise<Output | undefined | void> | Output | Error | undefined | void

/**
 * Callback you must call when a transformer is done.
 *
 * @typeParam Tree
 *   Node that the plugin yields.
 * @param error
 *   Pass an error to stop the process.
 * @param node
 *   Pass a tree to continue transformations (and `stringify`) on the new tree.
 * @param file
 *   Pass a file to continue transformations (and `stringify`) on the new file.
 * @returns
 *   Nothing.
 */
type TransformCallback<Tree extends Node$1 = Node$1> = (
  error?: Error | null | undefined,
  node?: Tree | undefined,
  file?: VFile$1 | undefined
) => void

/**
 * Function handling the parsing of text to a syntax tree.
 * Used in the parse phase in the process and called with a `string` and
 * `VFile` representation of the document to parse.
 *
 * `Parser` can be a normal function, in which case it must return a `Node`:
 * the syntax tree representation of the given file.
 *
 * `Parser` can also be a constructor function (a function with keys in its
 * `prototype`), in which case it’s called with `new`.
 * Instances must have a parse method that is called without arguments and
 * must return a `Node`.
 *
 * @typeParam Tree
 *   The node that the parser yields (and `run` receives).
 */
type Parser<Tree extends Node$1 = Node$1> =
  | ParserClass<Tree>
  | ParserFunction<Tree>

/**
 * A class to parse files.
 *
 * @typeParam Tree
 *   The node that the parser yields.
 */
declare class ParserClass<Tree extends Node$1 = Node$1> {
  prototype: {
    /**
     * Parse a file.
     *
     * @returns
     *   Parsed tree.
     */
    parse(): Tree
  }

  /**
   * Constructor.
   *
   * @param document
   *   Document to parse.
   * @param file
   *   File associated with `document`.
   * @returns
   *   Instance.
   */
  constructor(document: string, file: VFile$1)
}

/**
 * Normal function to parse a file.
 *
 * @typeParam Tree
 *   The node that the parser yields.
 * @param document
 *   Document to parse.
 * @param file
 *   File associated with `document`.
 * @returns
 *   Node representing the given file.
 */
type ParserFunction<Tree extends Node$1 = Node$1> = (
  document: string,
  file: VFile$1
) => Tree

/**
 * Function handling the compilation of syntax tree to a text.
 * Used in the stringify phase in the process and called with a `Node` and
 * `VFile` representation of the document to stringify.
 *
 * `Compiler` can be a normal function, in which case it must return a
 * `string`: the text representation of the given syntax tree.
 *
 * `Compiler` can also be a constructor function (a function with keys in its
 * `prototype`), in which case it’s called with `new`.
 * Instances must have a `compile` method that is called without arguments
 * and must return a `string`.
 *
 * @typeParam Tree
 *   The node that the compiler receives.
 * @typeParam Result
 *   The thing that the compiler yields.
 */
type Compiler<Tree extends Node$1 = Node$1, Result = unknown> =
  | CompilerClass<Tree, Result>
  | CompilerFunction<Tree, Result>

/**
 * A class to compile trees.
 *
 * @typeParam Tree
 *   The node that the compiler receives.
 * @typeParam Result
 *   The thing that the compiler yields.
 */
declare class CompilerClass<Tree extends Node$1 = Node$1, Result = unknown> {
  prototype: {
    /**
     * Compile a tree.
     *
     * @returns
     *   New content: compiled text (`string` or `Buffer`, for `file.value`) or
     *   something else (for `file.result`).
     */
    compile(): Result
  }

  /**
   * Constructor.
   *
   * @param tree
   *   Tree to compile.
   * @param file
   *   File associated with `tree`.
   * @returns
   *   Instance.
   */
  constructor(tree: Tree, file: VFile$1)
}

/**
 * Normal function to compile a tree.
 *
 * @typeParam Tree
 *   The node that the compiler receives.
 * @typeParam Result
 *   The thing that the compiler yields.
 * @param tree
 *   Tree to compile.
 * @param file
 *   File associated with `tree`.
 * @returns
 *   New content: compiled text (`string` or `Buffer`, for `file.value`) or
 *   something else (for `file.result`).
 */
type CompilerFunction<Tree extends Node$1 = Node$1, Result = unknown> = (
  tree: Tree,
  file: VFile$1
) => Result

/**
 * Callback called when a done running.
 *
 * @typeParam Tree
 *   The tree that the callback receives.
 * @param error
 *   Error passed when unsuccessful.
 * @param node
 *   Tree to transform.
 * @param file
 *   File passed when successful.
 * @returns
 *   Nothing.
 */
type RunCallback<Tree extends Node$1 = Node$1> = (
  error?: Error | null | undefined,
  node?: Tree | undefined,
  file?: VFile$1 | undefined
) => void

/**
 * Callback called when a done processing.
 *
 * @typeParam File
 *   The file that the callback receives.
 * @param error
 *   Error passed when unsuccessful.
 * @param file
 *   File passed when successful.
 * @returns
 *   Nothing.
 */
type ProcessCallback<File extends VFile$1 = VFile$1> = (
  error?: Error | null | undefined,
  file?: File | undefined
) => void

type RecmaJsxRewriteOptions$1 = {
    /**
     * Whether to use an import statement or `arguments[0]` to get the provider.
     */
    outputFormat?: "program" | "function-body" | undefined;
    /**
     * Place to import a provider from.
     */
    providerImportSource?: string | undefined;
    /**
     * Whether to add extra information to error messages in generated code (can
     * also be passed in Node.js by setting `NODE_ENV=development`).
     */
    development?: boolean | undefined;
};

interface StartOfSourceMap {
    file?: string;
    sourceRoot?: string;
}

interface RawSourceMap extends StartOfSourceMap {
    version: string;
    sources: string[];
    names: string[];
    sourcesContent?: string[];
    mappings: string;
}

interface Position {
    line: number;
    column: number;
}

interface LineRange extends Position {
    lastColumn: number;
}

interface FindPosition extends Position {
    // SourceMapConsumer.GREATEST_LOWER_BOUND or SourceMapConsumer.LEAST_UPPER_BOUND
    bias?: number;
}

interface SourceFindPosition extends FindPosition {
    source: string;
}

interface MappedPosition extends Position {
    source: string;
    name?: string;
}

interface MappingItem {
    source: string;
    generatedLine: number;
    generatedColumn: number;
    originalLine: number;
    originalColumn: number;
    name: string;
}

declare class SourceMapConsumer {
    static GENERATED_ORDER: number;
    static ORIGINAL_ORDER: number;

    static GREATEST_LOWER_BOUND: number;
    static LEAST_UPPER_BOUND: number;

    constructor(rawSourceMap: RawSourceMap);
    computeColumnSpans(): void;
    originalPositionFor(generatedPosition: FindPosition): MappedPosition;
    generatedPositionFor(originalPosition: SourceFindPosition): LineRange;
    allGeneratedPositionsFor(originalPosition: MappedPosition): Position[];
    hasContentsOfAllSources(): boolean;
    sourceContentFor(source: string, returnNullOnMissing?: boolean): string;
    eachMapping(callback: (mapping: MappingItem) => void, context?: any, order?: number): void;
}

interface Mapping {
    generated: Position;
    original: Position;
    source: string;
    name?: string;
}

declare class SourceMapGenerator {
    constructor(startOfSourceMap?: StartOfSourceMap);
    static fromSourceMap(sourceMapConsumer: SourceMapConsumer): SourceMapGenerator;
    addMapping(mapping: Mapping): void;
    setSourceContent(sourceFile: string, sourceContent: string): void;
    applySourceMap(sourceMapConsumer: SourceMapConsumer, sourceFile?: string, sourceMapPath?: string): void;
    toString(): string;
}

type RecmaStringifyOptions$1 = {
    /**
     * Generate a source map by passing a `SourceMapGenerator` from `source-map`
     * in.
     */
    SourceMapGenerator?: typeof SourceMapGenerator | undefined;
};

type RecmaDocumentOptions$1 = {
    /**
     * Whether to use either `import` and `export` statements to get the runtime
     * (and optionally provider) and export the content, or get values from
     * `arguments` and return things.
     */
    outputFormat?: "program" | "function-body" | undefined;
    /**
     * Whether to keep `import` (and `export … from`) statements or compile them
     * to dynamic `import()` instead.
     */
    useDynamicImport?: boolean | undefined;
    /**
     * Resolve relative `import` (and `export … from`) relative to this URL.
     */
    baseUrl?: string | undefined;
    /**
     * Pragma for JSX (used in classic runtime).
     */
    pragma?: string | undefined;
    /**
     * Pragma for JSX fragments (used in classic runtime).
     */
    pragmaFrag?: string | undefined;
    /**
     * Where to import the identifier of `pragma` from (used in classic runtime).
     */
    pragmaImportSource?: string | undefined;
    /**
     * Place to import automatic JSX runtimes from (used in automatic runtime).
     */
    jsxImportSource?: string | undefined;
    /**
     * JSX runtime to use.
     */
    jsxRuntime?: "automatic" | "classic" | undefined;
};

type RecmaDocumentOptions = RecmaDocumentOptions$1;
type RecmaStringifyOptions = RecmaStringifyOptions$1;
type RecmaJsxRewriteOptions = RecmaJsxRewriteOptions$1;
type BaseProcessorOptions$1 = {
    /**
     * Whether to keep JSX.
     */
    jsx?: boolean | undefined;
    /**
     * Format of the files to be processed.
     */
    format?: "mdx" | "md" | undefined;
    /**
     * Whether to compile to a whole program or a function body..
     */
    outputFormat?: "program" | "function-body" | undefined;
    /**
     * Extensions (with `.`) for markdown.
     */
    mdExtensions?: string[] | undefined;
    /**
     * Extensions (with `.`) for MDX.
     */
    mdxExtensions?: string[] | undefined;
    /**
     * List of recma (esast, JavaScript) plugins.
     */
    recmaPlugins?: PluggableList | undefined;
    /**
     * List of remark (mdast, markdown) plugins.
     */
    remarkPlugins?: PluggableList | undefined;
    /**
     * List of rehype (hast, HTML) plugins.
     */
    rehypePlugins?: PluggableList | undefined;
};
type PluginOptions$1 = Omit<RecmaDocumentOptions & RecmaStringifyOptions & RecmaJsxRewriteOptions, 'outputFormat'>;

/**
 * Compile MDX to JS.
 *
 * @param {VFileCompatible} vfileCompatible
 *   MDX document to parse (`string`, `Buffer`, `vfile`, anything that can be
 *   given to `vfile`).
 * @param {CompileOptions} [compileOptions]
 * @return {Promise<VFile>}
 */
declare function compile$1(vfileCompatible: VFileCompatible, compileOptions?: CompileOptions$1 | undefined): Promise<VFile>;
type VFileCompatible = VFileCompatible$1;
type VFile = VFile$1;
type PluginOptions = PluginOptions$1;
type BaseProcessorOptions = BaseProcessorOptions$1;
type CoreProcessorOptions = Omit<BaseProcessorOptions, 'format'>;
type ExtraOptions = {
    /**
     * Format of `file`
     */
    format?: "mdx" | "md" | "detect" | undefined;
};
type CompileOptions$1 = CoreProcessorOptions & PluginOptions & ExtraOptions;

interface JSXOptions {
    pragma?: string;
    pragmaFrag?: string;
    throwIfNamespace?: false;
    runtime?: 'classic' | 'automatic';
    importSource?: string;
}
declare type MdxCompileOptions = Parameters<typeof compile$1>[1];
interface CompileOptions {
    skipCsf?: boolean;
    mdxCompileOptions?: MdxCompileOptions;
    jsxOptions?: JSXOptions;
}

declare const SEPARATOR = "/* ========= */";

declare const genBabel: (store: any, root: any) => any;
declare const plugin: (store: any) => (root: any) => any;
declare const postprocess: (code: string, extractedExports: string) => string;
declare const compile: (input: string, { skipCsf, mdxCompileOptions, jsxOptions }?: CompileOptions) => Promise<string>;
declare const compileSync: (input: string, { skipCsf, mdxCompileOptions, jsxOptions }?: CompileOptions) => string;

export { CompileOptions, JSXOptions, MdxCompileOptions, SEPARATOR, compile, compileSync, genBabel, plugin, postprocess, wrapperJs };
