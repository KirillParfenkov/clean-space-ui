import React from 'react';
import classNames from 'classnames';
import NavigationItem from './__navigationItem';
import styles from './Header.module.css';

function Header({ className }) {
    return (
        <header className={classNames(styles.Header, className)}>
            <nav className={styles.Header__navigation}>
                <NavigationItem>CLEAN SPACE</NavigationItem>
                <NavigationItem>Menu</NavigationItem>
            </nav>
        </header>
    )
}

export default Header;
