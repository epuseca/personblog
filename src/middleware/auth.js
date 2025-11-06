require("dotenv").config()
const jwt = require("jsonwebtoken")

const auth = (req, res, next) => {//auth này chỉ dùng để check admin vào được
    // Kiểm tra header Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Bạn chưa truyền ACCESS TOKEN ở header hoặc format không đúng (Bearer <token>)"
        })
    }
    // Lấy token từ header
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access token không hợp lệ"
        })
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== 'admin') {
            return res.status(403).json({
                success: false,
                message: "Bạn không có quyền truy cập. Chỉ admin mới được phép."
            })
        }
        req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            role: decoded.role,
            createBy: "GiaLoc"
        }
        console.log("✅ Token hợp lệ:", {
            email: decoded.email,
            name: decoded.name,
            role: decoded.role
        })
        next()
    } catch (error) {
        console.log("❌ Token error:", error.message)

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token đã hết hạn, vui lòng đăng nhập lại"
            })
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Token không hợp lệ"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Lỗi xác thực token"
            })
        }
    }
}
const authUser = (req, res, next) => {//auth này chỉ dùng để check admin vào được
    // Kiểm tra header Authorization
    const authHeader = req.headers.authorization;
    const idParam = req.params.id;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Bạn chưa truyền ACCESS TOKEN ở header hoặc format không đúng (Bearer <token>)"
        })
    }
    // Lấy token từ header
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access token không hợp lệ"
        })
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.role !== 'admin' && decoded.id !== idParam) {
            return res.status(403).json({
                success: false,
                message: "Bạn không có quyền truy cập. Chỉ admin hoặc người dùng mới được phép xem thông tin này."
            })
        }
        req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            role: decoded.role,
            createBy: "GiaLoc"
        }
        console.log("✅ Token hợp lệ:", {
            email: decoded.email,
            name: decoded.name,
            role: decoded.role
        })
        next()
    } catch (error) {
        console.log("❌ Token error:", error.message)

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token đã hết hạn, vui lòng đăng nhập lại"
            })
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Token không hợp lệ"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Lỗi xác thực token"
            })
        }
    }
}
const authAccount = (req, res, next) => {//auth này chỉ dùng để check account
    // Kiểm tra header Authorization
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            success: false,
            message: "Bạn chưa truyền ACCESS TOKEN ở header hoặc format không đúng (Bearer <token>)"
        })
    }
    // Lấy token từ header
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Access token không hợp lệ"
        })
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = {
            id: decoded.id,
            email: decoded.email,
            name: decoded.name,
            role: decoded.role,
            createBy: "GiaLoc"
        }
        console.log("✅ Token hợp lệ:", {
            email: decoded.email,
            name: decoded.name,
            role: decoded.role
        })
        next()
    } catch (error) {
        console.log("❌ Token error:", error.message)

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                success: false,
                message: "Token đã hết hạn, vui lòng đăng nhập lại"
            })
        } else if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({
                success: false,
                message: "Token không hợp lệ"
            })
        } else {
            return res.status(401).json({
                success: false,
                message: "Lỗi xác thực token"
            })
        }
    }
}

module.exports = { auth, authUser, authAccount };