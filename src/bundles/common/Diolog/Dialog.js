import React from 'react';
import styles from './Dialag.module.css';

function Dialog() {
    return (
        <div className={styles.Dialog}>
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
