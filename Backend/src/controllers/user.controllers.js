import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "../models/user.models.js";

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    });
};

const cookieOptions = {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: process.env.NODE_ENV === 'production' ? 'None' : 'Lax',
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
};

// ── POST /api/v1/user  →  Register ──────────────────────────────────────────
const registerUser = asyncHandler(async (req, res) => {
    const { name, username, password } = req.body;

    if (!name || !username || !password) {
        res.status(400);
        throw new Error('Please provide name, username and password');
    }

    const userExists = await User.findOne({ username });
    if (userExists) {
        res.status(400);
        throw new Error('Username already taken');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await User.create({ name, username, password: hashedPassword });

    if (user) {
        const token = generateToken(user._id);

        return res.status(201)
            .cookie('token', token, cookieOptions)
            .json({
                _id: user._id,
                name: user.name,
                username: user.username,
                message: 'Registered successfully',
                token,
            });
    } else {
        res.status(400);
        throw new Error('Invalid user data');
    }
});

// ── POST /api/v1/user/login  →  Sign In ─────────────────────────────────────
const loginUser = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        res.status(400);
        throw new Error('Please provide username and password');
    }

    // password has select:false → must explicitly request it
    const user = await User.findOne({ username }).select('+password');

    if (!user) {
        res.status(401);
        throw new Error('Invalid credentials');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        res.status(401);
        throw new Error('Invalid credentials');
    }

    const token = generateToken(user._id);

    return res.status(200)
        .cookie('token', token, cookieOptions)
        .json({
            _id: user._id,
            name: user.name,
            username: user.username,
            message: 'Logged in successfully',
            token,
        });
});

// ── POST /api/v1/user/logout  →  Sign Out ───────────────────────────────────
const logOut = asyncHandler(async (req, res) => {
    res.status(200)
        .clearCookie('token', cookieOptions)
        .json({ message: 'Logged out successfully' });
});

// ── GET /api/v1/user/me  →  Current User ────────────────────────────────────
const getMe = asyncHandler(async (req, res) => {
    res.status(200).json(req.user);
});

export { registerUser, loginUser, getMe, logOut };