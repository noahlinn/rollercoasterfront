import SearchBar from "../components/SearchBar"
import SearchButtons from "../components/SearchButtons"
import SearchResults from "../components/SearchResults"
import axios from 'axios'
import { useState } from 'react'

const SearchUsers = () => {
    const [query, setQuery] = useState("")
    const [name, setName] = useState(false)
    const [location, setLocation] = useState(false)
    const [error, setError] = useState(null)
    const [results, setResults] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            searchByName()
        }
        else if (location)
            // searchByPark()
            console.log('nope')
        else {
            setError("Please Choose Search Method")
        }
    }

    const nameOnClick = () => {
        setName(true)
        setLocation(false)
    }
    const locationOnClick = () => {
        setLocation(true)
        setName(false)
    }
    const searchByName = () => {
        setError(null)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/search/name`, {
            "query": query.query
        }).then((res) => setResults(res.data.results))
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    return (
        <>
            <h1>Search Users</h1>
            <SearchButtons nameOnClick={nameOnClick} parkOnClick={locationOnClick} location={"Search By Location"} />
            <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} submit={"Search Users"} />

            {error ? <h2 className="error-results">{error}</h2> :
                <>
                    { results &&
                        <div className="news-container">
                            <SearchResults results={results} location={"profile"}/>
                        </div>}
                </>
            }
        </>
    )
}

export default SearchUsers