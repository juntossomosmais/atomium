import { ButtonComponentArgs, ButtonStoryArgs } from './button.args';
export default Object.assign({ title: 'Components/Button' }, ButtonStoryArgs);
const createButton = (args) => {
  return `
<atom-button
  color=${args.color}
  fill=${args.fill}
  shape=${args.shape}
  expand=${args.expand}
  size=${args.size}
  disabled=${args.disabled}
  type=${args.type}
  mode=${args.mode}
>
  ${args.label}
</atom-button>
`;
};
export const Default = {
  render: (args) => createButton(args),
  args: Object.assign({}, ButtonComponentArgs),
};
export const Secondary = {
  render: (args) => createButton(args),
  args: Object.assign(Object.assign({}, Default.args), { color: 'secondary' }),
};
export const Outline = {
  render: (args) => createButton(args),
  args: Object.assign(Object.assign({}, Default.args), { fill: 'outline' }),
};
export const Clear = {
  render: (args) => createButton(args),
  args: Object.assign(Object.assign({}, Default.args), { fill: 'clear' }),
};
//# sourceMappingURL=button.core.stories.js.map
