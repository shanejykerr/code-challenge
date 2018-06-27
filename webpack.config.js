var path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/js/server/index.js',
    target: 'web',
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {test: /\.js$/, include: [path.join(__dirname, 'src/js/server'), path.join(__dirname, 'src/js/components')], loader: ['babel-loader']},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
        ]
    }
}