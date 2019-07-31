import React from 'react';
import Tag from '../Tag/Tag';
import RoundLinkButton from '../Button/RoundLinkButton';

export default ({ project }) => {
    const { title, description, sourceUrl, hostedUrl, tech } = project;

    return (
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p>{tech.join(', ')}</p>
            {hostedUrl && (
                <RoundLinkButton text="View" color="darkGrey" url={hostedUrl} />
            )}
            {sourceUrl && (
                <RoundLinkButton
                    text="View Source"
                    color="darkGrey"
                    url={sourceUrl}
                />
            )}
        </div>
    );
};
