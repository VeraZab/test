const GraphicLeftCopyRightCenter = props => {
  const primary = props.data.primary;

  return (
    <div className="graphic-left-copy-right-center-container">
      <div className="graphic-left-copy-right-center">
        <div className="graphic-left-copy-right-center-graphic">
          <img src={primary.graphic.url} />
        </div>
        <div className="graphic-left-copy-right-center-copy">
          <div className="copy-container">
            <h2 className="copy">{primary.copy}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicLeftCopyRightCenter;
