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

