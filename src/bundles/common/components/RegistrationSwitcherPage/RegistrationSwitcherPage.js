import React from 'react';
import styles from './RegistrationSwitcherPage.module.css';
import BasePage from '../BasePage';
import {
    Client,
    Company
} from '.';

function RegistrationSwitcherPage({match}) {
    return (
        <BasePage className={styles.RegistrationSwitcherPage}>
            <Client className={styles.RegistrationSwitcherPage__client} to={`${match.url}/client`}/>
            <Company className={styles.RegistrationSwitcherPage__company} to={`${match.url}/company`}/>
        </BasePage>
    )
}

export default RegistrationSwitcherPage;
