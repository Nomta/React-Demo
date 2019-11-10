import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/main.css';

import store from './store/store';
import Layout from './layout/Layout';
import Icons from './icons/Icons';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Icons></Icons>
        <Layout></Layout>
      </Provider>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('root'));