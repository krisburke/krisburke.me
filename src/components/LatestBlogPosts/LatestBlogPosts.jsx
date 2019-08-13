import React from 'react';
import styles from './LatestBlogPosts.module.css';
import BlogPostHeading from '../BlogPostHeading/BlogPostHeading';

export default function({ posts }) {
    return (
        <div>
            <h2>Latest Posts</h2>
            <div>
                {posts.map(post => (
                    <BlogPostHeading post={post.node} postTags={[]} />
                ))}
            </div>
        </div>
    );
}
