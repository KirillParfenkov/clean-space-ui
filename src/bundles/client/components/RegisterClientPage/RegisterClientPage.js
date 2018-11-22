import React from 'react';
import styles from './RegisterClientPage.module.css';
import BasePage from '../../../common/components/BasePage';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from "../../../common/components/Button/Button";

function RegisterClientPage() {

    function handlerSubmit(values) {
        console.log(JSON.stringify(values, null, 2));
    }

    return (
        <BasePage className={styles.RegisterClientPage}>
            <Formik
                onSubmit={handlerSubmit}
                initialValues={{
                    email: 'test@test.com'
                }}
                validate={values => {
                    let errors = {};
                    return errors;
                }}
                render={({isSubmitting}) => (
                    <Form className={styles.RegisterClientPage__form}>
                        <label> Name
                            <Field type="name" name="name"/>
                        </label>
                        <label>
                            Email
                            <Field type="email" name="email"/>
                        </label>
                        <label>
                            Phone
                            <Field type="tel" name="phone"/>
                        </label>
                        <label>
                            Password
                            <Field type="password" name="password"/>
                        </label>
                        <label>
                            Confirm Password
                            <Field type="password" name="confirm-password"/>
                        </label>
                        <Button type="submit">Register</Button>
                    </Form>
                )}
            />
        </BasePage>
    )
}

export default RegisterClientPage;
