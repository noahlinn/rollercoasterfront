import { useState } from 'react'
import axios from 'axios'
import SearchBar from '../components/SearchBar'
import SearchResults from '../components/SearchResults'
import SearchButtons from '../components/SearchButtons'

const SearchCoaster = () => {
    const [query, setQuery] = useState("")
    const [name, setName] = useState(false)
    const [park, setPark] = useState(false)
    const [results, setResults] = useState(false)
    const [error, setError] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (name) {
            searchByName()
        }
        else if (park)
            searchByPark()
        else{
            setError("Please Choose Search Method")
        }
    }

    const nameOnClick = () => {
        setError(null)
        setName(true)
        setPark(false)
    }
    const parkOnClick = () => {
        setError(null)
        setPark(true)
        setName(false)
    }

    const searchByName = () => {
        setError(null)
        setResults(false)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/coasters/search`, {
            "query": query.query
        }).then((res) => setResults(res.data.results))
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    const searchByPark = () => {
        setError(null)
        setResults(false)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/coasters/search/park`, {
            "query": query.query
        }).then((res) => setResults(res.data.results))
            .catch((err) => {
                setError(err.response.data.message)
            })
    }

    return (
        <div className= "page-container ">
            <div>
                <h1 className="search-header">Search Roller Coasters</h1>
                <SearchButtons name={name} park={park} parkOnClick = {parkOnClick} nameOnClick={nameOnClick} location={"Search By Park"}/>
                <SearchBar handleSubmit={handleSubmit} query={query} setQuery={setQuery} submit={"Search Roller Coasters"}/>
            </div>
            {error ? <h2 className="error-results">{error}</h2> :
                <>
                    { results &&
                        <div className="news-container">
                            <SearchResults results={results} location={"rollercoasters"}/>
                        </div>}
                </>
            }
        </div>
    )
}

export default SearchCoaster