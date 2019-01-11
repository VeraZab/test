import React from 'react';
import {RichText} from 'prismic-reactjs';
import shortid from 'shortid';
import Typography from 'components/styled/typography';

const Elements = RichText.Elements;

const propsWithUniqueKey = props => {
  return Object.assign(props || {}, {key: shortid.generate()});
};

// -- HTML Serializer
export default (element, content, children) => {
  let props = {};

  switch (element.type) {
    // Heading 1
    case Elements.heading1:
      return <Typography.h1 {...propsWithUniqueKey(props)}>{children}</Typography.h1>;

    case Elements.heading2: // Heading 2
      return <Typography.h2 {...propsWithUniqueKey(props)}>{children}</Typography.h2>;

    case Elements.heading3: // Heading 3
      return <Typography.h3 {...propsWithUniqueKey(props)}>{children}</Typography.h3>;

    case Elements.heading4: // Heading 4
      return <Typography.h4 {...propsWithUniqueKey(props)}>{children}</Typography.h4>;

    case Elements.heading5: // Heading 5
      return <Typography.h5 {...propsWithUniqueKey(props)}>{children}</Typography.h5>;

    case Elements.heading6: // Heading 6
      return <Typography.h6 {...propsWithUniqueKey(props)}>{children}</Typography.h6>;

    case Elements.paragraph: // Paragraph
      return <Typography.p {...propsWithUniqueKey(props)}>{children}</Typography.p>;

    case Elements.preformatted: // Preformatted
      return <Typography.pre {...propsWithUniqueKey(props)}>{children}</Typography.pre>;

    case Elements.strong: // Strong
      return <Typography.strong {...propsWithUniqueKey(props)}>{children}</Typography.strong>;

    case Elements.em: // Emphasis
      return <Typography.em {...propsWithUniqueKey(props)}>{children}</Typography.em>;

    case Elements.listItem: // Unordered List Item
      return <Typography.li {...propsWithUniqueKey(props)}>{children}</Typography.li>;

    case Elements.oListItem: // Ordered List Item
      return <Typography.oli {...propsWithUniqueKey(props)}>{children}</Typography.oli>;

    case Elements.list: // Unordered List
      return <Typography.ul {...propsWithUniqueKey(props)}>{children}</Typography.ul>;

    case Elements.oList: // Ordered List
      return <Typography.ol {...propsWithUniqueKey(props)}>{children}</Typography.ol>;

    case Elements.image: // Image
      console.log('image', element);
      const linkUrl = element.linkTo ? element.linkTo.url || linkResolver(element.linkTo) : null;
      const linkTarget =
        element.linkTo && element.linkTo.target ? {target: element.linkTo.target} : {};
      const linkRel = linkTarget.target ? {rel: 'noopener'} : {};
      const img = <img src={element.url} alt={element.alt || ''} />;
      return React.createElement(
        'p',
        propsWithUniqueKey({className: [element.label || '', 'block-img'].join(' ')}),
        linkUrl
          ? React.createElement('a', Object.assign({href: linkUrl}, linkTarget, linkRel), img)
          : img
      );

    case Elements.embed: // Embed
      props = Object.assign(
        {
          'data-oembed': element.oembed.embed_url,
          'data-oembed-type': element.oembed.type,
          'data-oembed-provider': element.oembed.provider_name,
        },
        element.label ? {className: element.label} : {}
      );
      const embedHtml = React.createElement('div', {
        dangerouslySetInnerHTML: {__html: element.oembed.html},
      });
      return React.createElement('div', propsWithUniqueKey(props), embedHtml);

    case Elements.hyperlink: // Image
      const targetAttr = element.data.target ? {target: element.data.target} : {};
      const relAttr = element.data.target ? {rel: 'noopener'} : {};
      props = Object.assign(
        {
          href: element.data.url || linkResolver(element.data),
        },
        targetAttr,
        relAttr
      );
      return React.createElement('a', propsWithUniqueKey(props), children);

    case Elements.label: // Label
      props = element.data ? Object.assign({}, {className: element.data.label}) : {};
      return React.createElement('span', propsWithUniqueKey(props), children);

    case Elements.span: // Span
      if (content) {
        return content.split('\n').reduce((acc, p) => {
          if (acc.length === 0) {
            return [p];
          } else {
            const br = React.createElement('br', propsWithUniqueKey());
            return acc.concat([br, p]);
          }
        }, []);
      } else {
        return null;
      }

    default:
      // Always include a default that returns null
      return null;
  }
};
