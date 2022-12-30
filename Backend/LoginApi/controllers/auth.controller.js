const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const newToken = (user) => {
    return jwt.sign({user}, 'secret')
}


const register = async (req, res) => {
    try {
        //  We will try to find the email if it already exists
        let user = await User.findOne({email : req.body.email});
        // if user exists then send error
        if (user) return res.status(400).send({message: "Please try another email address"})
        // if user is not found then we will create user with email and password
        user = await User.create(req.body);
        //  return user
        return res.status(201).send({email : user.email, id : user._id});

    } catch (error) {
        return res.status(500).send(error.message);
    }
}


const login = async (req, res) => {
    try {
        const user  = await User.findOne({email : req.body.email});

        if (!user) return res.status(404).send({message: "Invalid Credentials"});

        const match = user.checkPassword(req.body.password);

        if (! match) return res.status(404).send({message: "Invalid Credentials"});


        const token = newToken(user);

        return res.status(200).send({token: token});

    } catch (error) {
        return res.status(500).send(error.message);
    }
}



module.exports = {
    register, login
}