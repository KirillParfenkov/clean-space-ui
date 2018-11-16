import React from 'react';
import styles, {
    Header__menuItem,
    Header__menuTitleItem,
    Header__menuDescriptionItem
} from './Header__menuList.module.css';

function Header__menuList() {
    return (
        <ul className={styles.Header__menuList}>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    Booking
                </span>
                <span className={Header__menuDescriptionItem}>
                    Allows you to describe the job you want to get
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    Services
                </span>
                <span className={Header__menuDescriptionItem}>
                    A list of all available services
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    Registration
                </span>
            </li>
            <li className={Header__menuItem}>
                <span className={Header__menuTitleItem}>
                    Login
                </span>
            </li>
        </ul>
    )
}

export default Header__menuList;
