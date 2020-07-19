const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    resolve: {
        alias: {
            ui: path.resolve(__dirname, 'src/ui'),
            smile: path.resolve(__dirname, 'src/smile'),
            store: path.resolve(__dirname, 'src/store'),
        },
        extensions: ['.ts'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
        ],
    },
};
