define(['exports',
        'dom',
        './lib/dom/render'],
function(exports, DOM, Render) {
  
  DOM.augment(Render);
  
  exports.render = function(name, options) {
    if (typeof name == 'function') {
      render = name;
      return;
    }
    return render.apply(undefined, arguments);
  };
  
  exports.$ = function(nodes) {
    if (typeof nodes == 'function') {
      wrap = nodes;
      return;
    }
    return wrap.apply(undefined, arguments);
  }
  
  
  var render = function(name, options) {
    throw new Error('Invalid context: sail.render() must be implemented by application');
  }
  var wrap = DOM;
});
