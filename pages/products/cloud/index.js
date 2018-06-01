import React from 'react';
import Layout from 'components/global/layout';
import Hero from './hero';
import Type from 'components/styled/typography';
import SupportBanner from 'components/cta-banner/static/support/support-banner';
import { Plan, StyledPricing } from './partials/plans';
import { CheckIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon, QuestionMarkCircleIcon, SchoolIcon } from 'mdi-react';
import { Button } from 'components/styled/button';
import numeral from 'numeral';
import Tooltip from '@atlaskit/tooltip';

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


const Plans = ({items, showing, navigation, ...rest}) =>
  items.length ? (
    <StyledPricing.Line header { ...rest }>
      <StyledPricing.Navigation>{ navigation }</StyledPricing.Navigation>
      <StyledPricing.Line.Item spacer>&nbsp;</StyledPricing.Line.Item>
      { items.map(({title, subtitle, slug, cost}, i) => (
        <>
          <StyledPricing.Line.Item key={ i } heading showing={ i === showing }>
            <Plan.Name onClick={ subtitle && subtitle.onClick ? () => subtitle.onClick() : null }>
              <Type.h4 color="currentColor">{ title }</Type.h4>
              { subtitle && (
                <Subtitle { ...subtitle } />
              ) }
            </Plan.Name>
            <Plan.Content>
              <Plan.Content.Price>
                <Type.h3>{ numeral(cost).format('$0,0') }</Type.h3>
                <small>per year, per user</small>
              </Plan.Content.Price>
              <Button primary>Sign Up</Button>
            </Plan.Content>
          </StyledPricing.Line.Item>
        </>
      )) }
    </StyledPricing.Line>
  ) : null;

const CheckMarkItem = props => (
  <StyledPricing.Line.Item { ...props }>
    <CheckIcon color="green"/>
  </StyledPricing.Line.Item>
);
const NoMarkItem = props => (
  <StyledPricing.Line.Item { ...props }>
    <CloseIcon color="red"/>
  </StyledPricing.Line.Item>
);

const Subtitle = ({value, icon, onClick, ...rest}) => {
  const Icon = icon ? icon : QuestionMarkCircleIcon
  const handleClick = () => onClick ? () => onClick : () => null
  return <Plan.Content.Subtitle onClick={ () => handleClick() } { ...rest }>
    <Tooltip content={ value }>
      <Icon color="white"/>
    </Tooltip>
  </Plan.Content.Subtitle>

}
const renderPlanCheckMarks = (plans, feature, showing) =>
  plans.map((plan, i) => {
    return !!feature.plans.find(featurePlan => featurePlan === plan.slug) ? (
      <CheckMarkItem showing={ i === showing }/>
    ) : (
      <NoMarkItem showing={ i === showing }/>
    );
  });

const Features = ({items, plans, showing, ...rest}) =>
  items.length ? (
    <StyledPricing.Rows>
      { items.map((feature, i) => {
        return (
          <StyledPricing.Line key={ i } row>
            <StyledPricing.Line.Item label>
              { feature.value }
            </StyledPricing.Line.Item>
            { renderPlanCheckMarks(plans, feature, showing) }
          </StyledPricing.Line>
        );
      }) }
    </StyledPricing.Rows>
  ) : null;

export default class CloudPricing extends React.Component {
  togglePersonalPlan = () => {
    console.log('toggle')
    if (this.state.plan === PLANS.PERSONAL) {
      this.setState({
        plan: PLANS.STUDENT,
      });
    } else {
      this.setState({
        plan: PLANS.PERSONAL,
      });
    }
  };


  state = {
    plan: PLANS.PERSONAL,
    planInViewIndex: 1,
  };

  updatePlanInViewIndex = (planInViewIndex) => this.setState({
    planInViewIndex
  })

  nextPlan = (total) => {
    const current = this.state.planInViewIndex
    if (current === total - 1) {
      this.updatePlanInViewIndex(0)
    } else {
      this.updatePlanInViewIndex(current + 1)
    }
  }

  prevPlan = (total) => {
    const current = this.state.planInViewIndex
    if (current === 0) {
      this.updatePlanInViewIndex(total - 1)
    } else {
      this.updatePlanInViewIndex(current - 1)
    }
  }

  constructor(props) {
    super(props);
  }

  static async getInitialProps({req, pathname}) {
    return {pathname: (req && req.url) || pathname};
  }

  render() {

    const isPersonalPlan = this.state.plan === PLANS.PERSONAL

    const dynamicPlan = {
      title: isPersonalPlan ? 'Personal' : 'Student',
      slug: isPersonalPlan ? PLANS.PERSONAL : PLANS.STUDENT,
      subtitle: {
        value: 'Toggle Student Pricing',
        icon: SchoolIcon,
        onClick: () => this.togglePersonalPlan()
      },
      cost: isPersonalPlan ? 420 : 96,
      link: isPersonalPlan ? 'https://plot.ly/settings/subscription?modal=subscription&plan=personal' : 'https://plot.ly/settings/subscription?modal=subscription&plan=student',
    }
    const plans = [
      {
        title: 'Community',
        slug: PLANS.COMMUNITY,
        cost: 0,
        signUpLink: 'https://plot.ly/accounts/login/?action=signup#/'
      },
      {...dynamicPlan},
      {
        title: 'Professional',
        slug: PLANS.PROFESSIONAL,
        cost: 840,
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=professional'
      },
      {
        title: 'Private Cloud',
        subtitle: {
          value: 'Comes with 5 Pro accounts'
        },
        slug: PLANS.PRIVATE_CLOUD,
        cost: 9960,
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=private_cloud'
      },
    ];
    return (
      <Layout meta={ meta } pathname={ this.props.pathname }>
        <Hero/>
        <StyledPricing>
          <Plans items={ plans } showing={ this.state.planInViewIndex }
                 navigation={ <>
                   <StyledPricing.Navigation.Button
                     onClick={ () => this.prevPlan(plans.length) }><ChevronLeftIcon
                     color="currentColor"/></StyledPricing.Navigation.Button>
                   <StyledPricing.Navigation.Button
                     onClick={ () => this.nextPlan(plans.length) }><ChevronRightIcon
                     color="currentColor"/></StyledPricing.Navigation.Button>
                 </> }/>
          <Features items={ features } plans={ plans } showing={ this.state.planInViewIndex }/>
        </StyledPricing>
        { /*<PricingDetails />*/ }
        <SupportBanner style={ {
          transform: 'translateY(-216px)'
        } }/>
      </Layout>
    );
  }
}
