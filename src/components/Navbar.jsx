import React from 'react';
import styles from './Navbar.module.css';

export default () => (
    <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
            KRIS BURKE
        </a>
        <ul className={styles.navLinks}>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/blog">
                    BLOG
                </a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/projects">
                    PROJECTS
                </a>
            </li>
            <li className={styles.navItem}>
                <a className={styles.navItemLink} href="/about">
                    ABOUT
                </a>
            </li>
        </ul>
    </nav>
);
