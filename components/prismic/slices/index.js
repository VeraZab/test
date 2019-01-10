/**
 * Slices component
 *
 * This is our component that will parse through an array of
 * slices and render the corresponding slice if it is accounted for.
 */

import React from 'react';
import shortid from 'shortid';

import ContentSection from 'components/prismic/content-section';
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
              image: <Image data={slice.primary.img} key={i} />,
              'cs-architecture': <ArchitectureSection key={i} data={slice} />,
              quotes_logos: <Quotes key={i} data={slice} />,
              'cs-pricing': (
                <PricingCardContainer
                  key={i}
                  cards={
                    (slice.linked_items &&
                      slice.linked_items[0] &&
                      slice.linked_items[0].pricing_cards &&
                      slice.linked_items[0].pricing_cards.data &&
                      slice.linked_items[0].pricing_cards.data.body) ||
                    null
                  }
                />
              ),
              'cs-advanced-cards': <AdvancedCards key={i} data={slice} />,
            }[slice.slice_type];
          })}
        </div>
      </div>
    );
  }
}
