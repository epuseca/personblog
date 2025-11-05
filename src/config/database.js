const fs = require('fs');
const path = require('path');

// Lấy đường dẫn tới thư mục json
const dataPath = path.join(__dirname, 'json');

const readData = (fileName) => {
    try {
        const filePath = path.join(dataPath, fileName)
        if (!fs.existsSync(filePath)) return [];
        const data = fs.readFileSync(filePath, 'utf8')
        return data ? JSON.parse(data) : []
    } catch (error) {
        console.error('Lỗi đọc file:', error);
        return [];
    }
}
const writeData = (fileName, data) => {
    try {
        const filePath = path.join(dataPath, fileName)
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Lỗi ghi file:', error);
    }
}
const addArticle = (article) => {
    const articles = readData('article.json');
    if (typeof article !== 'object' || Array.isArray(article)) {
        console.error('Dữ liệu không hợp lệ:', article);
        return;
    }
    articles.push(article);
    writeData('article.json', articles);
    return article;
};

const getAllArticles = () => {
    const articles = readData('article.json')
    return articles;
}
const getArticleById = (id) => {
    const articles = readData('article.json')
    const articleById = articles.find(a => a.id === id)
    return articleById;
}
const updateArticle = (id, updateArticle) => {
    const articles = readData('article.json')
    const index = articles.findIndex(a => a.id === id)
    if (index !== -1) {
        articles[index] = { ...articles[index], ...updateArticle }
        writeData('article.json', articles)
        return articles[index];
    }
    return false;
}
const deleteArticle = (id) => {
    const articles = readData('article.json')
    const newArticles = articles.filter(a => a.id !== id)
    writeData('article.json', newArticles)
    return newArticles.length < articles.length;
}

module.exports = {
    addArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle
};