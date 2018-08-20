const jwt = require('jsonwebtoken')

const authorization = (req,res,next) => {
    let token = req.headers.token
if(token){

    }else{
        let decoded = jwt.verify(token, process.env.token_jwt)
        if(decoded.role === 'admin'){
            next()
        } else {
            res.status(400).json({
                msg:'wrong role'
            })
        }
    }

}

module.exports = authorization