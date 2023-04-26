import { IconComponentArgs, IconStoryArgs } from './icon.args';
export default Object.assign({ title: 'Components/Icon' }, IconStoryArgs);
const createIcon = (args) => {
  return `
    <atom-icon
      icon=${args.icon}
      color=${args.color}
      size=${args.size}
    />
  `;
};
export const Default = {
  render: (args) => createIcon(args),
  args: Object.assign({}, IconComponentArgs),
};
//# sourceMappingURL=icon.core.stories.js.map
