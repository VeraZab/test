import React from 'react';

const getComponentClass = (primary, slice_type, className) => {
  const componentClass = 'content-section-p';
  let classes = componentClass;

  const noGraphic = !primary.graphic || (primary.graphic && !primary.graphic.url);

  if (noGraphic) {
    classes += ' no-graphic';
  }

  /**
   * If someone has added classes to this component, let's append them to the classes variable
   */
  if (className) {
    classes += ' ' + className;
  }

  classes += ' ' + slice_type;

  /**
   * Layout
   *
   * These values will the arrangement of the elements in the content section.
   *
   * Available values:
   *
   * row-auto                 -- will automatically alternate which side the graphic is on (even/odd)
   * row-graphic-left         -- manually designate graphic on left
   * row-graphic-right        -- manually designate graphic on right
   * column-graphic-top       -- vertical layout, graphic on top
   * column-graphic-bottom    -- vertical layout, graphic on bottom
   */

  if (!primary.layout) {
    primary.layout = 'row-auto';
  }
  classes += ' ' + componentClass + '-layout--' + primary.layout;

  /**
   * Alignment
   *
   * These apply if the content section is in a column layout.
   * They are the standard justification settings, left, center, right...
   *
   * Available values:
   *
   * left     -- default
   * center   -- center alignment
   * right    -- right alignment
   */
  if (!primary.alignment) {
    primary.alignment = 'left';
  }
  classes += ' ' + componentClass + '-align--' + primary.alignment;

  /**
   * Style
   *
   * These values will adjust classes that change the visual appearance of the content section.
   *
   * Available values:
   *
   * default -- The standard content section, which will alternate between white and $color-rhino-light-4 for its background color
   * gradient_purple -- Uses the same styling as the purple gradient used in hero sections
   * gradient_dark-blue -- Uses a darker blue gradient, white text
   * gradient_blue -- Uses a blue gradient for its background, white text
   * graphic_blue_pipes -- Uses a blue gradient and a pipe graphic for its background
   * graphic_white_dotted-lines -- White background with angled, different colored dotted lines in its background
   */
  if (!primary.style) {
    primary.style = 'default';
  }
  classes += ' ' + componentClass + '-style--' + primary.style;

  if (primary.graphic_style === 'bleed') {
    classes += ' ' + componentClass + '-style--bleed-wrapper';
  }

  classes += ` ${componentClass}-proportions--${primary.proportions}`;

  return classes;
};

export default function SliceOuter({data: {primary, slice_type}, children}) {
  return (
    <section className={getComponentClass(primary, slice_type)}>
      <div className="content-section-p-wrapper">{children}</div>
    </section>
  );
}
