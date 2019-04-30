const ColumnarCallToAction = props => {
  const primary = props.data.primary;
  return (
    <div className="columnar-container">
      <div className="columnar-copy-container">
        <div className="title">{primary.title1}</div>
        <div className="columnar-copy">{primary.copy}</div>
        <a className="button button-primary" href={primary.cta_url}>
          <div className="button-label">{primary.cta_label1}</div>
        </a>
        <img src={primary.graphic.url} />
      </div>
    </div>
  );
};

export default ColumnarCallToAction;
