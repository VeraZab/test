import React from 'react';
import Layout from 'components/global/layout';
import Hero from './hero';
import Type from 'components/styled/typography';
import PricingDetails from './pricing';
import SupportBanner from 'components/cta-banner/static/support/support-banner';
import { StyledPricing, Plan } from './partials/plans';
import styled, { css } from 'styled-components';
import { CheckIcon } from 'mdi-react';
import { Button } from 'components/styled/button';
import numeral from 'numeral';
const meta = {
  title: 'Pricing and Plans',
  description:
    'Plotly is free to use for public charts and dashboards. Collaborate on unlimited private charts and dashboards with a paid plan.',
  url: 'https://plot.ly/products/cloud/',
  twitter: {
    label1: 'Most Popular Plan',
    data1: 'Plotly Professional @ $948/year',
  },
};

const PLANS = {
  COMMUNITY: 'plans/community',
  PERSONAL: 'plans/personal',
  PROFESSIONAL: 'plans/professional',
  PRIVATE_CLOUD: 'plans/private_cloud',
  STUDENT: 'plans/student',
};

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

const studentPlan = {
  title: 'Student',
  slug: PLANS.STUDENT,
  cost: 96,
};

const personalPlan = {
  title: 'Personal',
  slug: PLANS.PERSONAL,
  cost: 420,
};

const Plans = ({ items, ...rest }) =>
  items.length ? (
    <StyledPricing.Line header>
      <StyledPricing.Line.Item spacer>&nbsp;</StyledPricing.Line.Item>
      {items.map(({ title, subtitle, slug, cost }, i) => (
        <StyledPricing.Line.Item key={slug} heading>
          <Plan.Name>
            <Type.h4 color="currentColor">{title}</Type.h4>
          </Plan.Name>
          <Plan.Content>
            <Plan.Content.Price>
              <Type.h3>{numeral(cost).format('$0,0')}</Type.h3>
            </Plan.Content.Price>
            <Button primary>Sign Up</Button>
            {/*{subtitle && (*/}
              {/*<Plan.Content.Subtitle>*/}
                {/*<Type.h6 color="currentColor">({subtitle})</Type.h6>*/}
              {/*</Plan.Content.Subtitle>*/}
            {/*)}*/}
          </Plan.Content>
        </StyledPricing.Line.Item>
      ))}
    </StyledPricing.Line>
  ) : null;

const CheckMarkItem = props => (
  <StyledPricing.Line.Item {...props}>
    <CheckIcon color="green" />
  </StyledPricing.Line.Item>
);

const renderPlanCheckMarks = (plans, feature) =>
  plans.map(plan => {
    console.log(plan.slug);
    return !!feature.plans.find(featurePlan => featurePlan === plan.slug) ? (
      <CheckMarkItem />
    ) : (
      <StyledPricing.Line.Item />
    );
  });

const Features = ({ items, plans, ...rest }) =>
  items.length ? (
    <StyledPricing.Rows>
      {items.map((feature, i) => {
        return (
          <StyledPricing.Line key={i} row>
            <StyledPricing.Line.Item label>
              {feature.value}
            </StyledPricing.Line.Item>
            {renderPlanCheckMarks(plans, feature)}
          </StyledPricing.Line>
        );
      })}
    </StyledPricing.Rows>
  ) : null;

export default class CloudPricing extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    plan: personalPlan,
  };

  togglePersonalPlan = () => {
    if (this.state.plan.slug === PLANS.PERSONAL) {
      this.setState({
        plan: studentPlan,
      });
    } else {
      this.setState({
        plan: personalPlan,
      });
    }
  };

  plans = [
    {
      title: 'Community',
      slug: PLANS.COMMUNITY,
      cost: 0,
    },
    { ...this.state.plan },
    {
      title: 'Professional',
      slug: PLANS.PROFESSIONAL,
      cost: 840,
    },
    {
      title: 'Private Cloud',
      subtitle: 'comes with 5 Pro accounts',
      slug: PLANS.PRIVATE_CLOUD,
      cost: 9960,
    },
  ];

  static async getInitialProps({ req, pathname }) {
    return { pathname: (req && req.url) || pathname };
  }

  render() {
    return (
      <Layout meta={meta} pathname={this.props.pathname}>
        <Hero />
        <StyledPricing>
          <Plans items={this.plans} />
          <Features items={features} plans={this.plans} />
        </StyledPricing>
        {/*<PricingDetails />*/}
        <SupportBanner />
      </Layout>
    );
  }
}
