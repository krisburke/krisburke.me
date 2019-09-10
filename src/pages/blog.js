import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import typographyStyles from '../common/styles/typography.css';
import { withTags } from '../components/Tag/withTags';

class BlogIndexPage extends React.Component {
    render() {
        const posts = get(this, 'props.data.allMarkdownRemark.edges') || [];
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const BlogPostHeadingWithTags = withTags(BlogPostHeading);

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <h1 className={typographyStyles.pageHeading}>WRITING</h1>
                    {posts.map(post => (
                        <article key={get(post, 'node.fields.slug')}>
                            <BlogPostHeadingWithTags
                                post={post.node}
                                postTags={
                                    get(post, 'node.frontmatter.tags') || []
                                }
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
                        tags
                    }
                }
            }
        }
    }
`;
