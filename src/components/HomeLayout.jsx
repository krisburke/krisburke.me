import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import styles from './HomeLayout.module.css';
import SEO from './SEO';

class HomeLayout extends React.Component {
    render() {
        return (
            <div>
                <SEO />
                <div className={styles.grid}>
                    <header className={styles.header}>
                        <Navbar />
                    </header>

                    <aside className={styles.sidebarLeft} />

                    <div className={styles.mainContent}>
                            {this.props.children}
                    </div>

                    <aside className={styles.sidebarRight} />
                    <Footer />
                </div>
            </div>
        );
    }
}

export default HomeLayout;
