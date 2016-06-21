const dispatcher = require('../dispatcher/Dispatcher');

module.exports = {
  ping: (text) => dispatcher.dispatch({ action: 'PING', text }),
};
