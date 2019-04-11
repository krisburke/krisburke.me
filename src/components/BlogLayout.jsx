import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './BlogLayout.module.css';
import SEO from './SEO';


class BlogLayout extends React.Component {
    render() {
        return (
            <div>
                <SEO/>
                <div className={styles.grid}>
                    <header className={styles.header}>
                        <Navbar/>
                    </header>

                    <aside className={styles.sidebarLeft}>
                    </aside>

                    <div className={styles.mainContent}>
                            {this.props.children}
                    </div>

                    <aside className={styles.sidebarRight}>
                    </aside>
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default BlogLayout;
