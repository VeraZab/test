import {renderPrismic} from 'lib/renderPrismicRichText';

const PlainText = props => {
  const primary = props.data.primary;

  return (
    <div className="plain-text-container">
      <div>{renderPrismic(primary.copy)}</div>
    </div>
  );
};

export default PlainText;