import express from 'express';
import User from '../models/userModel.js';

const router = express.Router();

function generateToken(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    console.log(username, password);

    try {
        const user = new User({ username, password });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await User.findOne({ username });

        if (!user) {
            return res.status(400).send('User not found');
        }

        if (user.password !== password) {
            return res.status(400).send('Invalid password');
        }

        const token = generateToken(16);
        user.token = token;
        await user.save();

        res.status(200).json({ token });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

export default router;
