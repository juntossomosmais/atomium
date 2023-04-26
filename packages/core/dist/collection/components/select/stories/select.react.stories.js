import { h } from '@stencil/core';
import { AtomSelect } from '@juntossomosmais/atomium/react';
import { SelectComponentArgs, SelectStoryArgs } from './select.args';
export default Object.assign({ title: 'Components/Select', component: AtomSelect }, SelectStoryArgs);
const createSelect = (args) => (h(AtomSelect, { name: "select", placeholder: "Select an option", interface: args.interface, color: args.color, mode: args.mode, disabled: args.disabled, multiple: args.multiple, label: args.label, "label-placement": args.labelPlacement }));
export const Default = {
  render: (args) => createSelect(args),
  args: Object.assign({}, SelectComponentArgs),
};
//# sourceMappingURL=select.react.stories.js.map
