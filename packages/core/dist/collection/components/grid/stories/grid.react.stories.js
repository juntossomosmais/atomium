import { h } from '@stencil/core';
import { AtomCol, AtomGrid, AtomRow } from '@juntossomosmais/atomium/react';
import { GridCSS, GridStoryArgs } from './grid.args';
export default Object.assign({ title: 'Components/Grid', components: [AtomGrid, AtomCol, AtomRow] }, GridStoryArgs);
const createGrid = (args) => (h("div", null, h(AtomGrid, null, h(AtomRow, null, h(AtomCol, { className: "col" }, "1"), h(AtomCol, { className: "col", size: "8", sizeSm: "10" }, "2"), h(AtomCol, { className: "col" }, "3"))), h(AtomGrid, null, h(AtomRow, null, h(AtomCol, { className: "col" }, "1"), h(AtomCol, { className: "col" }, "2"), h(AtomCol, { className: "col" }, "3"), h(AtomCol, { className: "col" }, "4"), h(AtomCol, { className: "col" }, "5"), h(AtomCol, { className: "col" }, "6"))), h(AtomGrid, null, h(AtomRow, null, h(AtomCol, { className: "col" }, "1"), h(AtomCol, { className: "col" }, "2"), h(AtomCol, { className: "col" }, "3"), h(AtomCol, { className: "col" }, "4"), h(AtomCol, { className: "col" }, "5"), h(AtomCol, { className: "col" }, "6"), h(AtomCol, { className: "col" }, "7"), h(AtomCol, { className: "col" }, "8"), h(AtomCol, { className: "col" }, "9"), h(AtomCol, { className: "col" }, "10"), h(AtomCol, { className: "col" }, "11"), h(AtomCol, { className: "col" }, "12"))), h("style", null, GridCSS)));
export const Default = {
  render: (args) => createGrid(args),
};
//# sourceMappingURL=grid.react.stories.js.map
