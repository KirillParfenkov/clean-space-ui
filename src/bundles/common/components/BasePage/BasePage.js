import React from 'react';
import classNames from 'classnames';
import styles from './BasePage.module.css';

function BasePage({className, children}) {
    return (
        <div className={classNames(styles.BasePage, className)}>
            {
                children
            }
        </div>
    )
}

export default BasePage;
