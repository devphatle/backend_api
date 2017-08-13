var User = require('../models/User');

exports.create = function(req, res){
    var newUser = User({
        username: req.body.username,
        password: req.body.password,
        admin: true,
        info: {
            age: req.body.age,
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            birthday: req.body.birthday
        },
    });
    res.json(newUser);
}

