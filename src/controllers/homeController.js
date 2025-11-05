const path = require('path');
const db = require('../config/database')
const getHome = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};
const getHomepage = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'home.html'));
};
const getArticlepage = async (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'article.html'));
};
const getAllArticleData = async (req, res) => {
    try {
        const { id } = req.params
        const articleById = db.getArticleById(id)
        return res.status(200).json({
            message: 'Lấy dữ liệu thành công',
            success: true,
            data: articleById
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getArticleHomepage = async (req, res) => {
    try {
        const article = db.getAllArticles()
        return res.status(200).json({
            message: 'Lấy dữ liệu thành công',
            success: true,
            data: article
        })
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getHomepage,
    getHome,
    getArticlepage,
    getAllArticleData,
    getArticleHomepage
}