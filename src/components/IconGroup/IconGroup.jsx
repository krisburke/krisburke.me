import React from 'react';
import Icon from '../Icon/Icon';
import styles from './IconGroup.module.css';
import rssIcon from '../../assets/simple-icons/rss.svg';
import twitterIcon from '../../assets/simple-icons/twitter.svg';
import githubIcon from '../../assets/simple-icons/github.svg';
import stackOverflowIcon from '../../assets/simple-icons/stackoverflow.svg';

const IconGroup = () => {
    return (
        <div className={styles.icons}>
            <Icon href="/rss.xml" alt="RSS Icon" src={rssIcon} />
            <Icon
                href="https://mobile.twitter.com/_krisburke"
                alt="Twitter Icon"
                src={twitterIcon}
            />
            <Icon
                href="https://github.com/krisburke"
                alt="Github Icon"
                src={githubIcon}
            />
            <Icon
                href="https://stackoverflow.com/users/5171478/kris-burke"
                alt="Stack Overflow Icon"
                src={stackOverflowIcon}
            />
        </div>
    );
};

export default IconGroup;
