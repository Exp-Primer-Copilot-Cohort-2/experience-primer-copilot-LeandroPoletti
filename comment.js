//Generate web server
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'comment'
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());