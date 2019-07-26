import styled from 'styled-components';
import {renderPrismic} from 'lib/renderPrismicRichText';
import {slugify} from 'lib/slugify';

const StyledJobs = styled.div``;
const JobListing = styled.div`
  width: 100%;
  & + & {
    margin-top: 80px;
  }
`;

const Description = styled.div`
  p,
  ul {
    @media (max-width: 420px) {
      width: 100%;
    }
  }
`;
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
    width: 95%;
    word-break: break-word;

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
const renderItems = items =>
  items &&
  items.length &&
  items.map(({description1, requirements, misc_extra_text, location, position, time}, i) => (
    <JobListing key={i}>
      <JobsHeader>
        <div>
          <JobsTime id={slugify(position)}>
            {misc_extra_text[0].text === 'fr' ? 'Temps Plein' : time}
          </JobsTime>
          <a href={`/company/careers#${slugify(position)}`}>
            <div className="content-section-p-title">
              <h2>{position}</h2>
            </div>
          </a>
          <JobsLocation>{location}</JobsLocation>
        </div>
        <div>
          <a href={`mailto:jobs@plot.ly?subject=[Job Application] ${position}`}>
            {misc_extra_text[0].text === 'fr'
              ? 'Soumettez votre candidature'
              : 'Apply for this position'}
          </a>
        </div>
      </JobsHeader>
      <Wrapper>
        <div>
          <Description>{renderPrismic(description1)}</Description>
        </div>
        <Description>{renderPrismic(requirements)}</Description>
      </Wrapper>
    </JobListing>
  ));

const Jobs = ({data}) => {
  const items = data.items;
  return (
    <StyledJobs>
      <div className="content-section-p" style={{background: 'white'}}>
        <div className="content-section-p-wrapper" id="open-positions">
          <div className="content-section-p-details content-section-p-area">
            <div className="content-section-p-title" style={{paddingBottom: '80px'}}>
              <h1>
                {items && items[0] && items[0].misc_extra_text[0].text === 'fr'
                  ? "Offres d'Emploi"
                  : 'Open Positions'}
              </h1>
            </div>
            {renderItems(items)}
          </div>
        </div>
      </div>
    </StyledJobs>
  );
};

export default Jobs;
