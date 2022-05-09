//criar um servidor com node puro
const http= require('http')
const port= 3000
const htmlSobre=require('./modulo_sobre')



//criando o servidor
var server = http.createServer((req,res) =>{
  
  if(req.url == '/'){


    let htmlHome=`
    <html>
      <head>
      <meta charset="utf-8">
        <title> Home </title>
      </head>
      
      <body>
        <a href="/"> Home </a>
        <a href="/sobre"> Sobre </a>
        <a href="/contato"> Contato </a>

        <h1>  Olá mundo </h1>
      </body>
    </html>
    `

    res.end(htmlHome)
  }else if(req.url == '/sobre'){
    res.end(htmlSobre)
  }else if(req.url == "/contato"){

    let htmlContato= `
    <html>
      <head>
      <meta charset="utf-8">
        <title> Contato </title>
      </head>
      
      <body>
        <a href="/"> Home </a>
        <a href="/sobre"> Sobre </a>
        <a href="/contato"> Contato </a>

        <h1>  Página contato </h1>
      </body>
    </html>
    `

    res.end(htmlContato)

  }else{
    let htmlErro= `
    <html>
      <head>
      <meta charset="utf-8">
        <title> Ops... </title>
      </head>
      
      <body>
        <a href="/"> Home </a>
        <a href="/sobre"> Sobre </a>
        <a href="/contato"> Contato </a>

        <h1>  Página não encontrada </h1>
      </body>
    </html>
    `

    res.statusCode=404
    res.end(htmlErro)
  }
})

//iniciar o servidor
server.listen(port,'localhost',() =>{
  console.log("servidor escutando na porta 3000")
  console.log("Pressione CTRL+C para encerrar")
})