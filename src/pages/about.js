import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import typographyStyles from '../common/styles/typography.css';

class AboutPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <h1 className={typographyStyles.pageHeading}>ABOUT</h1>
                </main>
            </SiteLayout>
        );
    }
}

export default AboutPage;

export const pageQuery = graphql`
    {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`;
