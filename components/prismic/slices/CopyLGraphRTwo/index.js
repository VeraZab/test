import {renderPrismic} from 'lib/renderPrismicRichText';

const CopyLGraphRTwo = props => {
  const primary = props.data.primary;

  return (
    <div
      className={
        primary.title1 === 'Dash Deployment Server'
          ? 'dash-deployment-server-container'
          : 'dash-snapshot-engine-container'
      }
    >
      <div className="dash-deployment-server-messaging-rectangle">
        {Boolean(primary.pretitle) && <div className="dash-pretitle">{primary.pretitle}</div>}

        <h1 className="hero-title">{primary.title1}</h1>
        <div className="subtitle">{renderPrismic(primary.messaging)}</div>
        {Boolean(primary.cta_label) && (
          <div className="cta-buttons">
            <a className="button button-primary" href={primary.cta_url}>
              <div className="button-label">{primary.cta_label}</div>
            </a>
          </div>
        )}
      </div>
      <div className="dash-deployment-server-graphic">
        <img src={primary.graphic.url} />
      </div>
    </div>
  );
};

export default CopyLGraphRTwo;
