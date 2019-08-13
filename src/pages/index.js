import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import Bio from '../components/Bio/Bio';
import LatestBlogPosts from '../components/LatestBlogPosts/LatestBlogPosts';

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.getLatestPosts = this.getLatestPosts.bind(this);
    }

    getLatestPosts() {
        const numberOfPosts = 2;
        const allPosts = get(this, 'props.data.allMarkdownRemark.edges') || [];
        return allPosts.slice(0, numberOfPosts);
    }

    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const bio = get(this, 'props.data.site.siteMetadata.bio');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <Bio bio={bio} />
                    <LatestBlogPosts posts={this.getLatestPosts()} />
                </main>
            </SiteLayout>
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
                bio
            }
        }
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    fields {
                        slug
                    }
                    timeToRead
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        spoiler
                        tags
                    }
                }
            }
        }
    }
`;
