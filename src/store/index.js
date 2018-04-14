import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from 'reducers';

const composeEnhancers = composeWithDevTools({});

const appStore = createStore(rootReducer, composeEnhancers());

window.appStore = appStore;

export default appStore;
