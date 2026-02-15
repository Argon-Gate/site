import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import nextTs from 'eslint-config-next/typescript';
import nextVitals from 'eslint-config-next/core-web-vitals';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

export default [
    {
        ignores: [
            'public',
            'build',
            'dist',
            'node_modules',
            'scripts',
            'eslint.config.mjs',
            '.prettierrc.cjs',
            'postcss.config.mjs',
            '.next/**',
            'out/**',
            'next-env.d.ts',
            'src/tests/coverage',
            'src/tests/reports',
            'coverage',
        ],
    },
    ...nextVitals,
    ...nextTs,
    ...fixupConfigRules(compat.extends('plugin:prettier/recommended')),
    {
        plugins: {
            'react-refresh': reactRefresh,
        },
        languageOptions: {
            globals: { ...globals.browser },
            parser: tsParser,
            ecmaVersion: 2020,
            sourceType: 'module',
            parserOptions: {
                project: './tsconfig.json',
                tsconfigRootDir: __dirname,
                ecmaFeatures: { jsx: true },
            },
        },
        settings: {
            'import/parsers': {
                '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
            },
        },
        rules: {
            'no-else-return': 'error',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react-hooks/exhaustive-deps': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-non-null-assertion': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            'react/prop-types': 'off',
            'react/jsx-curly-brace-presence': [
                'error',
                {
                    children: 'never',
                    props: 'never',
                    propElementValues: 'always',
                },
            ],
            'react-refresh/only-export-components': [
                'warn',
                {
                    allowConstantExport: true,
                    allowExportNames: ['metadata', 'generateMetadata', 'generateStaticParams', 'viewport', 'generateViewport'],
                },
            ],
            'import/order': [
                1,
                {
                    groups: ['external', 'builtin', 'internal', 'sibling', 'parent', 'index'],
                    pathGroups: [
                        { pattern: 'components', group: 'internal' },
                        { pattern: 'common', group: 'internal' },
                    ],
                    pathGroupsExcludedImportTypes: ['internal'],
                    alphabetize: { order: 'asc', caseInsensitive: true },
                },
            ],
        },
    },
];
