import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';
import { formatPostDate, formatReadingTime } from '../utils/helpers';

import Bio from '../components/Bio';
import Footer from '../components/Footer';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

class BlogIndexPage extends React.Component {
    render() {
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const posts = get(this, 'props.data.allMarkdownRemark.edges');

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO />
                <aside>
                    <Bio />
                </aside>
                <main>
                    {posts.map(({ node }) => {
                        const title =
                            get(node, 'frontmatter.title') || node.fields.slug;
                        return (
                            <article key={node.fields.slug}>
                                <header>
                                    <h3>
                                        <Link
                                            to={node.fields.slug}
                                            rel="bookmark"
                                        >
                                            {title}
                                        </Link>
                                    </h3>
                                    <small>
                                        {formatPostDate(node.frontmatter.date)}
                                        {` • ${formatReadingTime(
                                            node.timeToRead
                                        )}`}
                                    </small>
                                </header>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: node.frontmatter.spoiler,
                                    }}
                                />
                            </article>
                        );
                    })}
                </main>
                <Footer />
            </Layout>
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
