var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var preset_exports={};__export(preset_exports,{addons:()=>addons,docs:()=>docsX,storyIndexers:()=>storyIndexersX,webpack:()=>webpackX});module.exports=__toCommonJS(preset_exports);var import_fs_extra=__toESM(require("fs-extra")),import_remark_slug=__toESM(require("remark-slug")),import_remark_external_links=__toESM(require("remark-external-links")),import_ts_dedent2=require("ts-dedent"),import_global=require("@storybook/global"),import_csf_tools=require("@storybook/csf-tools"),import_node_logger2=require("@storybook/node-logger");var import_node_logger=require("@storybook/node-logger"),import_ts_dedent=__toESM(require("ts-dedent"));function ensureReactPeerDeps(){try{require.resolve("react"),require.resolve("react-dom")}catch{import_node_logger.logger.error(import_ts_dedent.default`
      Starting in 7.0, react and react-dom are now required peer dependencies of Storybook.
      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#react-peer-dependencies-required

      It seems that you haven't run Storybook's CLI to upgrade to the latest version.
      The upgrade command will install the required peer dependencies for you and will take 
      care of other important auto migrations as well.

      If you want to upgrade to the latest prerelease version, please run:

      $ npx storybook@next upgrade --prerelease

      Otherwise, please run:

      $ npx storybook upgrade

      If you do not want to use the upgrade commands, 
      please install react and react-dom in your project manually.

      npm:
      $ npm add react react-dom --dev

      yarn:
      $ yarn add react react-dom --dev

      pnpm:
      $ pnpm add react react-dom --dev
    `),process.exit(1)}}async function webpack(webpackConfig={},options){var _a,_b,_c;let{module:module2={}}=webpackConfig,{csfPluginOptions={},jsxOptions={},sourceLoaderOptions=null,configureJsx,mdxBabelOptions,mdxPluginOptions={}}=options,mdxLoaderOptions=await options.presets.apply("mdxLoaderOptions",{skipCsf:!0,...mdxPluginOptions,mdxCompileOptions:{providerImportSource:"@storybook/addon-docs/mdx-react-shim",...mdxPluginOptions.mdxCompileOptions,remarkPlugins:[import_remark_slug.default,import_remark_external_links.default].concat(((_a=mdxPluginOptions==null?void 0:mdxPluginOptions.mdxCompileOptions)==null?void 0:_a.remarkPlugins)??[])},jsxOptions});if(sourceLoaderOptions)throw new Error(import_ts_dedent2.dedent`
      Addon-docs no longer uses source-loader in 7.0.

      To update your configuration, please see migration instructions here:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#dropped-source-loader--storiesof-static-snippets
    `);if(mdxBabelOptions||configureJsx)throw new Error(import_ts_dedent2.dedent`
      Addon-docs no longer uses configureJsx or mdxBabelOptions in 7.0.

      To update your configuration, please see migration instructions here:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#dropped-addon-docs-manual-babel-configuration
    `);let mdxVersion=(_b=import_global.global.FEATURES)!=null&&_b.legacyMdx1?"MDX1":"MDX2";import_node_logger2.logger.info(`Addon-docs: using ${mdxVersion}`);let mdxLoader=(_c=import_global.global.FEATURES)!=null&&_c.legacyMdx1?require.resolve("@storybook/mdx1-csf/loader"):require.resolve("@storybook/mdx2-csf/loader");return{...webpackConfig,plugins:[...webpackConfig.plugins||[],...csfPluginOptions?[(await import("@storybook/csf-plugin")).webpack(csfPluginOptions)]:[]],module:{...module2,rules:[...module2.rules,{test:/(stories|story)\.mdx$/,use:[{loader:mdxLoader,options:{...mdxLoaderOptions,skipCsf:!1}}]},{test:/\.mdx$/,exclude:/(stories|story)\.mdx$/,use:[{loader:mdxLoader,options:mdxLoaderOptions}]}]}}}var storyIndexers=indexers=>[{test:/(stories|story)\.mdx$/,indexer:async(fileName,opts)=>{var _a;let code=(await import_fs_extra.default.readFile(fileName,"utf-8")).toString(),{compile}=(_a=import_global.global.FEATURES)!=null&&_a.legacyMdx1?await import("@storybook/mdx1-csf"):await import("@storybook/mdx2-csf");return code=await compile(code,{}),(0,import_csf_tools.loadCsf)(code,{...opts,fileName}).parse()}},...indexers||[]],docs=docsOptions=>({...docsOptions,defaultName:"Docs",autodocs:"tag"}),addons=[require.resolve("@storybook/react-dom-shim/dist/preset")],webpackX=webpack,storyIndexersX=storyIndexers,docsX=docs;ensureReactPeerDeps();0&&(module.exports={addons,docs,storyIndexers,webpack});
