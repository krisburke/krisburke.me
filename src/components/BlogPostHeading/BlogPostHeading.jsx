import React from 'react';
import { Link } from 'gatsby';
import Tag from '../Tag/Tag';
import styles from './BlogPostHeading.module.css';
import tagMap from '../Tag/tagMap';

export default function BlogPostHeading({
    title,
    date,
    timeToRead,
    slug,
    tags,
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
            <h1 className={styles.title}>{renderTitle()}</h1>
            <p className={styles.subtitle}>
                <span className={styles.date}>{date}</span>|
                <span
                    className={styles.timeToRead}
                >{`${timeToRead} min read`}</span>
            </p>
            <div className={styles.tags}>
                {tags &&
                    tags.map(tag => (
                        <span className={styles.tag} key={styles.tag}>
                            <Tag
                                text={tagMap[tag].text}
                                color={tagMap[tag].color}
                            />
                        </span>
                    ))}
            </div>
        </header>
    );
}
