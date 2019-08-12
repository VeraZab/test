import React from 'react';
import {renderPrismic} from 'lib/renderPrismicRichText';

class ButtonsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      currentButtonIndex: 0,
    };
  }

  render() {
    return (
      <div className="buttonscontent-container">
        <div className="buttonscontent-content">
          <div className="left">
            {this.props.data.items.map((item, index) => (
              <div
                className={
                  index === this.state.currentButtonIndex
                    ? 'label-container-active'
                    : 'label-container-inactive'
                }
                key={`label-${index}`}
                onClick={() => this.setState({currentButtonIndex: index})}
              >
                {item['label-icon'] && <img src={item['label-icon'].url} />}
                {item['label-text1'] && <div className="label">{item['label-text1']}</div>}
              </div>
            ))}
          </div>

          <div className="right">
            {this.props.data.items.map((item, index) => (
              <div
                className={
                  index === this.state.currentButtonIndex
                    ? 'content-container-active'
                    : 'content-container-inactive'
                }
                key={`content-${index}`}
              >
                {item['right-title'] || item['right-copy'] ? (
                  <div className="right-text">
                    {item['right-title'] ? <h1 className="title">{item['right-title']}</h1> : null}
                    {item['right-copy'] ? (
                      <div className="copy">{renderPrismic(item['right-copy'])}</div>
                    ) : null}
                  </div>
                ) : null}
                {item['cta-label'] && item['cta-url'] && (
                  <div className="cta-buttons">
                    <a
                      id="columns-thirds-button"
                      className="button button-primary"
                      href={item['cta-url']}
                      target="_blank"
                    >
                      <div className="button-label">{item['cta-label']}</div>
                    </a>
                  </div>
                )}
                {item['right-image'] && <img src={item['right-image'].url} />}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ButtonsContent;
