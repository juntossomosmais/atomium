import{q as s,s as e}from"./index-Dcgwn9tW.js";import{C as o}from"./table-D060eKuu.js";import{w as n}from"./decorator-CgMHT-je.js";import"./iframe-Ao1sNE2_.js";import"./preload-helper-PPVm8Dsz.js";const d={decorators:[n],parameters:{docs:{description:{component:"Wrapper of the [Ionic Grid](https://ionicframework.com/docs/api/grid) component. Read the Ionic documentation for more information about the available properties and possibilities.<br><br>In our custom implementation, we have simplified the Ionic grid system by introducing the `AtomGrid` component. This component acts as a wrapper for the grid, eliminating the need for using the `ion-row` component directly. Instead, we can directly use the `atom-grid` and `atom-col` components to create our grid layout. This approach streamlines the structure and usage of the grid system, making it more intuitive and efficient for developers.<br><br>The default number of columns in the grid is `16`, but this can be changed by setting the `--grid-columns` CSS custom property. The default gap between the columns is `var(--spacing-base)` and `var(--spacing-xs)` in small screens, but this can be changed by setting the `--grid-gap` CSS custom property.<br><br>You could check our default tokens values for the grid system in the [tokens/grid](/docs/tokens-grid--docs) section."}}},argTypes:{fixed:{description:"If `true`, the Grid will be fixed and will have a consistent width based on the screen size.",defaultValue:{summary:!1},table:{category:o.PROPERTIES}},size:{description:"Columns can be set to specific sizes to take up a certain number out of the total number of columns, or resize their width based on the content, it accepts responsive values like `size-sm`, `size-md`, `size-lg`, `size-xl`",table:{category:o.PROPERTIES}},offset:{description:"Columns can be offset to the right by a certain number of columns, it accepts responsive values like `offset-sm`, `offset-md`, `offset-lg`, `offset-xl`",table:{category:o.PROPERTIES}},pull:{description:"Columns can be pulled to the left by a certain number of columns",table:{category:o.PROPERTIES}},push:{description:"Columns can be pushed to the right by a certain number of columns",table:{category:o.PROPERTIES}},"--grid-gap":{description:"Defines the space between the elements in a row of the Grid system. For screens below `medium` size, the gap value will be `var(--spacing-xsmall)`.",defaultValue:{summary:"var(--spacing-base)"},table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding":{description:"Define padding on the grid can be set for all breakpoints and default for xs screens.",defaultValue:{summary:"0"},table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-sm":{description:"Define padding on small screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-md":{description:"Define padding on medium screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-lg":{description:"Define padding on large screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-xlg":{description:"Define padding on xlarge screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-fhd":{description:"Define padding on full hd screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-2k":{description:"Define padding on 2K screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}},"--atom-grid-padding-4k":{description:"Define padding on 4K screens.",table:{category:o.CSS_CUSTOM_PROPERTIES}}}},v={title:"Components/Grid",components:[s,e],...d},i={render:()=>h("div",null,h(s,null,h(e,{class:"col",size:"8"},h("div",null,"size=8")),h(e,{class:"col",size:"6",sizeMd:"4"},h("div",null,"size=6 & sizeMd=4")),h(e,{class:"col",size:"4",sizeMd:"4"},h("div",null,"size=4 & sizeMd=4")),h(e,{class:"col",size:"8",sizeMd:"6"},h("div",null,"size=8 & sizeMd=6")),h(e,{class:"col",size:"8",sizeMd:"10"},h("div",null,"size=8 & sizeMd=10")),h(e,{class:"col",size:"8",sizeMd:"10"},h("div",null,"size=8 & sizeMd=10")),h(e,{class:"col",size:"8",sizeMd:"6"},h("div",null,"size=8 & sizeMd=6"))))},l={render:()=>h("div",null,h(s,null,h(e,{className:"col",size:"auto"},h("div",null,"size=auto")),h(e,{className:"col",size:"auto"},h("div",null,"size=auto")),h(e,{className:"col"},h("div",null,"default")),h(e,{className:"col"},h("div",null,"default")),h(e,{className:"col",size:"auto"},h("div",null,"size=auto")),h(e,{className:"col",size:"auto"},h("div",null,"size=auto"))))},t={render:()=>h("div",null,h("p",null,h("b",null,"Column 2")," has ",h("code",null,"offset")," set to ",h("code",null,'"3"')),h(s,null,h(e,{className:"col",size:"3"},h("div",null,"1")),h(e,{className:"col",offset:"3"},h("div",null,"2")),h(e,{className:"col"},h("div",null,"3"))),h("p",null,h("b",null,"Column 1")," has ",h("code",null,"offset")," set to ",h("code",null,'"4"')),h(s,null,h(e,{className:"col",size:"2",offset:"4"},h("div",null,"1")),h(e,{className:"col",size:"2"},h("div",null,"2"))))},a={render:()=>h("div",null,h("p",null,h("b",null,"Column 1")," has ",h("code",null,"push")," set to ",h("code",null,'"4"')," and",h("b",null,"column 2")," has ",h("code",null,"pull")," set to ",h("code",null,'"4"')),h(s,null,h(e,{className:"col",push:"4",size:"4"},h("div",null,"1")),h(e,{className:"col",pull:"4",size:"4"},h("div",null,"2")),h(e,{className:"col"},h("div",null,"3"))))};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const z=["Default","AutoSize","Offset","PushAndPull"];export{l as AutoSize,i as Default,t as Offset,a as PushAndPull,z as __namedExportsOrder,v as default};
