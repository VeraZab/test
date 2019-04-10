import {renderPrismic} from 'lib/renderPrismicRichText';

const DashCTA = props => {
  const buttons = props.data.items.map(function(item) {
    return {label: item.cta_label[0].text, link: {url: item.cta_url}};
  });

  const primary = props.data.primary;

  return (
    <div className="dash-content-section-container">
      <div className="dash-content-section-graphic">
        <img src={primary.graphic.url} />
      </div>
      <div className="dash-messaging-rectangle">
        <div className="box-shadows">
          <div className="dash-pretitle">{primary.pretitle}</div>
          <h1 className="hero-title">{primary.title1}</h1>
          <div className="subtitle">{renderPrismic(primary.messaging)}</div>
          <div className="cta-buttons">
            <a className="button button-primary" href={buttons[0].link.url}>
              <div className="button-label">{buttons[0].label}</div>
            </a>
            {buttons[1] && (
              <a className="button button-secondary" href={buttons[1].link.url}>
                <div className="button-label">{buttons[1].label}</div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashCTA;
