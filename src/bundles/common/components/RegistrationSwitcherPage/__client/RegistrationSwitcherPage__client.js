import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';

import styles from './RegistrationSwitcherPage__client.module.css';
import image from './support.svg';



function RegistrationSwitcherPage__client({className, to}) {
    return (
        <div className={classNames(className, styles.RegistrationSwitcherPage__client)}>
            <img src={image} alt="company"/>
            <Link to={to}>Register as a Client</Link>
        </div>
    )
}

export default RegistrationSwitcherPage__client;
