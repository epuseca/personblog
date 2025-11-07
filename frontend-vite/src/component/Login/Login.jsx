import React, { useEffect } from 'react'
import './Login.scss';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.clear();
    }, [navigate])
    const handleUserClick = () => {
        navigate('/home');
    };
    return (
        <div className="login-page">
            <div className="container">
                <h1>Personal Blog Role</h1>
                <div className="role-buttons">
                    <button onClick={handleUserClick} className="role-btn user">
                        User
                    </button>
                    <button onClick={() => navigate('/login')} className="role-btn admin">
                        Admin
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login