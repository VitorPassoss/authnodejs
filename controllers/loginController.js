var db = require('../util/db')
var jwt = require('jsonwebtoken')



const registerController = {
    mostrarForm : (req , res)=>{
        res.render('login')
    },
    validarUsuario : (req,res)=>{
        db.query('SELECT * FROM usuario WHERE emailuser = ?',[req.body.email],function(erro,resultado){
            if(erro){
              res.status(200).send('erro : '+ erro);
            }

            if(resultado.length == 0){
                res.send('dados inseridos incorretamentes, tente criar um novo usuario ')
            }else{
                if(resultado[0].senhauser == req.body.password){
                    let token = jwt.sign({usuario:resultado[0]}, '23188211IDJA', {
                        expiresIn: 1440
                    });
                    res.cookie('authcookie',token,{maxAge:900000,httpOnly:true}) 
                    res.cookie('user',{usuario:resultado[0].nomeuser},{maxAge:900000,httpOnly:true})
                    res.redirect('/inicio')
                }else{
                    res.send('dados inseridos incorretamentes')
                }
            }
          })
    }
}

module.exports = registerController