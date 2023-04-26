import { describe, it, expect } from '@jest/globals';
import { dedent } from 'ts-dedent';
import type { API } from 'jscodeshift';
import ansiRegex from 'ansi-regex';
import _transform from '../csf-2-to-3';

expect.addSnapshotSerializer({
  print: (val: any) => val,
  test: () => true,
});

const jsTransform = (source: string) =>
  _transform({ source, path: 'Component.stories.js' }, {} as API, {}).trim();
const tsTransform = (source: string) =>
  _transform({ source, path: 'Component.stories.ts' }, {} as API, { parser: 'tsx' }).trim();

describe('csf-2-to-3', () => {
  describe('javascript', () => {
    it('should replace non-simple function exports with objects', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat' };
          export const A = () => <Cat />;
          export const B = (args) => <Button {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat' };
        export const A = () => <Cat />;
        export const B = {
          render: (args) => <Button {...args} />,
        };
      `);
    });

    it('should move annotations into story objects', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat' };

          export const A = () => <Cat />;
          A.storyName = 'foo';
          A.parameters = { bar: 2 };
          A.play = () => {};
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat' };

        export const A = {
          render: () => <Cat />,
          name: 'foo',
          parameters: { bar: 2 },
          play: () => {},
        };
      `);
    });

    it('should ignore non-story exports, statements', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'components/Fruit', includeStories: ['A'] };

          export const A = (args) => <Apple {...args} />;

          export const B = (args) => <Banana {...args} />;

          const C = (args) => <Cherry {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'components/Fruit', includeStories: ['A'] };

        export const A = {
          render: (args) => <Apple {...args} />,
        };

        export const B = (args) => <Banana {...args} />;

        const C = (args) => <Cherry {...args} />;
      `);
    });

    it('should do nothing when there is no meta', () => {
      expect(
        jsTransform(dedent`
          export const A = () => <Apple />;

          export const B = (args) => <Banana {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        export const A = () => <Apple />;

        export const B = (args) => <Banana {...args} />;
      `);
    });

    it('should remove implicit global render function (react)', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat', component: Cat };
          export const A = (args) => <Cat {...args} />;
          export const B = (args) => <Banana {...args} />;
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat', component: Cat };
        export const A = {};
        export const B = {
          render: (args) => <Banana {...args} />,
        };
      `);
    });

    it('should ignore object exports', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat', component: Cat };

          export const A = {
            render: (args) => <Cat {...args} />
          };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat', component: Cat };

        export const A = {
          render: (args) => <Cat {...args} />,
        };
      `);
    });

    it('should hoist template.bind (if there is only one)', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat' };
          const Template = (args) => <Cat {...args} />;
          export const A = Template.bind({});
          A.args = { isPrimary: false };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat' };
        const Template = (args) => <Cat {...args} />;

        export const A = {
          render: Template,
          args: { isPrimary: false },
        };
      `);
    });

    it('should reuse the template when there are multiple Template.bind references but no component defined', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat' };
          const Template = (args) => <Cat {...args} />;

          export const A = Template.bind({});
          A.args = { isPrimary: false };
          
          export const B = Template.bind({});
          B.args = { isPrimary: true };
          
                    
          export const C = Template.bind({});
          C.args = { bla: true };
          
          export const D = Template.bind({});
          D.args = { bla: false };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat' };
        const Template = (args) => <Cat {...args} />;

        export const A = {
          render: Template,
          args: { isPrimary: false },
        };

        export const B = {
          render: Template,
          args: { isPrimary: true },
        };

        export const C = {
          render: Template,
          args: { bla: true },
        };

        export const D = {
          render: Template,
          args: { bla: false },
        };
      `);
    });

    it('should remove implicit global render for template.bind', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat', component: Cat };

          const Template = (args) => <Cat {...args} />;

          export const A = Template.bind({});
          A.args = { isPrimary: false };

          const Template2 = (args) => <Banana {...args} />;

          export const B = Template2.bind({});
          B.args = { isPrimary: true };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat', component: Cat };

        export const A = {
          args: { isPrimary: false },
        };

        const Template2 = (args) => <Banana {...args} />;

        export const B = {
          render: Template2,
          args: { isPrimary: true },
        };
      `);
    });

    it('should ignore no-arg stories without annotations', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat', component: Cat };

          export const A = (args) => <Cat {...args} />;
          export const B = () => <Cat name="frisky" />;
          export const C = () => <Cat name="fluffy" />;
          C.parameters = { foo: 2 };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat', component: Cat };

        export const A = {};
        export const B = () => <Cat name="frisky" />;

        export const C = {
          render: () => <Cat name="fluffy" />,
          parameters: { foo: 2 },
        };
      `);
    });

    it('should work for v1-style annotations', () => {
      expect(
        jsTransform(dedent`
          export default { title: 'Cat' };
          export const A = (args) => <Cat {...args} />;
          A.story = {
            parameters: { foo: 2 }
          };
        `)
      ).toMatchInlineSnapshot(`
        export default { title: 'Cat' };

        export const A = {
          render: (args) => <Cat {...args} />,
          parameters: { foo: 2 },
        };
      `);
    });
  });

  describe('typescript', () => {
    it('should error with namespace imports', () => {
      expect.addSnapshotSerializer({
        serialize: (value) => value.replace(ansiRegex(), ''),
        test: () => true,
      });
      expect(() =>
        tsTransform(dedent`
          import * as SB from '@storybook/react';
          import { CatProps } from './Cat';

          const meta = { title: 'Cat', component: Cat } as Meta<CatProps>
          export default meta;

          export const A: SB.StoryFn<CatProps> = () => <Cat />;
        `)
      ).toThrowErrorMatchingInlineSnapshot(`
        This codemod does not support namespace imports for a @storybook/react package.
        Replace the namespace import with named imports and try again.
      `);
    });
    it('should keep local names', () => {
      expect(
        tsTransform(dedent`
          import { Meta, StoryObj as CSF3, StoryFn as CSF2 } from '@storybook/react';
          import { CatProps } from './Cat';

          const meta = { title: 'Cat', component: Cat } satisfies Meta<CatProps>
          export default meta;

          export const A: CSF2<CatProps> = () => <Cat />;
          
          export const B: CSF3<CatProps> = {
            args: { name: "already csf3" }
          };

          export const C: CSF2<CatProps> = (args) => <Cat {...args} />;
          C.args = { 
            name: "Fluffy"
          };
        `)
      ).toMatchInlineSnapshot(`
        import { Meta, StoryObj as CSF3, StoryFn as CSF2 } from '@storybook/react';
        import { CatProps } from './Cat';

        const meta = { title: 'Cat', component: Cat } satisfies Meta<CatProps>;
        export default meta;

        export const A: CSF2<CatProps> = () => <Cat />;

        export const B: CSF3<CatProps> = {
          args: { name: 'already csf3' },
        };

        export const C: CSF3<CatProps> = {
          args: {
            name: 'Fluffy',
          },
        };
      `);
    });

    it('should replace function exports with objects and update type', () => {
      expect(
        tsTransform(dedent`
          import { Story, StoryFn, ComponentStory, ComponentStoryObj } from '@storybook/react';

          // some extra whitespace to test

          export default { 
            title: 'Cat', 
            component: Cat,
          } as Meta<CatProps>;

          export const A: Story<CatProps> = (args) => <Cat {...args} />;
          A.args = { name: "Fluffy" };

          export const B: any = (args) => <Button {...args} />;

          export const C: Story<CatProps> = () => <Cat />;

          export const D: StoryFn<CatProps> = (args) => <Cat {...args} />;
          D.args = { 
            name: "Fluffy"
          };
          
          export const E: ComponentStory<Cat> = (args) => <Cat {...args} />;
          E.args = { name: "Fluffy" };
          
          export const F: Story = (args) => <Cat {...args} />;
          F.args = { 
            name: "Fluffy"
          };
          
          export const G: ComponentStoryObj<typeof Cat> = {
            args: {
              name: 'Fluffy',
            },
          };
        `)
      ).toMatchInlineSnapshot(`
        import { StoryObj, StoryFn } from '@storybook/react';

        // some extra whitespace to test

        export default {
          title: 'Cat',
          component: Cat,
        } as Meta<CatProps>;

        export const A: StoryObj<CatProps> = {
          args: { name: 'Fluffy' },
        };

        export const B: any = {
          render: (args) => <Button {...args} />,
        };

        export const C: StoryFn<CatProps> = () => <Cat />;

        export const D: StoryObj<CatProps> = {
          args: {
            name: 'Fluffy',
          },
        };

        export const E: StoryObj<Cat> = {
          args: { name: 'Fluffy' },
        };

        export const F: StoryObj = {
          args: {
            name: 'Fluffy',
          },
        };

        export const G: StoryObj<typeof Cat> = {
          args: {
            name: 'Fluffy',
          },
        };
      `);
    });

    it('migrate Story type to StoryFn when used in an not exported Template function', () => {
      expect(
        tsTransform(dedent`
          import { Story, Meta } from '@storybook/react'
          
          export default {
            component: Cat,
          } satisfies Meta
          
          const Template: Story = () => <div>Hello World</div>;
          
          export const Default = Template.bind({})
        `)
      ).toMatchInlineSnapshot(`
        import { StoryFn, Meta } from '@storybook/react';

        export default {
          component: Cat,
        } satisfies Meta;

        const Template: StoryFn = () => <div>Hello World</div>;

        export const Default = {
          render: Template,
        };
      `);
    });
  });
});
