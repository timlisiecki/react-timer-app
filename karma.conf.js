var webpackCongig = require("./webpack.config.js");

module.exports = function(config) {
    config.set({
        plugons: require("karma-phantomjs-launcher"),
        browsers: ["PhantomJS"], // Use 'Chrome' in localhost:3000
        singleRun: true,
        frameworks: ["mocha"],
        files: [
          'node_modules/jquery/dist/jquery.min.js',
          'node_modules/foundation-sites/dist/foundation.min.js',
          'app/tests/**/*.test.jsx'
        ],
        preprocessors: {
            "app/tests/**/*.test.jsx": ["webpack", "sourcemap"]
        },
        reporters: ["mocha"],
        client: {
            mocha: {
                timeout: "5000"
            }
        },
        webpack: webpackCongig,
        webpackServer: {
            noInfo: true
        }
    });
};