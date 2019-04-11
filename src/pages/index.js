import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

class HomePage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO />
                <aside>
                    <Bio />
                </aside>
                <main>
                    <h1>Hello from Home</h1>
                </main>
                <Footer />
            </Layout>
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
