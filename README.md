# e-commerce

List of routes user:

| **Route** | **HTTP** | **Description** | **Parameters**            |
| --------- | -------- | --------------- | ------------------------- |
| /signup   | POST     | Signup new user | fullname, email, password |
| /signin   | POST     | Signin user     | email, password           |

List of routes sticker:

| **Route**            | **HTTP** | **Description**                            | **Parameters** |
| -------------------- | -------- | ------------------------------------------ | -------------- |
| /home/listItems      | GET      | Get all task ,authenticated user and admin |                |
| /home/createItems    | POST     | Add new Item ,admin only                   |                |
| /home/deleteItem/:id | delete   | delete Item ,admin only                    | item id        |
| /home/editItem/:id   | put   | edit Item ,admin only                    | item id        |

jwt_secret_key=superninja

access admin
"email": "oki@gmail.com",
"password:masuk2311
