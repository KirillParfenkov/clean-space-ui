import React from 'react';
import * as Yup from 'yup';
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import {
    selectRegisterClientFetchingState,
    selectRegisterClientError
} from 'bundles/client/selectors';
import actions from 'bundles/client/actions';

import BasePage from 'bundles/common/components/BasePage';
import Button from 'bundles/common/components/Button';
import BaseForm from 'bundles/common/components/BaseForm';
import ErrorPanel, { styles as errorPanelStyles } from 'bundles/common/components/ErrorPanel';

import styles from './RegisterClientPage.module.css';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
    password: Yup.string()
        .min(3, 'Password must be more than 3 characters')
        .required('Password Required'),
    passwordConfirm: Yup.string()
        .required('Confirm Password Required')
        .oneOf([Yup.ref('password')], 'Passwords do not match')
});

const mapServerErrorMessage = (error) => {
    if (error) {
        if (error.name === 'UserServiceEmailRegisteredError') {
            return {
                userServiceEmailRegisteredError: 'This email already exists',
            };
        }
        return {
            unknown: 'Unknown error',
        };
    }
};

function RegisterClientPage({ dispatch, history, fetching, serverError }) {

    function createCompletedHandler(history) {
        return () => {
            dispatch(actions.client.clearRegisterForm());
            history.push('/');
        }
    }

    function handleSubmit(values) {
        dispatch(actions.client.registerRequest(values, createCompletedHandler(history)));
    }

    return (
        <BasePage className={styles.RegisterClientPage}>
            <BaseForm handleSubmit={handleSubmit} schema={RegisterSchema}
                      panel={
                          <ErrorPanel
                              className={classNames(styles.RegisterClientPage__errorPanel, errorPanelStyles['ErrorPanel--centered'])}
                              errors={mapServerErrorMessage(serverError)}
                          />
                      }>
                <label> Name
                    <Field component="input" type="name" name="name" autoComplete="off"/>
                </label>
                <label>
                    Email
                    <Field component="input" type="email" name="email" autoComplete="off" pattern=""/>
                </label>
                <label>
                    Password
                    <Field component="input" type="password" name="password" autoComplete="off"/>
                </label>
                <label>
                    Confirm Password
                    <Field component="input" type="password" name="passwordConfirm" autoComplete="off"/>
                </label>
                <Button type="submit" disabled={fetching}>Register</Button>
            </BaseForm>
        </BasePage>
    )
}

const mapStateToProps = createStructuredSelector({
    fetching: selectRegisterClientFetchingState,
    serverError: selectRegisterClientError,
});

export default connect(mapStateToProps)(RegisterClientPage);
