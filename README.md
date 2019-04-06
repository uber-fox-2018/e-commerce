# e-commerce
# FRONT END
Front end technology uses Vue as a front end fremework, Bootstrap as css framework, Axios for http request, Nprogress for progress bar during request, and firebase for facebook login

client endpoint : https://myecommerce.sumarsanaadi.com/

admin acc :
email : admin@mail.com
password : @d1234

user acc :
email : adi@mail.com
password : @d1234

# BACKEND SERVER
Backend technology uses Express, NodeJs, node mailer, open weather api, node-cron, mongoose , moment js

# BACKEND SERVER REST API DOCUMENTATION

List of user routes:

Route | HTTP | Description | Body Attributes | Headers
--- | --- | --- | --- | ---
/users/register | POST | Register a user | name (string required) : user name,<br/>email (string required) : user email,<br/>password (string required) : user plain password |
/users/login | POST | User login | email (string required) : user email,<br/>password (string required) : user plain password |
/users/loginfb | POST | User login using facebook | token (string required) : facebook token

List of products routes:

Route | HTTP | Description | Body Attributes | Headers
--- | --- | --- | --- | ---
/products/ | POST | add a product | name (string required) : product name,<br/>description (string required) : product description,<br/>price (number required) : product price, <br/>category (objectId) : product category , <br/>image (file required) : product image file | token : valid user admin token
/products/:id | PUT | Edit Product | name (string optional) : product name,<br/>description (string optional) : product description,<br/>price (number optional) : product price, <br/>category (objectId optional) : product category | token : valid user admin token
/products/:id | DELETE | delete Product | | token : valid user admin token
/products/searchall?name=(product name) | GET | search product by name in all category | |
/products/searchcategory?category=(category id)&name=(product name) | GET | search product by name in specific category | |
/products/getall | GET | get all products | |
/products/filterprice?min=(min price)&max=(max price) | GET | filter product by price | |

List of orders routes:

Route | HTTP | Description | Body Attributes | Headers
--- | --- | --- | --- | ---
/orders/ | POST | add produt to a order | productId (Object id required) : product id that need to add to orders| token : valid user token
/orders/remove | PUT | remove product from order | productId (Object id required) : product id that need to remove to orders| token : valid user token
/orders/checkout | PUT | checkout orders | orderId (Object id required) : order id that need to checkout| token : valid user token
/orders/open | GET | get user orders with open status | | token : valid user token

List of categories routes:

Route | HTTP | Description | Body Attributes | Headers
--- | --- | --- | --- | ---
/category/ | POST | add a category | name (String required) : category name | token : valid admin user token
/category/:id | DELETE | remove a category |  | token : valid admin user token
/category | GET | get list category | |


## Usage
Create new .env file in /server and add below env config, set your own config here
```
MONGO_URI= (your mongodb db url)
JWT_KEY= (secret key for jwt)
CLOUD_BUCKET= (your cloud bucket name)
GCLOUD_PROJECT= (your google cloud project id)
KEYFILE_PATH= (key path)
EMAIL =  (email for sending notification)
EMAIL_PASS = (email password for sending notification)
```

With only npm:
```
npm install
npm run dev
```

Bancked server endpoint : https://ecomserver.sumarsanaadi.com
