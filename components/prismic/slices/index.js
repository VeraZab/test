/**
 * Slices component
 *
 * This is our component that will parse through an array of
 * slices and render the corresponding slice if it is accounted for.
 */

import React from 'react';

import PricingCardContainer from 'components/prismic/slices/pricing-cards';
import LogosSlice from './logos';
import Architecture from './architecture';
import TabsSlice from './tabs';
import Jobs from './jobs';
import Quotes from './quotes';
import ImageSlice from './image';
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
    const sliceComponent = {
      graphic_with_text: GraphicText,
      graphic_with_text_logos: GraphicTextWithLogos,
      graphic_with_text_slides: GraphicTextWithSlides,
      'cs-tabs': TabsSlice,
      logos: LogosSlice,
      jobs: Jobs,
      image: ImageSlice,
      'cs-architecture': Architecture,
      quotes_logos: Quotes,
      'cs-pricing': PricingCardContainer,
      'cs-advanced-cards': AdvancedCards,
      'cs-github-stars': GithubStars,
      'cs-code-explorer': CodeExplorer,
      'cs-iframe': IFrame,
    };

    return (
      <div className="slices">
        <div className="slices-wrapper">
          {this.props.data.map((slice, i) => {
            const SliceComponent = sliceComponent[slice.slice_type];
            return <SliceComponent key={i} data={slice} />;
          })}
        </div>
      </div>
    );
  }
}
