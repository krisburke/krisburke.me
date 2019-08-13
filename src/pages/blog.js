import React from 'react';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import SiteLayout from '../components/SiteLayout/SiteLayout';
import BlogPostHeading from '../components/BlogPostHeading/BlogPostHeading';
import BlogPostFilterSection from '../components/BlogPostFilterSection/BlogPostFilterSection';

class BlogIndexPage extends React.Component {
    constructor(props) {
        super(props);

        // FIXME, tags need to be available to all places BlogPostHeading is
        //  rendered, not just in blog template
        this.state = {
            searchTerm: '',
            tags: [
                { text: 'React', color: 'lightBlue', id: 'react' },
                { text: 'Node.js', color: 'green', id: 'reactRouter' },
                { text: 'JavaScript', color: 'yellow', id: 'javascript' },
                { id: 'default', color: 'darkGrey' },
            ],
            currentTags: [],
            posts: get(this, 'props.data.allMarkdownRemark.edges') || [],
            filteredPosts:
                get(this, 'props.data.allMarkdownRemark.edges') || [],
        };

        this.getTagByTagId = this.getTagByTagId.bind(this);
        this.updateSearchTerm = this.updateSearchTerm.bind(this);
        this.filterPosts = this.filterPosts.bind(this);
        this.updateTags = this.updateTags.bind(this);
    }

    componentDidMount() {
        this.setState({ currentTags: this.state.tags });
    }

    getPostTitleFromPost(post) {
        return get(post, 'node.frontmatter.title');
    }

    getTagIdsFromPost(post) {
        return get(post, 'node.frontmatter.tags');
    }

    isTagIdInTagList(tagId, tagList) {
        return tagList.map(tag => tag.id).includes(tagId);
    }

    addTagToTagList(tagId, tagList) {
        return [...tagList, this.getTagByTagId(tagId)];
    }

    removeTagFromTagList(tagId, tagList) {
        return tagList.filter(tag => tag.id !== tagId);
    }

    getTagByTagId(tagId) {
        return this.state.tags.find(tag => tag.id === tagId);
    }

    filterPostsBySearchTerm(posts, searchTerm) {
        return posts.filter(post =>
            this.getPostTitleFromPost(post)
                .toLowerCase()
                .includes(searchTerm.toLowerCase())
        );
    }

    filterPostsByTags(posts, currentTags) {
        return posts.filter(post => {
            const postTagIds = this.getTagIdsFromPost(post);

            return postTagIds.some(postTagId =>
                this.isTagIdInTagList(postTagId, currentTags)
            );
        });
    }

    filterPosts() {
        const { posts, searchTerm, currentTags } = this.state;
        let filteredPosts = this.filterPostsBySearchTerm(posts, searchTerm);

        if (currentTags.length > 0) {
            filteredPosts = this.filterPostsByTags(filteredPosts, currentTags);
        }

        this.setState({ filteredPosts });
    }

    updateSearchTerm({ target: { value } }) {
        this.setState({ searchTerm: value }, () => {
            this.filterPosts();
        });
    }

    updateTags(tagId) {
        const { currentTags } = this.state;

        const updatedTags = this.isTagIdInTagList(tagId, currentTags)
            ? this.removeTagFromTagList(tagId, currentTags)
            : this.addTagToTagList(tagId, currentTags);

        this.setState({ currentTags: updatedTags }, () => {
            this.filterPosts();
        });
    }

    render() {
        const { filteredPosts, tags, currentTags, searchTerm } = this.state;
        const siteTitle = get(this, 'props.data.site.siteMetadata.title');
        const postCount = (filteredPosts && filteredPosts.length) || 0;

        return (
            <SiteLayout location={this.props.location} title={siteTitle}>
                <BlogPostFilterSection
                    tags={tags}
                    currentTags={currentTags}
                    handleUpdateTags={this.updateTags}
                    searchTerm={searchTerm}
                    handleUpdateSearchTerm={this.updateSearchTerm}
                    postCount={postCount}
                />
                <main>
                    {filteredPosts.map(post => (
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
