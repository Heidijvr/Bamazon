//require mysql and inquirer
var inquirer = require("inquirer");
var mysql = require("mysql");
var express = require("express");

//create connection to db
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: 'root',
   password: 'eir$tn&w823489',
   database: 'bamazon_db'   
});

connection.connect(function (err) {
   if (err) throw err;
       console.log("connected!");
})

var showTable = function() {
    connection.query("SELECT * FROM products", function(err, res) {
            if(err) throw err;        
            console.table(res);
            promptCustomer(res);
    });
};

showTable();


var promptCustomer = function(res) {
    inquirer.prompt([{
        type: "input",
        name: "id",
        message: "What is the ID of the product you would like to buy?"
    }]).then(function(answer) {
        var correct = false;
        for (var i=0; i < res.length; i++) {
            if(res[i].item_id == answer.id) {
                console.log("Selection: " + res[i].product_name);
                console.log("Stock: " + res[i].stock_quantity);
                correct = true;
                var idx = i;
                var id = res[i].item_id;

                inquirer.prompt([{
                    type: "input",
                    name: "quant",
                    message: "How many units would you like to buy?"
                }]).then(function(answer) {
                    var remaining = res[idx].stock_quantity - answer.quant;
                    
                    if (remaining > 0) {
                        connection.query("UPDATE products SET stock_quantity = '"
                        + remaining + "' WHERE item_id = '"
                        + id + "'", function(err, res2) {
                            if (err) throw(err);
                            console.log("Product purchased! Remaining stock: " + remaining);

                            inquirer.prompt([{
                                type: "confirm",
                                message: "Make another purchase?",
                                name: "again"
                            }]).then(function(answer) {
                                if (answer.again) {
                                    showTable();
                                } else {
                                    process.exit();
                                }
                            });
                        })
                    } else {
                        console.log("Insufficient stock. Available: " + res[idx].stock_quantity);
                        promptCustomer(res);
                    }
                    
                });
            }
        }
        
        if (i == res.length && correct == false) {
            console.log("Not a valid selection!");
            promptCustomer(res);
        }
    })
 
}

 