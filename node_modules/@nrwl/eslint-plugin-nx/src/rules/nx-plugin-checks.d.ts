import type { AST } from 'jsonc-eslint-parser';
import type { TSESLint } from '@typescript-eslint/utils';
type Options = [
    {
        generatorsJson?: string;
        executorsJson?: string;
        migrationsJson?: string;
        packageJson?: string;
        allowedVersionStrings: string[];
    }
];
export type MessageIds = 'missingRequiredSchema' | 'invalidSchemaPath' | 'missingImplementation' | 'invalidImplementationPath' | 'invalidImplementationModule' | 'unableToReadImplementationExports' | 'invalidVersion' | 'missingVersion' | 'noGeneratorsOrSchematicsFound' | 'noExecutorsOrBuildersFound' | 'valueShouldBeObject';
export declare const RULE_NAME = "nx-plugin-checks";
declare const _default: TSESLint.RuleModule<MessageIds, Options, TSESLint.RuleListener>;
export default _default;
export declare function checkCollectionFileNode(baseNode: AST.JSONObjectExpression, mode: 'migration' | 'generator' | 'executor', context: TSESLint.RuleContext<MessageIds, Options>): void;
export declare function checkCollectionNode(baseNode: AST.JSONObjectExpression, mode: 'migration' | 'generator' | 'executor', context: TSESLint.RuleContext<MessageIds, Options>): void;
export declare function validateEntry(baseNode: AST.JSONObjectExpression, key: string, mode: 'migration' | 'generator' | 'executor', context: TSESLint.RuleContext<MessageIds, Options>): void;
export declare function validateImplemenationNode(implementationNode: AST.JSONProperty, key: string, context: TSESLint.RuleContext<MessageIds, Options>): void;
export declare function validatePackageGroup(baseNode: AST.JSONObjectExpression, context: TSESLint.RuleContext<MessageIds, Options>): void;
export declare function validateVersionJsonExpression(node: AST.JSONExpression, context: TSESLint.RuleContext<MessageIds, Options>): string | boolean;
