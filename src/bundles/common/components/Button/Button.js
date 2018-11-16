import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';


function Button({ children, className, onClick }) {
    return (
        <button className={classNames(styles.Button, className)}
                onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;
