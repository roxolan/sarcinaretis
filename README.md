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


