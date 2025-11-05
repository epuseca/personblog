const express = require('express');
const path = require('path');
const { getHomepage, getHome, getArticlepage, getAllArticleData, getArticleHomepage } = require('../controllers/homeController');
const { getAdminHome, getNewArticle, addArticlepage, getUpdateArticle, putUpdateArticle, getDeleteArticle, deleteArticle } = require('../controllers/adminController');

const routerAPI = express.Router();

routerAPI.get('/', getHome);
routerAPI.get('/home', getHomepage);
routerAPI.get('/article/:id', getArticlepage);
routerAPI.get('/api/article/:id', getAllArticleData);
routerAPI.get('/all-article', getArticleHomepage);

routerAPI.get('/admin', getAdminHome)
routerAPI.get('/new', getNewArticle)
routerAPI.post('/article', addArticlepage);
routerAPI.get('/edit/:id', getUpdateArticle)
routerAPI.put('/edit/:id', putUpdateArticle)
routerAPI.post('/article', addArticlepage);
routerAPI.get('/delete/:id', getDeleteArticle)
routerAPI.delete('/delete/:id', deleteArticle)





module.exports = routerAPI; //export default
