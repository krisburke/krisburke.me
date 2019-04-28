import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import { formatPostDate } from '../utils/helpers';

class BlogIndexPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    {posts.map(({ node }) => (
                        <article key={node.fields.slug}>
                            <BlogPostHeading
                                title={get(node, 'frontmatter.title')}
                                date={formatPostDate(node.frontmatter.date)}
                                timeToRead={node.timeToRead}
                                slug={node.fields.slug}
                            />
                        </article>
                    ))}
                </main>
            </SiteLayout>
        );
    }
}

export default BlogIndexPage;

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
                description
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
                    }
                }
            }
        }
    }
`;
