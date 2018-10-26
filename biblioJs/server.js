//------------------ LOAD DEPENDENCIES  ------------------//
var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');


//---------------- configure ------------------------//

app.set('view engine','ejs');
app.use(express.static('public'));
app.use( bodyParser.urlencoded({extended:false }) );
app.use(morgan('tiny'));


//------------------ LOAD ROUTES ------------------//
var livros = require('./api/livros');
var livros_front_end = require('./routes/livros');

app.use('/', livros );
app.use('/', livros_front_end );



app.get('/',(req,res)=>
{
    res.render( path.join(__dirname,'/views/main-page','main.ejs') , { titulo:"Pagina Inicial"} );
   // res.sendFile(path.join(__dirname,'/views','teste.html'));
})

/*
app.get('/livros',(req,res)=>
{
    res.render( path.join(__dirname,'/views/books','mostrar.ejs') , { titulo:"Pagina Inicial"} );
   // res.sendFile(path.join(__dirname,'/views','teste.html'));
})

*/
app.listen(80,()=>{
    console.log("Rodando na porta 3000 ");
})
module.exports = app;
