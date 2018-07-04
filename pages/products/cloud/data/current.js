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
    value: `25 public charts`,
    plans: [
      PLANS.COMMUNITY,
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Unlimited public charts`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `800 private charts`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Unlimited private charts`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `Unlimited dashboards`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `No watermark on charts`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
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
    value: `24h Chat support`,
    plans: [PLANS.PERSONAL, PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `Phone support`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
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
    value: `1,000 chart and image saves / day`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `10,000 chart and image saves / day`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `25 secret link chart views / day`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Unlimited secret link chart views / day`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `2 collaborators per chart`,
    plans: [
      PLANS.PERSONAL,
      PLANS.PROFESSIONAL,
      PLANS.PRIVATE_CLOUD,
      PLANS.STUDENT,
    ],
  },
  {
    value: `Unlimited collaborators per chart`,
    plans: [PLANS.PROFESSIONAL, PLANS.PRIVATE_CLOUD],
  },
  {
    value: `Dedicated, private Plotly server on AWS, Google Cloud, or Azure`,
    plans: [PLANS.PRIVATE_CLOUD],
  },
  {
    value: `Unlimited Dash apps and app viewers ($5,000 add-on)`,
    plans: [PLANS.PRIVATE_CLOUD],
  },
  {
    value: `LDAP authentication`,
    plans: [PLANS.PRIVATE_CLOUD],
  },
  {
    value: `LDAP group permissions control`,
    plans: [PLANS.PRIVATE_CLOUD],
  },
  {
    value: `Falcon server for data warehouse connection`,
    plans: [PLANS.PRIVATE_CLOUD],
  },
];

export { PLANS, PLANS_TO_HIDE, features };
