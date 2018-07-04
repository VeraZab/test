# Plotly Marketing Pages (next.js)

## Sitemap

****/****
- https://plotly.github.io/plotly-next/
- https://plotly.github.io/plotly-next/online-chart-maker/
- https://plotly.github.io/plotly-next/dashboards/
- https://plotly.github.io/plotly-next/powerpoint-online/
- https://plotly.github.io/plotly-next/database-connectors/
- https://plotly.github.io/plotly-next/webinars/
- https://plotly.github.io/plotly-next/export/
- https://plotly.github.io/plotly-next/plotly-js-scientific-d3-charting-library/
- https://plotly.github.io/plotly-next/d3-js-for-r-and-shiny-charts/
- https://plotly.github.io/plotly-next/d3-js-for-python-and-pandas-charts/

****/products/****
- https://plotly.github.io/plotly-next/products/cloud/
- https://plotly.github.io/plotly-next/products/on-premise/
- https://plotly.github.io/plotly-next/products/consulting-and-oem/
- https://plotly.github.io/plotly-next/products/dash/

****/products/industries/****
- https://plotly.github.io/plotly-next/products/industries/
- https://plotly.github.io/plotly-next/products/industries/finance
- https://plotly.github.io/plotly-next/products/industries/aerospace
- https://plotly.github.io/plotly-next/products/industries/automotive-analytics
- https://plotly.github.io/plotly-next/products/industries/business-intelligence
- https://plotly.github.io/plotly-next/products/industries/energy-analytics
- https://plotly.github.io/plotly-next/products/industries/government-and-public-analytics
- https://plotly.github.io/plotly-next/products/industries/insurance
- https://plotly.github.io/plotly-next/products/industries/journalism
- https://plotly.github.io/plotly-next/products/industries/pharma-analytics
- https://plotly.github.io/plotly-next/products/industries/research-and-development-analytics

****/products/enterprise/customer-stories/****
- https://plotly.github.io/plotly-next/products/enterprise/customer-stories/
- https://plotly.github.io/plotly-next/products/enterprise/customer-stories/c12-energy
- https://plotly.github.io/plotly-next/products/enterprise/customer-stories/goji

## Development

Clone the repo and run `yarn install` to install all of the dependencies. 

Run `yarn run dev` to enter development mode. This will launch a server for you to actively develop with hot module reloading and live reloading of styles.

## Deployment

If you make changes to the actual code, make a PR. PR's will be merged to `master` and then to `production`. Merging to the `production` branch will automatically deploy the changes to the `gh-pages` branch via circleci.

If you only make changes to the content on prismic.io, then you'll need to publish on prismic.io and then manually rebuild the `production` branch on circleci (https://circleci.com/gh/plotly/plotly-next/tree/production). This will get the changes from prismic.io and redeploy to `gh-pages`.

## Next.js

For more documentation about next.js, visit the [repo here](https://github.com/zeit/next.js). Learn more about the creators [here](https://zeit.co).
