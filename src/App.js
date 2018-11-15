import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './bundles/common/Header';
import Dialog from './bundles/common/Diolog';


class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
          <Header className={ styles.App__header }/>
          <Dialog/>
      </div>
    );
  }
}

export default App;
