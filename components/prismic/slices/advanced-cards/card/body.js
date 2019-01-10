import React from 'react';
import PropTypes from 'prop-types';
import {renderPrismic} from 'lib/renderPrismicRichText';

class Body extends React.Component {
  render() {
    const {body} = this.context;
    const {actions} = this.props;
    return (
      <div className="card__body">
        <div className="card__body__content">{renderPrismic(body)}</div>
        {actions}
      </div>
    );
  }
}

Body.contextTypes = {
  body: PropTypes.array,
};

Body.propTypes = {
  actions: PropTypes.element,
};

export default Body;
