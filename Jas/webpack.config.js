// Learn more on how to config.
// - https://github.com/ant-tool/atool-build
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(webpackConfig) {

    webpackConfig.output.path = '/usr/app/web';
    webpackConfig.output.publicPath = '/';


    webpackConfig.babel.plugins.push('transform-runtime');
    webpackConfig.babel.plugins.push(['import', {
        libraryName: 'antd',
        style: true,
    }]);


    webpackConfig.plugins.push(new HtmlWebpackPlugin({
        title: 'JAS - Web',
        template: 'src/index.ejs',
        hash: true,
        cache: false
    }));

    return webpackConfig;
};