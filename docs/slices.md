# Slices

All of the slices for every page in Prismic are fetched at the same time through an API call in `/lib/fetchData.js` at build time.

When a new page is being built at run-time, the global Prismic slices object is filtered for the slices associated with that page.

Those slices are then passed as `props` to the `<Slices>` component, which renders them.

To see which slices make up a page, uncomment line 29 in `/pages/p.js` and look at your console.

The `<Slices>` component can render 12 different kinds of slices.

The first 7 are rendered using the `<ContentSection>` component:

1. Graphic with Text - Logos
2. Graphic with Text - Slides
3. Content Section - Advanced Cards
4. Content Section - iFrame
5. Content Section - Code Explorer
6. Content Section - Pricing
7. Content Section - GitHub Stars

The other 5 are rendered in their own components:
8. Content Section - CS Tabs
`<TabsSlice>`
9. Logos
`<LogosSlice>`
10. Jobs
`<Jobs>`
11. Image
`<ImageSlice>`
12. Client Quotes
`<Quotes>`

To add a new slice type, you have to first create the new custom-type in Prismic.

Once you have added your new slice to a published page in Prismic, you need to do two things.

First, create a new component called `<YourNewSlice>` in `components/prismic/slices`.

Your component's styles should be in a separate `.scss` file.

 Second, modify `components/prismic/slices/index.js` in order to render your new component.

Add
```
else if (slice.slice_type === 'your_new_slice_name') {
              return <YourNewSlice data={slice} />;
            }
```
