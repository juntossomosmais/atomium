import{__require}from"./chunk-R4NKYYJA.mjs";import fs from"fs-extra";import remarkSlug from"remark-slug";import remarkExternalLinks from"remark-external-links";import{dedent as dedent2}from"ts-dedent";import{global}from"@storybook/global";import{loadCsf}from"@storybook/csf-tools";import{logger as logger2}from"@storybook/node-logger";import{logger}from"@storybook/node-logger";import dedent from"ts-dedent";function ensureReactPeerDeps(){try{__require.resolve("react"),__require.resolve("react-dom")}catch{logger.error(dedent`
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
    `),process.exit(1)}}async function webpack(webpackConfig={},options){let{module={}}=webpackConfig,{csfPluginOptions={},jsxOptions={},sourceLoaderOptions=null,configureJsx,mdxBabelOptions,mdxPluginOptions={}}=options,mdxLoaderOptions=await options.presets.apply("mdxLoaderOptions",{skipCsf:!0,...mdxPluginOptions,mdxCompileOptions:{providerImportSource:"@storybook/addon-docs/mdx-react-shim",...mdxPluginOptions.mdxCompileOptions,remarkPlugins:[remarkSlug,remarkExternalLinks].concat(mdxPluginOptions?.mdxCompileOptions?.remarkPlugins??[])},jsxOptions});if(sourceLoaderOptions)throw new Error(dedent2`
      Addon-docs no longer uses source-loader in 7.0.

      To update your configuration, please see migration instructions here:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#dropped-source-loader--storiesof-static-snippets
    `);if(mdxBabelOptions||configureJsx)throw new Error(dedent2`
      Addon-docs no longer uses configureJsx or mdxBabelOptions in 7.0.

      To update your configuration, please see migration instructions here:

      https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#dropped-addon-docs-manual-babel-configuration
    `);let mdxVersion=global.FEATURES?.legacyMdx1?"MDX1":"MDX2";logger2.info(`Addon-docs: using ${mdxVersion}`);let mdxLoader=global.FEATURES?.legacyMdx1?__require.resolve("@storybook/mdx1-csf/loader"):__require.resolve("@storybook/mdx2-csf/loader");return{...webpackConfig,plugins:[...webpackConfig.plugins||[],...csfPluginOptions?[(await import("@storybook/csf-plugin")).webpack(csfPluginOptions)]:[]],module:{...module,rules:[...module.rules,{test:/(stories|story)\.mdx$/,use:[{loader:mdxLoader,options:{...mdxLoaderOptions,skipCsf:!1}}]},{test:/\.mdx$/,exclude:/(stories|story)\.mdx$/,use:[{loader:mdxLoader,options:mdxLoaderOptions}]}]}}}var storyIndexers=indexers=>[{test:/(stories|story)\.mdx$/,indexer:async(fileName,opts)=>{let code=(await fs.readFile(fileName,"utf-8")).toString(),{compile}=global.FEATURES?.legacyMdx1?await import("@storybook/mdx1-csf"):await import("@storybook/mdx2-csf");return code=await compile(code,{}),loadCsf(code,{...opts,fileName}).parse()}},...indexers||[]],docs=docsOptions=>({...docsOptions,defaultName:"Docs",autodocs:"tag"}),addons=[__require.resolve("@storybook/react-dom-shim/dist/preset")],webpackX=webpack,storyIndexersX=storyIndexers,docsX=docs;ensureReactPeerDeps();export{addons,docsX as docs,storyIndexersX as storyIndexers,webpackX as webpack};
