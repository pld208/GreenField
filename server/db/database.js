const  {Sequelize}  = require('sequelize');
const mysql = require('mysql2');

const db = new Sequelize('maps', 'root', '', {
  host: 'localhost',
  dialect:  'mysql',
  logging: false
});

//const db = new Sequelize('mysql://localhost:3000/maps')
db.authenticate()
.then(() => {
console.log('connected to the database')
})
.catch((err) => {
  console.log('could not connect to database', err)
})




const User = db.define('User', {
  username: Sequelize.STRING,
  password: Sequelize.STRING
});

const Markers = db.define('Markers', {
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING

});
const Favorites = db.define('Favorites', {
  latitude: Sequelize.INTEGER,
  longitude: Sequelize.INTEGER,
  imageUrl: Sequelize.STRING,
  description: Sequelize.STRING

});
db.sync({ force: true })
  .then(() => {
    console.log(`Database & tables created!`);
  }).catch((err) => {console.log(err)})
module.exports = {
  db,
  User,
  Markers,
  Favorites
};