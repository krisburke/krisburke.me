import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import SEO from '../components/SEO';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import Card from '../components/Card/Card';
import { formatPostDate } from '../utils/helpers';
import styles from './blog-post.module.css';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = get(this.props, 'data.site.siteMetadata.title');
        let { previous, next, slug } = this.props.pageContext;

        let html = post.html;

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
                            title={post.frontmatter.title}
                            date={formatPostDate(post.frontmatter.date)}
                            timeToRead={post.timeToRead}
                            tags={post.frontmatter.tags}
                        />
                        <Card>
                            <div
                                className={styles.postContent}
                                dangerouslySetInnerHTML={{ __html: html }}
                            />
                        </Card>
                    </article>
                </main>
                <aside>
                    <h3>
                        <div>
                            <Link to={'/blog'}>{'<'} Back to Blog</Link>
                        </div>
                        <div>
                            <a href="https://twitter.com/_krisburke">
                                Discuss on Twitter
                            </a>
                        </div>
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
