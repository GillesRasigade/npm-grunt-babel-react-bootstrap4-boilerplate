import EventEmitter from 'events';

const ShoeConstants = require('../constants/ShoeConstants');
const dispatcher = require('../dispatcher/Dispatcher');

// Internal object of shoes
let _shoes = {};

// Method to load shoes from action data
function loadShoes(data) {
  _shoes = data.shoes;
}

class ShoeStore extends EventEmitter {
  // Returns all shoes
  getShoes() {
    return _shoes;
  }

  emitChange() {
    this.emit('change');
  }

  addChangeListener(callback) {
    this.on('change', callback);
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback);
  }
}

// Register dispatcher callback
dispatcher.register((payload) => {
  var action = payload.action;
  var text;
  // Define what to do for certain actions
  switch(action.actionType) {
    case ShoeConstants.LOAD_SHOES:
      // Call internal method based upon dispatched action
      loadShoes(action.data);
      break;

    default:
      return true;
  }
  
  // If action was acted upon, emit change event
  ShoeStore.emitChange();

  return true;

});

module.exports = ShoeStore;
