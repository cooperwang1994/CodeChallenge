const mongoose = require('mongoose');
const passport = require("passport");
const User =require("../models/User").User;
const requireLogin = require("../middlewares/requireLogin");
const Data = require("../models/Data").Data;

module.exports = app =>{
	app.get('/',
		(req, res) => {
			res.send("this is the main backend page(testing)");
		}
	);

	app.get('/auth/google',
	  	passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get('/auth/google/callback', 
		passport.authenticate('google', { failureRedirect: '/login' }),
		(req, res) => {
   		res.redirect('/');
   		}
   	);

	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

	app.get('/api/current_user', (req, res) => {
		res.send(req.user);
	});

	app.get('/api/userdata', (req, res) => {
		console.log(req.query.userEmail);
		Data.find({"user_info.email":req.query.userEmail}, (err, data) => {
			// console.log(data)
			res.send(data)
		})
	})

	app.post('/api/insertData', requireLogin, (req, res) => {
		console.log(req.body);
		if(req.body.userEmail) {

			const newData = new Data({
				user_info: {
					email: req.body.userEmail,
					serial: req.body.userSerial
				},
				print_info: {
					files: {
						input: req.body.inputFile,
						output: req.body.outputFile
					},
					printer: {
						modelNumber: req.body.modelNum
					  },
					pressure: {
						extruder0: req.body.extruder1P,
						extruder1: req.body.extruder2P,
						extruder2: req.body.extruder3P,
						extruder3: req.body.extruder4P,
						extruder4: req.body.extruder5P,
						extruder5: req.body.extruder6P
					},
					temperature: {
						extruder0: req.body.extruder1T,
						extruder1: req.body.extruder2T,
						extruder2: req.body.extruder3T,
						extruder3: req.body.extruder4T,
						extruder4: req.body.extruder5T,
						extruder5: req.body.extruder6T
					},
					material: {
						extruder0: req.body.extruder1M,
						extruder1: req.body.extruder2M,
						extruder2: req.body.extruder3M,
						extruder3: req.body.extruder4M,
						extruder4: req.body.extruder5M,
						extruder5: req.body.extruder6M
					}
				}
			})
			newData.save();
		}
	});

	app.delete('/api/deleteData', requireLogin, (req, res) => {
		console.log(req.query.id);
		Data.remove({_id: req.query.id}, err => {
			console.log(err);
		})
	})
}