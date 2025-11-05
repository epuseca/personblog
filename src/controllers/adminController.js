const path = require('path');
const db = require('../config/database')

const getAdminHome = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin', 'admin.html'));
};
const getNewArticle = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin', 'new.html'));
};
const addArticlepage = async (req, res) => {
    const { title, content, date } = req.body;
    if (!title || !content) {
        return res.status(400).json({ message: "Thiếu dữ liệu bài viết" });
    }
    const newArticle = {
        id: Date.now().toString(),
        title,
        content,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    };
    const added = db.addArticle(newArticle);
    return res.status(201).json({
        message: "Thêm bài viết thành công",
        article: added
    });
};
const getUpdateArticle = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin', 'edit.html'));
};
const putUpdateArticle = async (req, res) => {
    const { id } = req.params
    const { title, date, content } = req.body
    const updateArticle = {
        title,
        content,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        })
    }
    const updated = db.updateArticle(id, updateArticle)
    return res.status(201).json({
        message: "Cập nhật bài viết thành công",
        article: updated
    });
};
const getDeleteArticle = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'admin', 'delete.html'));
};
const deleteArticle = async (req, res) => {
    const { id } = req.params
    const deleted = db.deleteArticle(id)
    console.log('id, deleted', id, deleted)
    return res.status(201).json({
        message: "Xóa bài viết thành công",
        article: deleted,
        success: true
    });
};

module.exports = {
    getAdminHome,
    getNewArticle,
    addArticlepage,
    getUpdateArticle,
    putUpdateArticle,
    deleteArticle,
    getDeleteArticle
}