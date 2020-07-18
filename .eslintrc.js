module.exports = {
    extends: 'airbnb-base',
    env: {
        browser: true,
    },
    settings: {
        'import/resolver': 'webpack',
    },
    rules: {
        indent: ['error', 4],
        'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
        'import/prefer-default-export': 'off',
    },
};
