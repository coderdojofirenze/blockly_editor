var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname+'\\www')).listen(8080, function(){
    console.log('Server running on 8080...'+__dirname+'\\www');
});