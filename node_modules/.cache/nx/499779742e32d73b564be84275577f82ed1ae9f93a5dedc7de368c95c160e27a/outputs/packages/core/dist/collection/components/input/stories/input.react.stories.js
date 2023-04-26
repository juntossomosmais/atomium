import { h } from '@stencil/core';
import { AtomInput } from '@juntossomosmais/atomium/react';
import { InputComponentArgs, InputStoryArgs } from './input.args';
export default Object.assign({ title: 'Components/Input', component: AtomInput }, InputStoryArgs);
const createInput = (args) => (h(AtomInput, { label: args.label, labelPlacement: args.labelPlacement, fill: args.fill, color: args.color, mode: args.mode, disabled: args.disabled, placeholder: args.placeholder, type: args.type, clearOnEdit: args.clearOnEdit, pattern: args.pattern, required: args.required, inputmode: args.inputmode }));
export const Default = {
  render: (args) => createInput(args),
  args: Object.assign({}, InputComponentArgs),
};
//# sourceMappingURL=input.react.stories.js.map
