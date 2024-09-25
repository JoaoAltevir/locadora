import User from "../models/user-model";

export const signup = async (req, res) => {
    try {
        const content = await User.create(req.body);
        
        res.status(201).send(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export const login = async (req, res) => {
    try {
        const email = req.body.email;

        const user = await User.findOne({
            email,
        }).exec()

        if(!user || !user.isValidPassword(req.body.password)){
            res.status(404).json({
                error: "Email or password incorrect"
            })
        }
    } catch (err) {
        res.status(400).json(err)
    }
}