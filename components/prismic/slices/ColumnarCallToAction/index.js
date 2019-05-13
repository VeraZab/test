const ColumnarCallToAction = props => {
  const primary = props.data.primary;
  return (
    <div className="columnar-call-to-action">
      <div className="columnar-copy-container">
        <h1 className="title">{primary.title1}</h1>
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
