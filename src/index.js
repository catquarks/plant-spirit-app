import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from './reducers'
import App from './App';
import * as actions from './actions'

// import 
// import 'materialize-css/bin/materialize.css'
import './main.css';
// import 'materialize-css/bin/materialize.js'

const store = createStore(rootReducer, applyMiddleware(ReduxPromise))

store.dispatch(actions.fetchFeelings())


ReactDOM.render(
	<Provider store={store}>
  	<App />
	</Provider>,
  document.getElementById('root')
);
