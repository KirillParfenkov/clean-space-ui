import React from 'react';
import styles from './RegistrationSwitcherPage.module.css';
import BasePage from '../BasePage';
import {
    Client,
    Company
} from '.';

function RegistrationSwitcherPage() {
    return (
        <BasePage className={styles.RegistrationSwitcherPage}>
            <Client className={styles.RegistrationSwitcherPage__client}/>
            <Company className={styles.RegistrationSwitcherPage__company}/>
        </BasePage>
    )
}

export default RegistrationSwitcherPage;
