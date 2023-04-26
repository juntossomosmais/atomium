import { GridCSS, GridStoryArgs } from './grid.args';
export default Object.assign({ title: 'Components/Grid' }, GridStoryArgs);
export const Default = {
  render: () => `
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col" size="8" size-sm="10">2</atom-col>
    <atom-col class="col">3</atom-col>
  </atom-row>
</atom-grid>
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col">2</atom-col>
    <atom-col class="col">3</atom-col>
    <atom-col class="col">4</atom-col>
    <atom-col class="col">5</atom-col>
    <atom-col class="col">6</atom-col>
  </atom-row>
</atom-grid>
<atom-grid>
  <atom-row>
    <atom-col class="col">1</atom-col>
    <atom-col class="col">2</atom-col>
    <atom-col class="col">3</atom-col>
    <atom-col class="col">4</atom-col>
    <atom-col class="col">5</atom-col>
    <atom-col class="col">6</atom-col>
    <atom-col class="col">7</atom-col>
    <atom-col class="col">8</atom-col>
    <atom-col class="col">9</atom-col>
    <atom-col class="col">10</atom-col>
    <atom-col class="col">11</atom-col>
    <atom-col class="col">12</atom-col>
  </atom-row>
</atom-grid>

<style>
  ${GridCSS}
</style>
  `,
};
//# sourceMappingURL=grid.core.stories.js.map
