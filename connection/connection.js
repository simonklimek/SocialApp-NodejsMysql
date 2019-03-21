const mysql= require("mysql");

const connection = mysql.createConnection({
    multipleStatements: true,
    host     : 'localhost', // your host
    user     : 'root', // mysql user
    password : 'password', // mysql password
    // database : 'nodemysql', // will be created automatically
    port : 8889
  });
 
module.exports = connection;



// class Index {

//   constructor (conenction) {
//     this.connection = connection
//   }

//   handle (req, res) {
//     /// ...

//     res.send('asdasdds')
//   }

// }

// module.exports = Index
// // dserver.js

// app.get('/index', (req, res) => new Index(conn).handle(req, res))



// // test

// const Index = ...

// const i = new Index (sinon.stub())

// i.handle({ body: 'asd' }, {})