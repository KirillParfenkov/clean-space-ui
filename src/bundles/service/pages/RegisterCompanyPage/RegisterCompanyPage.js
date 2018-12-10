import React from 'react';
import * as Yup from 'yup';
import { Field } from 'react-final-form'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import classNames from 'classnames';

import {
    selectRegisterServiceError,
    selectRegisterServiceFetchingState
} from 'bundles/service/selectors';
import actions from 'bundles/service/actions';

import BasePage from 'bundles/common/components/BasePage';
import Button from 'bundles/common/components/Button';
import BaseForm from 'bundles/common/components/BaseForm';
import ErrorPanel, { styles as errorPanelStyles } from '../../../common/components/ErrorPanel';

import styles from './RegisterCompanyPage.module.css';



const RegisterCompanySchema = Yup.object().shape({
    name: Yup.string()
        .required('Name Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required'),
    address: Yup.string()
        .required('Address Required'),
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

function RegisterCompanyPage({dispatch, history, fetching, serverError}) {

    function createCompletedHandler(history) {
        return () => {
            dispatch(actions.service.clearRegisterForm());
            history.push('/');
        }
    }

    function handleSubmit(values) {
        dispatch(actions.service.registerRequest(values, createCompletedHandler(history)));
    }

    return (
        <BasePage className={styles.RegisterCompanyPage}>
            <BaseForm handleSubmit={handleSubmit} schema={RegisterCompanySchema}
                      panel={
                          <ErrorPanel
                              className={classNames(styles.RegisterCompanyPage__errorPanel, errorPanelStyles['ErrorPanel--centered'])}
                              errors={mapServerErrorMessage(serverError)}/>
                      }>

                <label>
                    Company Name
                    <Field name="name" component="input" autoComplete="off"/>
                </label>
                <label>
                    Email
                    <Field name="email" type="email" component="input" autoComplete="off"/>
                </label>
                <label>
                    Description
                    <Field name="description" component="input" autoComplete="off"/>
                </label>
                <label>
                    Address
                    <Field name="address" component="input" autoComplete="off"/>
                </label>
                <label>
                    Password
                    <Field name="password" type="password" component="input" autoComplete="off"/>
                </label>
                <label>
                   Confirm Password
                    <Field name="passwordConfirm" type="password" component="input" autoComplete="off"/>
                </label>
                <Button type="submit" disabled={fetching}>Submit</Button>
            </BaseForm>
        </BasePage>
    )
}

const mapStateToProps = createStructuredSelector({
    fetching: selectRegisterServiceFetchingState,
    serverError: selectRegisterServiceError,
});

export default connect(mapStateToProps)(RegisterCompanyPage);
