import {renderPrismic} from 'lib/renderPrismicRichText';

const VideoRightCopyLeft = props => {
  return (
    <div className="video-right-copy-left-container">
      <div className="video-right-copy-left">
        <div className="copy-container">
          {props.data.primary.pretitle && (
            <div className="pretitle">{props.data.primary.pretitle}</div>
          )}
          {props.data.primary.title1 && <h1 className="title">{props.data.primary.title1}</h1>}
          {props.data.primary.cta_title_rich && (
            <h1>{renderPrismic(props.data.primary.cta_title_rich)}</h1>
          )}
          {props.data.primary.copy1 && <div>{renderPrismic(props.data.primary.copy1)}</div>}
        </div>
        <div className="video-container">
          {props.data.primary.url && (
            <div className="iframe-container">
              <iframe
                src={props.data.primary.url}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoRightCopyLeft;
