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

  render: function ():any {
    return <div>
      <h4 style={{color: "#aaa"}}>{this.state.store.result}</h4>
                    {this.state.store.abc.map(function (item, i) {
                      return (
                        <button onClick={this.click.bind(this, i)} key={i}>{item}</button>
                      );
                    }, this)}
    </div>
  }
});