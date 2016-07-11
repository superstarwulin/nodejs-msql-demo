var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "123456",
    database:'supstarwulin'
});


con.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('Connection established');

    // read date
    con.query(' SELECT * FROM employees',function(err,rows){
        if(err) throw err;

        console.log('Data received from Db:\n');
        console.log(rows);
    });

});

//
//con.end(function(err) {
//    console.log('end');
//    // The connection is terminated gracefully
//    // Ensures all previously enqueued queries are still
//    // before sending a COM_QUIT packet to the MySQL server.
//});
