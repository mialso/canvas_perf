module.exports = {
    extends: [
        'airbnb-typescript/base',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    env: {
        browser: true,
    },
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        'max-len': ['error', 120],
        indent: ['error', 4],
        '@typescript-eslint/indent': 'off',
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
    },
};
