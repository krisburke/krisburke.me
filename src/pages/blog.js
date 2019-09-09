import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import typographyStyles from '../common/styles/typography.css';

class BlogIndexPage extends React.Component {
    constructor(props) {
        super(props);

        // FIXME, tags need to be available to all places BlogPostHeading is
        //  rendered, not just in blog template
        this.state = {
            tags: [
                { text: 'React', color: 'lightBlue', id: 'react' },
                { text: 'Node.js', color: 'green', id: 'reactRouter' },
                { text: 'JavaScript', color: 'yellow', id: 'javascript' },
                { id: 'default', color: 'darkGrey' },
            ],
        };

        this.getTagByTagId = this.getTagByTagId.bind(this);
    }

    componentDidMount() {
        this.setState({ currentTags: this.state.tags });
    }

    getTagIdsFromPost(post) {
        return get(post, 'node.frontmatter.tags') || [];
    }

    getTagByTagId(tagId) {
        return this.state.tags.find(tag => tag.id === tagId);
    }

    render() {
        const posts = get(this, 'props.data.allMarkdownRemark.edges') || [];
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <main>
                    <h1 className={typographyStyles.pageHeading}>WRITING</h1>
                    {posts.map(post => (
                        <article key={get(post, 'node.fields.slug')}>
                            <BlogPostHeading
                                post={post.node}
                                postTags={this.getTagIdsFromPost(post).map(
                                    tagId => this.getTagByTagId(tagId)
                                )}
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
