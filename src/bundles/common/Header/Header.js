import React from 'react';
import NavigationItem from './__navigationItem';
import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.Header}>
            <nav className={styles.Header__navigation}>
                <NavigationItem>CLEAN SPACE</NavigationItem>
                <NavigationItem>menu</NavigationItem>
            </nav>
        </header>
    )
}

export default Header;
