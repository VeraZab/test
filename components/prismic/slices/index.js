/**
 * Slices component
 *
 * This is our component that will parse through an array of
 * slices and render the corresponding slice if it is accounted for.
 */

import React from 'react';

import PricingCardContainer from 'components/prismic/slices/pricing-cards';
import LogosSlice from './logos';
import ArchitectureSection from './architecture';
import TabsSlice from './tabs';
import Jobs from './jobs';
import Quotes from './quotes';
import Image from 'components/prismic/Image';
import GraphicTextWithLogos from './graphic-text-logos';
import GraphicTextWithSlides from './graphic-text-slides';
import AdvancedCards from './advanced-cards';
import GithubStars from './github-stars';
import CodeExplorer from './code-explorer';
import IFrame from './iframe';
import GraphicText from './graphic-text';

export default class Slices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const getSlice = (type, slice, i) =>
      ({
        graphic_with_text: <GraphicText key={i} data={slice} />,
        graphic_with_text_logos: <GraphicTextWithLogos key={i} data={slice} />,
        graphic_with_text_slides: <GraphicTextWithSlides key={i} data={slice} />,
        'cs-tabs': <TabsSlice key={i} data={slice} />,
        logos: <LogosSlice key={i} data={slice} />,
        jobs: <Jobs key={i} data={slice} />,
        image: <Image key={i} data={slice.primary.img} />,
        'cs-architecture': <ArchitectureSection key={i} data={slice} />,
        quotes_logos: <Quotes key={i} data={slice} />,
        'cs-pricing': <PricingCardContainer key={i} data={slice} />,
        'cs-advanced-cards': <AdvancedCards key={i} data={slice} />,
        'cs-github-stars': <GithubStars key={i} data={slice} />,
        'cs-code-explorer': <CodeExplorer key={i} data={slice} />,
        'cs-iframe': <IFrame key={i} data={slice} />,
      }[type]);

    return (
      <div className="slices">
        <div className="slices-wrapper">
          {this.props.data.map((slice, i) => getSlice(slice.slice_type, slice, i))}
        </div>
      </div>
    );
  }
}
