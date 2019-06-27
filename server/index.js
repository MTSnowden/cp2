const express = require("express");
const mongoose = require("mongoose");
const router = require('./express/routes')
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("checkpoint-two").collection("movies");
  // perform actions on the collection object
  client.close();
});
const app = express();
app.use(router)
app.get("/movies", (req, res)=> {
    res.send(req.body)
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Listening on port:${port}`);
});





// const path = require('path');
// // require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');

// mongoose.set('debug', true);
// mongoose.Promise = global.Promise;

// mongoose.connect('mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority',{dbName: 'checkpoint-two'}).then(
//     () => {
//         console.log('mongoose connected :)');
//         startWebServer();
//     },
//     err => {
//         console.log('mongoose did not connect :(', err);
//     }
// );

// const startWebServer = () =>{
//     //not secure
//     const app = express();
//     app.use(bodyParser.json());

//     const port = process.env.PORT || 3002;
//     app.listen(port, (err) => {
//         if (err) {
//             return console.log('ERROR: ', err)
//         }
//         console.log(`Listening on port: ${port}`)
//     });
// }

// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// const router = require('./express/routes')
// // const connectionString = 'mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority'

// mongoose.set("debug", true);
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb+srv://Oprah:Oprah@cluster0-chqnf.mongodb.net/test?retryWrites=true&w=majority', {
//     reconnectTries: 100,
//     reconnectInterval: 500,
//     autoReconnect: true,
//     useNewUrlParser: true,
//     dbName: 'test'
//   }).then(
//         () => {
//             console.log('mongoose connected :)');
            
//         },
//         err => {
//             console.log('mongoose did not connect :(', err);
//         }
//     );


// app.use(router)
// const port = process.env.PORT || 3002;
    
// app.listen(port, (err) => {
//     if (err) {
//         return console.log('ERROR: ', err)
//     }
//   console.log(`Listening on port:${port}`);
// });
