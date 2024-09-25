import User from "../models/user-model";

export const signup = async (req, res) => {
    try {
        const content = await User.create(req.body);
        
        res.status(201).send(content);
    } catch (error) {
        res.status(400).json(error);
    }
}