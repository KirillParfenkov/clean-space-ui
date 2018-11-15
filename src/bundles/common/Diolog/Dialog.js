import React from 'react';
import classNames from 'classnames';
import styles from './Dialag.module.css';

function Dialog({ opened }) {
    return (
        <div className={classNames(styles.Dialog, { [styles.Dialog_opened]: opened})}>
            <ul>
                <li>Booking</li>
                <li>Available Services</li>
                <li>Registration</li>
                <li>Login</li>
            </ul>
        </div>
    );
}

export default Dialog;
