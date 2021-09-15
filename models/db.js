const Sequelize = require('sequelize')
const sequelize = new Sequelize('users', 'root', '8dud7sid8d9$', {
   host: 'localhost',
   dialect: 'mysql'
})

sequelize.authenticate().then(() => {
   console.log('MySQL conectado com sucesso!')
}).catch((erro) => {
   console.log(`Falha ao se conectar ao MySQL, Erro: ${erro}`)
})

module.exports = {
   Sequelize: Sequelize,
   sequelize: sequelize
}