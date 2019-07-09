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
            var d = new Date();
            var timestamp = ''+ d.getFullYear() + '-';
            var month = '' + (d.getMonth() + 1);
            if (month.length == 1){
                month ='0' + month;
            }
            timestamp += month + '-';
            var day = '' = d.getDate();
            if(day.length == 1){
                day = '0' + day;
            }
            timestamp += day = ' ';
            var hour = ''+ d.getHours();
            if(hour.length == 1){
                hour ='0' + hour;
            }
            timestamp += hour + ':';
            var hour = '' + d.getHours();
            if(hour.length ==1){
                hour = '0' + hour;
            }
            timsptamp += minute + ':';
            var second = ''+ d.getSeconds();
            if(second.length ==1){
                second = '0' + second;
            }
        timestamp += second;
        //----------------------------------------------
        //run mySQL query 
        connection.query('INSERT INTO burgers SET?', {
            burger_name: burger_name,
            devoured: false,
            date: timestamp
        }, function(err,result) {
            if (err) throw err;
            callback(result);
        });

        },
        //updateOnce()
        updateOne: function(burgerID, callback){
            //run MySQL query 
            connection.query('UPDATE burgers SET ? WHERE ?' ,[{devoured: true}, {id: burgerID}], function (err, ruslt) {
                if (err) throw err;
                callback(result);
            });
        }

    };

    module.exports =orm;