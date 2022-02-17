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
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", "css-loader", "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 8080,
        contentBase: path.resolve(__dirname, "dist"),
        allowedHosts: 'all',
        bonjour: {
            type: 'https',
            protocol: 'tcp',
          },
    },
    resolve: {
        extensions: [".ts"]
    }
    
}