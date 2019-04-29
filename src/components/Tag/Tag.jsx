import React from 'react';
import styles from './Tag.module.css';

export default function Tag({ text, color }) {
    return (
        <span className={`${styles.tag} ${styles[color]}`}>
            {text.toUpperCase()}
        </span>
    );
}
