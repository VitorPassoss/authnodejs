const logoutController = {
    destruirToken: (req,res) =>{
        res.cookie('authcookie','',{maxAge:900000,httpOnly:true}) 
        res.cookie('user','',{maxAge:900000,httpOnly:true})
        res.redirect('/')
    }
}

module.exports = logoutController