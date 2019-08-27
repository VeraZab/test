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
    '/terms-of-service': {
      page: '/prismic-generator',
      query: {
        slug: 'terms-of-service',
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
    '/dash': {
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
    '/dash/design-kit': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-products-ddk',
      },
    },
    '/dash/app-manager': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-products-app-manager',
      },
    },
    '/dash/snapshot-engine': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-products-snapshot-engine',
      },
    },
    '/chart-studio/on-premise': {
      page: '/prismic-generator',
      query: {
        slug: 'on-premise-pricing',
      },
    },
    '/chart-studio/cloud': {page: '/products/cloud'},
    '/resources/mitacs': {
      page: '/prismic-generator',
      query: {
        slug: 'mitacs',
      },
    },
    '/resources/plotcon': {
      page: '/prismic-generator',
      query: {
        slug: 'plotcon',
      },
    },
    '/resources/sight-machine': {
      page: '/prismic-generator',
      query: {
        slug: 'sight-machine',
      },
    },
    '/resources/erc': {
      page: '/prismic-generator',
      query: {
        slug: 'dash-for-good-energy-research-centre',
      },
    },
    '/resources/indelphi': {
      page: '/prismic-generator',
      query: {
        slug: 'indelphi-dash-app',
      },
    },
    '/export': {page: '/export'},
    '/industries/energy-and-transportation': {
      page: '/prismic-generator',
      query: {
        slug: 'industries-energy-and-transportation',
      },
    },
    '/industries/AI-and-machine-learning': {
      page: '/prismic-generator',
      query: {
        slug: 'industries-ai-and-machine-learning',
      },
    },
    '/industries/manufacturing': {
      page: '/prismic-generator',
      query: {
        slug: 'industries-manufacturing',
      },
    },
    '/industries/pharma-and-bio': {
      page: '/prismic-generator',
      query: {
        slug: 'industries-pharmabio',
      },
    },
    '/industries/finance': {
      page: '/prismic-generator',
      query: {
        slug: 'industries-finance',
      },
    },
    '/dash/get-started': {
      page: '/prismic-generator',
      query: {
        slug: 'microsite-dash-a',
      },
    },
    '/dash/get_started': {
      page: '/prismic-generator',
      query: {
        slug: 'microsite-dash-b',
      },
    },
    '/dash/start': {
      page: '/prismic-generator',
      query: {
        slug: 'microsite-dash-c',
      },
    },
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
