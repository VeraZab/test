import React from 'react';
import Layout from 'components/global/layout';
import Hero from './hero';
import Type from 'components/styled/typography';
import SupportBanner from 'components/cta-banner/static/support/support-banner';
import {offset, Plan, StyledPricing} from './partials/plans';
import {CheckIcon, ChevronLeftIcon, ChevronRightIcon, CloseIcon} from 'mdi-react';
import {Button} from 'components/styled/button';
import numeral from 'numeral';
import {features, PLANS, PLANS_TO_HIDE} from './data/new';
import {fetchData} from 'lib/fetchData';
import getCookies from 'next-cookies';

const filteredAmount = items =>
  items.filter(item => PLANS_TO_HIDE.find(hide => hide !== item.slug)).length + 1;

const Plans = ({items, showing, navigation, ...rest}) =>
  items.length ? (
    <StyledPricing.Line header {...rest} amount={filteredAmount(items)}>
      <StyledPricing.Navigation>{navigation}</StyledPricing.Navigation>
      <StyledPricing.Line.Item spacer>&nbsp;</StyledPricing.Line.Item>
      {items.map(
        ({title, tooltip, slug, cost, subtitle, link}, i) =>
          PLANS_TO_HIDE.find(hide => hide !== slug) && (
            <>
              <StyledPricing.Line.Item key={i} heading showing={i === showing}>
                <Plan.Name onClick={tooltip && tooltip.onClick ? () => tooltip.onClick() : null}>
                  <Type.h4 color="currentColor">{title}</Type.h4>
                </Plan.Name>
                <Plan.Content>
                  <Plan.Content.Price>
                    <Type.h3>{cost ? numeral(cost).format('$0,0') : 'Free'}</Type.h3>
                    {subtitle ? (
                      <small style={{textAlign: 'center', lineHeight: 1.8, paddingTop: '10px'}}>
                        {subtitle}
                      </small>
                    ) : null}
                  </Plan.Content.Price>
                  <Button primary href={link} target="_blank">
                    Sign Up
                  </Button>
                </Plan.Content>
              </StyledPricing.Line.Item>
            </>
          )
      )}
    </StyledPricing.Line>
  ) : null;

const CheckMarkItem = props => (
  <StyledPricing.Line.Item {...props}>
    <CheckIcon color="#119dff" />
  </StyledPricing.Line.Item>
);

const NoMarkItem = props => (
  <StyledPricing.Line.Item {...props} mobileOnlyIcon>
    <CloseIcon color="#a2b1c6" />
  </StyledPricing.Line.Item>
);

const renderPlanCheckMarks = (plans, feature, showing) =>
  plans.map((plan, i) => {
    if (PLANS_TO_HIDE.find(hide => hide !== plan.slug)) {
      if (feature.plans.find(featurePlan => featurePlan === plan.slug)) {
        return <CheckMarkItem showing={i === showing} />;
      } else {
        return <NoMarkItem showing={i === showing} />;
      }
    } else {
      return null;
    }
  });

const Features = ({items, plans, showing, ...rest}) =>
  items.length ? (
    <StyledPricing.Rows {...rest}>
      {items.map((feature, i) => {
        return (
          <StyledPricing.Line key={i} row amount={filteredAmount(plans)}>
            <StyledPricing.Line.Item label>{feature.value}</StyledPricing.Line.Item>
            {renderPlanCheckMarks(plans, feature, showing)}
          </StyledPricing.Line>
        );
      })}
    </StyledPricing.Rows>
  ) : null;

export default class CloudPricing extends React.Component {
  togglePersonalPlan = () => {
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

  updatePlanInViewIndex = planInViewIndex =>
    this.setState({
      planInViewIndex,
    });

  nextPlan = total => {
    const current = this.state.planInViewIndex;
    if (current === total - 1) {
      this.updatePlanInViewIndex(0);
    } else {
      this.updatePlanInViewIndex(current + 1);
    }
  };

  prevPlan = total => {
    const current = this.state.planInViewIndex;
    if (current === 0) {
      this.updatePlanInViewIndex(total - 1);
    } else {
      this.updatePlanInViewIndex(current - 1);
    }
  };

  constructor(props) {
    super(props);
  }

  static async getInitialProps({req, pathname}) {
    return {pathname: (req && req.url) || pathname};
  }

  render() {
    const plans = [
      {
        title: 'Professional',
        slug: PLANS.PROFESSIONAL,
        cost: 840,
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=professional',
        subtitle: <>USD per year, per user</>,
      },
      {
        title: 'Personal',
        slug: PLANS.PERSONAL,
        subtitle: <>USD per year, per user</>,
        cost: 420,
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=personal',
      },
      {
        title: 'Student',
        slug: PLANS.STUDENT,
        subtitle: <>USD per year, per user</>,
        cost: 99,
        link: 'https://plot.ly/settings/subscription?modal=subscription&plan=student',
      },
      {
        title: 'Community',
        slug: PLANS.COMMUNITY,
        cost: 0,
        link: 'https://plot.ly/accounts/login/?action=signup#/',
        subtitle: <>&nbsp;</>,
      },
    ];

    return (
      <Layout meta={this.props.meta} pathname={this.props.pathname} nav={this.props.nav}>
        <Hero />
        <StyledPricing>
          <Plans
            items={plans}
            showing={this.state.planInViewIndex}
            navigation={
              <>
                <StyledPricing.Navigation.Button
                  onClick={() => this.prevPlan(filteredAmount(plans) - 1)}
                >
                  <ChevronLeftIcon color="currentColor" />
                </StyledPricing.Navigation.Button>
                <StyledPricing.Navigation.Button
                  onClick={() => this.nextPlan(filteredAmount(plans) - 1)}
                >
                  <ChevronRightIcon color="currentColor" />
                </StyledPricing.Navigation.Button>
              </>
            }
          />
          <Features items={features} plans={plans} showing={this.state.planInViewIndex} />
        </StyledPricing>
        <SupportBanner
          style={{
            transform: `translateY(-${offset + 1}px)`,
          }}
        />
      </Layout>
    );
  }
}

CloudPricing.getInitialProps = async context => {
  const meta = {
    title: 'Pricing and Plans',
    description:
      'Plotly is free to use for public charts and dashboards. Collaborate on unlimited private charts and dashboards with a paid plan.',
    url: 'https://plot.ly/products/cloud/',
    twitter: {
      label1: 'Most Popular Plan',
      data1: 'Plotly Professional @ $840/year',
    },
    image:
      'https://prismic-io.s3.amazonaws.com/plotly%2F965c3266-e1b3-4935-9ea1-f2c05f00e6b3_chart-studio-logo.png',
  };
  const response = await fetchData(getCookies(context)['io.prismic.preview']);
  const nav = response.find(doc => doc.type === 'nav');

  return {
    nav,
    meta,
  };
};
