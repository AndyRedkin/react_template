import React from 'react';
import ReactDOM from 'react-dom';
import Root from './routes';
import {history, store} from './store/store';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router history={history}>
          <Root/>
        </Router>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('app'),
);