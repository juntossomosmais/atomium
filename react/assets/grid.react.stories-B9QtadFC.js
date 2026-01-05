import{j as e}from"./iframe-Y5q5_7iz.js";import{q as o,s}from"./index-DrDfSPuT.js";import{C as i}from"./table-D060eKuu.js";import{w as n}from"./decorator-S4XC6T82.js";import"./preload-helper-PPVm8Dsz.js";const a={decorators:[n],parameters:{docs:{description:{component:"Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:i.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:i.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:i.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:i.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:i.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding":{description:"Define padding on the grid can be set for all breakpoints and default for xs screens.",defaultValue:{summary:"0"},table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-sm":{description:"Define padding on small screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-md":{description:"Define padding on medium screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-lg":{description:"Define padding on large screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-xlg":{description:"Define padding on xlarge screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-fhd":{description:"Define padding on full hd screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-2k":{description:"Define padding on 2K screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-4k":{description:"Define padding on 4K screens.",table:{category:i.CSS_CUSTOM_PROPERTIES}}}},v={title:"Components/Grid",components:[o,s],...a},d={render:()=>e.jsx("div",{children:e.jsxs(o,{children:[e.jsx(s,{class:"col",size:"8",children:e.jsx("div",{children:"size=8"})}),e.jsx(s,{class:"col",size:"6",sizeMd:"4",children:e.jsx("div",{children:"size=6 & sizeMd=4"})}),e.jsx(s,{class:"col",size:"4",sizeMd:"4",children:e.jsx("div",{children:"size=4 & sizeMd=4"})}),e.jsx(s,{class:"col",size:"8",sizeMd:"6",children:e.jsx("div",{children:"size=8 & sizeMd=6"})}),e.jsx(s,{class:"col",size:"8",sizeMd:"10",children:e.jsx("div",{children:"size=8 & sizeMd=10"})}),e.jsx(s,{class:"col",size:"8",sizeMd:"10",children:e.jsx("div",{children:"size=8 & sizeMd=10"})}),e.jsx(s,{class:"col",size:"8",sizeMd:"6",children:e.jsx("div",{children:"size=8 & sizeMd=6"})})]})})},t={render:()=>e.jsx("div",{children:e.jsxs(o,{children:[e.jsx(s,{className:"col",size:"auto",children:e.jsx("div",{children:"size=auto"})}),e.jsx(s,{className:"col",size:"auto",children:e.jsx("div",{children:"size=auto"})}),e.jsx(s,{className:"col",children:e.jsx("div",{children:"default"})}),e.jsx(s,{className:"col",children:e.jsx("div",{children:"default"})}),e.jsx(s,{className:"col",size:"auto",children:e.jsx("div",{children:"size=auto"})}),e.jsx(s,{className:"col",size:"auto",children:e.jsx("div",{children:"size=auto"})})]})})},c={render:()=>e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("b",{children:"Column 2"})," has ",e.jsx("code",{children:"offset"})," set to ",e.jsx("code",{children:'"3"'})]}),e.jsxs(o,{children:[e.jsx(s,{className:"col",size:"3",children:e.jsx("div",{children:"1"})}),e.jsx(s,{className:"col",offset:"3",children:e.jsx("div",{children:"2"})}),e.jsx(s,{className:"col",children:e.jsx("div",{children:"3"})})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Column 1"})," has ",e.jsx("code",{children:"offset"})," set to ",e.jsx("code",{children:'"4"'})]}),e.jsxs(o,{children:[e.jsx(s,{className:"col",size:"2",offset:"4",children:e.jsx("div",{children:"1"})}),e.jsx(s,{className:"col",size:"2",children:e.jsx("div",{children:"2"})})]})]})},l={render:()=>e.jsxs("div",{children:[e.jsxs("p",{children:[e.jsx("b",{children:"Column 1"})," has ",e.jsx("code",{children:"push"})," set to ",e.jsx("code",{children:'"4"'})," and",e.jsx("b",{children:"column 2"})," has ",e.jsx("code",{children:"pull"})," set to ",e.jsx("code",{children:'"4"'})]}),e.jsxs(o,{children:[e.jsx(s,{className:"col",push:"4",size:"4",children:e.jsx("div",{children:"1"})}),e.jsx(s,{className:"col",pull:"4",size:"4",children:e.jsx("div",{children:"2"})}),e.jsx(s,{className:"col",children:e.jsx("div",{children:"3"})})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div>
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
}`,...d.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <AtomGrid>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>default</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>default</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
        <AtomCol className='col' size='auto'>
          <div>size=auto</div>
        </AtomCol>
      </AtomGrid>
    </div>
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <p>
        <b>Column 2</b> has <code>offset</code> set to <code>"3"</code>
      </p>
      <AtomGrid>
        <AtomCol className='col' size='3'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' offset='3'>
          <div>2</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>3</div>
        </AtomCol>
      </AtomGrid>

      <p>
        <b>Column 1</b> has <code>offset</code> set to <code>"4"</code>
      </p>
      <AtomGrid>
        <AtomCol className='col' size='2' offset='4'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' size='2'>
          <div>2</div>
        </AtomCol>
      </AtomGrid>
    </div>
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <p>
        <b>Column 1</b> has <code>push</code> set to <code>"4"</code> and
        <b>column 2</b> has <code>pull</code> set to <code>"4"</code>
      </p>

      <AtomGrid>
        <AtomCol className='col' push='4' size='4'>
          <div>1</div>
        </AtomCol>
        <AtomCol className='col' pull='4' size='4'>
          <div>2</div>
        </AtomCol>
        <AtomCol className='col'>
          <div>3</div>
        </AtomCol>
      </AtomGrid>
    </div>
}`,...l.parameters?.docs?.source}}};const z=["Default","AutoSize","Offset","PushAndPull"];export{t as AutoSize,d as Default,c as Offset,l as PushAndPull,z as __namedExportsOrder,v as default};
