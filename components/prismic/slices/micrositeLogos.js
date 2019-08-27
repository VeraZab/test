import {renderPrismic} from 'lib/renderPrismicRichText';

const MicrositeLogos = props => {
  return (
    <div
      className="micrositelogos-container"
      style={{backgroundImage: `url(${props.data.primary['background-image'].url})`}}
    >
      <div className="micrositelogos-content">
        <h1 className="micrositelogos-title">{renderPrismic(props.data.primary.title1)}</h1>
        <div className="micrositelogos-logo-container">
          {props.data.items.map((item, index) => (
            <img src={item.logo.url} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MicrositeLogos;
