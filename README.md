# sarcinaretis
Repositorium Sarcinae Retis (webpack) 

# Incipiendo
https://github.com/joeeames/WebpackFundamentalsCourse

# Principles
* Use npm, not bower
* Use a module system (commonjs, amd or es6)
* Circular dependencies are strictly prohibited
* Webpack will take care of the order, we just need to indicate what
packages are needed

# Webpack Installation
* Node.js must be installed first
```
	$ npm install webpack -g 
```
* To install Webpack dev server:
```
    $ npm instal webpack-dev-server -g
```

# Using Webpack
* To create an outpup bundle:
```
	$ webpack ./app.js bundle.js
```
* When a configuration file is provided, all it takes is to run:
```
	$ webpack
```

# Configuration file (webpack.config.js)
* It is essentially a CommonJS module
* To list dependencies that are not part of the module dependency
  system, i.e. not required from within the files
  required from the starting point (usually app.js), one can use an
  array of filepaths for as the value of the 'entry' property, not
  necessarily with ".js" extension:
```
    entry: [".util", "./app"],
    ...
```

# Watch mode
A mode in which Webpack will watch the files, notice changes saved and
will immediately re-run the build and create the output file
* One way to run it is via command line:
```
    $ webpack --watch
```
* Another way to run watch mode is to add to webpack.config.js:
```
    watch: true
```

# Using dev server
* after installing, run in the app folder:
```
    $ webpack-dev-server 
```
* The dev app will be available at
http://localhost:8080/webpack-dev-server/ by default, with additional
dev server bar on top. The app will be run within the iframe in that case.
* It will also be available at http://localhost:8080/ as is, without
the iframe, but it will be missing the feature of automatic reload of
the browser.
* In order to run the app without the status bar, but with the
  automatic browser reload, run it with --inline flag:
```
    $ webpack-dev-server --inline
```
* The app will be available at http://localhost:8080/, defaulting in
  index.html (browser feature), with automatic browser reload enabled.
* The iframe version of the app with dev server notifications will be
  also available at http://localhost:8080/webpack-dev-server/.
  
