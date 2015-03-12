import React from 'react';
import { getData } from '../../common/request.js';

import Reflux from 'reflux';
import actions from './actions';
import store from './store';

export default React.createClass({
  displayName: 'Drawing',

  mixins: [Reflux.connect(store, 'store')],

  getInitialState: function () {
    return {
      store: store.getData()
    };
  },

  render: function () {

    var completeDrawing = ['<line id="svg_1" y2="341" x2="376" y1="332" x1="147" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_2" y2="103" x2="256" y1="335" x1="257" stroke-width="5" stroke="#000000" />',
      '<line id="svg_3" y2="334" x2="308" y1="273" x1="258" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_4" y2="99" x2="382" y1="102" x1="255" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_5" y2="102" x2="307" y1="150" x1="258" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_11" y2="131" x2="380" y1="99" x1="380" stroke-width="5" stroke="#000000"/>',
      '<ellipse ry="31" rx="28" id="svg_14" cy="164" cx="381" stroke-width="5" stroke="#000000" fill="none"/>',
      '<line id="svg_15" y2="197" x2="379" y1="279" x1="381" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_16" y2="228" x2="377" y1="200" x1="344" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_17" y2="229" x2="383" y1="202" x1="419" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_18" y2="278" x2="380" y1="305" x1="352" stroke-width="5" stroke="#000000"/>',
      '<line id="svg_19" y2="274" x2="379" y1="304" x1="415" stroke-width="5" stroke="#000000"/>'

    ];

    var currentDrawing = completeDrawing.filter((item, index) =>
      -(this.state.store.chances - 12) > index
    );

    return <span dangerouslySetInnerHTML={{__html: `<svg width="640" height="480">' + ${currentDrawing} + '</svg> `}} />;
  }
});