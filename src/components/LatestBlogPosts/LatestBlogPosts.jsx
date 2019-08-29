import React from 'react';
import BlogPostHeading from '../BlogPostHeading/BlogPostHeading';
import typographyStyles from '../../common/styles/typography.css';

export default function({ posts }) {
    return (
        <div>
            <h1 className={typographyStyles.pageHeading}>LATEST POSTS</h1>
            <div>
                {posts.map(post => (
                    <BlogPostHeading post={post.node} postTags={[]} />
                ))}
            </div>
        </div>
    );
}
