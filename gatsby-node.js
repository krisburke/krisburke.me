const _ = require('lodash');
const Promise = require('bluebird');
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;

    return new Promise((resolve, reject) => {
        const blogPost = path.resolve('./src/templates/post.js');

        resolve(
            graphql(
                `
                    {
                        allMarkdownRemark(
                            sort: { fields: [frontmatter___date], order: DESC }
                            limit: 1000
                        ) {
                            edges {
                                node {
                                    fields {
                                        slug
                                    }
                                    frontmatter {
                                        title
                                        tags
                                    }
                                }
                            }
                        }
                    }
                `
            ).then(result => {
                if (result.errors) {
                    console.log(result.errors);
                    reject(result.errors);
                    return;
                }

                // Create blog posts pages.
                const posts = result.data.allMarkdownRemark.edges;

                posts.forEach(({ node }) => {
                    createPage({
                        path: node.fields.slug,
                        component: blogPost,
                        context: {
                            slug: node.fields.slug,
                        },
                    });
                });
            })
        );
    });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (_.get(node, 'internal.type') === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: 'posts' });

        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
};
