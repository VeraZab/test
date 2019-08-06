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
import Resources from './Resources';
import ComboCTA from './ComboCTA';
import GraphicLeftCopyRight from './GraphicLeftCopyRight';
import OverlapGraphic from './OverlapGraphic';
import TwoColumn from './TwoColumn';
import FourCellTable from './FourCellTable';
import Gallery from './Gallery';
import HugeBackgroundImage from './HugeBackgroundImage';
import CopyLeftGraphicRightTwo from './CopyLeftGraphicRightTwo';
import ColumnsThirds from './ColumnsThirds';
import CopyLeftGraphicRight from './CopyLeftGraphicRight';
import ColumnarCallToAction from './ColumnarCallToAction';
import FooterCTA from './FooterCTA';
import PlainText from './PlainText';
import FourBoxesOneRow from './fourBoxesOneRow';
import VideoLeftCopyRight from './VideoLeftCopyRight';
import VideoRightCopyLeft from './VideoRightCopyLeft';
import AdvancedExplanation from './advancedExplanation';
import RelatedPosts from './RelatedPosts';
import TitleCenterImageBottom from './titleCenterImageBottom';
import GraphicLeftCopyRightCenter from './GraphicLeftCopyRightCenter';
import GraphicRightCopyLeftCenter from './GraphicRightCopyLeftCenter';
import ButtonsContent from './buttonscontent';
import SimpleCTACenter from './simpleCTACenter';
import GraphicLeftCopyRightFeature from './graphicleftcopyrightfeature';

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
      resources: Resources,
      an_open_source_company: TwoColumn,
      globalcta: GraphicLeftCopyRight,
      dash_cta: OverlapGraphic,
      combocta: ComboCTA,
      dash_is_production: FourCellTable,
      dash_app_gallery: Gallery,
      enterprise_addons: HugeBackgroundImage,
      dash_product_family: CopyLeftGraphicRightTwo,
      columns_thirds: ColumnsThirds,
      copy_l_graph_r: CopyLeftGraphicRight,
      columnar_call_to_action: ColumnarCallToAction,
      footercta: FooterCTA,
      plaintext: PlainText,
      four_boxes_one_row: FourBoxesOneRow,
      videoleftcopyright: VideoLeftCopyRight,
      videorightcopyleft: VideoRightCopyLeft,
      advancedexplanation: AdvancedExplanation,
      relatedposts: RelatedPosts,
      graphicleftcopyrightcenter: GraphicLeftCopyRightCenter,
      graphicrightcopyleftcenter: GraphicRightCopyLeftCenter,
      titlecenterimagebottom: TitleCenterImageBottom,
      buttonscontent: ButtonsContent,
      simplectacenter: SimpleCTACenter,
      graphicleftcopyrightfeature: GraphicLeftCopyRightFeature,
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
