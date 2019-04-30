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
import Newsroom from './newsroom';
import ComboCTA from './ComboCTA';
import GraphicLeftCopyRight from './GraphicLeftCopyRight';
import DashCTA from './DashCTA';
import OpenSourceCTA from './OpenSourceCTA';
import DashSolutions from './DashSolutions';
import DashProductive from './DashProductive';
import DashGallery from './DashGallery';
import EnterpriseAddons from './EnterpriseAddons';
import DashDeploymentServer from './DashDeploymentServer';
import ColumnsThirds from './ColumnsThirds';
import CopyLeftGraphicRight from './CopyLeftGraphicRight';
import ColumnarCallToAction from './ColumnarCallToAction';

ColumnarCallToAction;
const BlankSlice = () => {
  return null;
};

export default class Slices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allSlices = {
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
      newsroom: Newsroom,
      an_open_source_company: OpenSourceCTA,
      globalcta: GraphicLeftCopyRight,
      dash_cta: DashCTA,
      combocta: ComboCTA,
      dash_solutions: DashSolutions,
      dash_is_production: DashProductive,
      dash_app_gallery: DashGallery,
      enterprise_addons: EnterpriseAddons,
      dash_product_family: DashDeploymentServer,
<<<<<<< HEAD
      columns_thirds: ColumnsThirds,
      copy_l_graph_r: CopyLeftGraphicRight,
      columnar_call_to_action: ColumnarCallToAction,
=======
      columns_thirds: BlankSlice,
      copy_l_graph_r: BlankSlice,
      columnar_call_to_action: BlankSlice,
>>>>>>> changing logo hyperlink from Link component to anchor element
    };

    return (
      <div className="slices">
        <div className="slices-wrapper">
          {this.props.data.map((slice, i) => {
            const IndividualSlice = allSlices[slice.slice_type];
            return <IndividualSlice key={i} data={slice} />;
          })}
        </div>
      </div>
    );
  }
}
