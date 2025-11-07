import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css"; // cần import icon font nếu chưa

const BackComponent = (props) => {
    const { nav, pageBack } = props;
    const navigate = useNavigate();

    return (
        <button
            onClick={() => navigate(nav)}
            className={`back-button `}
            style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                background: "none",
                border: "none",
                color: "#333",
                fontSize: "16px",
                cursor: "pointer",
            }}
        >
            <i className="bi bi-arrow-bar-left" style={{ fontSize: "20px" }}></i>
            <span>Back to {pageBack}</span>
        </button>
    );
};

export default BackComponent;
