import React from 'react';
import styles from './ErrorPanel__item.module.css';

function ErrorPanel__item({children}) {
    return (
        <li className={styles.ErrorPanel__item}>
            {children}
        </li>
    )
}

export default ErrorPanel__item;
