import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import BlogLayout from '../components/BlogLayout';
import SEO from '../components/SEO';
import { formatPostDate } from '../utils/helpers';
import styles from './blog-post.module.css';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        let { previous, next, slug } = this.props.pageContext;

        let html = post.html;

        return (
            <BlogLayout location={this.props.location} title={siteTitle}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.spoiler}
                    slug={post.fields.slug}
                />
                <main className={styles.postMain}>
                    <article>
                        <header className={styles.postHeader}>
                            <h1 className={styles.postTitle}>
                                {post.frontmatter.title}
                            </h1>
                            <p className={styles.postDate}>
                                {formatPostDate(post.frontmatter.date)}
                                {` | ${post.timeToRead} min read`}
                            </p>
                        </header>
                        <div
                            className={styles.postContent}
                            dangerouslySetInnerHTML={{ __html: html }}
                        />
                    </article>
                </main>
                <aside>
                    <h3>
                        <Link to={'/'}>Home</Link>
                    </h3>
                </aside>
            </BlogLayout>
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
            }
            fields {
                slug
            }
        }
    }
`;
