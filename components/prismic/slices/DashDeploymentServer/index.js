import {renderPrismic} from 'lib/renderPrismicRichText';

const DashDeploymentServer = props => {
  const primary = props.data.primary;

  return (
    <div className="dash-deployment-server-container">
      <div className="dash-deployment-server-messaging-rectangle">
        <div className="dash-pretitle">{primary.pretitle}</div>
        <h1 className="hero-title">{primary.title1}</h1>
        <div className="subtitle">{renderPrismic(primary.messaging)}</div>
        <div className="cta-buttons">
          <a className="button button-primary" href={primary.cta_url}>
            <div className="button-label">{primary.cta_label}</div>
          </a>
        </div>
      </div>
      <div className="dash-deployment-server-graphic">
        <img src={primary.graphic.url} />
      </div>
    </div>
  );
};

export default DashDeploymentServer;
