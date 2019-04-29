import {renderPrismic} from 'lib/renderPrismicRichText';

const DashSolutions = props => {
  const primary = props.data.primary;
  const items = props.data.items;

  console.log(props);

  return (
    <div className="dash-solutions-container">
      <div className="left-container-wrapper">
        <div className="left-container">
          <h2 className="solutions-pretitle">{primary.pretitle}</h2>
          <h1 className="solutions-title">{renderPrismic(primary.title1)}</h1>
        </div>
      </div>

      <div className="middle-container-wrapper">
        <div className="middle-container">
          <div className="solutions-pretitle">{items[0].subtitle}</div>
          <img src={items[0].graphic.url} />
          <h2 className="messaging-title">{items[0].messaging1[0] && items[0].messaging1[0].text}</h2>
          <div className="solutions-messaging">
            {items[0].messaging1[1] && items[0].messaging1[1].text}
          </div>
          <div className="solutions-messaging">
            {items[0].messaging1[2] && items[0].messaging1[2].text}
          </div>
          <div className="cta-buttons">
            <a className="button button-primary" href={items[0].cta_url}>
              {items[0].cta_label}
            </a>
          </div>
        </div>
      </div>

      <div className="right-container-wrapper">
        <div className="right-container">
          <div className="solutions-pretitle">{items[1].subtitle}</div>
          <img src={items[1].graphic.url} />
          <h2 className="messaging-title">{items[1].messaging1[0].text}</h2>
          <div className="solutions-messaging">{items[0].messaging1[1] && items[1].messaging1[1].text}</div>
          <div className="cta-buttons">
            <a className="button button-primary" href={items[1].cta_url}>
              {items[1].cta_label}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashSolutions;
