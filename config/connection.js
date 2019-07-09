//node Dependency 
var mysql = require('mysql');
var connection;

//for Heroku Deployment 
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_url);
    }
    else{
        connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : 'Redsox21',
            database : 'burgers_db'
        });
    }

    // Export the Connection
    module.exports = connection;