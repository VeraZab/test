import {renderPrismic} from 'lib/renderPrismicRichText';

const PlainText = props => {
  const primary = props.data.primary;

  return (
    <div className="plain-text-container">
      {primary.pretitle && <div className="pretitle">{primary.pretitle}</div>}
      <div>{renderPrismic(primary.copy)}</div>
      {typeof primary.graphic.url !== 'undefined' && <img src={primary.graphic.url} />}
    </div>
  );
};

export default PlainText;
