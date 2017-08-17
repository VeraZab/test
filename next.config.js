const path = require('path')
const glob = require('glob')
const chromatic = require("chromatic-sass")
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    assetPrefix: isProd ? 'https://plotly.github.io/plotly-next/' : '',
    exportPathMap: () => ({
        "/": { page: "/" },
        "/dashboards": { page: "/dashboards" },
        "/database-connectors": { page: "/database-connectors" },
        "/online-chart-maker": { page: "/online-chart-maker" },
        "/powerpoint-online": { page: "/powerpoint-online" },
        "/products/dash": { page: "/products/dash" },
        "/products/cloud": { page: "/products/cloud" },
        "/products/consulting-and-oem": { page: "/products/consulting-and-oem" },
        "/plotly-js-scientific-d3-charting-library": { page: "/plotly-js-scientific-d3-charting-library" },
        "/d3-js-for-r-and-shiny-charts": { page: "/d3-js-for-r-and-shiny-charts" },
        "/d3-js-for-python-and-pandas-charts": { page: "/d3-js-for-python-and-pandas-charts" },
        "/products/on-premise": { page: "/products/on-premise" }
    }),
    webpack: (config, {dev}) => {

        if (config.resolve.alias) {
          delete config.resolve.alias['react']
          delete config.resolve.alias['react-dom']
        };

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
