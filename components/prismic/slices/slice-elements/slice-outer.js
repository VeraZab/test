const getComponentClass = (primary, slice_type, className) => {
  const componentClass = 'content-section-p';

  let classes = componentClass;

  const noGraphic = !primary.graphic || (primary.graphic && !primary.graphic.url);

  if (noGraphic) {
    classes += ' no-graphic';
  }

  if (className) {
    classes += ' ' + className;
  }

  classes += ' ' + slice_type;

  if (!primary.layout) {
    primary.layout = 'row-auto';
  }

  classes += ' ' + componentClass + '-layout--' + primary.layout;

  if (!primary.alignment) {
    primary.alignment = 'left';
  }

  classes += ' ' + componentClass + '-align--' + primary.alignment;

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
