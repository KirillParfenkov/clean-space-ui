import React from 'react';
import BasePage from '../../../common/components/BasePage';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Button from '../../../common/components/Button';
import ErrorPanel from '../../../common/components/ErrorPanel';

import styles from './RegisterClientPage.module.css';

const RegisterSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Email Required')
});




function RegisterClientPage() {

    function handlerSubmit(values, setFieldTouched) {
        
    }

    return (
        <BasePage className={styles.RegisterClientPage}>
            <Formik
                onSubmit={handlerSubmit}
                validationSchema={RegisterSchema}
                render={({errors, touched, isSubmitting}) => (
                    <Form className={styles.RegisterClientPage__form} noValidate>
                        <ErrorPanel errors={errors} className={styles.RegisterClientPage__errorPanel} />
                        <label> Name
                            <Field type="name" name="name" autoComplete="off"/>
                        </label>
                        <label>
                            Email
                            <Field type="email" name="email" autoComplete="off" pattern=""/>
                        </label>
                        <label>
                            Password
                            <Field type="password" name="password" autoComplete="off"/>
                        </label>
                        <label>
                            Confirm Password
                            <Field type="password" name="confirm-password" autoComplete="off"/>
                        </label>
                        <Button type="submit">Register</Button>
                    </Form>
                )}
            />
        </BasePage>
    )
}

export default RegisterClientPage;
