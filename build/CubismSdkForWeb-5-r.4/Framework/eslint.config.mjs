import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
export default tseslint.config(eslint.configs.recommended, tseslint.configs.eslintRecommended, ...tseslint.configs.recommended, ...tseslint.configs.recommendedTypeChecked, eslintConfigPrettier, {
    languageOptions: {
        parserOptions: {
            sourceType: 'module',
            ecmaVersion: 2020,
            project: './tsconfig.json',
        },
        globals: Object.assign({}, globals.browser),
    },
    plugins: {
        'prettier': eslintPluginPrettier,
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                trailingComma: 'none',
                arrowParens: 'avoid',
            },
        ],
        camelcase: 'off',
        '@typescript-eslint/naming-convention': [
            'warn',
            {
                selector: 'default',
                format: ['camelCase'],
            },
            {
                selector: 'import',
                format: ['PascalCase'],
            },
            {
                selector: 'variable',
                format: [],
                custom: {
                    regex: '^[A-Z]|^csm|^iterator|Shader',
                    match: true,
                },
                modifiers: ['exported', 'const'],
            },
            {
                selector: 'variable',
                format: ['camelCase'],
            },
            {
                selector: 'variable',
                format: [],
                custom: {
                    regex: '^[A-Z]|^s_',
                    match: true,
                },
                modifiers: ['global'],
            },
            {
                selector: 'enum',
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: [],
                custom: {
                    regex: '^[A-Z]',
                    match: true,
                },
            },
            {
                selector: 'classProperty',
                format: ['PascalCase'],
                modifiers: ['static', 'readonly'],
            },
            {
                selector: 'classProperty',
                format: ['camelCase'],
                leadingUnderscore: 'allow',
            },
            {
                selector: 'class',
                format: [],
                custom: {
                    regex: '^[A-Z]|^csm|^iterator|_WebGL$',
                    match: true,
                },
            },
            {
                selector: 'interface',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'parameter',
                format: ['camelCase'],
            },
            {
                selector: 'classMethod',
                format: ['camelCase'],
            },
            {
                selector: 'objectLiteralProperty',
                format: ['camelCase', 'PascalCase'],
            },
            {
                selector: 'typeAlias',
                format: [],
                custom: {
                    regex: '^[A-Z]|^[a-z]|^CSM_|^csm|^iterator',
                    match: true,
                },
                modifiers: ['exported'],
            },
            {
                selector: 'typeAlias',
                format: ['camelCase'],
            },
            {
                selector: 'typeParameter',
                format: [],
                custom: {
                    regex: '^[A-Z][^_]|^[A-Z]|^T_$',
                    match: true,
                },
                leadingUnderscore: 'allow',
            },
        ],
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': [
            'error',
            {
                allow: [
                    'constructors',
                ],
            },
        ],
        'no-fallthrough': 'warn',
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/restrict-plus-operands': 'off',
        '@typescript-eslint/no-unsafe-return': 'off',
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
        '@typescript-eslint/no-unsafe-call': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        'no-inner-declarations': 'off',
        'no-global-assign': 'off',
        'prefer-const': 'warn',
    },
}, {
    ignores: [
        '**/*.*',
        '!src/**/*.ts',
    ],
});
