const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/biblioteca');
//mongodb://lucasmartiness:Ferrari430@ds161146.mlab.com:61146/lucasmartines_estudos
mongoose.connect('mongodb://lucasmartiness:Ferrari430@ds161146.mlab.com:61146/lucasmartines_estudos',{useNewUrlParser:true});

var db = mongoose.connection;

var livroSchema = new mongoose.Schema({
    nome:{ type:String , required:true },
    quantidade:String,
    genero:String,
    url_imagem:String
},{collection:"livros"})

var Livro = mongoose.model("DadosLivro",livroSchema);
/*
//'Livro dos Sonhos',10,"Ficção","https://http2.mlstatic.com/o-grande-livro-dos-sonhos-autor-felix-zabylla-novo-D_NQ_NP_693475-MLB27275283190_042018-F.jpg"
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});
*/
module.exports = Livro;