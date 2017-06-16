import {ContentSection, ContentPane, Title, Subtitle, Body, Graphic} from '../../../components/content-section/content-section';

export default () => (
    <div>
        <ContentSection>
            <ContentPane half center-vertically text>
                <Title>
                    Drag and drop
                </Title>
                <Body>
                <p>
                    Create <a href="http://formidable.com/open-source/spectacle/" target="_blank">Spectacle</a> based slide decks using a drag & drop interface
                </p>
                </Body>
            </ContentPane>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/drag-drop.gif"/>
            </ContentPane>
        </ContentSection>
        {/*2 graphics*/}
        <ContentSection>
            <ContentPane half center-vertically>
                <Graphic label="Google: Quarterly Earnings"
                         link="https://plot.ly/~verazab/108/"
                         image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/preso_google_1.jpg"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="Blizzard Games Earnings"
                    link="https://plot.ly/~bdun9/164/"
                    image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/preso_activision_blizzard_2.jpg"/>
            </ContentPane>
        </ContentSection>
        <ContentSection>
            <ContentPane half graphic>
                <Graphic
                    image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/screenshot-chart.png"/>
            </ContentPane>
            <ContentPane half center-vertically text>
                <Title>
                    Embed straight from Plotly
                </Title>
                <Body>
                <p>
                    Embed interactive, D3.js charts and dashboards from your Plotly account.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
        {/*2 graphics*/}
        <ContentSection>
            <ContentPane half center-vertically>
                <Graphic label="a16z: Mobile Ate the World"
                         link="https://plot.ly/~Dreamshot/8278/"
                         image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/preso_computer.jpg"/>
            </ContentPane>
            <ContentPane half center-vertically>
                <Graphic
                    label="Red Hat Brand Template"
                    link="https://plot.ly/~bdun9/170/"
                    image="https://marketing.plot.ly/static/marketing/assets/images/powerpoint-online/preso_redhat.jpg"/>
            </ContentPane>
        </ContentSection>

        <ContentSection>
            <ContentPane full center center-vertically text>
                <Title>
                    Share Online
                </Title>
                <Body>
                <p>
                    Share your presentation online with public or secret links.
                </p>
                </Body>
            </ContentPane>
        </ContentSection>
    </div>
)