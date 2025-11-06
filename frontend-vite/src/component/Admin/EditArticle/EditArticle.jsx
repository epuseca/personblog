import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditArticle.scss';
import { editArticle, getArticleById } from '../../../services/apiServices';

const EditArticle = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // 1. State để lưu trữ dữ liệu bài viết
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [warning, setWarning] = useState('')

    // 2. Hàm Fetch dữ liệu bài viết cũ
    useEffect(() => {
        fetchDataArticle(id)
    }, [id]);

    const fetchDataArticle = async (id) => {
        const res = await getArticleById(id);
        setTitle(res?.data?.title)
        setDate(res?.data?.date)
        setContent(res?.data?.content)
    }

    const handleUpdate = async () => {
        if (!title.trim() || !content.trim()) {
            setWarning('Title and content is require')
            return;
        }

        try {
            const res = await editArticle(id, title.trim(), date, content);
            if (res) {
                navigate('/home'); // Điều hướng về trang admin
            }
        } catch (error) {
            setWarning(error)
        }
    };


    return (
        <div className="update-article-container">
            <div className="form-container">
                <h1>Update Article</h1>

                <div className="input-group">
                    <label htmlFor="title">Article Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Enter article title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="date">Publishing Date</label>
                    <input
                        type="text"
                        id="date"
                        placeholder="e.g. November 5, 2025"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="content">Content</label>
                    <textarea
                        id="content"
                        placeholder="Write your article here..."
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </div>
                <span style={{ color: 'red' }}>{warning}</span>

                <button type="button" onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditArticle;