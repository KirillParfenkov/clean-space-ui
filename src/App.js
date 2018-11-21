import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux';
import styles from './App.module.css';
import Header from './bundles/common/components/Header';
import Dialog from './bundles/common/components/Diolog';
import Content from './bundles/common/components/Content';
import { DialogProvider } from './bundles/common/contexts/DialogContext';
import configureStore from './configure-store';


const store = configureStore();

function App() {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <DialogProvider>
                    <div className={ styles.App }>
                        <Header className={ styles.App__header }/>
                        <Dialog className={ styles.App__dialog }/>
                        <Content/>
                    </div>
                </DialogProvider>
            </Provider>
        </BrowserRouter>
    );
}

export default App;
