import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Article.scss'
import { getArticleById } from '../../services/apiServices'
import BackComponent from '../BackComponent/BackComponent'

const Article = () => {
    const { id } = useParams()
    const [article, setArticle] = useState(null)


    useEffect(() => {
        fetchArticle()
    }, [id])

    const fetchArticle = async () => {
        const res = await getArticleById(id)
        setArticle(res?.data)
        console.log('res', res)
    }


    return (
        <div className='article'>
            <span className='back'>
                <BackComponent
                    nav={'/home'}
                    pageBack={'Home'}
                />
            </span>
            <div className="article-container">
                <div className="article-card">
                    <h2 className="title">{article?.title || 'No title'}</h2>
                    <p className="date">{article?.date || 'No date'}</p>
                    <p className="content">
                        {article?.content || "Your title isn't loaded, pls check your id's article"}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Article