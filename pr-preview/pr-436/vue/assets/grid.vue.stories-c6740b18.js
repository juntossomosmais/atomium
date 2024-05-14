import{v as n,x as d}from"./index-c35f0206.js";import{C as o}from"./table-de46f45e.js";import{w as h}from"./decorator-e53fb076.js";import"./vue.esm-bundler-2231c3fa.js";import"./iframe-19df559e.js";import"../sb-preview/runtime.js";import"./preview-errors-dde4324f.js";import"./index-356e4a49.js";const b={decorators:[h],parameters:{docs:{description:{component:"Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:o.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:o.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:o.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:o.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:o.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:o.CSS_CUSTOM_PROPERTIES}}}};const R={title:"Components/Grid",...b},e={render:()=>({components:{AtomGrid:n,AtomCol:d},template:`
      <div>
        <AtomGrid>
          <AtomCol class='col' size='8'>
            <div>size=8</div>
          </AtomCol>
          <AtomCol class='col' size='6' sizeMd='4'>
            <div>size=6 & sizeMd=4</div>
          </AtomCol>
          <AtomCol class='col' size='4' sizeMd='4'>
            <div>size=4 & sizeMd=4</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='6'>
            <div>size=8 & sizeMd=6</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='10'>
            <div>size=8 & sizeMd=10</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='10'>
            <div>size=8 & sizeMd=10</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='6'>
            <div>size=8 & sizeMd=6</div>
          </AtomCol>
        </AtomGrid>
      </div>
    `})},t={render:()=>({components:{AtomGrid:n,AtomCol:d},template:`
      <div>
        <AtomGrid>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>default</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>default</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
        </AtomGrid>
      </div>
    `})},s={render:()=>({components:{AtomGrid:n,AtomCol:d},template:`
      <div>
        <p>
          <b>Column 2</b> has <code>offset</code> set to <code>"3"</code>
        </p>
        <AtomGrid>
          <AtomCol class='col' size='3'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' offset='3'>
            <div>2</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>3</div>
          </AtomCol>
        </AtomGrid>

        <p>
          <b>Column 1</b> has <code>offset</code> set to <code>"4"</code>
        </p>
        <AtomGrid>
          <AtomCol class='col' size='2' offset='4'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' size='2'>
            <div>2</div>
          </AtomCol>
        </AtomGrid>
      </div>
    `})},i={render:()=>({components:{AtomGrid:n,AtomCol:d},template:`
      <div>
        <p>
          <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
          <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
        </p>

        <AtomGrid>
          <AtomCol class='col' push='4' size='4'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' pull='4' size='4'>
            <div>2</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>3</div>
          </AtomCol>
        </AtomGrid>
      </div>
    `})};var l,c,a;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomGrid,
      AtomCol
    },
    template: \`
      <div>
        <AtomGrid>
          <AtomCol class='col' size='8'>
            <div>size=8</div>
          </AtomCol>
          <AtomCol class='col' size='6' sizeMd='4'>
            <div>size=6 & sizeMd=4</div>
          </AtomCol>
          <AtomCol class='col' size='4' sizeMd='4'>
            <div>size=4 & sizeMd=4</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='6'>
            <div>size=8 & sizeMd=6</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='10'>
            <div>size=8 & sizeMd=10</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='10'>
            <div>size=8 & sizeMd=10</div>
          </AtomCol>
          <AtomCol class='col' size='8' sizeMd='6'>
            <div>size=8 & sizeMd=6</div>
          </AtomCol>
        </AtomGrid>
      </div>
    \`
  })
}`,...(a=(c=e.parameters)==null?void 0:c.docs)==null?void 0:a.source}}};var m,r,A;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomGrid,
      AtomCol
    },
    template: \`
      <div>
        <AtomGrid>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>default</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>default</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
          <AtomCol class='col' size='auto'>
            <div>size=auto</div>
          </AtomCol>
        </AtomGrid>
      </div>
    \`
  })
}`,...(A=(r=t.parameters)==null?void 0:r.docs)==null?void 0:A.source}}};var v,u,p;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomGrid,
      AtomCol
    },
    template: \`
      <div>
        <p>
          <b>Column 2</b> has <code>offset</code> set to <code>"3"</code>
        </p>
        <AtomGrid>
          <AtomCol class='col' size='3'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' offset='3'>
            <div>2</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>3</div>
          </AtomCol>
        </AtomGrid>

        <p>
          <b>Column 1</b> has <code>offset</code> set to <code>"4"</code>
        </p>
        <AtomGrid>
          <AtomCol class='col' size='2' offset='4'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' size='2'>
            <div>2</div>
          </AtomCol>
        </AtomGrid>
      </div>
    \`
  })
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,z,f;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => ({
    components: {
      AtomGrid,
      AtomCol
    },
    template: \`
      <div>
        <p>
          <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
          <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
        </p>

        <AtomGrid>
          <AtomCol class='col' push='4' size='4'>
            <div>1</div>
          </AtomCol>
          <AtomCol class='col' pull='4' size='4'>
            <div>2</div>
          </AtomCol>
          <AtomCol class='col'>
            <div>3</div>
          </AtomCol>
        </AtomGrid>
      </div>
    \`
  })
}`,...(f=(z=i.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const I=["Default","AutoSize","Offset","PushAndPull"];export{t as AutoSize,e as Default,s as Offset,i as PushAndPull,I as __namedExportsOrder,R as default};
