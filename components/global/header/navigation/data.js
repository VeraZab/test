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
                pathname: '/p',
                query: {
                  slug: 'chart-studio',
                },
              },
            },
            {
              label: 'Dashboards & Reporting',
              as: 'dashboards',
              href: {
                pathname: '/p',
                query: {
                  slug: 'dashboards-and-reporting',
                },
              },
            },
            {
              label: 'Slide Decks',
              as: 'powerpoint-online',
              href: {
                pathname: '/p',
                query: {
                  slug: 'slide-decks',
                },
              },
            },
            {
              label: 'Falcon SQL Client (Free)',
              as: 'database-connectors',
              href: {
                pathname: '/p',
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
]
