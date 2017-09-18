import {ContentSection, ContentPane, Body} from 'components/content-section';
import Link from 'next/link';

class IndustriesMain extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const story = this.props.story;

        const removeActionOnLink = {
            transform: 'initial',
            color: '#fff'
        };

        return (

            <a href={story.url} className="enterprise-card">
                <div className="enterprise-card-wrapper">
                    <div className="enterprise-card-image" style={story.style}>
                    </div>
                    <div className="enterprise-card-details">
                        <div className="enterprise-card-title">
                            {story.label}
                        </div>
                    </div>
                    <div className="enterprise-card-hover">
                        <div className="enterprise-card-cta">
                            {story.cta}
                        </div>
                    </div>
                </div>
            </a>
        )
    }
}

export default IndustriesMain;
