import React from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react';
import { createStore, applyMiddleware } from '../../../../Library/Caches/typescript/2.9/node_modules/redux';

// Lines 5 and 6 accomplish the same thing
// import ReactDom from 'react-dom';
import { render as renderDom } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-dom';
import { Provider } from '../../../../Library/Caches/typescript/2.9/node_modules/@types/react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import App from './components/app/app';
import sectionsReducer from './reducer/section';
import './style/main.scss';

// Setting up the Redux store here
const middleware = {};

// this if function composition
const store = createStore(sectionsReducer, composeWithDevTools(applyMiddleware(...middleware)));

const root = document.createElement('div');
document.body.appendChild(root);

renderDom(<Provider store={store}><App /></Provider>, root);