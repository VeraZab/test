const DashProductive = props => {
  const items = props.data.items;
  const primary = props.data.primary;

  return (
    <div className="dashProductive-container">
      <div className="title-container">
        <div className="pretitle">{primary.pretitle}</div>
        <h1 className="title">{primary.title1}</h1>
      </div>
      <div className="features-container">
        <div className="features-row">
          <div className="productive">
            <div className="graphic-container">
              <img src={items[0].graphic.url} />
            </div>
            <div className="copy-container">
              <div className="heading">{items[0].heading}</div>
              <div className="messaging">{items[0].messaging1}</div>
            </div>
          </div>
          <div className="customizable">
            <div className="graphic-container">
              <img src={items[1].graphic.url} />
            </div>
            <div className="copy-container">
              <div className="heading">{items[1].heading}</div>
              <div className="messaging">{items[1].messaging1}</div>
            </div>
          </div>
        </div>
        <div className="features-row">
          <div className="lightweight">
            <div className="graphic-container">
              <img src={items[2].graphic.url} />
            </div>
            <div className="copy-container">
              <div className="heading">{items[2].heading}</div>
              <div className="messaging">{items[2].messaging1}</div>
            </div>
          </div>
          <div className="control">
            <div className="graphic-container">
              <img src={items[3].graphic.url} />
            </div>
            <div className="copy-container">
              <div className="heading">{items[3].heading}</div>
              <div className="messaging">{items[3].messaging1}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashProductive;
