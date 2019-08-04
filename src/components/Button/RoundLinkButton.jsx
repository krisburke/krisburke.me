import React from 'react';
import styles from './RoundLinkButton.module.css';

export default function({ text, color, url }) {
    return (
        <span className={`${styles.button} ${styles[color]}`}>
            <a className={styles.link} href={url}>
                {text.toUpperCase()}
            </a>
        </span>
    );
}
