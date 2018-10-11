# Plotly Marketing Pages (next.js)

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

## Git Tips

1. Always make sure your feature branch is up to date with the `master` branch of the repo in order to avoid having to tediously resolve conflicts in your PR. For the same reason, don't create feature branches off of feature branches- always branch off of the latest version of `master`.

3. Use `git rebase master -i` to squash commits for readability during PR review or to drop commits as needed during feature development. FYI: `rebase` enters you into VIM. Hit `i` to insert a cursor into the document. Rebase, then hit `esc`, then `:wq`, then `enter`. Use `git push -f` to force push a rebased commit history to your feature branch.

## Using Prismic.io

If the page you want to edit has a `page:` key whose value is `/prismic-generator` in `/next.config.js`, then you must edit its copy and structure in Prismic.io.

```
@username: prismic@plot.ly
@password: plotly_cms!!
```
[Log into Prismic.io Dashboard](https://plotly.prismic.io/documents/working/).

For more information on working with Prismic slices, see `/docs/slices.md`.

After making changes to the content on Prismic.io, then you'll need to:
1. Save & publish your changes -  at this point your changes will be visible in your local dev environment.
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

## Updating the Newsroom

To add a new article/press release to `/newsroom`:

1. Create a copy of the `/pages/newsroom/template.js` file in the same directory and rename it. The name of the file will be the URL of the page.

2. In the new `.js` file, change the title and fill in the post HTML.

4. Add the post's information to the articles object in `pages/newsroom/main.js`.

## Deployment

1. Make a pull request against the `master` branch of plotly/plotly-next.

2. Ensure that your change passes the CircleCI and Percy tests integrated into GitHub. Approve visual diffs in Percy.

3. Request a code review from an authorized user. Follow the [Code Review Checklist](https://github.com/plotly/dev-docs/blob/master/basics/code-review-checklist.md).

4. After your pull request is reviewed and approved, merge your changes to the `master` branch of plotly/plotly-next.

5. Merge the `master` branch of plotly/plotly-next into the `production` branch. There is no need to review the `master` -> `production` merge. Note: merging to the `production` branch will automatically deploy the changes to the plotly/plotly-next`gh-pages` branch via CircleCI. At this point GitHub pages will begin serving your changes live.
