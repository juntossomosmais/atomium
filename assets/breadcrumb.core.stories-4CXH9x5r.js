import{H as e}from"./storybook-CfikGCXO.js";import{t}from"./table-CBo0-gV-.js";import{t as n}from"./taggedTemplateLiteral-D9Q4odv2.js";var r={decorators:[],parameters:{actions:{handles:[]},docs:{description:{component:`Breadcrumbs are navigation items that are used to indicate where a user is on site. Read the [Ionic documentation](https://ionicframework.com/docs/api/breadcrumbs) for more information about this component.`}}},argTypes:{items:{description:"This is the list of items that will be displayed in the breadcrumb. Items must have `title` and `text` and optionally a `redirect` function when clicking on the item.",table:{category:t.PROPERTIES}}}},i,a={title:`Components/Breadcrumb`,...r},o=()=>e(i||=n([`
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
  `])),s={render:()=>o()};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => createBreadcrumb()
}`,...s.parameters?.docs?.source}}};var c=[`Default`];export{s as Default,c as __namedExportsOrder,a as default};