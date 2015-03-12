import React from "react";
import { getData } from "../../common/request.js";

import Reflux from 'reflux';
import actions from './actions';
import store from './store';




export default React.createClass({
  displayName: "Letters",

  mixins: [Reflux.connect(store, 'store')],

  // Pull initial state from store
  getInitialState: function ():any {
    return {
      store: store.getData()
    };
  },

  click: function (i) {
    actions.selectLetter(this.state.store.abc[i]);
  },

  render: function () {
    return <div>
      <h4 style={{color: "#aaa"}}>{this.state.store.result}</h4>

      <span>{ this.state.store.state === 'ok' ? this.state.store.abc.map(function (item, i) {
                            return (
                              <button onClick={this.click.bind(this, i)} >{item}</button>

                            );
                          }, this): 'U LOOZE!' }</span>
    { this.state.store.state === 'ok' ? <div>Only {this.state.store.chances} chances left!</div> : ''}

    </div>
  }
});