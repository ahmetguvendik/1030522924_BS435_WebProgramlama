const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname,'public'),
        libraryTarget: "var",
        library: "odev02cat",
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use : {
                    loader: "babel-loader"
                }
            }
        ]
    },

    resolve:{
        extensions: [".js","jsx"]
    },

    devServer:{
        static: './public',
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}