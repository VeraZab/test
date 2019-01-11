const data = [
  {
    label: 'Products',
    as: null,
    href: null,
    submenu: {
      sections: [
        {
          label: 'Business Intelligence',
          items: [
            {
              label: 'Chart Studio',
              as: 'chart-studio',
              href: {
                pathname: '/prismic-generator',
                query: {
                  slug: 'chart-studio',
                },
              },
            },
            {
              label: 'Dashboards & Reporting',
              as: 'dashboards',
              href: {
                pathname: '/prismic-generator',
                query: {
                  slug: 'dashboards-and-reporting',
                },
              },
            },
            {
              label: 'Slide Decks',
              as: 'powerpoint-online',
              href: {
                pathname: '/prismic-generator',
                query: {
                  slug: 'slide-decks',
                },
              },
            },
            {
              label: 'Falcon SQL Client (Free)',
              as: 'database-connectors',
              href: {
                pathname: '/prismic-generator',
                query: {
                  slug: 'falcon',
                },
              },
            },
          ],
        },
      ],
    },
  },
];
