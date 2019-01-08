import React from 'react';
import styles from './hero.styles.scss';

// Main wrapper
export class Hero extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classes = '';

    if (this.props.alignLeft) {
      classes += ' align-left';
    }
    if (this.props.splitHalf) {
      classes += ' split-half';
    }
    if (this.props.className) {
      classes += ' ' + this.props.className;
    }
    let HeroStyle = {};
    let HeroWrapperStyle = {};

    if (this.props.style) {
      HeroStyle = this.props.style;
    }
    if (this.props.heroWrapperStyle) {
      HeroWrapperStyle = this.props.heroWrapperStyle;
    }

    if (!classes.includes('hero-prismic')) {
      classes = 'hero ' + classes;
    }

    return (
      <section className={classes} style={HeroStyle}>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <div className="hero-wrapper">{this.props.children}</div>
        <div className="hero-background-image" style={HeroWrapperStyle} />
      </section>
    );
  }
}

// --
// Hero Top
// --
export class HeroTop extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let HeroTopStyles = {};

    if (this.props.style) {
      HeroTopStyles = this.props.style;
    }
    return (
      <div className="hero-top" style={HeroTopStyles}>
        <div className="hero-top-wrapper">{this.props.children}</div>
      </div>
    );
  }
}
// --
// Hero Top sub components
// --

export class HeroMessaging extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="hero-messaging">{this.props.children}</div>;
  }
}
export class HeroTitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1 className="title-xl hidden">{this.props.children}</h1>;
  }
}
export class HeroSubtitle extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h2 className="title-sm hidden hidden-up">{this.props.children}</h2>;
  }
}
export class HeroActions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-actions hidden hidden-fade">
        {this.props.children}
      </div>
    );
  }
}

// --
// Hero Bottom
// --
export class HeroBottom extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let HeroBottomStyles = {};

    if (this.props.style) {
      HeroBottomStyles = this.props.style;
    }
    return (
      <div className="hero-bottom" style={HeroBottomStyles}>
        <div className="hero-bottom-wrapper hidden hidden-fade">
          {this.props.children}
        </div>
      </div>
    );
  }
}
