const path = require("path");

module.exports = {
    entry: "./index.ts",
    output: {
        path: path.resolve(__dirname, "dist")
    },
    target: "node",
    node: {
        global: false,
        __filename: false,
        __dirname: false,
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                // exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: 'tsconfig.json',
                            transpileOnly: true
                        }
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};