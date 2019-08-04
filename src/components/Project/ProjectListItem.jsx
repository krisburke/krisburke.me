import React from 'react';
import styles from './ProjectListItem.module.css';
import RoundLinkButton from '../Button/RoundLinkButton';

export default ({ project }) => {
    const { title, description, sourceUrl, hostedUrl, tech } = project;

    return (
        <header className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            {/*<p>{tech.join(', ')}</p>*/}
            {sourceUrl && (
                <RoundLinkButton
                    text="View Source"
                    color="darkGrey"
                    url={sourceUrl}
                />
            )}
            {hostedUrl && (
                <RoundLinkButton text="View" color="darkGrey" url={hostedUrl} />
            )}
        </header>
    );
};
