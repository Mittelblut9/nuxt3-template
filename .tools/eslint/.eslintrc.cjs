module.exports = {
    root: true,
    env: {
        node: true,
        es6: true,
    },
    plugins: ['standard', 'prettier', 'typescript'],
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        semi: ['error', 'always'],
        quotes: ['error', 'single'],
        'consistent-return': 0,
        indent: ['error', 4, { "SwitchCase": 1 }], // space indentation
        'no-else-return': 1,
        'no-undef': 0,
        'prettier/prettier': [
            'error',
            {
                'printWidth': 100,
                'singleQuote': true,
                'trailingComma': 'es5',
                'tabWidth': 4,
                'semi': true,
            }
        ],
        'no-async-promise-executor': 0,
    },
    ignorePatterns: ['node_modules/**/*', 'public/**/*', 'dist/**/*', 'server/**/*'],
};