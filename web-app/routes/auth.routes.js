const { Router } = require('express');
const User = require('../models/user');
const router = Router();
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'некорректный email').isEmail(),
        check('password', 'Минимальная длина пароля 8 символов').isLength({ min: 8 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные при регистрации'
                });
            }

            const { email, password } = req.body;

            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({ message: 'User already registred' });
            }

            const hashedPassword = await bcrypt.hash(password, 12);
            const user = new User({ enail, password: hashedPassword });

            await user.save();

            res.status(201).json({ message: 'User registred' });
        } catch (e) {
            res.status(500).json({ message: 'Somethink wrong. Try again' });
        }
    }
);

// /api/auth/login
router.post(
    '/login',
    [
        check('email', 'Введите корректный email').normalizeEmail().isEmail(),
        check('password', 'Введите пароль').exist()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректные данные при взоде в систему'
                });
            }
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: 'пользователь не найден' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Неверный логин или пароль' });
            }

            const token = jwt.sign(
                {
                    userId: user.id
                },
                config.get('jwtSecret'),
                { expiresIn: '1h' }
            );

            res.json({ token, userId: user.id });
        } catch (e) {
            res.status(500).json({ message: 'Somethink wrong. Try again' });
        }
    }
);

module.exports = router;
