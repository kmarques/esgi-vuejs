export default {
  onMessage: function(handler) {
    this.handler = handler;
  },
  notify: function(msg) {
    this.handler(msg);
  },
};
