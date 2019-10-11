import ReactDOM from 'react-dom'
import React from 'react';
import App from './app';

console.log('attempting hydrate...');
ReactDOM.hydrate(<App />, document.getElementById('react-root'));
