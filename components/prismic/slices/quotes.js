import React from 'react';
import styles from './quotes.scss';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="quotes">
        <style dangerouslySetInnerHTML={{__html: styles}} />
        <h1 className="title">{this.props.data.primary.title1[0].text}</h1>

        <div className="quotesContainer">
          {this.props.data.items.map((prop, i) => {
            return (
              <div className="quotesItem" key={i}>
                <div className="logo">
                  <img className="logoImage" alt="client logo" src={prop.logo.url} />
                </div>
                <div className="cell">
                  <div>{prop.quote1[0].text}</div>
                  <div className="author">{prop.author1[0].text}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Quotes;
