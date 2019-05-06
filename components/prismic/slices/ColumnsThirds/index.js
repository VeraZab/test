import {renderPrismic} from 'lib/renderPrismicRichText';

const ColumnsThirds = props => {
  const primary = props.data.primary;
  const items = props.data.items;
  return (
    <>
      <div className="columns-thirds-container">
        {Boolean(primary.section_title !== null) && (
          <div className="title-container">
            <h1 className="title">{primary.section_title}</h1>
            <div className="subtitle">{renderPrismic(primary.section_subtitle)}</div>
          </div>
        )}
        <div className="columns-container">
          {Boolean(items) && (
            <div className="repeatable-columns-wrapper">
              <div className="repeatable-columns">
                {Boolean(primary.pretitle !== null) && (
                  <div
                    className="intro-column"
                    style={
                      primary.bg_graphic ? {backgroundImage: `url(${primary.bg_graphic.url}`} : {}
                    }
                  >
                    <div className="intro-copy-container">
                      {Boolean(primary.section_pretitle) && (
                        <div className="pretitle">{primary.section_pretitle}</div>
                      )}
                      <h1 className={primary.bg_graphic.url ? 'subtitle-white' : 'title'}>
                        {renderPrismic(primary.section_subtitle2)}
                      </h1>
                      {Boolean(primary.cta_url) && (
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
                    <div className="repeatable-column-wrapper">
                      <div className="repeatable-column" key={i}>
                        {Boolean(item.pretitle) && <div className="pretitle">{item.pretitle}</div>}
                        <img src={item.graphic.url} />
                        <h2 className="title">{item.title1}</h2>
                        <div className="copy">{item.messaging}</div>
                      </div>
                      {Boolean(item.cta_label) && (
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
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ColumnsThirds;
