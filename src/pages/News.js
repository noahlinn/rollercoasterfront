import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const News = () => {
    const [news, setNews] = useState(null)

    const getNews = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/parknews`)
            .then((res) => setNews(res.data.data))
            .catch((err) => console.log(err))
    }
    useEffect(getNews, [])
    return (
        <div>
            <h1 className="search-header">Amusement Park News</h1>
            <div className="news-container">
                {news && news.map((newIsAWordYouCantUseInJavaScript, i) => (
                    <Link to={{ pathname: newIsAWordYouCantUseInJavaScript.url }} target="_blank">
                        <div className="each-news" key={i}>
                            <img className="news-img" src={newIsAWordYouCantUseInJavaScript.image} />
                            <div className="news-title-container">
                                <h3 className="news-title">{newIsAWordYouCantUseInJavaScript.title}</h3>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default News