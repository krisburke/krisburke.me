import React from 'react';
import styles from './Tag.module.css';

export default function Tag({ text, color, isInactive }) {
    if (!text) {
        return <div />;
    }

    return (
        <span
            className={`${isInactive ? styles.inactive : styles[color]} ${
                styles.tag
            }
            `}
        >
            {text && text.toUpperCase()}
        </span>
    );
}
