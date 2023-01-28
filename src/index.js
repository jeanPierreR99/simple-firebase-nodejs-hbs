const app = require('./app');

app.listen(app.get('port'), function(){
    console.log("iniciado en el servidor", app.get('port'))
})