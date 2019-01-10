import Layout from 'components/global/layout';
import HeroSection from './hero';
import {ContentSection, ContentPane, Body} from 'components/content-section';
import React from 'react';
import styles from './newsroom.styles.scss';

const meta = {
  title:
    'Plotly and Université de Sherbrooke to develop genomic visualization with innovation funding',
  description: '',
};

export default () => (
  <Layout meta={meta}>
    <HeroSection data={meta} />
    <div className="sections">
      <style dangerouslySetInnerHTML={{__html: styles}} />
      <ContentSection>
        <ContentPane full center center-vertically text>
          <Body>
            <div className="webinars">
              <p>
                <strong>08/22/2018</strong>
              </p>

              <p>
                <strong>Montreal, CAN</strong> - Plotly, a Montreal data visualization company, and
                Université de Sherbrooke will develop new research and analytical tools to explore
                and visualize genetic structures. Three interns, with support from Mitacs, will use
                Plotly’s Dash product to develop new data visualization software in their research
                at the university’s CoBIUS Lab.
              </p>

              <p>
                Rapid developments in gene sequencing are producing growing levels of genomic data,
                leaving researchers in need of new models and tools to help them interactively
                explore that data, and curate and share results quickly. Plotly is developing its
                open-source data visualization library, Dash, for application in this growing area
                of research.
              </p>

              <p>
                Dash is popular with bioinformaticians because it allows users to create and publish
                real-time, interactive data visualizations using only Python, a well-known language
                in the field.
              </p>

              <p>
                “Plotly is grateful for the support from Mitacs, and we are excited to partner with
                Université de Sherbrooke for this project,” said Jack Parmer, Plotly CEO. “Quebec
                has a real asset in its bioinformatics community, and we’re happy to be able to
                provide training and resources to develop this important research.”
              </p>

              <p>
                Dr. Aïda Ouangraoua, Canada Research Chair in Computational and Biological
                Complexity at Université de Sherbrooke, said, “We thank Mitacs and Plotly for this
                internship funding and the partnership. They will accelerate the transfer of CoBIUS
                Lab research results to practice.”
              </p>

              <p>
                Dr. Ouangraoua will supervise one postdoc and two postgraduate interns in their
                research. CoBIUS Lab develops mathematical models and software tools to study and
                solve computational biology questions related to the comparison of biological data,
                with a focus on the evolution of genome structures, gene structures and RNA
                structures.
              </p>

              <p>
                Plotly will provide training and access to its software engineers, who will assist
                the researchers with using Dash to visualize both the very small, such as RNA and
                gene structures, and the very large, like the evolutionary relationships between
                transcripts, genes and species.
              </p>

              <p>
                Mitacs, a national not-for-profit research and training organization, is awarding
                the funding for the Plotly-CoBIUS Lab partnership through its internship program.
                Mitacs connects Canadian companies with graduate students and fellows who apply
                their specialized expertise to business challenges.
              </p>

              <p>Alejandro Adem, CEO and Scientific Director of Mitacs, said:</p>

              <p>
                “We’re pleased to partner with Plotly to support the development of their innovative
                visualization platform, Dash, while also providing Université de Sherbrooke
                researchers with the opportunity to solve industry challenges that will prepare them
                for a successful transition to Quebec’s growing digital technology job market.”
              </p>

              <p>
                <strong>Please direct queries to: ashley@plot.ly.</strong>
              </p>
            </div>
          </Body>
        </ContentPane>
      </ContentSection>
    </div>
  </Layout>
);
