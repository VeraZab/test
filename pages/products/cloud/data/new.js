const PLANS = {
  COMMUNITY: 'plans/community',
  PERSONAL: 'plans/personal',
  PROFESSIONAL: 'plans/professional',
  PRIVATE_CLOUD: 'plans/private_cloud',
  STUDENT: 'plans/student',
};

/**
 * To hide a plan, add its slug here
 */
const PLANS_TO_HIDE = [PLANS.PRIVATE_CLOUD];

const features = [
  {
    value: `Public charts & dashboards`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Private charts & dashboards`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Live update charts with Python, R, or SQL`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `25 charts`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `2500 charts`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Unlimited charts`,
    plans: [
      PLANS.PROFESSIONAL,
    ],
  },
  {
    value: <>Export to PNG & JPG</>,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: <>Export to <br /> SVG, EPS, HTML & PDF</>,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `500KB datasets`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `10MB datasets`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `30MB datasets`,
    plans: [
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
    ],
  },
  {
    value:  <>100 chart saves & exports<br/> per 24h period</>,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value:  <>1,000 chart saves & exports<br/> per 24h period</>,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: <>10,000 chart saves & exports<br/> per 24h period</>,
    plans: [
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
    ],
  },
  {
    value: <>500 embedded views <br />per 24h period</>,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: <>Unlimited embedded views</>,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Community support`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: <>24h Chat support<br />including Falcon SQL Client</>,
    plans: [PLANS.PERSONAL, PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: <>Phone support<br />including Falcon SQL Client</>,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: <>Support for Falcon SQL Client persistent connections
    or non-SQL databases</>,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
];

      // {
      //   title: 'Private Cloud',
      //   slug: PLANS.PRIVATE_CLOUD,
      //   cost: 9960,
      //   link: 'https://plot.ly/products/on-premise/',
      //   subtitle: <>per year,<br/>comes with 5 Pro. users</>,
      // },

export { PLANS, PLANS_TO_HIDE, features };
