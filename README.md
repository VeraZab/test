## ***NOTE: If you are looking for the repo which hosts https://plot.ly/graphing-libraries or https://plotly.github.io, YOU ARE IN THE WRONG PLACE***.

### See https://github.com/plotly/documentation or https://github.com/plotly/plotly.github.io.

### This repository hosts https://plot.ly.

## 1. Application Structure

The code in this repository:

1. fetches page data from Prismic's REST API using [promises and async/await](https://javascript.info/async-await) syntax (see [`/lib/fetchData.js`](https://github.com/plotly/plotly-next/blob/master/lib/fetchData.js) and [How to Query the Prismic API from React](https://prismic.io/docs/reactjs/query-the-api/how-to-query-the-api))

2. uses [JSX](https://reactjs.org/docs/jsx-in-depth.html) and [SCSS](https://sass-lang.com/guide) to markup, style, and render pages (see [`/components/prismic/slices/index.js`](https://github.com/plotly/plotly-next/blob/master/components/prismic/slices/index.js), [`/pages/prismic-generator.js`](https://github.com/plotly/plotly-next/blob/master/pages/prismic-generator.js) and the [`styles`](https://github.com/plotly/plotly-next/tree/master/styles) folder)

3. exports a static HTML app ([`next export`](https://nextjs.org/learn/excel/static-html-export))

4. runs tests in [CircleCI](https://circleci.com/) & [Percy](https://percy.io/) (see [`.circleci/config.yml`](https://github.com/plotly/plotly-next/blob/master/.circleci/config.yml))

5. deploys pages to [GitHub Pages](https://pages.github.com/) (see [`/scripts/deploy-ghpages.sh`](https://github.com/plotly/plotly-next/blob/master/scripts/deploy-ghpages.sh))

[Webpack](https://webpack.js.org/) is used for bundling (see [`next.config.js`](https://github.com/plotly/plotly-next/blob/master/next.config.js)) and [Babel](https://babeljs.io/) is used for JavaScript transpilation (see [`.babelrc`](https://github.com/plotly/plotly-next/blob/master/.babelrc)).

## Setting Up a Development Environment

0. Note: You must have Node version 9 installed in order to build the site. Use [N](https://github.com/tj/n#installingactivating-versions) to interactively manage Node versions in your development environment.

1. Clone the plotly/plotly-next repo. As this is a private repo, you must be logged into a GitHub account with read access to the repo.
```
$ git clone https://github.com/plotly/plotly-next.git # or use SSH
$ cd plotly-next
$ git fetch origin
```

2. Install the site's dependencies on your local machine. We prefer [yarn](https://yarnpkg.com/) to [npm](https://www.npmjs.com/).
```
$ yarn install
```

3. Launch a test server.
```
$ yarn run dev
```

## 1. Development Workflow
1. Submit an issue.
2. Edit Prismic and/or create a feature branch.
3. Preview in Prismic and/or get a code review.
4. Publish in Prismic and/or merge your feature branch.
5. Rebuild [production branch in CircleCI](https://circleci.com/gh/plotly/plotly-next/tree/production ) (manually if necessary).

##. Prismic Workflow
1. Create a new page or find the page whose content you want to edit.
### NOTE: To create new ways to display content in Prismic, edit the `page` custom type to add a new slice type. *DO NOT CREATE NEW CUSTOM TYPES IN PRISMIC.*
2. Make your changes in the GUI, then `Save`.
3. `Publish` your changes to a new release.
4. Preview the new release in your local dev environment.
5. Iterate steps 3-5.
6. When satisfied with your changes, request a code review.
7. After you recieve a ::dancer::, `Publish` your new release and rebuild the latest successful build of the `production` branch of this GitHub repository in CircleCI => https://circleci.com/gh/plotly/plotly-next/tree/production *This will cause the website to rebuild itself with the latest version of the content published in Prismic.*

To create new ways to display content in Prismic, edit the `page` custom type to add a new slice type.

*DO NOT CREATE NEW CUSTOM TYPES IN PRISMIC.*

## 2. Next.js Routing
0. New URLS need to be added to the `streambed` nginx configuration and this repository's `next.config.js`.

1. Add a new route to `next.config.js`:
```
// New Route
    '/new-route-url': {
      page: '/prismic-generator',
      query: {
        slug: 'new-route-slug',
      },
    },
```
2. Add proxy passes/301/302 redirects as necessary to [the streambed ngnix configuration](https://github.com/plotly/streambed/blob/master/deployment/roles/streambed/templates/nginx-streambed.conf).


## Git Tips

1. Always make sure your feature branch is up to date with the `master` branch of the repo in order to avoid having to tediously resolve conflicts in your PR. For the same reason, don't create feature branches off of feature branches- always branch off of the latest version of `master`.

2. Use `git rebase master -i` to squash commits for readability during PR review or to drop commits as needed during feature development. FYI: By default, `rebase` enters you into VIM. Hit `i` to insert a cursor into the document. Rebase, then hit `esc`, then `:wq`, then `enter`. Use `git push -f` to force push a rebased commit history to your feature branch.

## Using Prismic.io

With the exception of `/products/cloud`, `/products/consulting-and-oem`, and `products/dash`, the content for the pages in this repository live in the Prismic headless content management system.

```
@username: prismic@plot.ly
@password: plotly_cms!!
```
[Log into Prismic.io Dashboard](https://plotly.prismic.io/documents/working/).

After making changes to content in Prismic.io, you'll need to:
1. Save & publish your changes -  at this point your changes will be visible to your local dev environment but will not be live in production.
2. Rebuild the `production` branch on CircleCI (https://circleci.com/gh/plotly/plotly-next/tree/production). Rebuilding forces a fresh API call to Prismic, integrating changes made into the the production version of the site.

## Adding New Pages with the PrismicGenerator component
0. Use the Prismic.io GUI to create/translate a page or create a React component in `/pages`.

1. Add a new route to `next.config.js`
```
// New Route
    '/new-route-url': {
      page: '/prismic-generator',
      query: {
        slug: 'new-route-slug',
      },
    },
```
2. Add a proxy to [the streambed ngnix configuration](https://github.com/plotly/streambed/blob/master/deployment/roles/streambed/templates/nginx-streambed.conf).

## Deploying changes

1. Make a pull request against the `master` branch of plotly/plotly-next.

2. Ensure that your change passes the CircleCI and Percy tests integrated into GitHub. Approve visual diffs in Percy.

3. Request a code review from an authorized user. Follow the [Code Review Checklist](https://github.com/plotly/dev-docs/blob/master/basics/code-review-checklist.md).

4. After your pull request is reviewed and approved, merge your changes to the `master` branch of plotly/plotly-next.

5. Merge the `master` branch of plotly/plotly-next into the `production` branch. There is no need to review the `master` -> `production` merge. Note: merging to the `production` branch will automatically deploy the changes to the plotly/plotly-next`gh-pages` branch via CircleCI. At this point GitHub pages will begin serving your changes live.
