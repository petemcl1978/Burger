//Node Dependancies
var connection = require('/conncection.js');


//connect to MySQL DB

connection.connect(function(err) {
    if (err) {
        console.error('error connectiong:' + err.stack);
        return;
    };
    console.log ('connected as id' + connection.threadId);

    });

    //methods for MYSQL commands
    var orm = {

        //selectAll()
        selectAll: function(callback) {

            //run MySQl Query
            connection.query('select * FROM burgers', function (err, result) {
                if (err) throw err;
                callback(result);
            });

        },

        // insertOne()
        insertOne: function(burger_name, callback){

            //create a new timestamp
            //--------------------------------------------------
            
        }
    }