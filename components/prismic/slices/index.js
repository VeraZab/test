/**
 * Slices component
 *
 * This is our component that will parse through an array of
 * slices and render the corresponding slice if it is accounted for.
 */

import React from 'react';
import shortid from 'shortid';

/**
 * Our slice options
 */

import ContentSection from 'components/prismic/content-section';
import PricingCardsSection from 'components/prismic/pricing-cards-section';
import LogosSlice from './logos';
import ArchitectureSection from './architecture';
import TabsSlice from './tabs';
import Jobs from './jobs';
import Quotes from './quotes';

import {ImageSectionSlice} from './image-section';
import GraphicTextWithLogos from './graphic-text-logos';
import GraphicTextWithSlides from './graphic-text-slides';

export default class Slices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {data} = this.props;

    return (
      <div className="slices">
        <div className="slices-wrapper">
          {data.map((slice, i) => {
            if (
              slice.slice_type === 'graphic_with_text' ||
              slice.slice_type === 'cs-advanced-cards' ||
              slice.slice_type === 'cs-iframe' ||
              slice.slice_type === 'cs-code-explorer' ||
              slice.slice_type === 'cs-github-stars'
            ) {
              return <ContentSection key={i} data={slice} />;
            }
            return {
              graphic_with_text_logos: <GraphicTextWithLogos key={i} data={slice} />,
              graphic_with_text_slides: <GraphicTextWithSlides key={i} data={slice} />,
              'cs-tabs': <TabsSlice key={shortid.generate()} data={slice} />,
              logos: <LogosSlice key={shortid.generate()} data={slice} />,
              jobs: <Jobs {...slice} key={i} />,
              image: <ImageSectionSlice {...slice} key={i} />,
              'cs-architecture': <ArchitectureSection key={i} data={slice} />,
              quotes_logos: <Quotes key={i} data={slice} />,
              'cs-pricing': <PricingCardsSection key={i} data={slice} />,
            }[slice.slice_type];
          })}
        </div>
      </div>
    );
  }
}
