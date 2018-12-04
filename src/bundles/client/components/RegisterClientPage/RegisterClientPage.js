import React from 'react';
import * as Yup from 'yup';
import { Form, Field } from 'react-final-form'
import actions from '../../actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
    selectRegisterClientFetchingState,
    selectRegisterClientError
} from '../../selectors';

import BasePage from '../../../common/components/BasePage';
import Button from '../../../common/components/Button';
import ErrorPanel from '../../../common/components/ErrorPanel';

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

const mapErrorMessage = (error) => {
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

const filterNotTouched = touched => errors =>
    Object.keys(touched)
        .filter(key => touched[key])
        .reduce((result, key) =>  {
            if (errors[key]) {
                result[key] = errors[key];
            }
            return result;
        }, {});


function RegisterClientPage({ dispatch, fetching, serverError }) {

    function handleSubmit(values) {
        dispatch(actions.client.registerRequest(values));
    }

    async function validate(values) {
        try {
            await RegisterSchema.validate(values, {
                abortEarly: false,
            });
        } catch({inner}) {
            return inner.reduce((errors, val) => {
                errors[val.path] = val.errors;
                return  errors;
            }, {});
        }
    }

    return (
        <BasePage className={styles.RegisterClientPage}>
            <Form
                onSubmit={handleSubmit}
                validate={validate}
                render={({handleSubmit, form, submitting, pristine, values, errors, touched, visited}) => (
                    <div className={styles.RegisterClientPage__wrapper}>
                        <ErrorPanel className={styles.RegisterClientPage__errorPanel} errors={mapErrorMessage(serverError)}/>
                        <ErrorPanel className={styles.RegisterClientPage__errorPanel} errors={filterNotTouched(touched)(errors)}/>
                        <form onSubmit={handleSubmit} noValidate  className={styles.RegisterClientPage__form}>
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
                            <Button type="submit" disable={`${fetching}`}>Register</Button>
                        </form>
                    </div>
                )}
            />
        </BasePage>
    )
}

const mapStateToProps = createStructuredSelector({
    fetching: selectRegisterClientFetchingState,
    serverError: selectRegisterClientError,
});

export default connect(mapStateToProps)(RegisterClientPage);
