/*eslint-disable*/
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import reduxThunk from 'redux-thunk';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import rootReducer from './reducers/index';

require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);

ReactDom.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app'));
