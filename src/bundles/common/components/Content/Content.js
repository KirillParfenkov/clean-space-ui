import React from 'react';
import { Switch, Route } from 'react-router'

import styles from './Content.module.css';
import RegistrationSwitcherPage from '../RegistrationSwitcherPage';

function Content() {
    return (
        <main className={styles.Content}>
            <Switch>
                <Route path="/registration" component={RegistrationSwitcherPage}/>
            </Switch>
        </main>
    )
}

export default Content;
