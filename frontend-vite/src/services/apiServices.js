import axios from '../utils/axiosCustomize';

export const getAllArticle = async () => {
    return axios.get(`/all-article`);
}
export const getArticleById = async (id) => {
    return axios.get(`/api/article/${id}`);
}
export const postLogin = async (name, password) => {
    return axios.post(`/login`,
        { name: name, password: password });
}
export const editArticle = async (id, title, date, content) => {
    return axios.put(`/edit/${id}`,
        { title: title, date: date, content: content });
}
export const deleteArticle = async (id) => {
    return axios.delete(`/delete/${id}`);
}
export const addArticle = async (title, date, content) => {
    return axios.post(`/article`,
        { title: title, date: date, content: content });
}

