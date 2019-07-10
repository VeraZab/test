import {renderPrismic} from 'lib/renderPrismicRichText';

const ColumnsThirds = props => {
  const primary = props.data.primary;
  const items = props.data.items;
  return (
    <div className="columns-thirds">
      {primary.section_title && (
        <div className="title-container">
          <h1 className="title">{primary.section_title}</h1>
          <div className="subtitle">{renderPrismic(primary.section_subtitle)}</div>
        </div>
      )}
      <div className="columns-container">
        {items && (
          <>
            {primary.section_subtitle2 && (
              <div
                className="intro-column"
                style={primary.bg_graphic ? {backgroundImage: `url(${primary.bg_graphic.url}`} : {}}
              >
                <div className="intro-copy-container">
                  {primary.section_pretitle && (
                    <h2 className="pretitle">{primary.section_pretitle}</h2>
                  )}
                  {primary.section_subtitle2 && (
                    <h1 className={primary.bg_graphic.url ? 'subtitle-white' : 'subtitle-dark'}>
                      {renderPrismic(primary.section_subtitle2)}
                    </h1>
                  )}
                  {primary.cta_url && (
                    <div className="cta-buttons">
                      <a
                        id="columns-thirds-button"
                        className="button button-primary"
                        href={primary.cta_url}
                      >
                        <div className="button-label">{primary.cta_label}</div>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}

            {items.map((item, i) => {
              return (
                <div className="repeatable-column-wrapper" key={i}>
                  <div className="repeatable-column">
                    {item.pretitle && <div className="pretitle">{item.pretitle}</div>}
                    {item.graphic.url && <img src={item.graphic.url} />}
                    {item.title1 && <h2 className="title">{item.title1}</h2>}
                    {item.messaging && <div className="copy">{item.messaging}</div>}
                  </div>
                  {item.cta_label && (
                    <div className="cta-buttons">
                      <a
                        className="button button-primary"
                        id="columns-thirds-button"
                        href={item.cta_url}
                      >
                        <div className="button-label">{item.cta_label}</div>
                      </a>
                    </div>
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};

export default ColumnsThirds;
