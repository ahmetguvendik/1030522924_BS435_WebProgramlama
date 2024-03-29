const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: './src/kod.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "odev02cat",
    },

    devServer:{
        static: './public',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}