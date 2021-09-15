const db = require('./db')
const Users = db.sequelize.define('users', {
   name: {
      type: db.Sequelize.STRING
   },

   email: {
      type: db.Sequelize.TEXT
   }
})

// Users.sync({force: true})

module.exports = Users