import {renderPrismic} from 'lib/renderPrismicRichText';

const OverlapGraphic = props => {
  const buttons = props.data.items.map(function(item) {
    return {label: item.cta_label[0].text, link: {url: item.cta_url}};
  });

  const primary = props.data.primary;

  return (
    <div className="overlap-graphic-container">
      <div className="overlap-graphic">
        <div className="overlap-graphic-img-container">
          <img src={primary.graphic.url} />
        </div>
        <div
          className="overlap-copy-container"
          id={primary.title1 === 'Dash Design Kit' ? 'dash-design-kit' : ''}
        >
          <div className="overlap-copy">
            <div className="pretitle">{primary.pretitle}</div>
            <h1 className="title">{primary.title1}</h1>
            <div className="subtitle">{renderPrismic(primary.messaging)}</div>
            <div className="cta-buttons" id="button-narrow">
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
    </div>
  );
};

export default OverlapGraphic;
