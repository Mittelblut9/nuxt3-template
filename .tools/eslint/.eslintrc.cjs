module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    plugins: [
        'standard',
        'typescript',
        'vue',
        'import',
    ],
    extends: [
        '@nuxt/eslint-config',
        'plugin:vue/recommended',
        'eslint:recommended',
        'plugin:import/typescript',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info', 'debug'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'consistent-return': 0,
        'no-else-return': 1,
        'no-undef': 0,
        'no-async-promise-executor': 0,
        'vue/html-indent': ['error', 4, {
            'attribute': 1,
            'baseIndent': 1,
            'alignAttributesVertically': true,
            'ignores': [],
            'switchCase': 1,
        }],
        'vue/attributes-order': ['error', {
            'order': [
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
            'alphabetical': false
        }],
        'sort-imports': [
            'error',
            {
                'ignoreDeclarationSort': true
            }
        ],
        'vue/one-component-per-file': 'off',
        'vue/require-default-prop': 'off',
        'vue/block-tag-newline': [
            'error',
            {
                'multiline': 'always',
                'singleline': 'always'
            }
        ],
        'vue/brace-style': ['error', 'stroustrup', { 'allowSingleLine': true }],
        'vue/comma-dangle': ['error', 'always-multiline'],
        'vue/comma-spacing': ['error', { 'after': true, 'before': false }],
        'vue/comma-style': ['error', 'last'],
        'vue/html-comment-content-spacing': [
            'error',
            'always',
            {
                'exceptions': ['-']
            }
        ],
        'vue/key-spacing': ['error', { 'afterColon': true, 'beforeColon': false }],
        'vue/keyword-spacing': ['error', { 'after': true, 'before': true }],
        'vue/object-curly-newline': 'off',
        'vue/object-curly-spacing': ['error', 'always'],
        'vue/object-property-newline': [
            'error',
            { 'allowMultiplePropertiesPerLine': true }
        ],
        'vue/padding-line-between-blocks': ['error', 'always'],
        'vue/quote-props': ['error', 'consistent-as-needed'],
        'vue/space-in-parens': ['error', 'never'],
        'vue/template-curly-spacing': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                'argsIgnorePattern': '^_',
                'varsIgnorePattern': '^_',
                'ignoreRestSiblings': true,
                'caughtErrorsIgnorePattern': '^_',
            }
        ],
        'vue/no-multiple-template-root': 0,
        'vue/no-v-html': 0,
        'no-unused-vars': 'off',
    },
    ignorePatterns: [
        'node_modules/**/*',
        'dist/**/*',
    ],
};