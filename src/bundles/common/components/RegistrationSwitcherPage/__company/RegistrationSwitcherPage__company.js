import React from 'react';
import { Link } from 'react-router-dom'
import classNames from 'classnames';

import styles from './RegistrationSwitcherPage__company.module.css';
import image from './wiping-swipe-for-floors.svg';


function RegistrationSwitcherPage__company({className, to}) {
    return (
        <div className={classNames(className, styles.RegistrationSwitcherPage__company)}>
            <img src={image} alt="Client"/>
            <Link to={to}>Register as a Company</Link>
        </div>
    )
}

export default RegistrationSwitcherPage__company;
