import { SelectComponentArgs, SelectStoryArgs } from './select.args';
export default Object.assign({ title: 'Components/Select' }, SelectStoryArgs);
const createSelect = (args) => {
  return `
<atom-select
  name='select'
  placeholder='Select an option'
  interface=${args.interface}
  color=${args.color}
  mode=${args.mode}
  disabled=${args.disabled}
  multiple=${args.multiple}
  label=${args.label}
  label-placement=${args.labelPlacement}
/>

<script>
  document.querySelector('atom-select').options = [
    { value: 'Red', disabled: false },
    { value: 'Green', disabled: false },
    { value: 'Blue', disabled: false },
    { value: 'Disabled example', selected: false, disabled: true },
  ]
</script>
  `;
};
export const Default = {
  render: (args) => createSelect(args),
  args: Object.assign({}, SelectComponentArgs),
};
//# sourceMappingURL=select.core.stories.js.map
