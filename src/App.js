import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ContactList from './containers/contact-list'
import ContactDetail from './containers/contact-detail'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <strong>Contacts</strong>
        </header>
        <ContactList/>
        <ContactDetail/>
      </div>
    );
  }
}

// export default App;
