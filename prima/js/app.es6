// using CommonJS syntax to bring in 'login' dependency:
// require('./login');

// using ES6 syntax to bring in 'login' dependency:
import {login} from "./login";
login('admin', 'i have no idea');

document.write("Welcome to Anna Maria Jopek's Concerts with LogIn dependency loaded");

console.log('App loaded');

