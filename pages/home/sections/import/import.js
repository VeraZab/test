import React from 'react';
import styles from './import.scss'

import {ContentSection, ContentPane, Title, Subtitle, Body} from 'components/content-section'

export default () => (

    <ContentSection className="center dark-blue background--tunnels">

      <ContentPane full center center-vertically>
          <Subtitle>
              Import
          </Subtitle>
          <Title>
              Easily import data to chart
          </Title>
          <Body>
          <p>Connect your data to our platform. Within minutes, start typing SQL.<br /><em>No database?</em> No problem. We also support csv imports and manual data entry.</p>
          <div className="logos-display gutter-top">
              <div className="logos-display-wrapper">
                  <div className="logo-item">
                      <img src="https://marketing.plot.ly/static/marketing/assets/images/sql-logos/mysql.png?auto=compress&auto=format"
                           alt="MySQL" />
                  </div>
                  <div className="logo-item"><img
                      src="https://marketing.plot.ly/static/marketing/assets/images/sql-logos/microsoftsqlserver.png?auto=compress&auto=format"
                      alt="Microsoft SQL Server" />
                  </div>
                  <div className="logo-item"><img
                      src="https://marketing.plot.ly/static/marketing/assets/images/sql-logos/postgresql.png?auto=compress&auto=format"
                      alt="PostgreSQL" />
                  </div>
                  <div className="logo-item"><img
                      src="https://marketing.plot.ly/static/marketing/assets/images/sql-logos/redshift_logo.png?auto=compress&auto=format"
                      alt="Amazon Redshift" />
                  </div>
                  <div className="logo-item"><img
                      src="https://marketing.plot.ly/static/marketing/assets/images/sql-logos/excel_logo.png?auto=compress&auto=format"
                      alt="Excel" />
                  </div>
              </div>
          </div>
          </Body>
      </ContentPane>
    </ContentSection>
)
