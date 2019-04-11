import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import HomeLayout from '../components/HomeLayout';
import SEO from '../components/SEO';

class HomePage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <HomeLayout location={this.props.location} title={siteTitle}>
                <SEO />
                <aside>
                    <Bio />
                </aside>
                <main>
                    <h1>Hello from Home</h1>
                </main>
            </HomeLayout>
        );
    }
}

export default HomePage;

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
