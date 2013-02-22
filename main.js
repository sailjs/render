/**
 * render
 *
 * This module implements the rendering engine for Sail.js applications.
 * Rendering is used to construct fragments of HTML, which are inserted
 * dynamically into the DOM.
 */
define(['exports', 'module',
        'dom',
        './lib/dom/render'],
function(exports, module, DOM, Render) {
  
  DOM.augment(Render);
  
  /**
   * Render template `name` using given `locals`.
   *
   * By default, the rendering engine will append "-template" to the name and
   * select the HTML element with that ID in order to load the template.  For
   * example, invoking:
   *
   *     render('hello', { name: 'Dave' });
   *
   * will result in rendering the following template:
   *
   *     <script id="hello-template" type="text/template">
   *         <p>Hello, {{name}}</p>
   *     </script>
   *
   * This return value from this function can take multiple forms:
   *
   *   1. A compiled template function.  In this case, the returned function
   *      must be invoked in order to produce the fragment of HTML.
   *
   *      Returning a template function allows that function to be attached to
   *      a wrapped DOM element.  The element can then be re-rendered by
   *      invoking el.render({ name: 'Jane' }), for example.
   *
   *   2. A string containing HTML.  In this case, the returned string is used
   *      to construct a DOM element or tree.
   *
   *      This case is suitable for applications don't require re-rendering and
   *      can be used as an optimization to lower resource usage.
   *
   * Sail.js does not impose any specific template engine on the application.
   * During initialization, an application configures the template format being
   * used by registering an engine:
   *
   *     render.engine('text/template', mustache());
   *
   * @param {String} name  name of template to render
   * @param {Object} locals  local variables to insert into template
   * @return {Function|String}
   * @api public
   */
  exports = module.exports = function(name, locals) {
    var tmpl = _load(name);
    if (typeof tmpl == 'string') {
      tmpl = { string: tmpl }
    }
    // TODO: Implement support for precompiled templates, where `_load` returns
    //       a function.
    
    var type = tmpl.type || 'default';
    var engine = _engines[type];
    if (!engine) throw new Error('No engine to render template type: ' + type);
    // TODO: Pass arbitrary number of arguments to engine.
    //return engine(tmpl.string, locals, options);
    return engine(tmpl.string, locals);
  };
  exports.render = exports;
  
  /**
   * Register template engine for given `type`.
   *
   * @param {String} type  type of template
   * @param {Function} fn  template engine function
   * @api public
   */
  exports.engine = function(type, fn) {
    if (typeof type == 'function') {
      fn = type;
      type = 'default';
    }
    _engines[type] = fn;
  };
  
  exports.loader = function(fn) {
    _load = fn;
  }
  
  exports.$ = function(nodes) {
    if (typeof nodes == 'function') {
      _$ = nodes;
      return;
    }
    return _$.apply(undefined, arguments);
  };
  
  
  var _engines = {};
  
  var _load = function(name) {
    var el = _$('#' + name + '-template');
    return { type: el.attr('type'), string: el.html() }
  }
  
  var _$ = DOM;
});
