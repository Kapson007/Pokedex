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
    devServer: {
        static : {
            directory : path.join(__dirname, "/dist/")
          },
          port: 3000,
          // publicPath
          devMiddleware:{
             publicPath: "https://localhost:3000/dist/",
          },
        bonjour: {
            type: 'https',
            protocol: 'tcp',
          },
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
    
    resolve: {
        extensions: [".ts"]
    }
    
}