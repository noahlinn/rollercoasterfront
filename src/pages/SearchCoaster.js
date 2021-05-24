import { useState, useEffect } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
const SearchCoaster = () => {
    const [query, setQuery] = useState("")
    const [name, setName] = useState(false)
    const [results, setResults] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setName && searchByName()
    }

    const nameOnClick = () => {
        setName(true)
    }

    const searchByName = () => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/coasters/search`, {
            "query": query.query
        }).then((res) => setResults(res.data.results))
    }

    return (
        <>
            <div>
                <h1>SEARCH</h1>
                <span className="buttons"><button onClick={nameOnClick}>By Name</button></span>
                <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} />
            </div>
            <div>
                 {results && <SearchResults results={results}/>}
            </div>
        </>
    )
}

export default SearchCoaster