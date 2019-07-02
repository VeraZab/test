import {renderPrismic} from 'lib/renderPrismicRichText';
import Browser from 'components/browser';

const PlainText = props => {
  const primary = props.data.primary;

  return (
    <div className="plain-text-container">
      {primary.pretitle && <div className="pretitle">{primary.pretitle}</div>}
      <div>{renderPrismic(primary.copy)}</div>
      {typeof primary.graphic.url !== 'undefined' && (
        <Browser>
          <img src={primary.graphic.url} />{' '}
        </Browser>
      )}
    </div>
  );
};

export default PlainText;
