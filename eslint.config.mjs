import { createConfigForNuxt } from '@nuxt/eslint-config/flat';

export default createConfigForNuxt({
    features: {
        stylistic: {
            commaDangle: 'never',
            braceStyle: '1tbs',
            indent: 4,
            quotes: 'single',
            semi: true,
        },
    }
}).overrideRules({
    'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
    'consistent-return': 0,
    'no-else-return': 1,
    'vue/html-indent': ['error', 4, {
        attribute: 1,
        baseIndent: 1,
        alignAttributesVertically: true,
        ignores: [],
        switchCase: 1,
    }],
    'vue/attributes-order': ['error', {
        order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT'
        ],
        alphabetical: false
    }],
    'vue/component-tags-order': ['error', {
        order: ['template', 'script', 'style']
    }],
    'sort-imports': [
        'error',
        {
            ignoreDeclarationSort: true
        }
    ],
    'vue/one-component-per-file': 'off',
    'vue/require-default-prop': 'off',
    'vue/block-tag-newline': [
        'error',
        {
            multiline: 'always',
            singleline: 'always'
        }
    ],
    'vue/brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'vue/comma-dangle': ['error', 'always-multiline'],
    'vue/comma-spacing': ['error', { after: true, before: false }],
    'vue/comma-style': ['error', 'last'],
    'vue/html-comment-content-spacing': [
        'error',
        'always',
        {
            exceptions: ['-']
        }
    ],
    'vue/key-spacing': ['error', { afterColon: true, beforeColon: false }],
    'vue/keyword-spacing': ['error', { after: true, before: true }],
    'vue/object-curly-newline': 'off',
    'vue/object-curly-spacing': ['error', 'always'],
    'vue/object-property-newline': [
        'error',
        { allowMultiplePropertiesPerLine: true }
    ],
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/quote-props': ['error', 'consistent-as-needed'],
    'vue/space-in-parens': ['error', 'never'],
    'vue/template-curly-spacing': 'error',
    '@typescript-eslint/no-unused-vars': [
        'error',
        {
            argsIgnorePattern: '^_',
            varsIgnorePattern: '^_',
            ignoreRestSiblings: true,
            caughtErrorsIgnorePattern: '^_',
        }
    ],
    'vue/no-multiple-template-root': 0,
    'vue/no-v-html': 0,
    'vue/no-v-text-v-html-on-component': 0,
    'vue/no-mutating-props': 0,
    'vue/script-indent': ['error', 4, {
        baseIndent: 0,
        switchCase: 1,
        ignores: [],
    }],
    'vue/multi-word-component-names': 0,
    'vue/no-v-model-argument': 0,
    '@stylistic/comma-dangle': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unsafe-function-type': 'off',
    '@typescript-eslint/no-empty-object-type': 'off',
    '@typescript-eslint/no-duplicate-enum-values': 'off',
});