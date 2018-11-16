import React, { useContext } from 'react';
import classNames from 'classnames';
import NavigationItem from './__navigationItem';
import styles from './Header.module.css';
import DialogContext from '../DialogContext';

function Header({ className }) {

    const { dialog, opeded } = useContext(DialogContext);


    return (
        <header className={classNames(styles.Header, className)}>
            <nav className={styles.Header__navigation}>
                <div onClick={() => {
                    dialog(false);
                }}
                >CLEAN SPACE</div>
                <div onClick={() => {
                    dialog(true, (
                        <ul>
                            <li>Test</li>
                            <li>Test 2</li>
                        </ul>
                    ));
                }}>Menu</div>
            </nav>
        </header>
    )
}

export default Header;
