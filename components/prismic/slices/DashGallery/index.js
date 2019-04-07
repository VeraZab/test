import {renderPrismic} from 'lib/renderPrismicRichText';

const DashGallery = props => {
  const items = props.data.items;
  console.log(items);

  return (
    <div className="gallery-container">
      <div className="oil-and-gas">
        <div className="gallery-graphic">
          <img src={items[0].graphic.url} />
        </div>
        <div className="gallery-messaging">
          <h2 className="pretitle">{items[0].pretitle}</h2>
          <div className="messaging">{renderPrismic(items[0].messaging)}</div>
          <div className="cta-buttons">
            <a className="button button-primary" href={items[0].cta_url}>
              <div className="button-label">{items[0].cta_label}</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashGallery;
