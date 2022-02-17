const path = require("path");

module.exports = {
    context: __dirname,
    mode: "development",
    entry:{
        main: "./src/main.ts",
    },
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/"
    },
    module: {
        rules:[
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                use:{
                    loader: "ts-loader"
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts"]
    }
}