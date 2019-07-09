const GraphicLeftCopyRightCenter = props => {
  const primary = props.data.primary;
  console.log(primary);

  return (
    <div className="graphic-left-copy-right-center-container">
      <div className="graphic-left-copy-right-center">
        <div className="graphic-left-copy-right-center-graphic">
          <img src={primary.graphic.url} />
        </div>
        <div className="graphic-left-copy-right-center-copy">
          <div className="copy-container">
            <h3 className="copy">{primary.copy}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicLeftCopyRightCenter;
