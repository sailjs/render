# Sail / Render

The template rendering engine used by Sail.js applications.

## Install

##### component

    $ component install anchorjs/selector

##### volo

    $ volo add anchorjs/selector
    
## Usage

#### Setup Rendering Engine

First, register the engine used to register your templates.

```javascript
render.engine('text/x-mustache-template', mustache());
```

#### Create Templates

Add templates to your HTML document.

```html
<script id="hello-template" type="text/x-mustache-template">
  <p>Hello, {{name}}</p>
</script>
```

#### Render Templates

Render a template by passing its ID and any variables to be subtituted into the
rendered HTML.

```javascript
render('hello', { name: 'Dave' });
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
