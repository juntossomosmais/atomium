import { InputComponentArgs, InputStoryArgs } from './input.args';
export default Object.assign({ title: 'Components/Input' }, InputStoryArgs);
const createInput = (args) => {
  return `
<atom-input
  label=${args.label}
  label-placement=${args.labelPlacement}
  fill=${args.fill}
  color=${args.color}
  mode=${args.mode}
  disabled=${args.disabled}
  placeholder=${args.placeholder}
  type=${args.type}
  clear-on-edit=${args.clearOnEdit}
  pattern=${args.pattern}
  required=${args.required}
  inputmode=${args.inputmode}
/>
`;
};
export const Default = {
  render: (args) => createInput(args),
  args: Object.assign({}, InputComponentArgs),
};
//# sourceMappingURL=input.core.stories.js.map
