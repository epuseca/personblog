import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddNewArticle.scss";
import { addArticle } from "../../../services/apiServices";
import BackComponent from "../../BackComponent/BackComponent";

const AddNewArticle = () => {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [content, setContent] = useState("");
    const [warning, setWarning] = useState('')
    const navigate = useNavigate();

    const handlePublish = async () => {
        if (!title.trim() || !content.trim()) {
            setWarning('Title and content is require')
            return;
        }

        try {
            const res = await addArticle(title, date, content)
            if (res) {
                navigate("/home");
            } else {
                setWarning("Something was wrong!")
            }
        } catch (error) {
            setWarning(error)
        }
    };

    return (
        <div className="add">
            <span className='back'>
                <BackComponent
                    nav={'/home'}
                    pageBack={'Home'}
                />
            </span>
            <div className="form-container">

                <h1>New Article</h1>

                <label htmlFor="title">Article Title</label>
                <input
                    type="text"
                    id="title"
                    placeholder="Enter article title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="date">Publishing Date</label>
                <input
                    type="text"
                    id="date"
                    placeholder="e.g. November 5, 2025"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    placeholder="Write your article here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <div style={{ color: 'red' }}>{warning}</div>
                <button onClick={handlePublish}>Publish</button>
            </div>
        </div>

    );
};

export default AddNewArticle;
