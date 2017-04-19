//require your modules: express, and mysql
var mysql = require('mysql');
var express = require('express');
var server = express();

//define your connection info for mysql
var conn = mysql.createConnection({
    host:       'localhost',
    port:       '8889',
    user:       'root',
    password:   'root',
    database:   'c11.16_db'
});

//define your handler for your mysql connection callback
	//perform your mysql query call

//define your handler for your mysql query call response
	//handle your data from your response
	//return the data in json format to the front end request

//define your handler for the express web request

//set up your express server and start listening
server.put('/student', function (request, response) {
   if (request.query.name === undefined || request.query.course === undefined || request.query.grade === undefined){
       response.send(json.stringify({success: false, error:['must supply name, course, and grade']}))
   }
    conn.connect(function () {
        conn.query(`INSERT INTO students name='${request.query.name}', course='${request.query.course}', grade='${request.query.grade}'`, function (error, data, fields) {
            var output = {
                success: true,
                data: data
            };
            var output_json = json.stringify(output);
            response.send(output_json);
        })
    })
});
server.get('/student',function(request, response){
    if(request.query.id!==undefined) {
        conn.connect(function () {
            conn.query('SELECT * FROM students WHERE id = ' + request.query.id, function (error, data, fields) {
                var output = {
                    success: true,
                    data: data
                };
                var output_json = json.stringify(output);
                response.send(output_json);
            })
        })
    }
});
server.get('/getAll',function(request, response){
    if(request.query.id!==undefined) {
        conn.connect(function () {
            conn.query('SELECT * FROM students WHERE id = ' + request.query.id, function (error, data, fields) {
                var output = {
                    success: true,
                    data: data
                };
                var output_json = json.stringify(output);
                response.send(output_json);
            })
        })
    }
});

server.listen(1337,function(){
    console.log('server is up');

});