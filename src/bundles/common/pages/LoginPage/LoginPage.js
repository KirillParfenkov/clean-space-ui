import React from 'react';
import * as Yup from 'yup';
import { Field } from 'react-final-form'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectLoginFetchingState,
    selectLoginError,
} from '../../selectors';
import actions from '../../actions';

import BasePage from '../../components/BasePage';
import Button from '../../components/Button';
import BaseForm from '../../components/BaseForm';

import styles from './LoginPage.module.css';

const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
    password: Yup.string()
        .min(3, 'Password must be more than 3 characters')
        .required('Password Required'),
});

function LoginPage({dispatch, history}) {

    function createCompletedHandler(history) {
        return () => {
            dispatch(actions.common.clearLoginForm());
            history.push('/');
        }
    }

    function handleSubmit(values) {
        dispatch(actions.common.loginRequest(values, createCompletedHandler(history)));
    }

    return (
        <BasePage className={styles.LoginPage}>
            <BaseForm handleSubmit={handleSubmit} schema={LoginSchema}>
                <label>
                    Email
                    <Field component="input" type="email" name="email" autoComplete="off" pattern=""/>
                </label>
                <label>
                    Password
                    <Field component="input" type="password" name="password" autoComplete="off"/>
                </label>
                <Button type="submit" disabled={false}>Submit</Button>
            </BaseForm>
        </BasePage>
    )
}

const mapStateToProps = createStructuredSelector({
    fetching: selectLoginFetchingState,
    serverError: selectLoginError,
});
export default connect(mapStateToProps)(LoginPage);
