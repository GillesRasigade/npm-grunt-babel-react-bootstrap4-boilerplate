import EventEmitter from 'events';

const dispatcher = require('../dispatcher/Dispatcher');

let _state = {};

const Store = Object.assign(EventEmitter.prototype, {
  getState: () => _state,

  emitChange: () => {
    Store.emit('change');
  },

  addChangeListener: (callback) => {
    Store.on('change', callback);
  },

  removeChangeListener: (callback) => {
    Store.removeListener('change', callback);
  },
});

// Register dispatcher callback
dispatcher.register((payload) => {
  console.log(24, payload);

  _state.action = payload.action;

  _state.title = 'test-'+Math.floor(1e6*Math.random());

  // If action was acted upon, emit change event
  Store.emitChange();

  return true;
});

module.exports = Store;
