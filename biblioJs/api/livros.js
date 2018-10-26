const express = require('express');
var app = express();

var routes = express.Router();

var Livro = require('../models/livro')

var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended:false }) );

routes.get('/api/livros',(req,res)=>{

    Livro.find().then(function(doc){
        res.send({Message:doc});
    });
//    res.send({Message:"Api Livro online"});
                                                                                                                                                                                                                                                                                            
})

// INSERIR LIVRO
routes.post('/api/livros',(req,res)=>{


    var livro = 
    {
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        genero:req.body.genero,
        url_imagem:req.body.url_imagem
    }
    var novoLivro = new Livro( livro );
    novoLivro.save().then(function(){
        console.log( 'alguem foi inserido' );
    });

    res.redirect('/mostrarLivros');

})
// ATUALIZAR LIVRO
routes.post('/api/livros/update',(req,res)=>{

    console.log(     "FALHA ########### " +   req.body._id    ) ;
    var livro = 
    {
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        genero:req.body.genero,
        url_imagem:req.body.url_imagem
    }
   // console.log(livro);
   // var novoLivro = new Livro( livro );
   // novoLivro.save();
    Livro.findByIdAndUpdate( req.body._id ,livro , {new:true} , (err,todo)=>{
        if(err) console.log(err);

    }).then(function(){
        console.log( 'alguem foi modificado' );
    })

    res.redirect('/mostrarLivros');

})
// DELETAR LIVRO
routes.post('/api/livros/delete',(req,res)=>{

    console.log(     "FALHA ########### " +   req.body._id    ) ;
    var livro = 
    {
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        genero:req.body.genero,
        url_imagem:req.body.url_imagem
    }
   // console.log(livro);
   // var novoLivro = new Livro( livro );
   // novoLivro.save();
    Livro.findByIdAndRemove( req.body._id , (err,todo)=>{
        if(err) console.log(err);

    }).then(function(){
        console.log("Anguem foi removido");
    })

    res.redirect('/mostrarLivros');

})
routes.delete('/api/livros/:id',(req,res)=>{
    
    
    Livro.findByIdAndDelete( req.params.id , (err,todo)=>{
        if(err) console.log(err);

    })

    res.redirect('/mostrarLivros');



})
/*
routes.put('/api/livros/',(req,res)=>{


    var livro = 
    {
        nome: req.body.nome,
        quantidade: req.body.quantidade,
        genero:req.body.genero,
        url_imagem:req.body.url_imagem
    }
   // console.log(livro);
   // var novoLivro = new Livro( livro );
   // novoLivro.save();
    Livro.findByIdAndUpdate( req.body._id ,livro , {new:true} , (err,todo)=>{
        if(err) console.log(err);

    })

    res.redirect('/mostrarLivros');

})
*/



module.exports = routes;