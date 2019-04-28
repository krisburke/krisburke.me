import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { formatPostDate } from '../utils/helpers';
import BlogLayout from '../components/BlogLayout';
import styles from './blog.module.css';

class BlogIndexPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <BlogLayout location={this.props.location} title={siteTitle}>
                <h1 className={styles.blogTitle}>Writing</h1>
                <main>
                    {posts.map(({ node }) => {
                        const title =
                            get(node, 'frontmatter.title') || node.fields.slug;
                        return (
                            <article
                                className={styles.post}
                                key={node.fields.slug}
                            >
                                <header>
                                    <h3 className={styles.postTitleHeading}>
                                        <Link
                                            className={styles.postTitleLink}
                                            to={node.fields.slug}
                                            rel="bookmark"
                                        >
                                            {title}
                                        </Link>
                                    </h3>
                                    <small className={styles.postDate}>
                                        {formatPostDate(node.frontmatter.date)}
                                        {` | ${node.timeToRead} min read`}
                                    </small>
                                </header>
                                <p
                                    className={styles.spoiler}
                                    dangerouslySetInnerHTML={{
                                        __html: node.frontmatter.spoiler,
                                    }}
                                />
                            </article>
                        );
                    })}
                </main>
            </BlogLayout>
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
