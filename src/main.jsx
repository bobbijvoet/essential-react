/**
 * App entry point
 */

// Shims and Polyfills
import 'es5-shim';
import 'es5-shim/es5-sham';
import 'console-polyfill';
import 'babelify/polyfill';

// Libraries
import React from 'react';

// Common utilities



// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';


/*
let fetchData = function(routes, params) {
  let data = {};

  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(resp => {
        data[route.name] = resp;
      })
    })
  ).then(() => data);
}
*/
import Game from './pages/landing/page.jsx'
import Drawing from './pages/landing/drawing.jsx'


// Start the router
    React.render(<div><Game /><Drawing /></div>, document.getElementById(DOM_APP_EL_ID));