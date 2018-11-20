import React from 'react';
import { Link } from 'react-router-dom'

import styles, {
    Header__menuItem,
    Header__menuTitleItem,
    Header__menuDescriptionItem
} from './Header__menuList.module.css';

function Header__menuList({ onSelect }) {
    return (
        <ul className={styles.Header__menuList}>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    <Link to="/booking" onClick={onSelect}>Booking</Link>
                </span>
                <span className={Header__menuDescriptionItem}>
                    Allows you to describe the job you want to get
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    <Link to="/services" onClick={onSelect}>Services</Link>
                </span>
                <span className={Header__menuDescriptionItem}>
                    A list of all available services
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    <Link to="registration" onClick={onSelect}>Registration</Link>
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    <Link to="login" onClick={onSelect}>Login</Link>
                </span>
            </li>
        </ul>
    )
}

export default Header__menuList;
