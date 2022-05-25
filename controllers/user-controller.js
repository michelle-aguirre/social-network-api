const { User, Thought } = require('../models');

const userController = {
    //get all users
    getUsers(req, res) {
        User.find()
            .select('-__v')
    }
}