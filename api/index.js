const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');

var app = express();

app.use(bodyparser.json())

var mysqlConnection = mysql.createConnection({
    host: '172.16.0.132',
    port: '3306',
    database: 'cruddb',
    user: 'jonathan',
    password: 'Asdasd123%',
});

mysqlConnection.connect((err) => {
    if(!err) {
        console.log("DB connection successful")
    } else {
        console.log("DB connection failed \n Error :" + JSON.stringify(err, undefined, 2));
    }
});

app.listen(4000, () => {
    console.log('Express server is running on port 4000')
})

// Create employee
app.get('/insert/:name/:food/:title', (req, res) => {
    mysqlConnection.query('INSERT INTO Customer (name, food, title) VALUES (?, ?, ?)', [req.params.name, req.params.food, req.params.title], (err, result) => {
        if(!err) {
            res.send("Created Successfully")
        } else {
            console.log(err);
        }
    })
});

// Get all customers
app.get('/customers', (req, res) => {
    mysqlConnection.query('SELECT * FROM Customer', (err, row) => {
        if(!err) {
            res.send(row)
        } else {
            console.log(err);
        }
    })
});


// Get a customer
app.get('/customer/:id', (req, res) => {
    mysqlConnection.query('SELECT * FROM Customer WHERE customer_id = ?', [req.params.id], (err, row) => {
        if(!err) {
            res.send(row)
        } else {
            console.log(err);
        }
    })
});

// Update a customer
app.get('/update/:id/:name/:food/:title', (req, res) => {
    mysqlConnection.query('UPDATE Customer SET name = ?, food = ?, title = ? WHERE customer_id = ?', [req.params.name, req.params.food, req.params.title, req.params.id], (err) => {
        if(!err) {
            res.send("Record Updated")
        } else {
            console.log(err);
        }
    })
});

// Delete a customer
app.get('/delete/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM Customer WHERE customer_id = ?', [req.params.id], (err) => {
        if(!err) {
            res.send("Deleted Successfully")
        } else {
            console.log(err);
        }
    })
});

