import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import SEO from '../components/SEO';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import Card from '../components/Card/Card';
import styles from './blog-post.module.css';

// TODO: add twitter link to blog posts (uncomment)

class BlogPostTemplate extends React.Component {
    render() {
        const post = get(this, 'props.data.markdownRemark');
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        let { previous, next, slug } = this.props.pageContext; // TODO

        let html = post.html;
        console.log('post in blog post', post);

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.spoiler}
                    slug={post.fields.slug}
                />
                <main className={styles.postMain}>
                    <article>
                        <BlogPostHeading
                            post={post}
                            tags={post.frontmatter.tags} // FIXME
                        />
                        <Card>
                            <div
                                className={styles.postContent}
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </Card>
                    </article>
                </main>
                <aside className={styles.postAside}>
                    <h3 className={styles.twitterLink}>
                        <a href="https://twitter.com/_krisburke">
                            {/*Discuss on Twitter*/}{' '}
                        </a>
                    </h3>
                </aside>
            </SiteLayout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            html
            timeToRead
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
                spoiler
                tags
            }
            fields {
                slug
            }
        }
    }
`;
