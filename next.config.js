const path = require('path')
const glob = require('glob')
const chromatic = require("chromatic-sass")

module.exports = {
    exportPathMap: () => ({
        "/": { page: "/" },
        "/products/dash": { page: "/products/dash" },
        "/products/on-premise": { page: "/products/on-premise" }
    }),
    webpack: (config, {dev}) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            },
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            },
            {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), []),
                            functions: chromatic
                        }
                    }
                ]
            }
        )
        return config
    }

}