usersController = {};
const User = require('../models/User.model');

/* GET all users */
usersController.getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users);
}

/* Get only one user */
usersController.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

/* POST an User */
usersController.createUser = async (req, res) => {
    const userName = req.body;
    const newUser = new User({
        username: userName.username
    });
    await newUser.save();
    res.json({message: 'POST- User Created'});
}

/* PUT an User */
usersController.updateUser = async (req, res) => {
    const userName = req.body;
    await User.findOneAndUpdate({_id: req.params.id}, {
        username: userName.username
    });
    res.json({message: 'PUT - User Updated'});
}

/* DELETE an User */
usersController.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json({message: 'GET- User Deleted'});
}

module.exports = usersController;