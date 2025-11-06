const fs = require('fs');
const path = require('path');
const USER_FILE = 'user.json';

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

const addUser = (user) => {
    const users = readData(USER_FILE);

    if (!user || typeof user !== 'object' || Array.isArray(user)) {
        console.error('Dữ liệu người dùng không hợp lệ:', user);
        return null;
    }

    if (users.some(u => u.id === user.id)) {
        console.error('ID người dùng đã tồn tại.');
        return null;
    }

    users.push(user);
    writeData(USER_FILE, users);
    return user;
};
const getAllUsers = () => {
    const users = readData(USER_FILE);
    return users;
}
const getUserByUsername = (name) => {
    const users = readData(USER_FILE);
    const userByName = users.find(u => u.name === name); // Dùng == để so sánh số và chuỗi
    return userByName;
}
const updateUser = (id, updatedData) => {
    const users = readData(USER_FILE);
    const index = users.findIndex(u => u.id == id);

    if (index !== -1) {
        // Gộp dữ liệu mới vào dữ liệu cũ
        users[index] = { ...users[index], ...updatedData };
        writeData(USER_FILE, users);
        return users[index];
    }
    return false;
}
const deleteUser = (id) => {
    const users = readData(USER_FILE);
    const initialLength = users.length;

    const newUsers = users.filter(u => u.id != id);

    if (newUsers.length < initialLength) {
        writeData(USER_FILE, newUsers);
        return true; // Xóa thành công
    }
    return false; // Không tìm thấy ID
}

module.exports = {
    addArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
    addUser,
    getAllUsers,
    getUserByUsername,
    updateUser,
    deleteUser
};