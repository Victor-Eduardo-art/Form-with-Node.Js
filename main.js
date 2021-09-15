const db = require('./models/db')
const Users = require('./models/user')
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

// config 
   // Template engine (Handlebars)
      app.engine('handlebars', handlebars({defaultLayout: 'main'}))
      app.set('view engine', 'handlebars')

   // Configuration the body parser (body-parser)
      app.use(bodyParser.urlencoded({extended: false}))
      app.use(bodyParser.json())

// rotas
   app.get('/', (req, res) => {
      res.render('form')
   })

   app.post('/add', (req, res) => {
      Users.create({
         name: req.body.name,
         email: req.body.email
      })
      
      res.redirect('/users-list')   
   })

   app.get('/users-list', (req, res) => {
      Users.findAll({order: [['id', 'DESC']]}).then((users) => {
         res.render('user-list', {users: users})
      })
   })

   app.get('/delete/:id', (req, res) => {
      Users.destroy({
         where: {
            id: req.params.id
         }
      }).then(() => {
         res.send('Usuário deletado')
      }).catch((erro) => {
         res.send('Falha ao deletar Usuário ERRO: ' + erro)
      })
   })

app.listen(8081, (req, res) => {
   console.log('o servidor está rodando em localhost:8081')
})