import React from 'react';
import styles from './Bio.module.css';

export default ({ bio }) => {
    return (
        <div>
            <h1>Hi, I'm Kris</h1>
            <p>{bio}</p>
        </div>
    );
};
