define(['dom',
        './dom/render'],
function(DOM, Render) {
  
  DOM.augment(Render);
  
  
  var exports = {};
  
  exports.$ = function(nodes) {
    if (typeof nodes == 'function') {
      wrap = nodes;
      return;
    }
    return wrap.apply(undefined, arguments);
  }
  
  exports.render = function(name, options) {
    if (typeof name == 'function') {
      render = name;
      return;
    }
    return render.apply(undefined, arguments);
  };
  
  
  var wrap = DOM;
  
  var render = function(name, options) {
    throw new Error('Invalid context: sail.render() must be implemented by application');
  }
  
  return exports;
});
