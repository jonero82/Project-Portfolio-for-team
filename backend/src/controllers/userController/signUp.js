const { validationResult } = require('express-validator');
const User = require('../../models/user');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ error: result.array() });
        }
        const { email, password } = req.body;

        const emailExists = await User.findOne({ where: { email } });
        if (emailExists) {
            return res.status(400).json({ error: 'email already exists!' });
        }
        const hashPassword = await bcrypt.hash(password, 10);

        const createUser = await User.create({
            email,
            password: hashPassword,
        });
        return res.status(201).json({ message: 'Account created successfully!' });
    } catch (error) {
        console.error(`Error registering user ${error}`);
        return res.status(500).json({ error: 'An error occured' });
    }
}

module.exports = signUp;