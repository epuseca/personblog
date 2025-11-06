const db = require('../config/database')
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 10;
const jwt = require('jsonwebtoken');

const createUser = async (req, res) => {
    const { name, password } = req.body;
    if (!name || !password) {
        return res.status(400).json({ message: "Thiếu dữ liệu đăng ký" });
    }
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    const newUser = {
        id: Date.now().toString(),
        name,
        password: hashedPassword,
        role: 'admin'
    };
    const added = db.addUser(newUser);
    if (added) {
        const { password, ...userWithoutPassword } = added;
        return res.status(201).json({
            message: "Thêm user thành công",
            article: userWithoutPassword
        });
    }

};
// Ví dụ hàm login
const loginUser = async (req, res) => {
    const { name, password } = req.body;
    console.log('req.body', req.body)
    const user = await db.getUserByUsername(name);
    if (!user) {
        return res.status(401).json({ message: "Tên đăng nhập hoặc mật khẩu không đúng." });
    }
    const isMatch = await bcrypt.compare(password, user.password); // (Mật khẩu nhập vào, Mật khẩu đã hash)
    if (isMatch) {
        const payload = {
            id: user.id,
            name: user.name,
            role: user.role
        }
        const access_token = jwt.sign(
            payload,
            '4fc0f7b3-87cd-4683-b662-2c3e32302a6d',
            {
                expiresIn: '7d'
            }
        );
        res.cookie('access_token', access_token, {
            httpOnly: true,  // Không thể truy cập từ JavaScript
            secure: false,  // Chỉ gửi qua HTTPS trong production
            sameSite: 'strict',  // Bảo vệ CSRF
        });
        return res.status(200).json({
            message: "Đăng nhập thành công",
            success: true,
            user: {
                access_token,
                email: user.email,
                name: user.name,
                role: user.role
            }
        });
    } else {
        return res.status(401).json({ message: "Tên đăng nhập hoặc mật khẩu không đúng." });
    }
}

module.exports = {
    createUser,
    loginUser
}
