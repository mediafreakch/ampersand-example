# Ampersand Example

This example simply looks at an alternative approach to organising an [Ampersand](http://ampersandjs.com/) application. I *personally* dislike having all an application views, models, etc organised into single folders. I prefer instead to structure applications into small modules based on functionality e.g. `login`, `home`, etc. An interesting [post](https://medium.com/node-js-javascript/working-without-frameworks-part-1-b948f281f782) by [@hij1nx](https://twitter.com/hij1nx) demonstates that Node's require algorithm can applied to any directory called `node_modules`, not just the one at the root of your project, led me to re-structure an Ampersand application (based on the [Ampersand examples](https://github.com/AmpersandJS/examples)). Thanks to [@simmelj](https://twitter.com/simmelj) and his [blog post](http://iamsim.me/building-an-app-with-ampersand-js) for the inspiration.

### Notes

1. All modules are organised into `src/node_modules`.
1. Each module contains a directory for it's `templates`.
1. Each module contains a directory for it's `styles`.
1. Each module contains a `package.json` (see [here for explanation](http://iamsim.me/taking-advantage-of-nodes-require-algorithm-with-browserify/)).
1. `moonbootsConfig.js` contains updated [templatizer](https://github.com/HenrikJoreteg/templatizer) logic to process templates stored in different module locations.
1. Global [Stylus](http://learnboost.github.io/stylus/) styles are organised into `src/styles`.
1. Static assets are organised into `src/assets`.

### Getting started

1. `cd folder-name`
1. `npm install`
1. `npm start`

### Features

1. [Hapi](http://hapijs.com/)
1. [Moonboots](https://github.com/HenrikJoreteg/moonboots)
1. [Jade](http://jade-lang.com/)
1. [Stylus](http://learnboost.github.io/stylus/)
1. [Foundation](http://foundation.zurb.com/)