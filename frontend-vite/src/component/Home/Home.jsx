import React, { useEffect, useState } from 'react'
import { getAllArticle } from '../../services/apiServices'
import './Home.scss'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode';
import BackComponent from '../BackComponent/BackComponent';

const Home = () => {
    const [data, setData] = useState()
    const [role, setRole] = useState('user')
    const navigate = useNavigate()
    const access_token = localStorage?.getItem('access_token')
    let decodedToken = null;
    if (access_token) decodedToken = jwtDecode(access_token);

    useEffect(() => {
        fetchData()
    }, [])
    const fetchData = async () => {
        const res = await getAllArticle()
        setData(res?.data)
        if (decodedToken) setRole(decodedToken?.role)

    }
    const handleViewArticle = (id) => {
        navigate(`/article/${id}`)
    }
    return (
        <div className="page-container">
            <BackComponent
                nav={'/'}
                pageBack={'Main'}
            />
            <div className="blog-container">
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>Personal Blog</h1>
                    {role === 'admin' &&
                        <span onClick={() => navigate('/new')}>+ Add</span>}
                </div>
                <ul>
                    {data?.map((article, index) => (
                        <li key={index}>
                            <span onClick={() => handleViewArticle(article.id)} className="title">{article.title}</span>
                            {role === 'user' ?
                                <span className="date">{article.date}</span >
                                :
                                <div className='action'>
                                    <span onClick={() => navigate(`/edit/${article.id}`)}>Edit</span>
                                    <span onClick={() => navigate(`/delete/${article.id}`)}>Delete</span>
                                </div>
                            }
                        </li >
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Home