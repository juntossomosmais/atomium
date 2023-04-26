import { h } from '@stencil/core';
import { AtomIcon } from '@juntossomosmais/atomium/react';
import { IconComponentArgs, IconStoryArgs } from './icon.args';
export default Object.assign({ title: 'Components/Icon', component: AtomIcon }, IconStoryArgs);
const createIcon = (args) => (h(AtomIcon, { icon: args.icon, color: args.color, size: args.size }));
export const Default = {
  render: (args) => createIcon(args),
  args: Object.assign({}, IconComponentArgs),
};
//# sourceMappingURL=icon.react.stories.js.map
