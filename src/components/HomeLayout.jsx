import React from 'react';
import { Link } from 'gatsby';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './HomeLayout.module.css';


class BlogLayout extends React.Component {
    render() {
        return (
            <div className={styles.grid}>
                <header className={styles.header}>
                    <Navbar/>
                </header>

                <aside className={styles.sidebarLeft}>
                    Left Sidebar
                </aside>

                <div className={styles.mainContent}>
                    <h1>
                        <Link to={'/'}>{this.props.title}</Link>
                        {this.props.children}
                    </h1>
                </div>

                <aside className={styles.sidebarRight}>
                    Right Sidebar
                </aside>

                <Footer/>
            </div>
        );
    }
}

export default BlogLayout;
