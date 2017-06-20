import React from "react";
import {ContentSection, ContentPane, Title, Body}
  from "../../../../components/content-section/content-section";
import Tweets from "../tweets/tweets";
import styles from "./client-success.scss";
// Styles
const goji = {
  backgroundImage: "url(https://marketing.plot.ly/static/marketing/assets/images/homepage/customer-stories/goji.png)"
};
const c12 = {
  backgroundImage: "url(https://marketing.plot.ly/static/marketing/assets/images/homepage/customer-stories/c12.png)"
};

export default () => (
  <div className="bottom-blue">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <ContentSection className="background-color-light-1 center">
      <ContentPane full center center-vertically>
        <div className="pre-title">
          INFORM
        </div>
        <Title>
          Client success stories
        </Title>
        <Body>
        <div className="cards stories">
          <div className="card card-with-image">
            <div className="card-wrapper">
              <div className="card-image" style={goji}>
                <div className="card-image-label">
                  Goji Insurance
                </div>
              </div>
              <div className="card-body">
                <p>
                  Before Plotly, we were entangled in an enterprise BI quagmire. Our system was
                  large, expensive to maintain in both time and effort, and slow to adapt to our
                  fast-changing needs. Plotly was the 'big BI' killer we had been waiting for.
                </p>
              </div>
              <div className="card-action">
                <a className="card-action-link" href="#">Read Full Story →</a>
              </div>
            </div>
          </div>
          <div className="card card-with-image">
            <div className="card-wrapper">
              <div className="card-image" style={c12}>
                <div className="card-image-label">
                  C-12 Energy
                </div>
              </div>
              <div className="card-body">
                <p>
                  Plotly is at the center of our business development platform, and serves as a
                  starting point for modeling and fitting tools. We can quickly comprehend and
                  analyze huge amounts of data, and use the results to make multi-million-dollar
                  investment decisions.
                </p>
              </div>
              <div className="card-action">
                <a className="card-action-link" href="#">Read Full Story →</a>
              </div>
            </div>
          </div>
        </div>
        </Body>
      </ContentPane>
    </ContentSection>
    {/*<Tweets />*/}
  </div>
);
