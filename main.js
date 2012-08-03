define(['./lib/context'],
function(context) {
  var exports = {};
  
  exports.render = context.render;
  exports.$ = context.$;
  
  return exports;
});
