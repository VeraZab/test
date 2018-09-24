import {
  ContentSection,
  ContentPane,
  Title,
  Subtitle,
  Body,
  Graphic,
} from 'components/content-section';
import React from 'react';
import Link from 'next/link';
import styles from './newsroom.styles.scss';
import Button from 'components/button';

const readMore = {
  label: 'Read More',
  subtitle: null,
  title: 'Read More',
  icon: null,
  target: '_blank',
  button: {
    classes: 'button button-primary',
  },
};

const articles = [
  {
    title: "PLOTLY announces 2nd Annual Data Visualization Conference PLOTCON 2017",
    date: 'Tuesday, Apr 04, 2017 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-1916?w=800',
    presenter: {
      name: 'Chelsea Douglas',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/automatic-email/register',
    },
  },
  {
    title: "Story",
    date: 'Wed, Jan 17, 2018 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-725?w=800',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/falcon-database-connector/register',
    },
  },
  {
    title: "Story",
    date: 'December 6th, 2017 2PM EST',
    img:
      'https://marketing.plot.ly/static/marketing/assets/images/dashboards/dashboard.gif',
    presenter: {
      name: 'Branden Dunbar',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-excel-to-generate',
    },
  },
  {
    title: "Story",
    date: 'Wed, Nov 15, 2017 2:00 PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-9924?w=800',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-the-falcon-sql/register',
    },
  },
  {
    title: "Story",
    date: 'October 25th, 2017 2PM EST',
    img:
      'https://images-plotly.imgix.net/static/marketing/dash/dash-hero-visual@2x.png?auto=compress&auto=format',
    presenter: {
      name: 'Chris Parmer',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/dash-plotlys-pythonic/register',
    },
  },
  {
    title: "Story",
    date: 'August 29, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-7133',
    presenter: {
      name: 'Chelsea Douglas',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link: 'https://www.crowdcast.io/e/using-jupyter-notebooks/register',
    },
  },
  {
    title: "Story",
    date: 'September 20th, 2017 2PM EST',
    img:
      'https://crowdcast-prod.imgix.net/-KeordaLkGx83O8xLUFe/event-cover-6164',
    presenter: {
      name: 'Charley Ferrari',
      avatar:
        'https://s3.amazonaws.com/cc-user-media-prod/-KeordaLkGx83O8xLUFe%2F1503955015814-charley+ferrari.jfif',
    },
    action: {
      ...readMore,
      link:
        'https://www.crowdcast.io/e/Using-Plotly-and%20-to-Create-and-Update-Dashboards/register',
    },
  },
];

export default () => (
  <div className="sections">
    <style dangerouslySetInnerHTML={{ __html: styles }} />
    <ContentSection>
      <ContentPane full center center-vertically text>
        <Body>
          <div className="webinars">
          #### PLOTLY ANNOUNCES 2ND ANNUAL DATA VISUALIZATION Conference PLOTCON 2017
PLOTCON Oakland Registration now open for professionals in technical computing, data science, journalism, business intelligence, finance, biotech, and pharma
 
**SAN FRANCISCO, CA** -- APRIL 4, 2017 - Plotly, the preferred data visualization platform for modern data science, today announced the expansion of its 2nd Annual conference PLOTCON to be hosted in Oakland, CA and New York in 2017:  Oakland, CA (May 2-5), and New York (November 14-17). Registration is now open for PLOTCON Oakland, CA May 2-5.  PLOTCON Oakland consists of fast-paced tracks with 30 minute visualization-focused presentations, four, two-day-long, all-inclusive workshops and the first Open Data Visualization Hackathon. PLOTCON industry professionals will discuss best-practices in creating Web-based data visualizations in technical computing, finance, journalism, biotech and pharmaceutical industries.

**WHEN:**  May 2-5, 2017

**WHERE:**  Oakland Scottish Rite Center, 1547 Lakeside Dr., Oakland, CA 94612

This year's theme, Let Data Speak, will cover new data visualization tools for popular open-source languages (Python, R, and Julia), focusing especially on the union of these tools with modern Web technology (D3.js, WebGI, stack.gl, React.js).  Together, attendees will have the opportunity to work through technical challenges and ask questions during speaker talks and workshops. PLOTCON cultivates a data economy dependent on the currency of collaboration, open-source, and trust.

PLOTCON 2017, Oakland will feature data experts including: Maxime Beauchemin, Creator and Main Committer of Apache Airflow, Head of Airbnb's Superset, Nicolas Belmonte, Head of Data Visualization, Uber, Alan Jacobson, Director of Global Analytics, Ford. PLOTCON 2016 saw past presenters and panelists focus on discussing examples of iterating problems in R and Python. Whether coming from leading tech. companies, financial institutions, or bio/pharma organizations, attendees will benefit from personal interactions with executives and practitioners who have recognized data requires new technologies and new ways of thinking.

"PLOTCON brings together the sharpest minds in the industry to address how businesses can thrive in today's economy by understanding and leveraging their data," said Plotly CEO Jack Parmer. "The event series represents an opportunity to share best-practices, network, and learn from like-minded peers and thought leaders in the data science space."

To hear more from PLOTCON's past speakers, watch posted YouTube videos by [clicking here](https://www.youtube.com/channel/UCedQXrEEyH8M9aTuuUXJA3g).

To register for the PLOTCON visit https://plotcon.plot.ly/.

#### About PLOTLY
Plotly is the creator of Plotly.js, Dash, PLOTCON, and the fastest growing charting libraries for R and Python. Plotly's online chart maker at plot.ly is the easiest and fastest way to graph and share D3.js charts online. Plotly customers include Tesla, Red Hat, Facebook, Google, and government institutions. Join the data visualization conversation by visiting the Plotly blog, Twitter, LinkedIn and Facebook pages.

**Media Contacts**
Jessica Gomez  
Formulated By  
Email: Jess@formulated.by  
Phone: +1-415-889-7444  

Head of Events  
Anna Anisin  
Formulated By  
Email: Anna@formulated.by  
Phone: +1-415-320-2663
          </div>
        </Body>
      </ContentPane>
    </ContentSection>
  </div>
);
