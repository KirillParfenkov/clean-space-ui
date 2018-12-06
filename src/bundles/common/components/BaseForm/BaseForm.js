import React from 'react';
import classNames from 'classnames';
import { Form } from 'react-final-form'

import { filterNotTouched } from './utils';

import ErrorPanel from '../ErrorPanel';

import styles from './BaseForm.module.css';

function BaseForm({ className, schema, children, handleSubmit, panel}) {

    async function validate(values) {
        if (!schema) return;
        try {
            await schema.validate(values, {
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
        <Form
            onSubmit={handleSubmit}
            validate={validate}
            render={({handleSubmit, form, values, errors, touched}) => (
                <div className={styles.BaseForm__wrapper}>
                    { panel }
                    <ErrorPanel className={styles.BaseForm__errorPanel} errors={filterNotTouched(touched)(errors)}/>
                    <form onSubmit={handleSubmit}
                          className={classNames(styles.BaseForm__form, className)}
                          noValidate>
                        {children}
                    </form>
                </div>
            )}
        />

    )
}

export default BaseForm;
