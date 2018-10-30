# French Pages

At build time, pages in both French and English are fetched in `/lib/fetchData.js`.

To add a French version to an already published page, you first have to use the Prismic.io GUI to recreate the page structure with French text.

Then, add a route in `next.config.js` which points to the translated page's URL.

For example, the French version of the careers page is `/compagnie/carrieres/fr`.

Finally, you have to localize the component which renders your new slice.

Currently, this is being done using ternary operators in the rendering component.

For exapmle, `components/prismic/slices/jobs/index.js`.
