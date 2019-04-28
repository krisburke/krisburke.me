import React from 'react';
import { Link } from 'gatsby';
import styles from './BlogPostHeading.module.css';

export default function BlogPostHeading({ title, date, timeToRead, slug }) {
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
        </header>
    );
}
