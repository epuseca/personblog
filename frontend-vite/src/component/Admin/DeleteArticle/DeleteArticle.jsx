import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DeleteArticle.scss";
import { deleteArticle, getArticleById } from "../../../services/apiServices";

const DeleteArticle = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        fetchDataArticle(id)
    }, []);
    const fetchDataArticle = async (id) => {
        const res = await getArticleById(id);
        setArticle(res?.data)
    }
    const handleDelete = async () => {
        try {
            const res = await deleteArticle(id);
            console.log('res', res)

            if (res && res.success) {
                navigate("/home");
            } else {
                alert(res.message || "Failed to delete.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleCancel = () => {
        navigate("/home");
    };

    return (
        <div className="delete-container">
            <h1>Delete Article</h1>
            <span>Are you sure to delete: </span>
            <div style={{ fontWeight: '500' }}>{article?.title}</div>
            <div className="btn-group">
                <button
                    className="btn btn-delete"
                    onClick={handleDelete}
                    disabled={article?.title === "Not found"}
                >
                    Delete
                </button>
                <button className="btn btn-cancel" onClick={handleCancel}>
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteArticle;
