var jwt = require('jsonwebtoken')

const auth = (req, res, next) => {
  const authcookie = req.cookies.authcookie
  
  //verify token which is in cookie value
  jwt.verify(authcookie,"23188211IDJA",(err,data)=>{
   if(err){
     res.redirect('/')
   } 
   else if(data){
     next()
  }
  })
}
  
  
module.exports = auth