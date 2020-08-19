import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import Routes from './routes';
import Header from './components/Header';

import configureStore from './store/configureStore';

const store = configureStore({});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header/>
          <Routes/>
        </Router>
      </Provider>
    )
  }
}

export default App;