const webpack = require('webpack');
const path = require('path');

////Directory that contains all the transpiled , bundled and prepared code
/// which is served as app
var DIST_DIR = path.resolve(__dirname , "dist");

// This folder tells webpack from where it should look the code .Ultimately it knows ,it has to copy and convert into its suitbale form to deploy
var SRC_DIR = path.resolve(__dirname , "src");
var config = {
    entry: SRC_DIR + "/app/index.js",
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets: ["react", "es2015", "stage-2"]
                }
            }
        ]
    }
};

module.exports = config;
