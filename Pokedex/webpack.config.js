const path = require("path");

module.exports = {
    mode: "development",
    entry:{
        main: "./src/main.js",
    },
    output: {
        filename: "js/app.js",
        path: path.resolve(__dirname, "./", "dist"),
    }
}