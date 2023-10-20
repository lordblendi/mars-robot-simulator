import path from "path"
import CopyPlugin from "copy-webpack-plugin"
import { Configuration } from "webpack"

module.exports = (): Configuration => ({
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
        alias: {
            react: path.resolve("./node_modules/react"),
            reactDOM: path.resolve("./node_modules/react-dom"),
        },
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: "public" }],
        }),
    ],
})
