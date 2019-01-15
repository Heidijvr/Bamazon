# Bamazon

Created during Week 12 of the University of Washington Coding Bootcamp. The goal was to create an Amazon-like CLI storefront with mySQL, NODE.js and Inquirer NPM. The app can take in stock orders from customers, and deplete stock from the store's inventory.

**Deployment**

* Clone repo.
* Run npm install.
* Build database from mySQL. 
* At command prompt run node bamazonCustomers.js
* Run 'ctrl + c' to exit each mode

**How the app works**

* Print bamazonCustomer.js to display the available products in the store.
* The app prompts the customer to choose the product they would like to purchase by indicating the corresponding number on the 
  *'item_id'* table.
* The name of the product is then displayed as it is visible in the *'product_name'* table, followed by...
* the available stock of the product of choice.
* There would be an indication if there is *'not sufficient stock'* available.
* The app then proceeds to prompt the clients to indicate the quantity they wish to order.
* An indication of the remaining stock in the *'stock_quantity'* table appears after the order.
* The transaction is finalised when the app proceeds to inquire whether the user would like to make another purchase (Y/N)

## Screenshot of this project

![Alt Bamazon](https://github.com/Heidijvr/Bamazon/blob/a94d96b141648b4f75946ae59544db08bc3af848/images/screenshot1.png)


**Technologies utilized**
 
* mySQL
* Node.js
* JavaScript
* NPM Inquirer


**Author**

Heidi Jansen van Rensburg

