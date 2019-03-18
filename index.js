const express = require("express");
const dev = require("./config/dev");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cookieSession = require('cookie-session');
require("./models/User");
require("./services/passport");
require("./models/Data");
mongoose.connect(dev.mongoURI);
const app = express();

app.use(cookieSession({
    name: 'session',
    keys: [dev.cookieKey],
    // Cookie Options
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days of cookie
}))
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());
app.use(bodyParser.json());
app.use(passport.session());

require("./routes/authRoutes")(app);
// require("./routes/dataRoutes")(app);


const Data =require("./models/Data").Data;
app.get('/server/search/allData', (req, res) => {
    if(req.query.userName && req.query.model) {
        Data.find({"user_info.email":req.query.userName, "print_info.printer.modelNumber":parseInt(req.query.model)}, (err, alldata) => {
            console.log(alldata.length);
            res.send(alldata)
        })
    } else if(req.query.userName) {
        Data.find({"user_info.email":req.query.userName}, (err, alldata) => {
            console.log(alldata.length);
            res.send(alldata)
        })
    } else if(req.query.model) {
        Data.find({"print_info.printer.modelNumber":parseInt(req.query.model)}, (err, alldata) => {
            console.log(alldata.length);
            res.send(alldata)
        })
    } else {
        Data.find({}, (err, alldata) => {
            console.log(alldata.length);
            res.send(alldata)
        })
    }

})


app.get('/server/search/allUser', (req, res) => {

    var query = Data.distinct("user_info.email");
    query.exec((err, result) => {
        // console.log(result);
        res.send(result)
    })
})


const PORT = 5000;
app.listen(PORT);

// User.find({"user_info.email":/gmail/}, {"user_info.email":1, _id:0}).

// User.find({"user_info.email":/gmail/}, {"user_info.email":1, _id:0}).
// limit(2).
// exec((err, allUser) => {
//     if(err) {
//         console.log(err);
//     } else {
//         // if(allUser != undefined) {
//             console.log(allUser);
//             res.send(allUser);

//         // }
//     }
// })

