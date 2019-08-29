import React from 'react';
import styles from './Bio.module.css';

export default ({ bio }) => {
    return (
        <div className={styles.bio}>
            <h1 className={styles.greeting}>Hi, I'm Kris.</h1>
            <p className={styles.description}>{bio}</p>
        </div>
    );
};
