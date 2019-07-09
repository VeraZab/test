const GraphicRightCopyLeftCenter = props => {
  const primary = props.data.primary;

  return (
    <div className="graphic-right-copy-left-center-container">
      <div className="graphic-right-copy-left-center">
        <div className="graphic-right-copy-left-center-copy">
          <div className="copy-container">
            <h3 className="copy">{primary.copy}</h3>
          </div>
        </div>
        <div className="graphic-right-copy-left-center-graphic">
          <img src={primary.graphic.url} />
        </div>
      </div>
    </div>
  );
};

export default GraphicRightCopyLeftCenter;
