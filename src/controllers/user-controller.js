import User from "../models/user-model.js";
import jwtServices from "../services/jwt-services.js";

export const signup = async (req, res) => {
    try {
        const user = await User.create({
            email: req.body.email,
            password: req.body.password,
            nickname: req.body.nickname
        });

        const token = jwtServices.generateAccessToken(user)
        
        res.status(201).send(token);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const login = async (req, res) => {
    try {
        const user = await User.findOne({
            email: req.body.email
        }).exec()

        if(user && (await user.isValidPassword(req.body.password))){
            const token = jwtServices.generateAccessToken(user)
            res.json(token)
        }else {
            res.status(404).json({
                error: "Email or password incorrect"
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}