import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'containers';

import { Provider } from 'react-redux';
import appStore from 'store';

import './styles/main.scss';

ReactDOM.render((
    <Provider store={appStore}>
        <AppContainer />
    </Provider>
  ), document.getElementById('app'));

