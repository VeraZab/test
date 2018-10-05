import React from 'react';
import styled from 'styled-components';
import { renderPrismic } from 'lib/renderPrismicRichText';
import { Button } from '../../../styled/button';

const StyledJobs = styled.div``;
const JobListing = styled.div`
  width: 100%;
  & + & {
    margin-top: 80px;
  }
`;

const Description = styled.div``;
const Requirements = styled.div``;
const Extras = styled.div``;
const JobsHeader = styled.div`
  border-bottom: 1px solid #dfe8f3;
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media (max-width: 899px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    & > div:not(:last-of-type) {
      padding-bottom: 20px;
    }
  }
`;
const Wrapper = styled.div`
  display: flex;
  @media (min-width: 900px) {
    justify-content: space-between;
    & > div {
      flex-grow: 1;
      max-width: calc(50% - 40px);
    }
  }
  @media (max-width: 899px) {
    flex-direction: column;
    ${Requirements} {
      order: 2 !important;
    }
    ${Extras} {
      order: 3 !important;
    }
  }
`;

const JobsTime = styled.h5`
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 8px;
`;
const JobsLocation = styled.h3`
  padding-top: 8px;
  opacity: 0.5;
`;
const renderItems = (items) =>
  items.map(
    (
      { description1, requirements, misc_extra_text, location, position, time },
      i,
    ) => (
      <JobListing key={i}>
        <JobsHeader>
          <div>
            <JobsTime>{misc_extra_text[0].text == 'fr' ? 'Plein Temps' : time}</JobsTime>
            <div className="content-section-p-title">
              <h2>{position}</h2>
            </div>

            <JobsLocation>{location}</JobsLocation>
          </div>
          <div>
            <Button
              primary
              href={`mailto:jobs@plot.ly?subject=[Job Application] ${position}`}
            >
              {misc_extra_text[0].text == 'fr' ? 'Postuler à ce poste' : 'Apply for this position'}
            </Button>
          </div>
        </JobsHeader>
        <Wrapper>
          <div>
            <Description>{renderPrismic(description1)}</Description>
          </div>
          <Description>{renderPrismic(requirements)}</Description>
        </Wrapper>
      </JobListing>
    ),
  );

const Jobs = ({ items, ...rest }) => {
  return (
    <StyledJobs>
      <div className="content-section-p" style={{ background: 'white' }}>
        <div className="content-section-p-wrapper" id="open-positions">
          <div className="content-section-p-details content-section-p-area">
            <div
              className="content-section-p-title"
              style={{ paddingBottom: '80px' }}
            >
              <h1>{items[0].misc_extra_text[0].text == 'fr' ? "Positions Ouvertes" : 'Open Positions'}</h1>
            </div>
            {renderItems(items)}
          </div>
        </div>
      </div>
    </StyledJobs>
  );
};

export { Jobs };
