# Plotly Marketing Pages (next.js)

## Sitemap

/ |
------------ |
https://plotly.github.io/plotly-next/ |
https://plotly.github.io/plotly-next/online-chart-maker/ |
https://plotly.github.io/plotly-next/dashboards/ |
https://plotly.github.io/plotly-next/powerpoint-online/ |
https://plotly.github.io/plotly-next/database-connectors/ |
https://plotly.github.io/plotly-next/webinars/ |
https://plotly.github.io/plotly-next/export/ |
https://plotly.github.io/plotly-next/plotly-js-scientific-d3-charting-library/ |
https://plotly.github.io/plotly-next/d3-js-for-r-and-shiny-charts/ |
https://plotly.github.io/plotly-next/d3-js-for-python-and-pandas-charts/ |

/products/ |
------------ |
https://plotly.github.io/plotly-next/products/cloud/ |
https://plotly.github.io/plotly-next/products/on-premise/|
https://plotly.github.io/plotly-next/products/consulting-and-oem/ |
https://plotly.github.io/plotly-next/products/dash/ |
https://plotly.github.io/plotly-next/dash/pricing/ |

/products/industries/ |
---------------------- |
https://plotly.github.io/plotly-next/products/industries/ |
https://plotly.github.io/plotly-next/products/industries/finance |
https://plotly.github.io/plotly-next/products/industries/aerospace |
https://plotly.github.io/plotly-next/products/industries/automotive-analytics |
https://plotly.github.io/plotly-next/products/industries/business-intelligence |
https://plotly.github.io/plotly-next/products/industries/energy-analytics |
https://plotly.github.io/plotly-next/products/industries/government-and-public-analytics |
https://plotly.github.io/plotly-next/products/industries/insurance |
https://plotly.github.io/plotly-next/products/industries/journalism |
https://plotly.github.io/plotly-next/products/industries/pharma-analytics |
https://plotly.github.io/plotly-next/products/industries/research-and-development-analytics |

/products/enterprise/customer-stories/ |
--------------------------------------- |
https://plotly.github.io/plotly-next/products/enterprise/customer-stories/ |
https://plotly.github.io/plotly-next/products/enterprise/customer-stories/c12-energy |
https://plotly.github.io/plotly-next/products/enterprise/customer-stories/goji |

## Setting Up a Development Environment

0. Note: You must have Node version 9 installed in order to build the site. Use [N](https://github.com/tj/n#installingactivating-versions) to interactively manage Node versions in your development environment.

1. Clone the plotly/plotly-next repo. As this is a private repo, you must be logged into a GitHub account with read access to the repo.
```
$ git clone https://github.com/plotly/plotly-next.git # or use SSH
$ cd plotly-next
$ git fetch origin
```

2. Install the site's dependencies on your local machine.
```
$ yarn install
```

3. Launch a test server with hot module reloading and live reloading of styles.
```
$ yarn run dev
```

## Deployment

1. Make a pull request against the `master` branch of plotly/plotly-next.

2. Ensure that your change passes the CircleCI and Percy tests integrated into GitHub. Approve visual diffs in Percy.

3. Request a code review from an authorized user. Follow the [Code Review Checklist](https://github.com/plotly/dev-docs/blob/master/basics/code-review-checklist.md).

4. After your pull request is reviewed and approved, merge your changes to the `master` branch of plotly/plotly-next.

5. Merge the `master` branch of plotly/plotly-next into the `production` branch. There is no need to review the `master` -> `production` merge. Note: merging to the `production` branch will automatically deploy the changes to the plotly/plotly-next`gh-pages` branch via CircleCI. At this point GitHub pages will begin serving your changes live.

### A Note on Prismic.io Integration

Currently, much of the site's copy and image content is editable through the Prismic.io headless content management system. [Log into Prismic.io Dashboard](https://plotly.prismic.io/documents/working/).

```
@username: prismic@plot.ly
@password: plotly_cms!!
```

However, if you only make changes to the content on Prismic.io, then you'll need to publish those changes on Prismic.io and then manually rebuild the `production` branch on CircleCI (https://circleci.com/gh/plotly/plotly-next/tree/production). This will get the changes from Prismic.io and redeploy to the `gh-pages` branch on plotly/plotly-next.

## Next.js

For more documentation about next.js, visit the [repo here](https://github.com/zeit/next.js). Learn more about the creators [here](https://zeit.co).

## GitHub Pages

For more documentation about GitHub Pages, visit the [docs](https://help.github.com/categories/github-pages-basics/).

## Prismic.io

For more documentation about Prismic.io, visit the [docs](https://prismic.io/docs).

## Percy.io

For more documentation about Percy.io, visit the [docs](https://docs.percy.io/docs).

## CircleCI

For more documentation about CircleCI, visit the [docs](https://circleci.com/docs/2.0/).

## Updating the Newsroom

To add a new article to `/newsroom`:

1. Create a copy of the `/pages/newsroom/template.js` file in the same directory and rename it. The name of the file will be the URL of the page.

2. In the new `.js` file, change the title and fill in the post HTML.

4. Add the post's information to the articles object in `pages/newsroom/main.js`.
