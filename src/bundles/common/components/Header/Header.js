import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './Header.module.css';
import { Menu } from '.';

function Header({ className }) {

    return (
        <header className={classNames(styles.Header, className)}>
            <nav className={styles.Header__navigation}>
                <div>CLEAN SPACE</div>
                <Menu>Menu</Menu>
            </nav>
        </header>
    )
}

export default Header;
