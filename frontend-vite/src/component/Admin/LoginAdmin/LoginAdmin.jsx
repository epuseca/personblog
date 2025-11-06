import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import './LoginAdmin.scss'
import { postLogin } from '../../../services/apiServices'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'

const LoginAdmin = () => {
    const navigate = useNavigate('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [warning, setWarning] = useState('')

    const access_token = localStorage?.getItem('access_token')
    let decodedToken = null;
    if (access_token) decodedToken = jwtDecode(access_token);
    useEffect(() => {
        if (decodedToken?.role === 'admin') {
            navigate('/')
            localStorage.clear()
        }
    }, [])

    const handleSubmit = async () => {
        // Validate nếu cần
        if (!name || !password) {
            setWarning('Name and password is require')
            return
        }
        const res = await postLogin(name, password)
        if (res && res.success === true) {
            navigate('/home')
            localStorage.setItem('access_token', res.user.access_token);
        } else {
            setWarning('Password is not correct')
        }
    }
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Log in as Admin</h1>

                <div className="login-form" >
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input-field"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onKeyDown={handleKeyDown}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input-field"
                    />
                    <span style={{ color: 'red' }}>{warning}</span>
                    <button
                        type="button"
                        onClick={() => handleSubmit()}
                        className="role-btn"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoginAdmin