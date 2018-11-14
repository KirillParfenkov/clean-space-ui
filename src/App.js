import React, { Component } from 'react';
import styles from './App.module.css';
import Header from './bundles/common/Header';

class App extends Component {
  render() {
    return (
      <div className={ styles.App }>
          <Header/>
      </div>
    );
  }
}

export default App;
