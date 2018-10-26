//------------------ LOAD DEPENDENCIES  ------------------//
var express = require ('express');
var path = require('path');

livro = express.Router();


livro.get('/mostrarLivros',function(req,res){

    res.render( path.join(__dirname,'/../views/books','mostrar.ejs') , { titulo:"Mostrar Livros"} );

 
})
livro.get('/cadastrarLivro',function(req,res){
    res.render( path.join(__dirname,'/../views/books','cadastrar.ejs') , { titulo:"Cadastrar Livros"} );

})

// pega as informações que foram enviadas para atualizar livro e coloca no template para facilitar a vida
// do usuario
livro.post('/atualizarLivro',function(req,res){
    res.render( path.join(__dirname,'/../views/books','atualizar.ejs') ,
     { titulo:"Cadastrar Livros" , 
        qtd:req.body.quantidade,
        nome:req.body.nome,
        genero:req.body.genero,
        url:req.body.url_imagem,
        _id:req.body._id
     } );



})
livro.get('/deletarLivro',function(req,res){

    

})
module.exports = livro;