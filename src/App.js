import React, { useState } from 'react';
import styles from './App.module.css';
import Header from './bundles/common/Header';
import Dialog from './bundles/common/Diolog';
import Content from './bundles/common/Content';
import DialogContext, { DialogProvider } from './bundles/common/DialogContext';



function App() {

    const [dialog, setDialog] = useState({ opened: false });

    return (
        <DialogProvider>
            <div className={ styles.App }>
                <Header className={ styles.App__header }/>
                <Dialog className={ styles.App__dialog }/>
                <Content/>
            </div>
        </DialogProvider>
    );
}

export default App;
