import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';

class AboutPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <h1>Hello from About</h1>
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
