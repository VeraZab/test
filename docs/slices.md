# Slices

Each page in Prismic.io is made up of slices. For example, here are the slices for the homepage:

```
[ { slice_type: 'quotes_logos',
    slice_label: null,
    items: [ [Object], [Object], [Object], [Object] ],
    primary: { title1: [Array] } },

  { slice_type: 'cs-tabs',
    slice_label: null,
    items: [ [Object], [Object], [Object] ],
    primary: {} },

  { slice_type: 'graphic_with_text',
    slice_label: null,
    items: [ [Object] ],
    primary:
     { published: 'true',
       pretitle: 'Embedded BI',
       title: [Array],
       subtitle: [Array],
       body: [Array],
       body_two: [],
       style: 'graphic_whitelabel',
       layout: 'row-graphic-right',
       alignment: 'left',
       graphic: {},
       graphic_style: 'shadow',
       proportions: '50-50',
       graphic_blend_mode: 'none',
       graphic_background_position: 'top right',
       graphic_background_attachment: 'static',
       graphic_link: [Object],
       graphic_link_caption: null } },

  { slice_type: 'graphic_with_text',
    slice_label: null,
    items: [ [Object] ],
    primary:
     { published: 'true',
       pretitle: 'Dash',
       title: [Array],
       subtitle: [],
       body: [Array],
       body_two: [],
       style: 'black',
       layout: 'row-auto',
       alignment: 'left',
       graphic: [Object],
       graphic_style: 'bleed',
       proportions: '50-50',
       graphic_blend_mode: 'none',
       graphic_background_position: null,
       graphic_background_attachment: 'static',
       graphic_link: [Object],
       graphic_link_caption: null } },

  { slice_type: 'cs-github-stars',
    slice_label: null,
    items: [ [Object], [Object], [Object], [Object] ],
    primary:
     { pretitle: 'Open-Source',
       title: [Array],
       subtitle: [Array],
       body: [Array],
       body_two: [],
       style: 'gradient_dark-blue',
       layout: 'row-auto',
       alignment: 'left',
       graphic: [Object],
       graphic_style: 'no-blur',
       graphic_background_position: null,
       graphic_background_attachment: 'static',
       graphic_link: [Object],
       graphic_link_caption: null,
       button_one_label: 'Help Steer the Roadmap',
       button_one_link: [Object],
       button_one_style: 'secondary',
       button_two_label: null,
       button_two_link: [Object],
       button_two_style: 'primary' } },

  { slice_type: 'cs-code-explorer',
    slice_label: null,
    items: [ [Object], [Object], [Object], [Object], [Object] ],
    primary:
     { pretitle: null,
       title: [Array],
       subtitle: [],
       body: [Array],
       body_two: [],
       style: 'default',
       layout: 'column-graphic-bottom',
       alignment: 'center',
       graphic: {},
       graphic_style: 'shadow',
       graphic_background_position: null,
       graphic_background_attachment: 'static',
       graphic_link: [Object],
       graphic_link_caption: null,
       button_one_label: 'Python graphing library',
       button_one_link: [Object],
       button_one_style: 'secondary',
       button_two_label: 'Get Started with Dash',
       button_two_link: [Object],
       button_two_style: 'secondary' } },

  { slice_type: 'graphic_with_text',
    slice_label: null,
    items: [ [Object], [Object] ],
    primary:
     { published: 'true',
       pretitle: null,
       title: [Array],
       subtitle: [],
       body: [Array],
       body_two: [],
       style: 'black',
       layout: 'column-graphic-bottom',
       alignment: 'center',
       graphic: [Object],
       graphic_style: 'bleed',
       proportions: '50-50',
       graphic_blend_mode: 'none',
       graphic_background_position: null,
       graphic_background_attachment: 'static',
       graphic_link: [Object],
       graphic_link_caption: null } } ]
```

There are several different types of slices.

1. Quotes
![alt text](https://s3-us-west-1.amazonaws.com/plotly-tutorials/slices_examples/quotes.png "Quotes Slice")

2. CS-Tabs
3. Graphic with Text
4. CS-GitHubStars
5. CS-CodeExplorer

slice.slice_type === 'graphic_with_text' ||
              slice.slice_type === 'graphic_with_text_logos' ||
              slice.slice_type === 'graphic_with_text_slides' ||
              slice.slice_type === 'cs-advanced-cards' ||
              slice.slice_type === 'cs-iframe' ||
              slice.slice_type === 'cs-code-explorer' ||
              slice.slice_type === 'cs-pricing' ||
              slice.slice_type === 'cs-github-stars'
            ) {
              return <ContentSection key={i} data={slice} />;
            } else if (slice.slice_type === 'cs-tabs') {
              return <TabsSlice key={shortid.generate()} data={slice} />;
            } else if (slice.slice_type === 'logos') {
              return <LogosSlice key={shortid.generate()} data={slice} />;
            } else if (slice.slice_type === 'jobs') {
              return <Jobs {...slice} key={i} />;
            } else if (slice.slice_type === 'image') {
              return <ImageSectionSlice {...slice} key={i} />;
            } else if (slice.slice_type === 'quotes_logos') {
              return <Quotes data={slice} />;

