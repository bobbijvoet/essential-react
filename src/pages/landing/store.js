import Reflux from 'reflux';
import actions from './actions';


// Some constants for determining state; will be exported on store too
var STATE_WIN = 'loading',
  STATE_OK = 'ok',
  STATE_FAIL = 'err';

// Create a private variable to store the store's state
var store = {
  state: STATE_WIN
};

// Export a new Reflux store
module.exports = Reflux.createStore({
  // Constants for marking state of store
  STATE_WIN: STATE_WIN,
  STATE_OK: STATE_OK,
  STATE_FAIL: STATE_FAIL,

  // Hook up the store to the actions in `actions.js`
  listenables: actions,

  abc: [],

  words: ['albatros'],

  currentWord: '',
  currentResult: '',
  chances:8,

  // Add some getters
  getData: function () {
    this.currentWord = this.words[0];
    this.currentResult = this.words[0].replace(/\D/g, '*');
    console.log(this.currentResult);
    this.abc = "abcdefghijklmnopqrstuvwxyz".split('');
    return store = {
      abc: this.abc,
      word: this.currentWord,
      result: this.currentResult
    };
  },
  selectLetter: function (letter) {
    this.abc.splice(this.abc.indexOf(letter), 1);

    var match,
      i = 0, fail = true;

    while ((match = this.currentWord.indexOf(letter, i)) > -1) {
      this.currentResult = this.currentResult.substr(0, match) + letter + this.currentResult.substr(match + 1);
      fail = !(match > -1 && fail);
      i++;
    }
    if (fail) {
      this.chances --;

      console.log('fail', this.chances);
    }


    store = {
      state: STATE_OK,
      abc: this.abc,
      result: this.currentResult
    };

    this.trigger(store);

  }


});
