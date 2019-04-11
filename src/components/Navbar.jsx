import React from 'react';
import styles from './Navbar.module.css';
import Logo from '../assets/mock-logo.png';

export default () => (
    <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
            <img className={styles.logoImg} src={Logo} alt="temporary mock logo" />
        </a>
        <ul className={styles.navLinks}>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/blog">
                    Writing
                </a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/projects">
                    Projects
                </a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/about">
                    About
                </a>
            </li>
        </ul>
    </nav>
);
