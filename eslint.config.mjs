import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import tsParser from '@typescript-eslint/parser';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs}'],
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			},
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: {
			prettier: prettier
		},
		...pluginJs.configs.recommended,
		rules: {
			'prettier/prettier': 'error',
			'no-case-declarations': 'off',
			'no-constant-condition': 'off'
		}
	},
	{
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			parser: tsParser,
			globals: {
				...globals.browser,
				...globals.node
			},
			ecmaVersion: 'latest',
			sourceType: 'module'
		},
		plugins: {
			prettier: prettier
		},
		...tseslint.configs.recommended.rules,
		rules: {
			'@typescript-eslint/ban-ts-comment': 'off',
			'prettier/prettier': 'error'
		}
	}
];
