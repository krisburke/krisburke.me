import React from 'react';
import get from 'lodash/get';
import BlogPostHeading from '../BlogPostHeading/BlogPostHeading';
import typographyStyles from '../../common/styles/typography.css';
import { withTags } from '../Tag/withTags';

export default function({ posts }) {
    const BlogPostHeadingWithTags = withTags(BlogPostHeading);

    return (
        <div>
            <h1 className={typographyStyles.pageHeading}>LATEST POSTS</h1>
            <div>
                {posts.map(post => (
                    <BlogPostHeadingWithTags
                        key={get(post, 'node.fields.slug')}
                        post={post.node}
                        postTags={get(post, 'node.frontmatter.tags') || []}
                    />
                ))}
            </div>
        </div>
    );
}
