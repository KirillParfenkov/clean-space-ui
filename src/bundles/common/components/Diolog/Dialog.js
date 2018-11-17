import React, { useContext } from 'react';
import classNames from 'classnames';
import styles from './Dialag.module.css';
import DialogContext from '../../contexts/DialogContext/index';

function Dialog({ className }) {

    const {
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
