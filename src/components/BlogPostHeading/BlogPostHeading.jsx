import React from 'react';
import { Link } from 'gatsby';
import Tag from '../Tag/Tag';
import styles from './BlogPostHeading.module.css';

export default function BlogPostHeading({
    title,
    date,
    timeToRead,
    slug,
    postTags,
}) {
    const renderTitle = () => {
        return slug ? (
            <Link className={styles.titleLink} to={slug}>
                {title}
            </Link>
        ) : (
            title
        );
    };

    return (
        <header className={styles.header}>
            <div
                className={styles.linkBlock}
                onClick={() => {
                    if (slug) {
                        location.href = slug;
                    }
                }}
            >
                <h1 className={styles.title}>{renderTitle()}</h1>
                <p className={styles.subtitle}>
                    <span className={styles.date}>{date}</span>|
                    <span
                        className={styles.timeToRead}
                    >{`${timeToRead} min read`}</span>
                </p>
            </div>
            <div className={styles.tags}>
                {postTags &&
                    postTags.map(tag => {
                        return (
                            <span className={styles.tag} key={tag.id}>
                                <Tag text={tag.text} color={tag.color} />
                            </span>
                        );
                    })}
            </div>
        </header>
    );
}
