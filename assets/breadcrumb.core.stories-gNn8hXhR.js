import{N as a}from"./iframe-Cu97PxhQ.js";import{C as o}from"./table-D060eKuu.js";import"./preload-helper-PPVm8Dsz.js";const s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:"Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component."}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:o.PROPERTIES}}}};var t=Object.freeze,i=Object.defineProperty,c=(r,d)=>t(i(r,"raw",{value:t(r.slice())})),n;const p={title:"Components/Breadcrumb",...s},m=()=>a(n||(n=c([`
    <atom-breadcrumb />

    <script>
      ;(function () {
        const breadcrumbsElements = document.querySelectorAll('atom-breadcrumb')

        breadcrumbsElements.forEach((atomBreadcrumb) => {
          atomBreadcrumb.items = [
            {
              text: 'First level',
              title: 'Go to first level',
              redirect: () => console.log('/first'),
            },
            {
              text: 'Intermediary level',
              title: 'Go to intermediary level',
              redirect: () => console.log('/intermediary'),
            },
            {
              text: 'Current level',
              title: 'This is the current level',
            },
          ]
        })
      })()
    <\/script>
  `]))),e={render:()=>m()};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: () => createBreadcrumb()
}`,...e.parameters?.docs?.source}}};const f=["Default"];export{e as Default,f as __namedExportsOrder,p as default};
