import React from 'react';
import { Switch, Route } from 'react-router'
import RegistrationSwitcherPage from '../RegistrationSwitcherPage';
import ServicesPage from '../ServicesPage';

import styles from './Content.module.css';

function Content() {
    return (
        <main className={styles.Content}>
            <Switch>
                <Route path="/registration" component={RegistrationSwitcherPage}/>
                <Route path="/services" component={ServicesPage}/>
            </Switch>
        </main>
    )
}

export default Content;
