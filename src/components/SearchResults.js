import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const SearchResults = (props) => {

    return (
        <>
            {props.results.map(res => (
                <Link to={`/${props.location}/${res.id}`}>
                    <div className="each-news" key={res.id}>
                        <img className="news-img" src={res.image} />
                        <div className="news-title-container">
                            <div className="news-title">
                            <h3 >{res.name}</h3>
                            {res.park_located_at}
                            {res.location}
                            </div>
                        </div>
                    </div>
                </Link>

            ))}
        </>
    )
}

export default SearchResults