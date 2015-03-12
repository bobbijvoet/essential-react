import Reflux from 'reflux';
import actions from './actions';


// Some constants for determining state; will be exported on store too
var STATE_WIN = 'win',
  STATE_OK = 'ok',
  STATE_FAIL = 'loser';

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

  words: ['garage', 'echo', 'rose', 'checkpoint', 'sexiest'],

  currentWord: '',
  currentResult: '',
  chances: 12,


  reset: function () {

  },

  // Add some getters
  getData: function () {
    this.currentWord = this.words[0];
    this.currentResult = this.words[0].replace(/\D/g, '*');
    this.abc = 'abcdefghijklmnopqrstuvwxyz'.split('');
    return store = {
      abc: this.abc,
      word: this.currentWord,
      result: this.currentResult,
      state: STATE_OK,
      chances: this.chances
    };
  },
  selectLetter: function (letter) {
    this.abc.splice(this.abc.indexOf(letter), 1);

    var match,
      i = 0, fail = true;

    while ((match = this.currentWord.indexOf(letter, i)) > -1) {
      this.currentResult = this.currentResult.substr(0, match) + letter + this.currentResult.substr(match + 1);
      if (match > -1 && fail) {
        fail = false;
      }

      i++;
    }
    if (fail) {
      this.chances--;
    }


  console.log(this.currentResult.indexOf('*'))
    store = {
      state: this.currentResult.indexOf('*') === -1 ? STATE_WIN : this.chances > 0 ? STATE_OK : STATE_FAIL,
      abc: this.abc,
      result: this.currentResult,
      chances: this.chances
    };

    console.log(store);

    this.trigger(store);

  }


});
