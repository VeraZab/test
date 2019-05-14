const CopyLeftGraphicRight = props => {
  const primary = props.data.primary;
  return (
    <div className="copy-left-graphic-right-container">
      <div className="copy-left-graphic-right">
        <div className="copy-l-container">
          <div className="copy-l">
            <h1 className="title">{primary.title1}</h1>
            <div className="copy">{primary.copy}</div>
          </div>
        </div>
        <div className="graphic-r-container">
          <img src={primary.graphic.url} className="graphic-r" />
        </div>
      </div>
    </div>
  );
};

export default CopyLeftGraphicRight;
