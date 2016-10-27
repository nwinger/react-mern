/*eslint-disable*/
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';

require('./assets/stylesheets/base.scss');
require('./assets/stylesheets/lemonade.scss');
require('./assets/stylesheets/navigation.scss');

ReactDom.render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));
