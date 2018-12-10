import React from 'react';
import { Switch, Route } from 'react-router'
import RegistrationSwitcherPage from '../RegistrationSwitcherPage';
import BookingPage from '../../../client/components/BookingPage';
import RegisterClientPage from '../../../client/components/RegisterClientPage';
import RegisterCompanyPage from "../../../service/pages/RegisterCompanyPage";
import ServicesPage from '../ServicesPage';

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
                <Route path="/services" component={ServicesPage}/>
                <Route path="/login" component={LoginPage}/>
            </Switch>
        </main>
    )
}

export default Content;
