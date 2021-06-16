usersController = {};

usersController.getUsers = (req, res) => res.json({message: 'GET- Users Request'})

usersController.getUser = (req, res) => res.json({message: 'GET- User Request'})

usersController.createUser = (req, res) => res.json({message: 'POST- User Created'})

usersController.updateUser = (req, res) => res.json({message: 'PUT - User Updated'})

usersController.deleteUser = (req, res) => res.json({message: 'GET- User Deleted'})



module.exports = usersController;