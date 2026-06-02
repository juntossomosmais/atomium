import{n as e}from"./rolldown-runtime-BVpWp9h4.js";import{at as t,st as n}from"./storybook-DZEUUYC3.js";import{n as r,t as i}from"./table-DMN4TomJ.js";import{n as a,t as o}from"./taggedTemplateLiteral-DJvUgAmF.js";var s,c=e((()=>{r(),s={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.`}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:i.PROPERTIES}}}}})),l,u,d,f,p;e((()=>{t(),c(),a(),u={title:`Components/Breadcrumb`,...s},d=()=>n(l||=o([`
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
  `])),f={render:()=>d()},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => createBreadcrumb()
}`,...f.parameters?.docs?.source}}},p=[`Default`]}))();export{f as Default,p as __namedExportsOrder,u as default};