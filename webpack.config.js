var webpack = require('webpack');

module.exports = {
    // 页面入口文件配置
    entry : [
        "./modules/entry.jsx"
    ],
    // 入口文件输出配置
    output : {
        path : __dirname + '/js/',
        filename : 'bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader?harmony'
            }
        ]
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    }
    // 插件项

};
