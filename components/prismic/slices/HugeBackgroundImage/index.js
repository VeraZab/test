import {renderPrismic} from 'lib/renderPrismicRichText';

const HugeBackgroundImage = props => {
  const primary = props.data.primary;

  return (
    <div className="huge-background-image" style={{backgroundImage: `url(${primary.graphic.url})`}}>
      <div className="addons-messaging">
        <h1 className="addons-title">{primary.title1}</h1>
        <div className="addons-copy">{renderPrismic(primary.messaging)}</div>
        <div className="cta-buttons">
          <a className="button button-primary" href={primary.cta_url}>
            {primary.cta_label}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HugeBackgroundImage;
