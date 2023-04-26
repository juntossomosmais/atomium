import { describe, expect, it } from '@jest/globals';
import { dedent } from 'ts-dedent';
import type { API } from 'jscodeshift';
import ansiRegex from 'ansi-regex';
import _transform from '../upgrade-deprecated-types';

expect.addSnapshotSerializer({
  print: (val: any) => val,
  test: () => true,
});

const tsTransform = (source: string) =>
  _transform({ source, path: 'Component.stories.ts' }, {} as API, { parser: 'tsx' }).trim();

describe('upgrade-deprecated-types', () => {
  describe('typescript', () => {
    it('upgrade regular imports', () => {
      expect(
        tsTransform(dedent`
          import { Story, ComponentMeta, Meta, ComponentStory, ComponentStoryObj, ComponentStoryFn } from '@storybook/react';
          import { Cat, CatProps } from './Cat';
            
          const meta = { title: 'Cat', component: Cat } satisfies ComponentMeta<typeof Cat>
          const meta2: Meta<CatProps> = { title: 'Cat', component: Cat };
          export default meta;
          
          export const A: ComponentStory<typeof Cat> = (args) => <Cat {...args} />;
          export const B: any = (args) => <Button {...args} />;
          export const C: ComponentStoryFn<typeof Cat> = (args) => <Cat {...args} />;
          export const D: ComponentStoryObj<typeof Cat> = {
            args: {
              name: 'Fluffy',
            },
          };
          export const E: Story<CatProps> = (args) => <Cat {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        import { StoryFn, Meta, StoryObj } from '@storybook/react';
        import { Cat, CatProps } from './Cat';

        const meta = { title: 'Cat', component: Cat } satisfies Meta<typeof Cat>;
        const meta2: Meta<CatProps> = { title: 'Cat', component: Cat };
        export default meta;

        export const A: StoryFn<typeof Cat> = (args) => <Cat {...args} />;
        export const B: any = (args) => <Button {...args} />;
        export const C: StoryFn<typeof Cat> = (args) => <Cat {...args} />;
        export const D: StoryObj<typeof Cat> = {
          args: {
            name: 'Fluffy',
          },
        };
        export const E: StoryFn<CatProps> = (args) => <Cat {...args} />;
      `);
    });

    it('upgrade imports with local names', () => {
      expect(
        tsTransform(dedent`
          import { Story as Story_, ComponentMeta as ComponentMeta_, ComponentStory as Story__, ComponentStoryObj as ComponentStoryObj_, ComponentStoryFn as StoryFn_ } from '@storybook/react';
          import { Cat } from './Cat';
            
          const meta = { title: 'Cat', component: Cat } satisfies ComponentMeta_<typeof Cat>
          const meta2: ComponentMeta_<typeof Cat> = { title: 'Cat', component: Cat };
          export default meta;
          
          export const A: Story__<typeof Cat> = (args) => <Cat {...args} />;
          export const B: any = (args) => <Button {...args} />;
          export const C: StoryFn_<typeof Cat> = (args) => <Cat {...args} />;
          export const D: ComponentStoryObj_<typeof Cat> = {
            args: {
              name: 'Fluffy',
            },
          };
          export const E: Story_<CatProps> = (args) => <Cat {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        import {
          StoryFn as Story_,
          Meta as ComponentMeta_,
          StoryObj as ComponentStoryObj_,
        } from '@storybook/react';
        import { Cat } from './Cat';

        const meta = { title: 'Cat', component: Cat } satisfies ComponentMeta_<typeof Cat>;
        const meta2: ComponentMeta_<typeof Cat> = { title: 'Cat', component: Cat };
        export default meta;

        export const A: Story__<typeof Cat> = (args) => <Cat {...args} />;
        export const B: any = (args) => <Button {...args} />;
        export const C: StoryFn_<typeof Cat> = (args) => <Cat {...args} />;
        export const D: ComponentStoryObj_<typeof Cat> = {
          args: {
            name: 'Fluffy',
          },
        };
        export const E: Story_<CatProps> = (args) => <Cat {...args} />;
      `);
    });

    it('upgrade imports with conflicting local names', () => {
      expect.addSnapshotSerializer({
        serialize: (value) => value.replace(ansiRegex(), ''),
        test: () => true,
      });

      expect(() =>
        tsTransform(dedent`
          import { ComponentMeta as Meta, ComponentStory as StoryFn } from '@storybook/react';
          import { Cat } from './Cat';
            
          const meta = { title: 'Cat', component: Cat } satisfies Meta<typeof Cat>
          export default meta;
          
          export const A: StoryFn<typeof Cat> = (args) => <Cat {...args} />;
         
        `)
      ).toThrowErrorMatchingInlineSnapshot(`
        This codemod does not support local imports that are called the same as a storybook import.
        Rename this local import and try again.
        > 1 |  import { ComponentMeta as Meta, ComponentStory as StoryFn } from '@storybook/react';
            |           ^^^^^^^^^^^^^^^^^^^^^
          2 |  import { Cat } from './Cat';
          3 |    
          4 |  const meta = { title: 'Cat', component: Cat } satisfies Meta<typeof Cat>
      `);
    });

    it('upgrade namespaces', () => {
      expect(
        tsTransform(dedent`
          import * as SB from '@storybook/react';
          import { Cat, CatProps } from './Cat';
  
          const meta = { title: 'Cat', component: Cat } satisfies SB.ComponentMeta<typeof Cat>;
          const meta2: SB.ComponentMeta<typeof Cat> = { title: 'Cat', component: Cat };
          export default meta;
  
          export const A: SB.ComponentStory<typeof Cat> = (args) => <Cat {...args} />;
          export const B: any = (args) => <Button {...args} />;
          export const C: SB.ComponentStoryFn<typeof Cat> = (args) => <Cat {...args} />;
          export const D: SB.ComponentStoryObj<typeof Cat> = {
            args: {
              name: 'Fluffy',
            },
          };
          export const E: SB.Story<CatProps> = (args) => <Cat {...args} />;
          
        `)
      ).toMatchInlineSnapshot(`
        import * as SB from '@storybook/react';
        import { Cat, CatProps } from './Cat';

        const meta = { title: 'Cat', component: Cat } satisfies SB.Meta<typeof Cat>;
        const meta2: SB.Meta<typeof Cat> = { title: 'Cat', component: Cat };
        export default meta;

        export const A: SB.StoryFn<typeof Cat> = (args) => <Cat {...args} />;
        export const B: any = (args) => <Button {...args} />;
        export const C: SB.StoryFn<typeof Cat> = (args) => <Cat {...args} />;
        export const D: SB.StoryObj<typeof Cat> = {
          args: {
            name: 'Fluffy',
          },
        };
        export const E: SB.StoryFn<CatProps> = (args) => <Cat {...args} />;
      `);
    });
  });
});
