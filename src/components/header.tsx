import * as React from 'react';
import styles from '../styles/header.module.css'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
        <header className={styles.container}>
            
            <div className={styles.moveText}>
                <p>Stay tuned for our latest updates and news!</p>
            </div>

            <nav>
                <div className={styles.logo}>

                </div>
                <a href="#about">About</a>
                <a href="#things">Things</a>
                <a href="#contacts">Contacts</a>
                <a href="#information">Information</a>
                <a href="#information">Creators</a>
            </nav>
            <div className={styles.profile}>
                <a href="#profile"></a>
            </div>
        </header>
        </div>
    );
};

export default Header;