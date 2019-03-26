// Das ist ein einzeiliger Kommentar.
// Das ist ein einzeiliger Kommentar.

const bodyParser = require('body-parser')

const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

 app.set('view engine','ejs')

 app.use(bodyParser.urlencoded({extendet : true}))

 app.use(express.static('public'))
app.use(cookieParser())
 const server = app.listen(process.env.PORT  || 3001,()=> {
     console.log(' Der Server ist erfolgreich gestartet auf Port %s',server.address().port)
 })

 app.get('/',(req, res, next) => {

   let idKunde = req.cookies['istAngemeldetAls']

    if(idKunde){
     
          console.log("Kunde ist angemeldet als " + idKunde)
          res.render('index.ejs',)
        }else{
          res.render('login.ejs' ,{
    
          })
        }
     
     
    
 })
 app.get('/login',(req, res, next) => {
    res.render('login.ejs', {
        
    })
})
app.post('/',(req, res, next) => {

     const idKunde = req.body.idKunde
     const kennwort = req.body.kennwort

      if(idKunde ==="4711"&& kennwort=== "123" ){
          console.log("Der Cookie wird gesetzt")
          res.cookie('istAngemeldetAls',idKunde)
          res.render('index.ejs', {

          })
      }else{
        console.log("Der Cookie wird gelöscht")
        res.cookie('istAngemeldetAls','')
        res.render('login.ejs', {
      })
      app.get('/impresum',(req, res, next) => {   

        let idKunde = req.cookies['istAngemeldetAls']
        
        if(idKunde){
            console.log("Kunde ist angemeldet als " + idKunde)
            res.render('impressum.ejs', {                              
            })
        }else{
            res.render('login.ejs', {                    
            })    
        }
    })

    
        
    }
})
 

