import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './Dialag.module.css';
import DialogContext from '../DialogContext';

function Dialog({ className }) {

    const {
        dialog,
        opened,
        component,
    } = useContext(DialogContext);

    return (
        <div className={classNames(styles.Dialog, className, { [styles.Dialog_opened]: opened})}>
            {
                component
            }
        </div>
    );
}

export default Dialog;
