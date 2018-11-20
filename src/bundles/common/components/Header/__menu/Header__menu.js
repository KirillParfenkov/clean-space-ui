import React, {useContext} from 'react';
import styles from './Header__menu.module.css';
import Button from '../../Button';
import DialogContext from '../../../contexts/DialogContext';
import { MenuDialog } from '..';

function Header__menu({ children, onClick }) {

    const { dialog, opened } = useContext(DialogContext);
    const selectHandler = () => {
        dialog(false);
    };

    const openHandler = () => {
        if (!opened) {
            dialog(true, <MenuDialog onSelect={selectHandler}/>);
        }
    };

    const closeHandler = () => {
        dialog(false)
    };

    return (
        <div className={styles.Header__menu}>
            {
                opened ?
                    <Button onClick={closeHandler}>Close</Button> :
                    <Button onClick={openHandler}>{children}</Button>
            }
        </div>
    )
}

export default Header__menu;
