var data = require("../data.json");

exports.addFriend = function(req, res) {
	console.log(data);
	res.render('add', data);
	var newName = req.query.name;
	var newDescription = req.query.description; 
	var newFriendObj = {"name": newName, "description": newDescription, "imageURL": "http://lorempixel.com/400/400/people"};
	data["friends"].push(newFriendObj);
}