import React from 'react';
import classNames from 'classnames';
import { Item } from '.';

import styles from './ErrorPanel.module.css';

/**
 * @return {null}
 */
function ErrorPanel({className, errors}) {
    return (errors && Object.keys(errors).length) ? (
        <ul className={classNames(className, styles.ErrorPanel)}>
            {
                Object
                    .keys(errors)
                    .map( key => <Item key={key}>{ errors[key] }</Item>)
            }
        </ul>
    ) : false;
}

export default ErrorPanel;
