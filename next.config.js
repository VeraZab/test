const path = require('path')
const glob = require('glob')
const chromatic = require("chromatic-sass")
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    // assetPrefix: 'https://plotly.github.io/plotly-next/',
    exportPathMap: () => ({
        "/": { page: "/" },
        "/dashboards": { page: "/dashboards" },
        "/dashboards-and-reports": { page: "/dashboards" }, // SEO version
        "/database-connectors": { page: "/database-connectors" },
        "/free-sql-client-download": { page: "/database-connectors" }, // SEO version
        "/online-chart-maker": { page: "/online-chart-maker" },
        "/powerpoint-online": { page: "/powerpoint-online" },
        "/online-presentation-tool": { page: "/powerpoint-online" }, // SEO version
        "/products/dash": { page: "/products/dash" },
        "/products/cloud": { page: "/products/cloud" },
        "/products/consulting-and-oem": { page: "/products/consulting-and-oem" },
        "/plotly-js-scientific-d3-charting-library": { page: "/plotly-js-scientific-d3-charting-library" },
        "/d3-js-for-r-and-shiny-charts": { page: "/d3-js-for-r-and-shiny-charts" },
        "/d3-js-for-python-and-pandas-charts": { page: "/d3-js-for-python-and-pandas-charts" },
        "/products/on-premise": { page: "/products/on-premise" },
        "/products/industries": { page: "/industries" },
        "/products/industries/finance": { page: "/single-industries", query: { id: 'finance' } },
        "/products/industries/aerospace": { page: "/single-industries", query: { id: 'aerospace' } },
        "/products/industries/automotive-analytics": { page: "/single-industries", query: { id: 'automotive-analytics' } },
        "/products/industries/business-intelligence": { page: "/single-industries", query: { id: 'business-intelligence' } },
        "/products/industries/energy-analytics": { page: "/single-industries", query: { id: 'energy-analytics' } },
        "/products/industries/government-and-public-analytics": { page: "/single-industries", query: { id: 'government-and-public-analytics' } },
        "/products/industries/insurance": { page: "/single-industries", query: { id: 'insurance' } },
        "/products/industries/journalism": { page: "/single-industries", query: { id: 'journalism' } },
        "/products/industries/pharma-analytics": { page: "/single-industries", query: { id: 'pharma-analytics' } },
        "/products/industries/research-and-development-analytics": { page: "/single-industries", query: { id: 'research-and-development-analytics' } },
        // "/products/industries/tableau-alternative": { page: "/single-industries", query: { id: 'tableau-alternative' } },
        "/products/enterprise/customer-stories": { page: "/customer-stories" },
        "/products/enterprise/customer-stories/c12-energy": { page: "/single-customer-stories", query: { id: 'c12-energy' } },
        "/products/enterprise/customer-stories/goji": { page: "/single-customer-stories", query: { id: 'goji' } },
        "/webinars": { page: "/webinars" },
        "/export": { page: "/export" }
        // "/tableau-alternative": { page: "/tableau-alternative" },
        // "/highcharts-alternative": { page: "/highcharts-alternative" }
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
                            data: '@import "partials/abstract";',
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
