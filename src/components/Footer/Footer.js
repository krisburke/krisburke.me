import React from 'react';
import styles from './Footer.module.css';
import IconGroup from '../IconGroup/IconGroup';

class Footer extends React.Component {
    render() {
        return (
            <footer className={styles.footer}>
                <IconGroup />
                <p className={styles.copyright}>© Kris Burke, 2019</p>
            </footer>
        );
    }
}

export default Footer;
