// Das ist ein einzeiliger Kommentar.
// Das ist ein einzeiliger Kommentar.

const bodyParser = require('body-parser')

const express = require('express')

const app = express()

 app.set('view engine','ejs')

 app.use(bodyParser.urlencoded({extendet : true}))

 app.use(express.static('public'))

 const server = app.listen(process.env.PORT  || 3001,()=> {
     console.log(' Der Server ist erfolgreich gestartet auf Port %s',server.address().port)
 })

 app.get('/',(req, res, next) => {
     res.render('index.ejs', {
         
     })
 })