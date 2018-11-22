import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';


function Button({ children, className, onClick, ...otherProps}) {
    return (
        <button className={classNames(styles.Button, className)}
                onClick={onClick}
                {...otherProps}>
            {children}
        </button>
    )
}

export default Button;
