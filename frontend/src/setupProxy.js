// See https://stackoverflow.com/a/52620241

const proxy = require('http-proxy-middleware');

module.exports = function(app) {
     app.use(proxy('/api', 
         { target: 'http://localhost:8080' }
     ));
}
