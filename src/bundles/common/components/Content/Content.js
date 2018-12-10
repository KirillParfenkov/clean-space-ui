import React from 'react';
import { Switch, Route } from 'react-router'
import RegistrationSwitcherPage from 'bundles/common/components/RegistrationSwitcherPage';
import BookingPage from 'bundles/client/components/BookingPage';
import RegisterClientPage from 'bundles/client/components/RegisterClientPage';
import RegisterCompanyPage from 'bundles/service/pages/RegisterCompanyPage';
import ServiceSearchPage from 'bundles/service/pages/ServiceSearchPage';

import styles from './Content.module.css';
import LoginPage from '../../pages/LoginPage';

function Content() {
    return (
        <main className={styles.Content}>
            <Switch>
                <Route path="/booking" component={BookingPage}/>
                <Route path="/registration/client" component={RegisterClientPage}/>
                <Route path="/registration/company" component={RegisterCompanyPage}/>
                <Route path="/registration" component={RegistrationSwitcherPage}/>
                <Route path="/services" component={ServiceSearchPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </main>
    )
}

export default Content;
