import React from 'react';
import styles from '../Icon/Icon.module.css';

const Icon = ({ href, alt, imgClass, src }) => {
    return (
        <div className={styles.icon}>
            <a href={href} target="_blank" rel="noopener noreferrer">
                <img className={imgClass} src={src} alt={alt} />
            </a>
        </div>
    );
};

export default Icon;
