var db = require('../util/db')

const registerController = {
    mostrarForm : (req , res)=>{
        res.render('form')
    },
    registrarUser:(req,res) =>{
        db.query('SELECT * FROM usuario WHERE emailuser = ?',[req.body.email],function(erro,resultado){
            if(erro){
              res.status(200).send('erro : '+ erro);
            }
            
            if(resultado.length == 0){
                db.query('insert into usuario(nomeuser,emailuser,senhauser) values(?,?,?);',[req.body.name, req.body.email, req.body.password],
                function(erro){
                    if(erro){
                    res.status(200).send('erro na criação do post' + erro)
                    }
                    res.redirect('/login')
                });
            }else{
                res.send('usuario já existe')
            }
          })
    }
}

module.exports = registerController
