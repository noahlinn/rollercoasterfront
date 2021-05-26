import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
const SearchResults = (props) => {

    return (
        <>
            {props.results.map(res => (
                <Link to={`/rollercoasters/${res.id}`}>
                    <div className="each-news" key={res.id}>
                        <img className="news-img" src={res.image} />
                        <div className="news-title-container">
                            <h3 className="news-title">{res.name}</h3>
                        </div>
                    </div>
                </Link>

            ))}
        </>
    )
}

export default SearchResults