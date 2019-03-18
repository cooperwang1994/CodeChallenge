const mongoose = require('mongoose');

const Data =require("../models/Data").Data;
// const allData = mongoose.model('surveys');

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://qbwang:1qaz2wsx@cluster0-omh6u.azure.mongodb.net/test?retryWrites=true";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   // perform actions on the collection object
//   console.log('you cuole');
//   client.close();
// });
// const collection = client.db("test").collection("users");

module.exports = app =>{
    app.get('/server/search/allData', (req, res) => {
        Data.find((err, alldata) => {
            console.log(alldata);
        })
    })
}