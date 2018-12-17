var express = require('express'),
    bp = require('body-parser'),
    path = require('path'),
    root = __dirname,
    port = process.env.PORT || 8002,
    app = express(),
    session = require('express-session');

app.use(bp.json())
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  rolling: true,
}))

// gets the routes
require('./server/config/routes.js')(app);

//Body Parser needs to come before the others, but essentially look for your static components in client
//and then look for your power componenets within the designated folder
app.use(express.static( path.join(root, 'client')));

app.use(express.static( path.join( root, 'bower_components')));

app.listen(port, ()=>{console.log('Server running on port#', port )}) // start server
