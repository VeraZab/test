const path = require('path');
const glob = require('glob');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  exportPathMap: () => ({
    '/': {
      page: '/prismic-generator',
      query: {
        slug: 'home',
      },
    },
    '/preview': {
      page: '/prismic-generator',
      query: {
        slug: 'home',
      },
    },
    '/resources': {
      page: '/prismic-generator',
      query: {
        slug: 'resources',
      },
    },
    '/privacy-policy': {
      page: '/prismic-generator',
      query: {
        slug: 'privacy-policy',
      },
    },
    '/dashboards-and-reports': {
      page: '/prismic-generator',
      query: {
        slug: 'dashboards-and-reporting',
      },
    },
    '/free-sql-client-download': {
      page: '/prismic-generator',
      query: {
        slug: 'falcon-sql-editor',
      },
    },
    '/online-chart-maker': {
      page: '/prismic-generator',
      query: {
        slug: 'chart-studio',
      },
    },
    '/online-presentation-tool': {
      page: '/prismic-generator',
      query: {
        slug: 'slide-decks',
      },
    },
    '/plotly-js-scientific-d3-charting-library': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-js',
      },
    },
    '/d3-js-for-r-and-shiny-charts': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-r',
      },
    },
    '/d3-js-for-python-and-pandas-charts': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-py',
      },
    },
    '/dash/pricing': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-services',
      },
    },
    '/company/careers': {
      page: '/prismic-generator',
      query: {
        slug: 'company',
      },
    },
    '/fr/company/careers': {
      page: '/prismic-generator',
      query: {
        slug: 'company-fr',
      },
    },
    '/products/dash': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-product',
      },
    },
    '/products/cloud': {page: '/products/cloud'},
    '/products/on-premise': {
      page: '/prismic-generator',
      query: {
        slug: 'on-premise-pricing',
      },
    },
    '/products/oem': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-oem',
      },
    },
    '/products/consulting-and-oem': {page: '/products/consulting-and-oem'},
    '/chart-studio/on-premise': {
      page: '/prismic-generator',
      query: {
        slug: 'on-premise-pricing',
      },
    },
    '/chart-studio/cloud': {page: '/products/cloud'},
    '/newsroom': {
      page: '/prismic-generator',
      query: {
        slug: 'newsroom',
      },
    },
    '/newsroom/mitacs': {
      page: '/prismic-generator',
      query: {
        slug: 'mitacs',
      },
    },
    '/newsroom/plotcon': {
      page: '/prismic-generator',
      query: {
        slug: 'plotcon',
      },
    },
    '/newsroom/sight-machine': {
      page: '/prismic-generator',
      query: {
        slug: 'sight-machine',
      },
    },
    '/newsroom/erc': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-for-good-energy-research-centre',
      },
    },
    '/newsroom/indelphi': {
      page: '/prismic-generator',
      query: {
        slug: 'indelphi-dash-app',
      },
    },
    '/export': {page: '/export'},
  }),
  webpack: config => {
    config.plugins.push(
      new SWPrecacheWebpackPlugin({
        minify: true,
        cacheId: 'plotly-marketing',
        staticFileGlobsIgnorePatterns: [/\.next\//],
        runtimeCaching: [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/,
          },
        ],
      })
    );
    config.module.rules.push(
      {
        test: /\.(css|scss)/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]',
        },
      },
      {
        test: /\.css$/,
        use: ['babel-loader', 'raw-loader', 'postcss-loader'],
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'babel-loader',
          'raw-loader',
          'postcss-loader',
          {
            loader: 'fast-sass-loader',
            options: {
              data: '@import "partials/abstract";',
              includePaths: ['./', 'styles', 'node_modules']
                .map(d => path.join(__dirname, d))
                .map(g => glob.sync(g))
                .reduce((a, c) => a.concat(c), []),
            },
          },
        ],
      }
    );
    return config;
  },
};
