import React from 'react';
import styles from './Footer.module.css';
import rssIcon from '../../assets/simple-icons/rss.svg';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <div className={styles.icons}>
                    <div className={styles.icon}>
                        <a
                            href="/rss.xml"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                className={styles.svg}
                                src={rssIcon}
                                alt="rss icon"
                            />
                        </a>
                    </div>
                    <a
                        href="https://mobile.twitter.com/_krisburke"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        twitter
                    </a>{' '}
                    &bull;{' '}
                    <a
                        href="https://github.com/krisburke"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        github
                    </a>{' '}
                    &bull;{' '}
                    <a
                        href="https://stackoverflow.com/users/5171478/kris-burke"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        stack overflow
                    </a>
                </div>
            </footer>
        );
    }
}

export default Footer;
