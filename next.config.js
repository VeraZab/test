const path = require('path');
const glob = require('glob');
const isProd = process.env.NODE_ENV === 'production';
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  exportPathMap: () => ({
    //Home
    '/': {
      page: '/prismic-generator',
      query: {
        slug: 'home',
      },
    },

    // Preview needed for Prismic preview flow
    '/preview': {
      page: '/prismic-generator',
      query: {
        slug: 'home',
      },
    },
    // Dashboards
    '/dashboards-and-reports': {
      page: '/prismic-generator',
      query: {
        slug: 'dashboards-and-reporting',
      },
    },
    // Falcon
    '/free-sql-client-download': {
      page: '/prismic-generator',
      query: {
        slug: 'falcon-sql-editor',
      },
    },
    // Chart Studio
    '/online-chart-maker': {
      page: '/prismic-generator',
      query: {
        slug: 'chart-studio',
      },
    },
    // Slide Decks
    '/online-presentation-tool': {
      page: '/prismic-generator',
      query: {
        slug: 'slide-decks',
      },
    },
    // Plotly.js
    '/plotly-js-scientific-d3-charting-library': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-js',
      },
    },
    // Plotly.R
    '/d3-js-for-r-and-shiny-charts': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-r',
      },
    },
    // Plotly.py
    '/d3-js-for-python-and-pandas-charts': {
      page: '/prismic-generator',
      query: {
        slug: 'plotly-py',
      },
    },
    // Dash Pricing
    '/dash/pricing': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-services',
      },
    },
    //Careers
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

    // non-prismic

    // Products
    '/products/dash': {page: '/products/dash'},
    '/products/cloud': {page: '/products/cloud'},
    '/products/on-premise': {
      page: '/prismic-generator',
      query: {
        slug: 'on-premise-pricing',
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

    // Newsroom
    '/newsroom': {page: '/newsroom'},
    '/newsroom/mitacs': {page: '/newsroom/mitacs'},
    '/newsroom/plotcon': {page: '/newsroom/plotcon'},
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
  webpack: (config, {dev}) => {
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
