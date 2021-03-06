import {renderPrismic} from 'lib/renderPrismicRichText';

function PricingCardFeatures(props) {
  const Features = (
    <>
      {[1, 2, 31, 4, 51].map(n => (
        <div key={n} className="pricing__card__feature">
          {props.data['feature' + n].length === 1 ? (
            <>
              <img
                height="30px"
                width="30px"
                className="pricing__card__feature__image"
                src="https://s3-us-west-1.amazonaws.com/plotly-tutorials/assets/check.svg"
              />
              <div className="pricing__card__feature__text">
                {renderPrismic(props.data['feature' + n])}
              </div>
            </>
          ) : null}
        </div>
      ))}
    </>
  );
  return Features;
}

export default PricingCardFeatures;
