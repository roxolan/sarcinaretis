// file containing log in logic for the app
let login = (username, password) => {
  if(username !== 'admin' || password !== 'thepassword') {
    console.log('incorrect login');
  }
};

login('admin', 'ihavenoidea');
