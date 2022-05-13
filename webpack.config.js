/* @mango3d/integratest
 *
 * /webpack.config.js
 */

/* eslint-disable */ // config file - don't need eslint here

const {join,resolve} = require("path");
const webpack = require("webpack");
const {EnvironmentPlugin} = webpack;
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
    // --- handling env
    const target = "dev";

    // --- load vars
    const pkgVars = require("./package.json");

    // --- entries
    const entry = "./src/entries/app.tsx";

    // --- resolve extensions
    const extensions = [".tsx", ".ts", ".js", ".json"];

    // --- rules
    const rules = [
    ];

    rules.push(
        // ----- Typescript modules
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {loader: "ts-loader", options: {}},
            ],
        },
        {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
        },
    );

    // --- plugins
    const plugins = [];

    // ----- Env vars
    plugins.push(
        new EnvironmentPlugin({
            PKG_NAME: pkgVars.name,
            VERSION: pkgVars.version,
            BUILD_TIME: Date.now(),
        }),
    );

    // ----- HTML handling
        plugins.push(
            new HtmlWebpackPlugin({
                template: "./src/templates/index.html",
                inject: true,
                xhtml: true,
            }),
        );

    // --- optimization
    const optimization = {};

    // --- output
    const output = {
        path: resolve(__dirname, "./dist"),
        filename: "js/[name].js",
        publicPath: `/`,
    };

    // --- dev server
    const devServer = {
        client: {
            progress: true,
        },
        compress: true,
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 8000,
        static: {
            directory: join(__dirname, 'dist'),
        },
    };

    // --- assemble config
    const config = {
        entry,
        context: __dirname,
        mode: "development",
        module: {rules},
        optimization,
        plugins,
        resolve: {extensions},
        output,
        devServer,
        devtool: "eval-source-map",
        stats: {
            all: false,
            errors: true,
            entrypoints: true,
            orphanModules: true,
        },
    };

    // console.log("config:", config);

    return config;
};
