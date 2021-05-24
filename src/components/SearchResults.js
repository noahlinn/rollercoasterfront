import {Link} from 'react-router-dom'
import SearchBar from './SearchBar'
const SearchResults = (props) => {

    return(
        props.results.map(res => (
            <Link to={`/rollercoasters/${res.id}`}>
                <div key = {res.id}></div>
                <h3>{res.name}</h3>
                {/* <img src = {res.image}/> */}
            </Link>
        ))
    )
}

export default SearchResults