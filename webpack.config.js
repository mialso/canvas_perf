const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    resolve: {
        alias: {
            ui: path.resolve(__dirname, 'src/ui'),
            smile: path.resolve(__dirname, 'src/smile'),
            store: path.resolve(__dirname, 'src/store'),
        },
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
