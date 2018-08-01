
import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Landing from '../landing/landing';


export default class App extends React.Component {
  render() {
    return (
      <div className='app'>
        <BrowserRouter>
          <div>
            <h1>Budget Tracker</h1>
            <Route exact path='/' component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
