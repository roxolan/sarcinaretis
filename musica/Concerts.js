/* CommonJS-oriented example */

// This require is for a file written by us rather than imported as a package,
// so trailing './' is used:
var bands = require('./Bands');

// These files are npm packages rather than our file, so no trailing symbols are used:
var Backbone = require('Backbone');
var Lodash = require('Lodash');

// code
