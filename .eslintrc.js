module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json',
		tsconfigRootDir: '.',
	},
	env: {
		browser: true,
		'jest/globals': true,
	},
	plugins: ['@typescript-eslint', 'react-hooks', 'jest'],
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:import/typescript'],
	rules: {
		'no-multiple-empty-lines': 0,
		semi: 0,
		indent: 0,
		'no-tabs': 0,
		'react/jsx-closing-tag-location': 0,
		'object-curly-newline': 0,
		quotes: 0,
		'eol-last': 0,
		'comma-dangle': 0,
		'no-extra-boolean-cast': 0,
		'react/jsx-wrap-multilines': 0,
		'@typescript-eslint/no-unused-vars': 0,
		'@typescript-eslint/ban-types': 0,
		'@typescript-eslint/explicit-module-boundary-types': 0,
		'linebreak-style': 'off',
		'react/jsx-props-no-spreading': 0,
		'react/no-unescaped-entities': 0,
		/**
		 * @description rules of eslint official
		 */
		/**
		 * @bug https://github.com/benmosher/eslint-plugin-import/issues/1282
		 * "import/named" temporary disable.
		 */
		'import/named': 'off',
		/**
		 * @bug?
		 * "import/export" temporary disable.
		 */
		'import/export': 'off',
		'import/prefer-default-export': 'off', // Allow single Named-export
		'import/extensions': 0,
		'react/jsx-one-expression-per-line': 0,
		'react/jsx-indent': 0,
		'react/jsx-indent-props': 0,
		'no-use-before-define': 0,
		'no-unused-expressions': [
			'warn',
			{
				allowShortCircuit: true,
				allowTernary: true,
			},
		], // https://eslint.org/docs/rules/no-unused-expressions

		/**
		 * @description rules of @typescript-eslint
		 */
		'@typescript-eslint/prefer-interface': 'off', // also want to use "type"
		'@typescript-eslint/explicit-function-return-type': 'off', // annoying to force return type

		/**
		 * @description rules of eslint-plugin-react
		 */
		'react/jsx-filename-extension': [
			'warn',
			{
				extensions: ['.jsx', '.tsx'],
			},
		], // also want to use with ".tsx"
		'react/prop-types': 'off', // Is this incompatible with TS props type?

		/**
		 * @description rules of eslint-plugin-react-hooks
		 */
		'react-hooks/rules-of-hooks': 'error',
	},
};
