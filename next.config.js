const path = require('path')
const glob = require('glob')
const chromatic = require('chromatic-sass')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // assetPrefix: 'https://plotly.github.io/plotly-next/',
  exportPathMap: () => ({
    '/': {
      page: '/p',
      query: {
        slug: 'home'
      }
    },
    // Dashboards
    '/dashboards': {
      page: '/p',
      query: {
        slug: 'dashboards-and-reporting'
      }
    },
    '/dashboards-and-reports': {
      page: '/p',
      query: {
        slug: 'dashboards-and-reporting'
      }
    },
    // Falcon
    '/database-connectors': {
      page: '/p',
      query: {
        slug: 'falcon-sql-editor'
      }
    },
    '/free-sql-client-download': {
      page: '/p',
      query: {
        slug: 'falcon-sql-editor'
      }
    },
    // Chart Studio
    '/online-chart-maker': {
      page: '/p',
      query: {
        slug: 'chart-studio'
      }
    },
    // Slide Decks
    '/powerpoint-online': {
      page: '/p',
      query: {
        slug: 'slide-decks'
      }
    },
    '/online-presentation-tool': {
      page: '/p',
      query: {
        slug: 'slide-decks'
      }
    },
    // Plotly.js
    '/plotly-js-scientific-d3-charting-library': {
      page: '/p',
      query: {
        slug: 'plotly-js'
      }
    },
    // Plotly.R
    '/d3-js-for-r-and-shiny-charts': {
      page: '/p',
      query: {
        slug: 'plotly-r'
      }
    },
    // Plotly.py
    '/d3-js-for-python-and-pandas-charts': {
      page: '/p',
      query: {
        slug: 'plotly-py'
      }
    },
    // Dash
    '/products/dash': {page: '/products/dash'},
    // Pricing - cloud
    '/products/cloud': {page: '/products/cloud'},
    // Pricing - on premises
    '/products/on-premise': {page: '/products/on-premise'},
    '/products/on-premises': {page: '/products/on-premise'},
    // Consulting and OEM (Advanced Development)
    '/products/consulting-and-oem': {page: '/products/consulting-and-oem'},

    '/webinars': {page: '/webinars'},
    '/export': {page: '/export'},

    // Industries
    '/products/industries': {page: '/industries'},
    '/products/industries/finance': {page: '/single-industries', query: {id: 'finance'}},
    '/products/industries/aerospace': {page: '/single-industries', query: {id: 'aerospace'}},
    '/products/industries/automotive-analytics': {page: '/single-industries', query: {id: 'automotive-analytics'}},
    '/products/industries/business-intelligence': {page: '/single-industries', query: {id: 'business-intelligence'}},
    '/products/industries/energy-analytics': {page: '/single-industries', query: {id: 'energy-analytics'}},
    '/products/industries/government-and-public-analytics': {
      page: '/single-industries',
      query: {id: 'government-and-public-analytics'}
    },
    '/products/industries/insurance': {page: '/single-industries', query: {id: 'insurance'}},
    '/products/industries/journalism': {page: '/single-industries', query: {id: 'journalism'}},
    '/products/industries/pharma-analytics': {page: '/single-industries', query: {id: 'pharma-analytics'}},
    '/products/industries/research-and-development-analytics': {
      page: '/single-industries',
      query: {id: 'research-and-development-analytics'}
    },
    // Customer Stories
    '/products/enterprise/customer-stories': {page: '/customer-stories'},
    '/products/enterprise/customer-stories/c12-energy': {page: '/single-customer-stories', query: {id: 'c12-energy'}},
    '/products/enterprise/customer-stories/goji': {page: '/single-customer-stories', query: {id: 'goji'}}
  }),
  webpack: (config, {dev}) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        loader: 'ify-loader'
      },
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
            loader: 'fast-sass-loader',
            options: {
              data: '@import "partials/abstract";',
              includePaths: ['./', 'styles', 'node_modules']
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
