# e-commerce
# FRONT END
Front end technology uses Vue as a front end fremework, Bootstrap as css framework, Axios for http request, Nprogress for progress bar during request, and firebase for facebook login

client endpoint : http://myecommerce.sumarsanaadi.com/

admin acc :
email : adi_admin2@mail.com
password : @d1234

note : client not yet finished, will finish it today

# BACKEND SERVER
Backend technology uses Express, NodeJs, node mailer, open weather api, node-cron, mongoose , moment js

# BACKEND SERVER REST API DOCUMENTATION

List of user routes:

Route | HTTP | Description | Body Attributes | Headers
--- | --- | --- | --- | ---
/users/register | POST | Register a user | name (string required) : user name,<br/>email (string required) : user email,<br/>password (string required) : user plain password |
/users/login | POST | User login | email (string required) : user email,<br/>password (string required) : user plain password |
/users/loginfb | POST | User login using facebook | token (string required) : facebook token

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

Bancked server endpoint : http://ecomserver.sumarsanaadi.com
