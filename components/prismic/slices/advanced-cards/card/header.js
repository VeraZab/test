import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
  render() {
    const {title, subtitle} = this.context;
    const Fragment = React.Fragment;

    const Title = title && (
      <div className="card__title">
        <h2>
          <span>{title}</span>
        </h2>
      </div>
    );

    const Subtitle = subtitle && (
      <div className="card__subtitle">
        <h3>{subtitle}</h3>
      </div>
    );
    return (
      <Fragment>
        {Title}
        {Subtitle}
      </Fragment>
    );
  }
}

Header.contextTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;
