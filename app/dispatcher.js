const guid = require('guid');

const listeners = {};
module.exports = {
  register: (cb) => {
    const id = guid.raw();
    listeners[id] = cb;
    return id;
  },
  dispatch: (payload) => {
    Object.keys(listeners).map(id => {
      const listener = listeners[id];
      return listener(payload);
    }
  );
  },
};
