const SearchButtons = (props) => (
    <span className="search-buttons">
        <button className = {props.name && "name-button"} onClick={props.nameOnClick}>Search By Name</button>
        <button className = {props.park && "park-button"} onClick={props.parkOnClick}>{props.location}</button>
    </span>
    
)
export default SearchButtons